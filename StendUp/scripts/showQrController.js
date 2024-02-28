import QRCode from "qrcode"
import { Notification } from "./notification";

const notification = Notification.getInstance();

const  displayQrCode = (data) => {
    let error = false
    const modal = document.querySelector(".modal")
    const сanvas =  document.getElementById("qrCanvas")
    const  сloseButton = document.querySelector(".modal__close")
    console.log(data)
    QRCode.toCanvas(сanvas,data, (err)=>{
        if(err){
            error = true;
            return
        }
    })
    if(error){
        notification.show("Что-то пошло не так", false)
        return;
    }
    modal.classList.add("modal_show")
    console.log("Qr-код создан")
    window.addEventListener("click",({target})=>{
        if(target === сloseButton || target === modal){
            modal.classList.remove("modal_show")
            сanvas.getContext('2d').clearRect(0,0,сanvas.Width,сanvas.Height)
        }
    })
} 

export const showQrController = (bookingPerfomance) => {
    bookingPerfomance.addEventListener('click',({target}) => {
        if(target.closest(".booking__hall")){
            const bookingData = target.dataset.booking;

            displayQrCode(bookingData)
        }

    })
}