let number = 1;
while (true) {
    let flag = false;
    for (let counter = 1; counter <= 20; counter++) {
        if (number%counter !== 0) {
          flag = true;
          break;
        }
    }
    if (!flag) {
      console.log(number); 
      break;
    }
    number++
}