// menangkap semua elemen a
document.querySelectorAll("#opts a").forEach((a) =>
    // jika di klik akan menjalankan fungsi computerChoice
    a.addEventListener("click", (element) => {
        computerChoice(element);
    })
);
function computerChoice(element) {
    // tangkap pilihan user
    let pilihanUser = element.target.innerText;

    // menangkap element result dengan queryselector untuk menampung
    // nilai hasil dari game
    let pilihanComputer = document.querySelector("#result");

    // membuat array pilihan untuk komputer
    let choices = ["Rock", "Paper", "Scissors"];

    // pilihan random untuk komputer
    pilihanComputer.innerHTML = choices[Math.round(Math.random() * choices.length)];
    pilihanComputer = pilihanComputer.innerHTML;

    // jika pilihan komputer dan pilihan user sama (draw)
    if (pilihanUser == pilihanComputer) {
        alert("DRAW");
    }

    // jika pilihan user yang menang
    if (pilihanUser == "Rock" && pilihanComputer == "Scrissors") {
        alert("YOU WIN");
    }else if(pilihanUser == "Paper" && pilihanComputer == "Rock") {
        alert("YOU WIN");
    }else if(pilihanUser == "Scrissors" && pilihanComputer == "Paper") {
        alert("YOU WIN");
    }

    // jika pilihan computer yang menang
    if (pilihanUser == "Rock" && pilihanComputer == "Paper") {
        alert("COMPUTER WIN");
    }else if(pilihanUser == "Paper" && pilihanComputer == "Scrissors") {
        alert("COMPUTER WIN");
    }else if(pilihanUser == "Scrissors" && pilihanComputer == "Rock") {
        alert("COMPUTER WIN");
    }
}