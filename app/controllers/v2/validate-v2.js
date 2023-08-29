import { showMessage } from "./controller-v2.js";

export let checkAllInput = (item) => {
    var isValid =
        checkEmpty("invalidTen", item.fName)
        & checkEmpty("invalidLoai", item.fType)
        & checkPrice("invalidGia", item.fPrice)
        & checkEmpty("invalidKM", item.fPromote)
        & checkEmpty("invalidTT", item.fStatus)
        & checkImg("invalidImg", item.fImg)
        & checkEmpty("invalidMoTa", item.fDesc);
    return isValid;
}
let checkImg = (idErr, value) => {
    var isValid = checkEmpty(idErr, value)
    if (!isValid) return false;
    isValid = checkLink(idErr, value);
    if (!isValid) return false;
    else return true;
}
let checkPrice = (idErr, value) => {
    var isValid = checkEmpty(idErr, value)
    if (!isValid) return false;
    isValid = checkPositiveNumber(idErr, value);
    if (!isValid) return false;
    else return true;
}
let checkEmpty = (idErr, value) => {
    if (value == "") {
        document.getElementById(idErr).innerHTML = "Not empty value allowed";
        document.getElementById(idErr).style.display = "block";
        return false;
    }
    else {
        document.getElementById(idErr).innerHTML = "";
        document.getElementById(idErr).style.display = "none";
        return true;
    }
}
let checkPositiveNumber = (idErr, value) => {
    if (isNaN(value) || value < 0) {
        document.getElementById(idErr).innerHTML = "Not type of value allowed";
        document.getElementById(idErr).style.display = "block";
        return false;
    }
    else {
        document.getElementById(idErr).innerHTML = "";
        document.getElementById(idErr).style.display = "none";
        return true;
    }
}
let checkLink = (idErr, value) => {
    const urlPattern = /^(http|https):\/\/[^\s/$.?#].[^\s]*$/;
    if (!urlPattern.test(value)) {
        document.getElementById(idErr).innerHTML = "Not type of value allowed";
        document.getElementById(idErr).style.display = "block";
        return false;
    }
    else {
        document.getElementById(idErr).innerHTML = "";
        document.getElementById(idErr).style.display = "none";
        return true;
    }
}
export let hideAlert = () => {
    document.getElementById("invalidTen").style.display = "none";
    document.getElementById("invalidLoai").style.display = "none";
    document.getElementById("invalidGia" ).style.display = "none";
    document.getElementById("invalidKM").style.display = "none";
    document.getElementById("invalidTT").style.display = "none";
    document.getElementById("invalidImg").style.display = "none";
    document.getElementById("invalidMoTa").style.display = "none";
}