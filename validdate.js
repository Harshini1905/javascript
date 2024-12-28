function validdate(day, month, year) {
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    if (year < 0) {
        return false;
    }

    if (month < 1 || month > 12) {
        return false;
    }

    if (month === 2) {
        let isLeapYear = false;
        for (let i = 0; i <= year; i++) {
            if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
                isLeapYear = true;
                break;
            }
        }
        if (isLeapYear) {
            daysInMonth[1] = 29; 
        }
    }

    if (day < 1 || day > daysInMonth[month - 1]) {
        return false;
    }

    return true; 
}


console.log(validdate(29, 2, 2024)); 
console.log(validdate(30, 2, 2023)); 
console.log(validdate(31, 4, 2023)); 
console.log(validdate(15, 8, 2023)); 
