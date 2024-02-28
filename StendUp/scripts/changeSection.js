import { createComedianBlock } from "./comedians"

export const initChangeSection = (
    bookingForm,
    event,
    booking,
    eventButtonReserve,
    eventButtonEdit,
    bookingTitle,
    comedians,
    bookingComediansList
    ) => {
        eventButtonReserve.classList.remove("event__button_hidden")
        eventButtonEdit.classList.remove("event__button_hidden")

       const changeSection = () => {
        event.classList.toggle("event__hidden")
        booking.classList.toggle("booking__hidden")


        if(!booking.classList.contains("booking__hidden")){
            const ComedianBlock = createComedianBlock(comedians,bookingComediansList)
            bookingComediansList.append(ComedianBlock)
        }

       };

        eventButtonReserve.addEventListener("click",() => {
            changeSection();
            bookingTitle.textContent = "Забронируйсте место в зале"
            bookingForm.method  = "POST"
        });
        eventButtonEdit.addEventListener("click",() => {
            changeSection();
            bookingTitle.textContent = "Редактирование брони"
            bookingForm.method = "PATCH"
        });
        return changeSection;
}