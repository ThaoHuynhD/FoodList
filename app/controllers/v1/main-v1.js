import { getFormInfor, showDataForm } from "./controller-v1.js"

window.themMon = () => {
    var foodItem = getFormInfor();
    console.log(" foodItem: ",  foodItem);
    showDataForm(foodItem);

}