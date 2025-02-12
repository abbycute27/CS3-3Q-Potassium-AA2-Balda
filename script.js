 function buttonAko() {
               let initialPop = parseFloat(prompt('Enter the initial population: '));
               let growthRate = parseFloat(prompt('Enter rate of growth: '));
               let time = parseFloat(prompt('Enter time in hours: '));
 
               finalPop = initialPop*(Math.pow(Math.E,(growthRate*time)));
			   let roundedResult = Math.round(finalPop);
 
			   let monsterLocation = prompt('Enter the region/location of the monster: ');
			   let monsterName = prompt('Enter the name of the monster:');  
			   let sigmaMonster = monsterLocation.concat ( " " + monsterName).toUpperCase();
     
              document.getElementById('result').innerHTML =('After ' + time + ' hours, ' + ' the population of ' + sigmaMonster + ' has increased to ' + roundedResult +"!");
}
