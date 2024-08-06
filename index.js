export function add(numbersStr) {
  if (!numbersStr || numbersStr.trim() === "") return 0;

  const numbers = numbersStr.split(",");

  let sum = 0;
  for (let num of numbers) {
    sum += parseInt(num);
  }

  return sum;
}
