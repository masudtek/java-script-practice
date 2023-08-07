

function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;

    if(ticketQuantity <= 100){
        const totalFirst100Price = ticketQuantity *  first100Rate;
        return totalFirst100Price; 
    }
    else if( ticketQuantity <= 200){
        const first100price = 100* first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalNextPrice = first100price + restTicketPrice;
        return totalNextPrice;
    } 
    else{
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const finalPrice = first100Price + second100Price + restTicketPrice;
        return finalPrice;

    }
}
const ticketTotalPrice = ticketPrice(210);
console.log("Total Ticket Price : ", ticketTotalPrice);
