
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

/*interface Studentinfo{
    Name: string,
    Age: Number,
    Phone: Number,
    Language :LanguagesKnown;

}*/
import{IStudentInfo}from'./IStudentInfo'
import Students from './Student';

let student:IStudentInfo= {
    Name:"kk",
    Age:30,
    Phone:314231,
    Language: LanguagesKnown[LanguagesKnown.Tamil]
}
let studentList:IStudentInfo[] [
    {Name:"llf",Age:21,Phone:213412,Language:LanguagesKnown[LanguagesKnown.English]},
    {Name:"asfa",Age:24,Phone:241421,Language:LanguagesKnown[LanguagesKnown.Tamil]}
    }
]
//*************Classes */



let s=new Students("Ron", "Weasley");
console.log(s.GetFullName());

//*********Generics */
console.log("*************Generics**");

let studentlistsG:Array<IStudentInfo>=[
    {Name: "GG",Age:23,Phone:532342,Language:LanguagesKnown.English},
    {Name: "HH",Age:24,Phone:3245234,Language:LanguagesKnown.Hindi}
]

function GetStudentListGenerics(students:Array<IStudentInfo>)
{
    students.forEach(element =>{
        console.log("Age: "+ element.Age+ " with Name: "+element.Name+" has phone: "+element.Phone+" Knows language: "+element.Language.toString)
    });
}

GetStudentListGenerics(studentlistsG);