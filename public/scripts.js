//script start, majority of code found on SE through js scripting forum
function displayShots() {
    let rps_checked = document.getElementById("rps").checked;
    let rpsls_checked = document.getElementById("rpsls").checked;
    if (!rps_checked && !rpsls_checked) {document.getElementById("rps").click();}
    let shot_options = document.getElementById("shot_options");
    let opponent_checked = document.getElementById("opponent").checked;
    shot_options.className = opponent_checked ? "active" : "inactive";
}
function startOver() {
    document.getElementById("game_options").className = "active";
    document.getElementById("shot_options").className = "inactive";
    document.getElementById("result").className = "inactive";
    document.getElementById("play").className = "active";
    document.getElementById("rps").checked = false;
    document.getElementById("rpsls").checked = false;
    document.getElementById("opponent").checked = false;
    document.getElementById("rock").checked = false;
    document.getElementById("paper").checked = false;
    document.getElementById("scissors").checked = false;
    document.getElementById("lizard").checked = false;
    document.getElementById("spock").checked = false;
}
function displayRPSLSOptions() {
    let rps_shot_options = document.getElementsByName("rps_shot_option");
    rps_shot_options.forEach(rps_shot_option => {rps_shot_option.className = "active"})

    let rpsls_checked = document.getElementById("rpsls").checked;
    let rpsls_shot_options = document.getElementsByName("rpsls_shot_option");
    rpsls_shot_options.forEach(rpsls_shot_option => {rpsls_shot_option.className = rpsls_checked ? "active" : "inactive";})
}
async function play() {
    let rps_checked = document.getElementById("rps").checked;
    let rpsls_checked = document.getElementById("rpsls").checked;
    if (!rps_checked && !rpsls_checked) {
        alert("Please select a game mode.");
        throw new RangeError(`Must select game mode before playing.`);
    }
    document.getElementById("game_options").className = "inactive";
    document.getElementById("shot_options").className = "inactive";
    document.getElementById("result").className = "active";
    document.getElementById("play").className = "inactive";

    let game_mode = rps_checked ? "rps" : "rpsls";
    let opponent_checked = document.getElementById("opponent").checked;
    let shot = "";
    if (opponent_checked) {
        shot = document.querySelector('input[type="radio"][name*="shot_option"]:checked').value;
    }

    let api_url = `${document.baseURI}app/${game_mode}/play/${shot}`;
    await fetch(api_url)
        .then(function(response) {
            return response.json();
        })
            .then(function(result) {
                console.log(result);
                let result_element = document.getElementById("result");
                if (opponent_checked) {
                    result_element.innerHTML = `<p>You: ${capitalizeFirstLetter(result.player)}</p>
                    <p>Your opponent: ${capitalizeFirstLetter(result.opponent)}</p>
                    <p>Result: You ${result.result.toUpperCase()}</p>`;
                } else {
                    result_element.innerHTML = result.player.toUpperCase();
                }
            });
}
/**
 * @param {*} string 
 * @returns string with first letter capitalized
 */
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}