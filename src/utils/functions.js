
export function getDays(date) {

    let createdDate = new Date(`${date}`);
    let currentDate = new Date();

    let difference = currentDate.getTime() - createdDate.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));


    return TotalDays;
}





