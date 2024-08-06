export function add(numbersStr) {
  if (!numbersStr || numbersStr.trim() === "") return 0;

  let str = numbersStr.match(/\/\/(.*\s*)\n/);
  let d = str ? str[1] : ",";

  const numbers = numbersStr.replace(/\n/g, d).split(d);

  let sum = 0;
  let negNums = [];
  for (let num of numbers) {
    if (/\d/.test(num)) {
      if (num < 0) {
        negNums.push(num);
        continue;
      }
      if (num > 1000) {
        continue;
      }
      sum += parseInt(num);
    }
  }

  if (negNums.length > 0) {
    throw new Error(`negatives not allowed - ${negNums.join()}`);
  }

  return sum;
}
