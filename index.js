export function add(numbersStr) {
  const numbers = numbersStr.split(",");
  let sum = 0;
  for (let num of numbers) {
    sum += parseInt(num);
  }

  return sum;
}
