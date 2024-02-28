import './style.css'
import { initForm } from './scripts/form';
import { getComedians } from './scripts/api';
import { createComedianBlock } from './scripts/comedians';
import { initChangeSection } from './scripts/changeSection';
import { initQrPage } from './scripts/qrPage';


const init = async () => {

    if(window.location.pathname.endsWith("qr.html")){
      initQrPage()  
      return
    }

    const bookingComediansList = document.querySelector('.booking__comedians-list')
    const bookingForm = document.querySelector(".booking__form")
    const countComedians = document.querySelector('.event__info-item_comedians .event__info-number')
    const bookingInputName = document.getElementById("fullName")
    const boolinkInputPhone = document.getElementById("phone")
    const bookingInputTicket =  document.getElementById("ticketNumber")

    const event = document.querySelector('.event')
    const booking = document.querySelector('.booking')
    const eventButtonReserve = document.querySelector('.event__button_reserve')
    const eventButtonEdit =  document.querySelector('.event__button_edit')
    const bookingTitle =  document.querySelector('.booking__title')
 
    const comedians = (await getComedians());

    if(!comedians){
        return
    }

   countComedians.textContent = comedians.length    
   const ComedianBlock = createComedianBlock(comedians,bookingComediansList)
   bookingComediansList.append(ComedianBlock)

  const changeSection = initChangeSection(
    bookingForm,
    event,
    booking,
    eventButtonReserve,
    eventButtonEdit,
    bookingTitle,
    comedians,
    bookingComediansList
    )

 initForm(bookingForm,bookingInputName,boolinkInputPhone,bookingInputTicket,changeSection)
}

init()