export default class Students {
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

   // export{Students}