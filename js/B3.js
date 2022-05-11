// Thuế Thu Nhập
/**
 * Input: hoTen3, tongThuNhap, phuThuoc.
 * 
 * Các bước xử lý:
 * B1: Tạo hàm tính thu nhập
 * B2: Lấy giá trị từ form (hoTen3, tongThuNhap, phuThuoc)
 * B3: Tính thuế theo các mốc 
 *   - Mốc 1:
 *      nếu 1tr < tongThuNhap <= 60tr : tienThue = tongThuNhap - 4tr - (số người phụ thuộc * 1.6tr)
 *      => tienThue = tienThue * 5%
 *   - Mốc 2:
 *      nếu 60tr < tongThuNhap <= 120tr : tienThue = tongThuNhap - 4tr - (số người phụ thuộc * 1.6tr)
 *      => tienThue = tienThue * 10%
 *   - Mốc 3:
 *      nếu 120tr < tongThuNhap <= 210tr : tienThue = tongThuNhap - 4tr - (số người phụ thuộc * 1.6tr)
 *      => tienThue = tienThue * 15%
 *   - Mốc 4:
 *      nếu 210tr < tongThuNhap <= 384tr : tienThue = tongThuNhap - 4tr - (số người phụ thuộc * 1.6tr)
 *      => tienThue = tienThue * 20%
 *   - Mốc 5:
 *      nếu 384tr < tongThuNhap <= 624tr : tienThue = tongThuNhap - 4tr - (số người phụ thuộc * 1.6tr)
 *      => tienThue = tienThue * 25%
 *   - Mốc 6:
 *      nếu 624tr < tongThuNhap <= 960tr : tienThue = tongThuNhap - 4tr - (số người phụ thuộc * 1.6tr)
 *      => tienThue = tienThue * 30%
 *   - Mốc 7:
 *      nếu 960tr < tongThuNhap : tienThue = tongThuNhap - 4tr - (số người phụ thuộc * 1.6tr)
 *      => tienThue = tienThue * 35%
 * 
 * 
 * Output: Hiện kết quả
 * 
 * VD1: 60tr - 4tr - (2 phụ thuộc * 1.6tr) = 52.800.000
 *      52.800.000 = 100%
 *   =>  2,640,000 = 5% 
 * 
 * VD2: 180tr - 4tr - (2 phụ thuộc * 1.6tr) = 172.800.000
 *      172.800.000 = 100%
 *   =>  25.920.000 = 15%  
 * 
 * VD3: 240tr - 4tr - (2 phụ thuộc * 1.6tr) = 232.800.000
 *      232.800.000 = 100%
 *   =>  46.560.000 = 20%
 * 
 * 
 *  *** e+6 == 6.000.000 ***
 */

//------------------------------------------------------------------


const THUE0_60 = 0.05;
const THUE60_120 = 0.1;
const THUE120_210 = 0.15;
const THUE210_384 = 0.2;
const THUE384_624 = 0.25;
const THUE624_960 = 0.3;
const THUETREN960 = 0.35;

function tinhThueCaNhan(){
  var hoTen = document.getElementById('inputhoTen3').value;
  var tongThuNhap = Number(document.getElementById('inputtongThuNhap').value);
  var phuThuoc = Number(document.getElementById('inputphuThuoc').value);

  var thuNhap = tongThuNhap - 4e+6 - (phuThuoc * 1.6e+6);
// 52.800.000 = 60.000.000 - 4.000.000 - (2 * 1.600.000)

  var tienThue = mucThueThuNhap(thuNhap);
  document.getElementById('txtResult3').innerHTML = 'Họ tên : ' + hoTen + '<br>' + 'Tiền thuế phải đóng là : ' + tienThue.toLocaleString() + ' VNĐ';
}

function mucThueThuNhap(thuNhap){
  if(0 < thuNhap && thuNhap <= 60e+6){
    //52.800.000 * 0.05 = 2.640.000 => return 2.640.000 vào 'var = tienThue'
    return thuNhap * THUE0_60;
  }else if(60e+6 < thuNhap && thuNhap <= 120e+6){
    return thuNhap * THUE60_120;
  }else if(120e+6 < thuNhap && thuNhap <= 210e+6){
    return thuNhap * THUE120_210;
  }else if(210e+6 < thuNhap && thuNhap <= 384e+6){
    return thuNhap * THUE210_384;
  }else if(384e+6 < thuNhap && thuNhap <= 624e+6){
    return thuNhap * THUE384_624;
  }else if(624e+6 < thuNhap && thuNhap <= 960e+6){
    return thuNhap * THUE624_960;
  }else if(960e+6 < thuNhap){
    return thuNhap * THUETREN960;
  }else{
    
  }
}
document.getElementById('btnCalc3').onclick = tinhThueCaNhan;


//--------------------------------------------------------------------

// Hàm cơ bản:
// function tinhThue(){
  
//  var hoTen = document.getElementById('inputhoTen3').value;
//  var tongThu = document.getElementById('inputtongThuNhap').value;
//  var phuThuoc = document.getElementById('inputphuThuoc').value;
// //  console.log(hoTen, tongThu, phuThuoc);
//  var tienThue = 0;

//   if(0 < tongThu && tongThu <= 60e+6){
//     // console.log('ThueL1');
//     tienThue = tongThu - 4e+6 - (phuThuoc * 1.6e+6);
//     tienThue = tienThue * ThueL1;
//   }else if(60e+6 < tongThu && tongThu <= 120e+6){
//     // console.log('ThueL2');
//     tienThue = tongThu - 4e+6 - (phuThuoc * 1.6e+6);
//     tienThue = tienThue * ThueL2;
//   }else if(120e+6 < tongThu && tongThu <= 210e+6){
//     // console.log('ThueL3');
//     tienThue = tongThu - 4e+6 - (phuThuoc * 1.6e+6);
//     tienThue = tienThue * ThueL3;
//   }else if(210e+6 < tongThu && tongThu <= 384e+6){
//     // console.log('ThueL4');
//     tienThue = tongThu - 4e+6 - (phuThuoc * 1.6e+6);
//     tienThue = tienThue * ThueL4;
//   }else if(384e+6 < tongThu && tongThu <= 624e+6){
//     // console.log('ThueL5');
//     tienThue = tongThu - 4e+6 - (phuThuoc * 1.6e+6);
//     tienThue = tienThue * ThueL5;
//   }else if(624e+6 < tongThu && tongThu <= 960e+6){
//     // console.log('ThueL6');
//     tienThue = tongThu - 4e+6 - (phuThuoc * 1.6e+6);
//     tienThue = tienThue * ThueL6;
//   }else if(960e+6 < tongThu){
//     // console.log('ThueL7');
//     tienThue = tongThu - 4e+6 - (phuThuoc * 1.6e+6);
//     tienThue = tienThue * ThueL7;
//   }else{
//     alert('Tiền Thuế Không Hợp Lệ, Vui Lòng Nhập Lại')
//   }

//   document.getElementById('txtResult3').innerHTML = 'Họ và Tên : ' + hoTen + '<br>' + 'Tiền Thuế Phải Nộp Là : ' + tienThue.toLocaleString() + ' VNĐ';
// }

// document.getElementById('btnCalc3').onclick = tinhThue;