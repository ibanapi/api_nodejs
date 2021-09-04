# 💳 IBAN API validation using ibanapi.com

The official node module for validating IBAN using the ibanapi.com public API<br/>
This module offers methods to validate IBAN (full and basic validation) wherein full validation will return the bank information alongside the basic validations. 

## How to use
* Get an [API Key](https://ibanapi.com/get-api) from the ibanapi.com website.
* Install the package using the following command `npm install --save ibanapi`
* You can now initialize & use the package as follows

* For full iban validation
```
    //Get all the IBAN Information
    ibanapi.setConfig("API_KEY")
    ibanapi.validateIBAN("EE471000001020145685",ibanResult);
    function ibanResult(res){
        console.log(res);
    }
```

* For basic iban validation
```
    //Get all the basic IBAN Information
    ibanapi.setConfig("API_KEY")
    ibanapi.validateIBANBasic("EE471000001020145685",ibanBasicResult);
    function ibanBasicResult(res){
        console.log(res);
    }
```

* To get the balance
```
    //Get the account balance
    ibanapi.setConfig("API_KEY")
    ibanapi.getBalance(balanceResult);
    function balanceResult(res){
        console.log(res);
    }
```

## Issue or suggestion
Please feel free to open a bug report or pull request to this repo.<br/>
or visit the [iban api website](https://ibanapi.com)