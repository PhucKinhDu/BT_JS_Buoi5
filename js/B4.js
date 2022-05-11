// Tính Tiền Cáp

const ND_HOADON = 4.5;
const ND_DICHVU_COBAN = 20.5;
const ND_KENH_CAOCAP = 7.5;

const DN_HOADON = 15;
const DN_DICHVU_COBAN = 75;
const DN_KENH_CAOCAP = 50;


function tinhTienCap(){

  var maKH = Number(document.getElementById('inputmaKH').value);
  var soKenhCC = Number(document.getElementById('inputsoKenhCC').value);
  var loaiKhach = document.getElementById('selectloaiKhach').value;
  var soKetNoi = Number(document.getElementById('inputsoKN').value);

  var tienCap = tinhPhi(soKenhCC, loaiKhach);
  

  document.getElementById('txtResult4').innerHTML = 'Mã khách hàng : ' + maKH + '<br>' + 'Tiền Cáp là : ' +  tienCap;

}

function tinhPhi(soKenhCC, loaiKhach){
  
  if(loaiKhach == 'nhaDan'){
    return ND_HOADON + ND_DICHVU_COBAN + (soKenhCC * ND_KENH_CAOCAP);
  }else if(loaiKhach == 'doanhNghiep'){
    return DN_HOADON + DN_DICHVU_COBAN + (soKenhCC * DN_KENH_CAOCAP);
  }else{
    console.log('Loại khách chưa xác định');
    return 0;
  }
}

document.getElementById('btnCalc4').onclick = tinhTienCap;

function disabled(){
  if(document.getElementById('selectloaiKhach').value == 'nhaDan'){
    document.getElementById('inputsoKN').disabled = true;
  }else{
    document.getElementById('inputsoKN').disabled = false;
  }
}

//---------------------------------------------------------------------------------------

// const PhiHD1 = 4.5;
// const PhiCB1 = 20.5;
// const KenhCC1 = 7.5;

// const PhiHD2 = 15;
// const PhiCB2 = 75;
// const kenhCC2 = 50;


// function tinhTienCap() {

//  var loaiKH = document.getElementById('loaiKhach').value;
//  var maKH = document.getElementById('inputmaKH').value;
//  var soKenhCC = document.getElementById('inputsoKenhCC').value;
// //  console.log(loaiKH, maKH, soKenhCC);
 
//  var loaiKhach = '';
 
//  if(loaiKH == 'NhaDan'){
//   loaiKhach = 'Nhà Dân';
//  }else if(loaiKH == 'DoanhNghiep'){
//   loaiKhach = 'Doanh Nghiệp';
//  }else{
//   alert('Chưa chọn loại khách hàng ');
//  }
// //  console.log(loaiKhach);
 
//  var thanhTien = 0;

//  switch (loaiKhach){
//    case 'Nhà Dân':
//     //  console.log('tính loại nhà dân')
//      thanhTien = PhiHD1 + PhiCB1 + (KenhCC1 * soKenhCC);
//     //  console.log(thanhTien)
//     break;
//    case 'Doanh Nghiệp':
//     //  console.log('tính loại doanh nghiệp') 
//      thanhTien = PhiHD2 + PhiCB2 + (kenhCC2 * soKenhCC);
//     //  console.log(thanhTien)
//     break;
//    default:
//     //  console.log('Chưa xác định loại khách ');
//     break;  
//  }
//  document.getElementById('txtResult4').innerHTML = 'Mã khách hàng : ' + maKH + '<br>' + 'Tiền cáp : ' + thanhTien.toLocaleString(2);
// }
// document.getElementById('btnCalc4').onclick = tinhTienCap;

