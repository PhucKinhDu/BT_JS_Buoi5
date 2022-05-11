
function tinhTien(soKw) {
    // giakw sẽ khai báo tại đây
    const GiaKw_D1 = 500;
    const GiaKw_D2 = 650;
    const GiaKw_D3 = 850;
    const GiaKw_D4 = 1100;
    const GiaKw_TrenD4 = 1300;
    if (0 < soKw && soKw <= 50) {
        thanhTien = soKw * GiaKw_D1;
    } else if (50 < soKw && soKw <= 100) {
        thanhTien = 25000 + (soKw - 50) * GiaKw_D2;
    } else if (100 < soKw && soKw <= 200) {
        thanhTien = 57500 + (soKw - 100) * GiaKw_D3;
    } else if (200 < soKw && soKw <= 350) {
        thanhTien = 142500 + (soKw - 200) * GiaKw_D4;
    } else {
        thanhTien = 307500 + (soKw - 350) * GiaKw_TrenD4;
    }
  // a thử nhưng thấy phức tạp với dài quá, còn nếu mảng thì nhanh, để a demo máy anh thử hì, dạ
    return thanhTien;
}
// ham tren hieu hong, hieu anh
function tinhTienDien() {
    //  Bước 1 luôn lấy 2 giá trị
    var hoTen = document.getElementById("inputhoTen2").value;
    var soKw = document.getElementById("inputsoKw").value;
    var exportHTML = "";
    //  console.log(hoTen, soKw);
    var thanhTien = 0;
    // Bước 2 bắt đầu tách hàm
    // Điểm chung nhất ở đây là cần xác định giaKw để tính với công thức là soKw *giaKW
    // Đầu tiên cần kiểm tra số kw có hợp lệ hay không
    if (Number(soKw) < 0) {
        exportHTML = "Số tiền không hợp lệ";
    } else {
        // Code từ 47-60 hiểu rồi chứ ?? ok anh
        // Để tính tiền ta cần thông số nào, vậy xét hàm
        thanhTien = tinhTien(soKw);
        exportHTML =
            "Khách Hàng : " +
            hoTen +
            "<br>" +
            "Số Tiền Điện Là : " +
            thanhTien.toLocaleString() +
            " VNĐ";
    }

    document.getElementById("txtResult2").innerHTML = exportHTML;
}



//----------------------------------------------------------------
// Quản lý tuyển sinh

document.getElementById('btnCalc1').onclick = function kiemTraKetQua(){

    var diemChuan = Number(document.getElementById('inputdiemChuan').value);
    var khuVuc = Number(document.getElementById('selectkhuVuc').value);
    var doiTuong = Number(document.getElementById('selectdoiTuong').value);

    var diem1 = Number(document.getElementById('inputdiem1').value);
    var diem2 = Number(document.getElementById('inputdiem2').value);
    var diem3 = Number(document.getElementById('inputdiem3').value);

    var ketQua = '';
    
    if(diem1 == 0 || diem2 == 0 || diem3 == 0){
        ketQua = 'Bạn đã rớt';
    }else{
        tongDiem = diem1 + diem2 + diem3 + khuVuc + doiTuong;
        ketQua = tongDiem >= diemChuan ? 'Bạn đã đậu' : 'Bạn đã rớt';
    }

    document.getElementById('txtResult1').innerHTML = 'Tổng điểm : ' + tongDiem + '<br>' + 'Kết quả : ' + ketQua;

}

//-----------------------------------------------------------------
// Tính Tiền Điện

const GIA50KW_DAU = 500;
const GIAKW50_100 = 650;
const GIAKW100_200 = 850;
const GIAKW200_350 = 1100;
const GIAKWTREN_350 = 1300;

document.getElementById('btnCalc2').onclick = function tinhTienDien(){

    var hoTen = document.getElementById('inputhoTen2').value;
    var soKw = Number(document.getElementById('inputsoKw').value);

    var tienDien = soTienTrenKw(soKw);

    document.getElementById('txtResult2').innerHTML = 'Khách hàng : ' + hoTen + '<br>' + 'Tiền điện là : ' + tienDien.toLocaleString() + ' VNĐ';

}

function soTienTrenKw(soKw){
    if(0 < soKw && soKw <= 50){
        return soKw * GIA50KW_DAU;
    }else if(50 < soKw && soKw <= 100){
        return 25000 + (soKw - 50) * GIAKW50_100;
    }else if(100 < soKw && soKw <= 200){
        return 57500 (soKw - 100) * GIAKW100_200;
    }else if(200 < soKw && soKw <= 350){
        return 142500 + (soKw - 200) * GIAKW200_350;
    }else if(350 < soKw){
        return 307500 + (soKw - 350) * GIAKWTREN_350;
    }else{
        alert('Số Kw không hợp lệ');
    }
}

//-----------------------------------------------------------------
// Tính Thuế Thu Nhập

const THUE0_60 = 0.05;
const THUE60_120 = 0.1;
const THUE120_210 = 0.15;
const THUE210_384 = 0.2;
const THUE384_624 = 0.25;
const THUE624_960 = 0.3;
const THUETREN_960 = 0.35;

document.getElementById('btnCalc3').onclick = function tinhThueCaNhan(){

    var hoTen = document.getElementById('inputhoTen3').value;
    var tongThuNhap = Number(document.getElementById('inputtongThuNhap').value);
    var phuThuoc = Number(document.getElementById('inputphuThuoc').value);

    var thuNhap = tongThuNhap - 4e+6 - (phuThuoc * 1.6e+6);
    var tienThue = mucThueThuNhap(thuNhap);

    document.getElementById('txtResult3').innerHTML = 'Họ tên : ' + hoTen + '<br>' + 'Tiền thuế phải nộp là : ' + tienThue.toLocaleString() + ' VNĐ';

}

function mucThueThuNhap(thuNhap){
    if(0 < thuNhap && thuNhap <= 60e+6){
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
        return thuNhap * THUETREN_960;
    }else{

    }
}

//-----------------------------------------------------------------
// Tính Tiền Cáp

const NHADAN_HOADON = 4.5;
const NHADAN_DICHVU_COBAN = 20.5
const NHADAN_KENH_CAOCAP = 7.5;

const DOANHNGHIEP_HOADON = 15;
const DOANHNGHIEP_DICHVU_COBAN = 75;
const DOANHNGHIEP_KENH_CAOCAP = 50;

document.getElementById('btnCalc4').onclick = function tinhTienCap(){

    var loaiKhach = document.getElementById('selectloaiKhach').value;
    var soKetNoi = Number(document.getElementById('inputsoKN').value);
    var maKH = Number(document.getElementById('inputmaKH').value);
    var soKenhCC = Number(document.getElementById('inputsoKenhCC').value);

    var tienCap = tinhPhi(loaiKhach, soKenhCC);
    document.getElementById('txtResult4').innerHTML = 'Mã khách hàng : ' + maKH + '<br>' + 'Tiền cáp là : ' + tienCap;
}

function tinhPhi(loaiKhach, soKenhCC){
    if(loaiKhach == 'nhaDan'){
        return NHADAN_HOADON + NHADAN_DICHVU_COBAN + (soKenhCC * NHADAN_KENH_CAOCAP);
    }else if(loaiKhach == 'doanhNghiep'){
        return DOANHNGHIEP_HOADON + DOANHNGHIEP_DICHVU_COBAN + (soKenhCC * DOANHNGHIEP_KENH_CAOCAP);
    }else{
        console.log('Loại khách chưa xác định');
        return 0;
    }
}


