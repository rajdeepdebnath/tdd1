export function add(numbersStr) {
  if (!numbersStr || numbersStr.trim() === "") return 0;

  let str = numbersStr.match(/\/\/(.?|\[(.*)\])\n/);

  let d = ",";
  if (str && str[1].length === 1) {
    d = str[1];
  } else if (str && str[1].length > 1) {
    d = str[2];
  }

  let numbers = [];
  if (d.includes("][")) {
    let del = d.replace(/\]\[/g, "").split("");
    let s = numbersStr.replace(str[0], "");
    del.forEach((i) => {
      let r = new RegExp(`\${i}`, "g");
      s = s.replace(r, "");
    });

    numbers = s.split("");
  } else {
    numbers = numbersStr.replace(/\n/g, d).split(d);
  }

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
