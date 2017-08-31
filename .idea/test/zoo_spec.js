xdescribe ("Adopt an animal on the zoo test site",function(){


    beforeEach(function () {
        browser.get("http://www.thetestroom.com/jswebapp");

    })

    afterEach(function (){
        console.log("After method executed")
    })
    it("should able on correct page",function(){


        expect(browser.getCurrentUrl()).toEqual("http://www.thetestroom.com/jswebapp/");
    });

    describe("should generate correct text",function(){

        var textMessage
        beforeEach(function () {
            textMessage ="THis is my message";
        });

         it("should check correct text",function(){
        element(by.model("person.name")).sendKeys(textMessage);
        element(by.binding ("person.name")).getText().then(function(text){
            expect(text).toEqual("THis is my message");
        });
        });
        it("should check incorrect text",function(){
            element(by.model("person.name")).sendKeys(textMessage);
            element(by.binding ("person.name")).getText().then(function(text){
                expect(text).toNotEqual("THis is my message");
            });
        });


    });

    describe("should be able to adopt an animal",function(){

        var lengthofitems;

        beforeEach(function () {
            lengthofitems=4;
        });


        it("should be able to adopt an animal",function(){
        element(by.buttonText("CONTINUE")).click();
        element(by.model("animal")).$("[value='1']").click();

        element.all(by.css(".ng-pristine option")).then(function(items)
        {
             expect(items.length).toBe(lengthofitems);
             expect(items[1].getText()).toBe("George the Turtle");
        });
        element(by.buttonText("CONTINUE")).click();

    });
    });
    it("should check user is on thankyou page",function(){

        element(by.buttonText("CONTINUE")).click();
        element(by.buttonText("CONTINUE")).click();
        expect(browser.getCurrentUrl()).toContain('confirm');

    });




});