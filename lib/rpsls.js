export function rps(locz) {
    const plays = ["rock", "paper", "scissors"];
    if (locz == null) {
        return {"player": plays[Math.floor(Math.random()*plays.length)]};
    }
    locz = locz.toLowerCase()
    const opponent = plays[Math.floor(Math.random()*plays.length)];
    var finalResult;
    if (locz === "rock") {
        if (opponent === "rock") {
            finalResult = "tie";
        }
        else if (opponent === "paper") {
            finalResult = "lose";
        }
        else if (opponent === "scissors") {
            finalResult = "win";
        }
    }
    else if (locz === "paper") {
        if (opponent === "rock") {
            finalResult = "win";
        }
        else if (opponent === "paper") {
            finalResult = "tie";
        }
        else if (opponent === "scissors") {
            finalResult = "lose";
        }
    }
    else if (locz === "scissors") {
        if (opponent === "rock") {
            finalResult = "lose";
        }
        else if (opponent === "paper") {
            finalResult = "win";
        }
        else if (opponent === "scissors") {
            finalResult = "tie";
        }
    } else {
        console.log("Out of range");
        console.error();
    }
    return {"player": locz, "opponent": opponent, "result": finalResult};
}

export function rpsls(locz) {
    const plays = ["rock", "paper", "scissors", "lizard", "spock"];
    if (locz == null) {
        return {"player": plays[Math.floor(Math.random()*plays.length)]};
    }
    locz = locz.toLowerCase()
    const opponent = plays[Math.floor(Math.random()*plays.length)];
	
    var finalResult;
	
    if (locz === "rock") {
        if (opponent === "scissors" || opponent === "lizard") {
            finalResult = "win";
        }
        else if (opponent === "paper" || opponent === "spock") {
            finalResult = "lose";
        }
        else if (opponent === "rock") {
            finalResult = "tie";
        }
    }
    else if (locz === "paper") {
        if (opponent === "rock" || opponent === "spock") {
            finalResult = "win";
        }
        else if (opponent === "scissors" || opponent === "lizard") {
            finalResult = "lose";
        }
        else if (opponent === "paper") {
            finalResult = "tie";
        }
    }
    else if (locz === "scissors") {
        if (opponent === "paper" || opponent === "lizard") {
            finalResult = "win";
        }
        else if (opponent === "rock" || opponent === "spock") {
            finalResult = "lose";
        }
        else if (opponent === "scissors") {
            finalResult = "tie";
        }
    }
    else if (locz === "lizard") {
        if (opponent === "spock" || opponent === "paper") {
            finalResult = "win";
        }
        else if (opponent === "rock" || opponent === "scissors") {
            finalResult = "lose";
        }
        else if (opponent === "lizard") {
            finalResult = "tie";
        }
    }
    else if (locz === "spock") {
        if (opponent === "rock" || opponent === "scissors") {
            finalResult = "win";
        }
        else if (opponent === "paper" || opponent === "lizard") {
            finalResult = "lose";
        }
        else if (opponent === "spock") {
            finalResult = "tie";
        }
    }   
    else {
        console.log("Out of range");
        console.error();
    }
    return {"player": locz, "opponent": opponent, "result": finalResult};
}