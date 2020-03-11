module.exports = function toReadable (number) {
  const single = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const double = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const moreThanTwenty = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  let numberLength = number.toString().split('').length;
  let numberSplit = number.toString().split('');
  if(numberLength === 1) {
      return single[number];
    } else if(numberLength === 2 && numberSplit[0] < 2) {
        return double[numberSplit[1]];
    } else if(numberLength === 2 && numberSplit[1] == 0) {
        return moreThanTwenty[numberSplit[0]-2];
    } else if(numberLength === 2 && numberSplit[0] >= 2) {
        return `${moreThanTwenty[numberSplit[0]-2]} ${single[numberSplit[1]]}`;
    } else if(numberLength === 3 && numberSplit[1] == 0 && numberSplit[2] == 0) {
        return `${single[numberSplit[0]]} hundred`;
    } else if(numberLength === 3 && numberSplit[1] == 0 && numberSplit[2] != 0) {
        return `${single[numberSplit[0]]} hundred ${single[numberSplit[2]]}`;
    } else if(numberLength === 3 && numberSplit[1] == 1) {
        return `${single[numberSplit[0]]} hundred ${double[numberSplit[2]]}`;
    } else if(numberLength === 3 && numberSplit[1] > 1 && numberSplit[2] == 0) {
        return `${single[numberSplit[0]]} hundred ${moreThanTwenty[numberSplit[1]-2]}`;
    } else if(numberLength === 3 && numberSplit[1] > 1 && numberSplit[2] != 0) {
        return `${single[numberSplit[0]]} hundred ${moreThanTwenty[numberSplit[1]-2]} ${single[numberSplit[2]]}`;
    }
}
