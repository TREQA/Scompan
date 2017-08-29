
enum LanguagesKnown { English,Hindi,Tamil}

let students = {
    Name:"gsdscx",
    Age: 32,
    phone: 3251244,
    language: LanguagesKnown.Tamil}

let studentlists=[
    {Name: "fgddsf",Age:21,phone: 23524444446},
    {Name: "daass",Age:11,phone: 323423}
]
studentlists.push(students);

for (var index = 0; index < studentlists.length; index++) {


    var element = studentlists[index];
    console.log(element);
    
}



function getNumbers(...nums: number[]){
    nums.forEach(element =>{
        console.log("Number:"+element);

    });
}

getNumbers(1,2,3,4,5,6)

function GetInfo(info:String ="Happy"){
    console.log(info);
}

GetInfo("Very happy");

//#########################

let StudentName = function(lName:string,fName:string)
{
    return fName + "..."+lName;
}
console.log(StudentName("KK","MM"));

//Arrow function

let StudentfullName =(lName:string, fName:string)=>{ return fName+ "..."+ lName};
console.log(StudentfullName("kk","JJ"));

//Interfaces declaration

interface Studentinfo{
    Name: string,
    Age: Number,
    Phone: Number,
    Language :LanguagesKnown;

}

let student:Studentinfo={
    Name:"kk",
    Age:30,
    Phone:314231,
    Language: LanguagesKnown.Tamil
}

//*************Classes */

class Students {
private _lName:string;
private _fName:string;

constructor(lName,fName)
{
    this._lName=lName;
    this._fName=fName;

}

GetFullName():string
   {
    return this._lName +"..."+ this._fName;
   }

}

let s=new Students("Ron", "Weasley");
console.log(s.GetFullName());
