function scuberGreetingForFeet(n){
  let greeting;
  if( n <= 400){
    greeting = "This one is on me!";
  } if(n >= 2500){
    greeting = "No can do.";
  }
  else if (n > 2000 ){
    greeting = "I will gladly take your thirty bucks.";
  }
 return greeting ;
}

function ternaryCheckCity(n){
    let greeting;
    greeting = (n === "NYC") ? "Ok, sounds good." : "No go.";
    return greeting ;
}
function switchOnCharmFromTip(n){
  let greeting ;
    switch (n){ 
      case 'not as generous':
        greeting = "Thank you.";
         break ;
      case 'thanks for everything':
        greeting = "Bye.";
         break ;
    default:
      return "Thank you so much.";
  }
  return greeting ;
}