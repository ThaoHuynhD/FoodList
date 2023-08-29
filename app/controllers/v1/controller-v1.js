
// getFormInfor
export let getFormInfor = () => {
    let fCode = document.getElementById("foodID").value.trim();
    let fName = document.getElementById("tenMon").value.trim();
    let fType = document.getElementById("loai").value.trim();
    let fPrice = document.getElementById("giaMon").value.trim();
    let fPromote = document.getElementById("khuyenMai").value.trim();
    let fStatus = document.getElementById("tinhTrang").value.trim();
    let fImg = document.getElementById("hinhMon").value.trim();
    let fDesc = document.getElementById("moTa").value.trim();
    return {
        fCode: fCode,
        fName: fName,
        fType: fType,
        fPrice: fPrice,
        fPromote: fPromote,
        fStatus: fStatus,
        fImg: fImg,
        fDesc: fDesc,
        tinhGiaKM: function () {
            return this.fPrice * (100 - this.fPromote) / 100;
        }
    }
}
// showDataForm
export let showDataForm = (item) => {
    document.getElementById("spMa").innerHTML = item.fCode;
    document.getElementById("spTenMon").innerHTML = item.fName;
    document.getElementById("spLoaiMon").innerHTML = item.fType;
    document.getElementById("spGia").innerHTML = item.fPrice;
    document.getElementById("spKM").innerHTML = item.fPromote;
    document.getElementById("spGiaKM").innerHTML = item.tinhGiaKM();
    document.getElementById("spTT").innerHTML = item.fStatus;
    document.getElementById("imgMonAn").src = item.fImg;
    document.getElementById("pMoTa").innerHTML = item.fDesc;
}