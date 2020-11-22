var p = ('SEMUT, ORANG, GAJAH');
var comp = Math.floor(Math.random() * 4);
console.log(comp);

if (comp <= 1) {
    comp = 'gajah';
} else if (comp = 2) {
    comp = 'orang';
} else {
    comp = 'semut';
}

// GAMBAR
var semut = new Image(150, 200);
semut.src = 'asset/ant.png';


var gajah = new Image(150, 200);
gajah.src = 'asset/gajah.png';

var orang = new Image(150, 200);
orang.src = 'asset/orang.jpg';

var resultmu = document.getElementById('nama').value;
var komputer = document.getElementById('comp').value;

//FUNCTION


function attack() {
    var p = document.getElementById('nama').value;
    if (p == comp) {
        hasil = 'SERI!';
    } else if (p == 'gajah') {
        x = document.getElementById("gambar-p");
        x.appendChild(gajah);
        if (comp == 'orang') {
            hasil = 'KAMU MENANG!';
            x = document.getElementById("gambar-c");
            x.appendChild(orang);
        } else {
            hasil = 'KAMU KALAH!';
            x = document.getElementById("gambar-c");
            x.appendChild(semut);
        }
    } else if (p == 'orang') {
        x = document.getElementById("gambar-p");
        x.appendChild(orang);
        if (comp == 'gajah') {
            hasil = 'KAMU KALAH!';
            x = document.getElementById("gambar-c");
            x.appendChild(gajah);
        } else {
            hasil = 'KAMU MENANG!';
            x = document.getElementById("gambar-c");
            x.appendChild(semut);
        }
    } else if (p == 'semut') {
        x = document.getElementById("gambar-p");
        x.appendChild(semut);
        if (comp == 'orang') {
            hasil = 'KAMU KALAH!';
            x = document.getElementById("gambar-c");
            x.appendChild(orang);
        } else {
            hasil = 'KAMU MENANG!';
            x = document.getElementById("gambar-c");
            x.appendChild(gajah);
        }
    } else {
        hasil = 'MAHLUK ASING!';
    }
    document.getElementById('result').innerHTML = hasil;

    document.getElementById('resultmu').innerHTML = p;
    document.getElementById('komputer').innerHTML = comp;

}

function refresh() {
    location.reload();
    return false;
}

//=================== gambar