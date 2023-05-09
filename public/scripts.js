//script start, majority of code found on SE through js scripting forum
function displayShots() {
    const rps = document.getElementById("rps");
    const rpsls = document.getElementById("rpsls");
    if (!rps.checked && !rpsls.checked) {
      rps.click();
    }
    const shotOptions = document.getElementById("shot_options");
    const opponent = document.getElementById("opponent");
    shotOptions.className = opponent.checked ? "active" : "inactive";
  }
  
function startOver() {
    const gameOptions = document.getElementById("game_options");
    const shotOptions = document.getElementById("shot_options");
    const result = document.getElementById("result");
    const play = document.getElementById("play");
  
    gameOptions.className = "active";
    shotOptions.className = "inactive";
    result.className = "inactive";
    play.className = "active";
  
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => (checkbox.checked = false));
  }
  
function displayRPSLSOptions() {
    const rpsShotOptions = document.querySelectorAll('input[name="rps_shot_option"]');
    rpsShotOptions.forEach((rpsShotOption) => (rpsShotOption.className = "active"));
  
    const rpsls = document.getElementById("rpsls");
    const rpslsShotOptions = document.querySelectorAll('input[name="rpsls_shot_option"]');
    rpslsShotOptions.forEach((rpslsShotOption) => {
      rpslsShotOption.className = rpsls.checked ? "active" : "inactive";
    });
  }
  
async function play() {
    const rps = document.getElementById("rps");
    const rpsls = document.getElementById("rpsls");
    if (!rps.checked && !rpsls.checked) {
      alert("Please select a game mode.");
      throw new RangeError(`Must select game mode before playing.`);
    }
  
    const gameOptions = document.getElementById("game_options");
    const shotOptions = document.getElementById("shot_options");
    const result = document.getElementById("result");
    const play = document.getElementById("play");
  
    gameOptions.className = "inactive";
    shotOptions.className = "inactive";
    result.className = "active";
    play.className = "inactive";
  
    const gameMode = rps.checked ? "rps" : "rpsls";
    const opponent = document.getElementById("opponent");
    let shot = "";
    if (opponent.checked) {
      shot = document.querySelector('input[type="radio"][name*="shot_option"]:checked').value;
    }
  
    const apiUrl = `${document.baseURI}app/${gameMode}/play/${shot}`;
    const response = await fetch(apiUrl);
    const resultJson = await response.json();
  
    console.log(resultJson);
  
    if (opponent.checked) {
      result.innerHTML = `<p>You: ${capitalizeFirstLetter(resultJson.player)}</p>
                          <p>Your opponent: ${capitalizeFirstLetter(resultJson.opponent)}</p>
                          <p>Result: You ${resultJson.result.toUpperCase()}</p>`;
    } else {
      result.innerHTML = resultJson.player.toUpperCase();
    }
  }
  
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }  
/**
 * @param {*} string 
 * @returns string with first letter capitalized
 */
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}