document.getElementById('messageForm').addEventListener('submit', function(event){
    event.preventDefault();
    const nama = document.getElementById('input-nama').value;
    const tgl = document.getElementById('input-tgl').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const pesan = document.getElementById('input-pesan').value;
    const waktu = new Date();
    document.getElementById('res-nama').innerText = nama;
    document.getElementById('res-tgl').innerText = tgl;
    document.getElementById('res-gender').innerText = gender;
    document.getElementById('res-pesan').innerText = pesan;
    document.getElementById('time-stamp').innerText = "Current time:" + waktu.toString();
    alert("Pesan Successed!!");
});