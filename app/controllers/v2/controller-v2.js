import { hideAlert } from "./validate-v2.js";

// renderList
export let renderList = (list) => {
    const IS_VEGETARIAN = true;
    const IS_STOCK = true;
    var contentHTML = ''
    list.forEach(item => {
        let newItem = {
            fCode: item.fCode,
            fName: item.fName,
            fType: item.fType,
            fPrice: item.fPrice,
            fPromote: item.fPromote,
            fStatus: item.fStatus,
            fImg: item.fImg,
            fDesc: item.fDesc,
            tinhGiaKM: function () {
                return this.fPrice * 1 * (100 - this.fPromote * 1) / 100;
            }
        }
        contentHTML += `
        <tr>
            <td class"fCode">${newItem.fCode}</td>
            <td class"fName">${newItem.fName}</td>
            <td class"fType">${newItem.fType == IS_VEGETARIAN ? "Chay" : "Mặn"}</td>
            <td class"fPrice">${newItem.fPrice}</td>
            <td class"fPromote">${newItem.fPromote}</td>
            <td class"fPromotePrice">${newItem.tinhGiaKM()}</td>
            <td class"fStatus">${newItem.fStatus == IS_STOCK ? "Còn" : "Hết"}</td>
            <td class="fActions">
                <button class="btn btn-warning" onclick="editData(${newItem.fCode})" data-toggle="modal"
                data-target="#exampleModal">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                        <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                        <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                    </svg>
                </button>
                <button class="btn btn-danger" onclick="delData(${newItem.fCode})">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clip-rule="evenodd" />
                    </svg>
                </button>
            </td>
        </tr>        `
    });
    document.getElementById("tbodyFood").innerHTML = contentHTML;
}
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
    document.getElementById("foodID").value = item.fCode;
    document.getElementById("tenMon").value = item.fName;
    document.getElementById("loai").value = item.fType;
    document.getElementById("giaMon").value = item.fPrice;
    document.getElementById("khuyenMai").value = item.fPromote;
    document.getElementById("tinhTrang").value = item.fStatus;
    document.getElementById("hinhMon").value = item.fImg;
    document.getElementById("moTa").value = item.fDesc;
    hideAlert();
}
export let showMessage = (message, isSuccess = true) => {
    Toastify({
        text: message,
        style: {
            background: isSuccess ? "green" : "red",
        },
    }).showToast();
};
export let showSpinner = () => {
    document.getElementById("background-waiting").classList.remove("d-none");
}
export let hideSpinner = () => {
    document.getElementById("background-waiting").classList.add("d-none");
}
