import { getFormInfor, hideSpinner, renderList, showDataForm, showMessage, showSpinner } from "./controller-v2.js"
import { checkAllInput, hideAlert } from "./validate-v2.js";
const url = "https://64e1f3e1ab00373588188806.mockapi.io/Product";

window.fetchList = () => {
    showSpinner();
    axios
        .get(url)
        .then(function (res) {
            renderList(res.data);
            hideSpinner();
        })
        .catch(function (err) {
            console.log(err);
            hideSpinner();
        });
};
fetchList();
window.addData = () => {
    var item = getFormInfor();
    var isValid = checkAllInput(item);
    if (!isValid) return;
    showSpinner();
    axios
        .post(url, item)
        .then(function (res) {
            fetchList();
            showMessage("Add Data success!", true);
            hideSpinner();
        })
        .catch(function (err) {
            console.log(err);
            showMessage("Add Data fail!", false);
            hideSpinner();
        });
};
window.delData = (id) => {
    showSpinner();
    axios
        .delete(`${url}/${id}`)
        .then(function (res) {
            fetchList();
            showMessage("Delete Data Success", true);
            hideSpinner();
        })
        .catch(function (err) {
            console.log(err);
            showMessage("Delete Data Fail", false);
            hideSpinner();
        });
};
window.editData = (id) => {
    showSpinner();
    axios
        .get(`${url}/${id}`)
        .then(function (res) {
            showDataForm(res.data);
            document.getElementById("btnThemMon").classList.add("d-none");
            document.getElementById("btnCapNhat").classList.remove("d-none");
            hideSpinner();
        })
        .catch(function (err) {
            console.log(err);
            hideSpinner();
        });

}
window.updateData = () => {
    var item = getFormInfor();
    var isValid = checkAllInput(item);
    if (!isValid) return;
    showSpinner();
    axios
        .put(`${url}/${item.fCode}`, item)
        .then(function (res) {
            fetchList();
            showMessage("Update Data Success", true);
            hideSpinner();
        })
        .catch(function (err) {
            console.log(err);
            showMessage("Update Data Success", false);
            hideSpinner();
        });
};
document.getElementById("selLoai").addEventListener("change", function () {
    window.showDataWithOption();
});
window.showDataWithOption = () => {
    var option = document.getElementById("selLoai").value;
    if (option == "") return;
    var list = [];
    showSpinner();
    axios
        .get(url)
        .then(function (res) {
            if (option == "all") {
                list = res.data;
                console.log("list: ", list);
            }
            else {
                res.data.forEach(item => {
                    if (item.fType == option) {
                        list.push(item);
                        console.log("list: ", list);
                    }
                });
            }
            renderList(list);
            showMessage(`Search Data Type Success with ${list.length} results`, true);
            hideSpinner();
        })
        .catch(function (err) {
            console.log(err);
            showMessage("Search Data Fail", false);
            hideSpinner();
        });
}
window.showEmptyForm = () => {
    showSpinner();
    hideAlert();
    document.getElementById("foodID").value = "";
    document.getElementById("tenMon").value = "";
    document.getElementById("loai").value = "";
    document.getElementById("giaMon").value = "";
    document.getElementById("khuyenMai").value = "";
    document.getElementById("tinhTrang").value = "";
    document.getElementById("hinhMon").value = "";
    document.getElementById("moTa").value = "";
    document.getElementById("btnThemMon").classList.remove("d-none");
    document.getElementById("btnCapNhat").classList.add("d-none");
    hideSpinner();
};
