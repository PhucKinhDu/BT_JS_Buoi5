// Tính Tiền Điện
/**
 * Input: hoTen, soKw
 *
 * Các bước xử lý:
 * B1: Tạo hàm tính tiền
 * B2: Lấy giá trị từ form (hoTen, soKw)
 * B3: Tính tiền cước theo Kw
 *    Đoạn 1:
 *    nếu 0 < soKw <= 50 : tienKw = soKw * GiaKw_Doan1
 *    Đoạn 2:
 *    nếu 50 < soKw <= 100 : tienKw = 25000 + ((soKw - 50) * GiaKw_Doan2)
 *    Đoạn 3:
 *    nếu 100 < soKw <= 200 : tienKw = 57500 + ((soKw - 100) * GiaKw_Doan3)
 *    Đoạn 4:
 *    nếu 200 < soKw <= 350 : tienKw = 142500 + ((soKw - 200) * GiaKw_Doan4)
 *    Còn lại:
 *    nếu 350 < soKw : tienKw = 307500 + ((soKw - 350) * GiaKw_Doan5)
 *
 * Output: thanhTien
 *
 * 25000 = Doan1
 * 32500 = Doan2
 * 85000 = Doan3
 * 165000 = Doan4
 *
 */

// const GiaKw_D1 = 500;
// const GiaKw_D2 = 650;
// const GiaKw_D3 = 850;
// const GiaKw_D4 = 1100;
// const GiaKw_TrenD4 = 1300;

//---------------------------------------------------------------------
const GIA50KW_DAU = 500;
const GIAKW50_100 = 650;
const GIAKW100_200 = 850;
const GIAKW200_350 = 1100;
const GIAKWTREN_350 = 1300;

function tinhTienDien() {
    var hoTen = document.getElementById("inputhoTen2").value;
    var soKw = Number(document.getElementById("inputsoKw").value);
    
    var tienDien = soTienTrenKw(soKw);

    document.getElementById("txtResult2").innerHTML =
        "Khách hàng : " +
        hoTen +
        "<br>" +
        "Số tiền điện là : " +
        tienDien.toLocaleString() +
        " VNĐ";
}

function soTienTrenKw(soKw) {
    if (0 < soKw && soKw <= 50) {
        return soKw * GIA50KW_DAU;
    } else if (50 < soKw && soKw <= 100) {
        return 25000 + (soKw - 50) * GIAKW50_100;
    } else if (100 < soKw && soKw <= 200) {
        return 57500 + (soKw - 100) * GIAKW100_200;
    } else if (200 < soKw && soKw <= 350) {
        return 142500 + (soKw - 200) * GIAKW200_350;
    } else if (350 < soKw) {
        return 307500 + (soKw - 350) * GIAKWTREN_350;
    } else {
        alert("Số Kw không hợp lệ");
    }
}

document.getElementById("btnCalc2").onclick = tinhTienDien;

//---------------------------------------------------------------------

// Hàm Cơ Bản.
// function tinhTienDien(){
//  var hoTen = document.getElementById('inputhoTen2').value;
//  var soKw = document.getElementById('inputsoKw').value;
// //  console.log(hoTen, soKw);
//  var thanhTien = 0;

//   if(0 < soKw && soKw <= 50){
//     thanhTien = soKw * GiaKw_D1;
//   }else if(50 < soKw && soKw <=100){
//     thanhTien = 25000 + ((soKw - 50) * GiaKw_D2) ;
//   }else if(100 < soKw && soKw <= 200){
//     thanhTien = 57500 + ((soKw - 100) * GiaKw_D3);
//   }else if(200 < soKw && soKw <= 350){
//     thanhTien = 142500 + ((soKw - 200) * GiaKw_D4);
//   }else if(350 < soKw){
//     thanhTien = 307500 + ((soKw - 350) * GiaKw_TrenD4);
//   }else{
//     alert('Số Kw không hợp lệ');
//   }

//   document.getElementById('txtResult2').innerHTML = 'Khách Hàng : ' + hoTen + '<br>' + 'Số Tiền Điện Là : ' + thanhTien.toLocaleString() + ' VNĐ';
// }

// document.getElementById('btnCalc2').onclick = tinhTienDien;
