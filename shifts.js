function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hours, rate) {
  if (hours <= 8) {
    return Math.round(hours * rate);
  } else {
    const regPay = 8 * rate;
    const overPay = (hours - 8) * (rate * 1.5) ;
    return Math.round(regPay + overPay);
  }
  
}

module.exports = { isValidShift, calculatePay };
