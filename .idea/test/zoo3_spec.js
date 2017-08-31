var util=require('util')

fdescribe('To test the animal adoption flow',function () {

    beforeEach(function () {
        browser.get("http://www.thetestroom.com/jswebapp/index.html")
    });

    xit ('Should be able to adopt an animal',function()
    {
       element(by.model('person.name')).sendKeys('Test nr 3');
       var dynamicText=element(by.binding('person.name')).getText();
       expect(dynamicText).toBe('Test nr 3');
       element(by.buttonText('CONTINUE')).click();

       element(by.model('animal')).$('[value="2"]').click();
       element(by.buttonText('CONTINUE')).click();

       var thankYouText = element(by.css('h1')).getText();
       expect(thankYouText).toBe('Thank you');
    });

    var home_page=require('../page/home_page.js');

    it( 'Should be able to adopt an animal by page object',function () {
        home_page.enterFieldValue("Test Nr 333");
        var getHomePageText= home_page.getDyanamicText();
        expect(getHomePageText).toBe('Test Nr 333');
        var animal_page = home_page.clickContinue();

        animal_page.selectAnimal(2);
        var confirm_page = animal_page.clickContinue();
        expect(confirm_page.getTitle()).toBe('Thank you');

        });
});