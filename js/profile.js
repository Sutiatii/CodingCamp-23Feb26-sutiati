window.onload = function(){
    let name = prompt("Enter Your Name:");
    let age = prompt("Enter Your Age:");
    let collage = prompt("Enter Your Collage:");
    let profession = prompt("Enter Your Profession:");
    let skill = prompt("Enter Your Skill:");
    document.getElementById('res-name').innerText =": " + (name || "-");
    document.getElementById('res-age').innerText =": " + (age || "-");
    document.getElementById('res-collage').innerText =": " + (collage || "-");
    document.getElementById('res-profession').innerText =": " + (profession || "-");
    document.getElementById('res-skill').innerText =": " + (skill || "-");
}