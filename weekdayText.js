function weekdaysText(weekdays) {
    let day = '';
    return function getText(target) {
        if (target > weekdays.length || target < 0) {
            return 'Invalid day number';
        } else {
            for (let i = 0; i < weekdays.length; i++) {
                day = weekdays[target];
            }
            return day;
        }
    }
}

const day = weekdaysText(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])(3);
console.log(day);
