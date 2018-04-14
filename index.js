/*  user typuje 6 liczb , funkcja losuje tyle samo liczb z przedzialu 1-49 i sprawdza ile zostalo trafionych*/

let liczby_wylosowane = [];
function Lotto(typowane){
 this.typowane = typowane;
 this.check = function check(){
   let counter = 0;
    for (value of liczby_wylosowane) {
      if (typowane.includes(value)) counter++
    }
    console.log(`Wytypowane ${this.typowane} \n 
    Wylosowane ${liczby_wylosowane} \n
       Trafionych ${counter}`);
 }
}

Lotto.prototype.losuj = function(){ // losuje 6 liczb 

  const i = 6;
  while (i > liczby_wylosowane.length){
   let liczba = Math.floor(Math.random() * 49 + 1);
   if (!liczby_wylosowane.includes(liczba))
   liczby_wylosowane.push(liczba);
  }
  this.check();
}

let instancja_lotto = new Lotto([1,2,3,4,5,6]) // przekaz tablice typowanych liczb z zakresu 1-49 i odkomentuj wywolanie funkcji ponizej 
// instancja_lotto.losuj(); 