
function tinhLuong(){
    var ngayLuong = document.getElementById("ngayLuong").value;
    var ngay = document.getElementById("ngay").value;
    var luong = ( Number(ngayLuong) * Number(ngay) );

    document.getElementById("luong").innerHTML = "Tổng lương nhận được: " + luong;

}
document.getElementById("btnTinhLuong").onclick = tinhLuong;

function tinhGTTB(){
    var so1 = document.getElementById("so1").value;
    var so2 = document.getElementById("so2").value;
    var so3 = document.getElementById("so3").value;
    var so4 = document.getElementById("so4").value;
    var so5 = document.getElementById("so5").value;
    var GTTB = ( (Number(so1) + Number(so2) + Number(so3) + Number(so4) + Number(so5))/5 );

    document.getElementById("GTTB").innerHTML = "Giá trị trung bình là: " + GTTB;
}
document.getElementById("btnTinhGTTB").onclick = tinhGTTB;

function doiTien(){
    const macdinh = 23500;
    new Intl.NumberFormat('vn-VN',{ maximumSignificantDigits: 3 }).format(macdinh); 
    var usd = document.getElementById("usd").value;
    var doiTien = ( usd * macdinh );

    document.getElementById("doiTien").innerHTML = "Số tiền là: " + doiTien;
}
document.getElementById("btndoiTien").onclick = doiTien;

function tinhChuviHcn(){
    var dai = document.getElementById("chieuDai").value;
    var rong = document.getElementById("chieuRong").value;
    var chuVi = (Number(dai))

    document.getElementById("doiTien").innerHTML = "Số tiền là: " + doiTien;
}
document.getElementById("btndoiTien").onclick = doiTien;