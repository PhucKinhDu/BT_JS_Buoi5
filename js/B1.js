// Quản lý tuyển sinh


function kiemTraKetQua(){
  var diem1 = Number(document.getElementById('inputdiem1').value);
  var diem2 = Number(document.getElementById('inputdiem2').value);
  var diem3 = Number(document.getElementById('inputdiem3').value);
  var diemChuan = Number(document.getElementById('inputdiemChuan').value);
  
  var diemKhuVuc = Number(document.getElementById('selectkhuVuc').value);
  var diemDoiTuong = Number(document.getElementById('selectdoiTuong').value);
  // console.log(diemChuan, diemKhuVuc, diemDoiTuong, diem1, diem2, diem3);

  var ketQua = '';
  if(diem1 == 0 || diem2 == 0 || diem3 == 0){
    ketQua = 'Bạn đã rớt';
  }else{
    var tongDiem = diem1 + diem2 + diem3 + diemKhuVuc + diemDoiTuong;
    ketQua = tongDiem >= diemChuan ? 'Bạn đã đậu' : 'Bạn đã rớt'
  }
  // console.log(tongDiem, ketQua);
  document.getElementById('txtResult1').innerHTML = 'Tổng điểm : ' + tongDiem + '<br>' + 'Kết quả : ' + ketQua;
}

document.getElementById('btnCalc1').onclick = kiemTraKetQua; 