/**
 * IBANAPI.com nodejs module
 * @author IBANAPI.com
 * @since 04/09/2021
 */

const axios = require("axios")
const FormData = require('form-data');
const config = {apiKey:''}
const apiBaseURL = "https://api.ibanapi.com/v1/";
//Set the config
exports.setConfig = (apiKey) =>{
    config.apiKey = apiKey
}

//Validate the iban
exports.validateIBAN = (iban,callback) =>{
    if(config.apiKey == ""){
        return { 'result:': 400, 'message': 'Please set the API key first!' }
    }
    bodyFormData = _setIBANFormData(iban)
    _sendPost(apiBaseURL+"validate",bodyFormData,callback)
}

//Basic IBAN Validation
exports.validateIBANBasic = (iban,callback) =>{
    if(config.apiKey == ""){
        return { 'result:': 400, 'message': 'Please set the API key first!' }
    }
    bodyFormData = _setIBANFormData(iban)
    _sendPost(apiBaseURL+"validate-basic",bodyFormData,callback)
}

//Get Account Balance
exports.getBalance = (callback) =>{
    if(config.apiKey == ""){
        return { 'result:': 400, 'message': 'Please set the API key first!' }
    }
    bodyFormData = _setIBANFormData(null,true)
    _sendPost(apiBaseURL+"balance",bodyFormData,callback)
}

function _setIBANFormData(iban,isBalance=false){
    var bodyFormData = new FormData();
    if(!isBalance){
        bodyFormData.append('iban',iban);
    }
    bodyFormData.append('api_key',config.apiKey);
    return bodyFormData;
}

function _sendPost(url,objData,callback){
    axios({
        method: 'post',
        url: url,
        data: objData,
        headers: {
            'Content-Type': `multipart/form-data; boundary=${objData._boundary}`,
        },
    }).then((res) => {
        callback(res.data);
    }).catch((error) => {
        if (error.response){
            callback (error.response.data);
        }else{
            callback ({ 'result:': 400, 'message': error.message });
        }
        
    });
}