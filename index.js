export function add(numbersStr) {
  if (!numbersStr || numbersStr.trim() === "") return 0;

  const numbers = numbersStr.split(",");
  console.log(numbers);
  let sum = 0;
  for (let num of numbers) {
    if (/\d/.test(num)) {
      sum += parseInt(num);
    }
  }

  return sum;
}
