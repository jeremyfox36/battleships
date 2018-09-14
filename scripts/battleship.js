{
    let isSunk = false;
    let location1 = Math.floor(Math.random()*5);
    let location2 = location1 + 1;
    let location3 = location2 + 1;
    let guess;
    let hits = 0;
    let guesses = 0;

    console.log(location1,location2,location3);


    while(isSunk == false){
        guess = prompt("Ready, aim, fire! (enter a number between 0 and 6) : ");

        if(guess <0 || guess >6){
            alert("Please enter a valid cell number!");
        } else{
            guesses += 1;
        }

        if(guess == location1 || guess == location2 || guess == location3){
            hits +=1;
        }

        if(hits == 3){
            alert("You sank my battleship!");
            isSunk = true;
        }
    }

    let stats = "You took " + guesses + " guesses to sink my battleship, " + "which means your shooting accuracy was " + (3/guesses);
    alert(stats);
}