
function maxentre3(mb1, mb2, mb3) {
  
if (mb1 >= mb2 && mb1 >= mb3)
    {
        return mb1;
    }
    else if (mb2 >= mb1 && mb2 >= mb3)
    {
        return mb2;
    } 
    else 
    {
        return mb3;
    }
}

console.log("le grande nambre est  :",   maxentre3 (66, 45,111)); 