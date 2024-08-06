export function add(numbersStr) {
  if (!numbersStr || numbersStr.trim() === "") return 0;

  let str = numbersStr.match(/\/\/(.*\s*)\n/);
  let d = str ? str[1] : ",";

  const numbers = numbersStr.replace(/\n/g, d).split(d);

  let sum = 0;
  for (let num of numbers) {
    if (/\d/.test(num)) {
      sum += parseInt(num);
    }
  }

  return sum;
}
