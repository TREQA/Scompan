require('../page/animal_page');

var home_page = function () {

    this.enterFieldValue=function (value) {
      element(by.model('person.name')).sendKeys(value);
    };

    this.getDyanamicText=function () {

        return element(by.binding('person.name')).getText();
    };

    this.clickContinue=function () {
        element(by.buttonText('CONTINUE')).click();
        return require('./animal_page');
    };

};

module.exports= new home_page();