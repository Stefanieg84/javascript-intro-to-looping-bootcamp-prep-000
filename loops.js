function forLoop(array){
  
  for (let i = 0; i < 25; i++) {
    if(i == 1){
      array.push("I am 1 strange loop.");
    } else{
      array.push(`I am ${i} strange loops.`);
    }
  }
}

function whileLoop(number){
  
  while(number>0){
    console.log(--number);
  }
  
  return "done";
}

function doWhileLoop(array){
  
  function incrementVariable() {
    i = i + 1;
  }
  
  let i = 0;
  
  do {
    array.pop();
    incrementVariable();
  } while (array.length > 0 && incrementVariable() === false);
  
  return array;
}