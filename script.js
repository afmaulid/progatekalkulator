// fungsi untuk menghapus angka atau nilai
function clearScreen() {
 document.getElementById("result").value = "";
}

// fungsi untuk menampilkan hasil nilai
function display(value) {
 document.getElementById("result").value += value;
}

// Fungsi ini mengevaluasi dan mengembalikan hasil
function calculate() {
 var p = document.getElementById("result").value;
 var q = eval(p);
 document.getElementById("result").value = q;
}