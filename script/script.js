function hitungLuas(){
    var sisi = (document.getElementById("sisi-luas")).value;
    var hasilLuas = sisi*sisi;
    document.getElementById("output_luas").innerHTML = "L = S x S" + 
                                                     "<br/>"+"L = "+ sisi +" x "+ sisi +
                                                     "<br/>"+"L = "+hasilLuas;
}

function resetLuas() {
    document.getElementById("sisi-luas").value = "";
    document.getElementById("output_luas").innerHTML = "";
}

function hitungKeliling(){
    var sisi = (document.getElementById("sisi-keliling")).value;
    var hasilKeliling = 4*sisi;
    document.getElementById("output_keliling").innerHTML = "K = 4 x S" + 
                                                     "<br/>"+"K = "+"4 x "+ sisi +
                                                     "<br/>"+"K = "+hasilKeliling;
}

function resetKeliling() {
    document.getElementById("sisi-keliling").value = "";
    document.getElementById("output_keliling").innerHTML = "";
}