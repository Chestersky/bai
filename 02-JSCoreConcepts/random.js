const fillArray = () => {
  let randNumberArray = [];
  for (let i = 0; i <= 9; i++) {
    randNumberArray.push(Math.floor(Math.random() * (20 - 5 + 1)) + 5);
  }
  return randNumberArray;
};

const displayArray = () => {
  console.log(fillArray());
};

displayArray();
