let reason=function(userHand,cpHand){

    if(userHand===cpHand){
    	return "Because both are equal ";
    }

	else if ( (userHand==="scissors" && cpHand==="paper") || (cpHand==="scissors" && userHand==="paper")    ){
		return " Because Scissors cuts Paper ";
	}

	else if ((userHand==="paper" && cpHand==="rock") || (cpHand==="paper" && userHand==="rock") ) {
		return "Because Paper covers Rock";
	}
	    
    else if( (userHand==="rock" && cpHand==="scissors") || (cpHand==="rock" && userHand==="scissors") ){
		return "Because Rock crushes Scissors ";
	}
};

// function for comparison for choices

let compare= function (userHand , cpHand){


	if (userHand===cpHand)
		return "Its a tie"
    
    if (userHand==="rock"){

         if (cpHand ==="paper")
         	return "You lose";
         else
         	return "You won";
 
    }

    else if (userHand==="paper"){

         if (cpHand ==="scissors")
         	return "You lose";
         else
         	return "You won";

    }

    else if (userHand==="scissors"){

         if (cpHand ==="rock")
         	return "You lose";
         else
         	return "You won";
    }
       
    };

// EventListner for Rock

document.getElementById('rock').addEventListener('click', function (e) {

	let userChoice= "rock"
	let computerChoice = Math.random();
	
if (computerChoice <=0.20) {
	computerChoice = "rock";
} else if(computerChoice <= 0.40) {
	computerChoice = "paper";
} else if(computerChoice <=1){
	computerChoice = "scissors";
} 

document.getElementById("p1").innerHTML = "computer chose " + computerChoice + " and you chose rock " ;
document.getElementById("p2").innerHTML = compare(userChoice,computerChoice);
document.getElementById('p2').style.cssText = 'background:#ffffff; color: #000000; padding: 8px; border-radius:15px;width:300px; margin:auto;';
document.getElementById("p3").innerHTML = reason(userChoice,computerChoice);

});

// EventListener for paper

document.getElementById('paper').addEventListener('click', function (e) {
	
	let userChoice= "paper"
	let computerChoice = Math.random();
	
if (computerChoice <=0.20) {
	computerChoice = "rock";
} else if(computerChoice <= 0.40) {
	computerChoice = "paper";
} else if(computerChoice <=1){
	computerChoice = "scissors";
} 

document.getElementById("p1").innerHTML = "computer chose " + computerChoice + " and you chose paper " ;
document.getElementById("p2").innerHTML = compare(userChoice,computerChoice);
document.getElementById('p2').style.cssText = 'background:#ffffff; color: #000000; padding: 8px; border-radius:15px;width:300px; margin:auto;';
document.getElementById("p3").innerHTML = reason(userChoice,computerChoice);


});

// EventListener for scissors

document.getElementById('scissors').addEventListener('click', function (e) {
	
	let userChoice= "scissors"
	let computerChoice = Math.random();
	
if (computerChoice <=0.20) {
	computerChoice = "rock";
} else if(computerChoice <= 0.40) {
	computerChoice = "paper";
} else if(computerChoice <=1){
	computerChoice = "scissors";
} 

document.getElementById("p1").innerHTML = "computer chose " + computerChoice + " and you chose scissors " ;
document.getElementById("p2").innerHTML = compare(userChoice,computerChoice);
document.getElementById('p2').style.cssText = 'background:#ffffff; color: #000000; padding: 8px; border-radius:15px;width:300px; margin:auto;';
document.getElementById("p3").innerHTML = reason(userChoice,computerChoice);

});

