window.onload = function(){
    let nama = prompt("Enter Your Name:");

    if (nama === null || nama ===""){
        nama = "Annoymous";
    }
    const targetTeks = document.getElementById('welcome-text');
    if (targetTeks){
        targetTeks.innerText = `Hi ${nama}, Welcome To Our Website`;
    }
};
