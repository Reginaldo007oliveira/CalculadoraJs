class CalcController{
    constructor(){

       this._displayCalc = "0";
       this._currentDate;
       this.initialize();
    }

    initialize(){
      let displayCalEl= document.querySelector("#display"); 
      let dateEl = document.querySelector("#data");
      let timeEl = document.querySelector("#hora"); 
      displayCalEl.innerHTML = "23656754332";
      dateEl.innerHTML = "12";
      timeEl.innerHTML = "22";
    }
    
    get displayCalc(){
        return this._displayCalc;
    }
    set displayCalc(valor){
        this._displayCalc = valor; 
    }
    
  get _currentDate(){
      return this._displayCalc;
  }

  set _currentDate(valor){
      this._currentDate = valor;
  }
}
