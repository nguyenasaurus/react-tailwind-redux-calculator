const calculate = (array, displayVal) => {

  const displayValArr = array ? array : displayVal.split(" ");

  if (displayValArr.length > 1) {
    const beforeVal = (index) => Number(displayValArr[index - 1]);
    const afterVal = (index) => Number(displayValArr[index + 1]);

    if (displayValArr.includes("/")) {
      const divideIndex = displayValArr.indexOf("/");
      const dividedVal = beforeVal(divideIndex) / afterVal(divideIndex);

      displayValArr.splice(divideIndex - 1, 3, dividedVal);
    }

    if (displayValArr.includes("*")) {
      const multiplyIndex = displayValArr.indexOf("*");
      const multipliedVal = beforeVal(multiplyIndex) * afterVal(multiplyIndex);
      displayValArr.splice(multiplyIndex - 1, 3, multipliedVal);
    }

    if (displayValArr.includes("+")) {
      const addIndex = displayValArr.indexOf("+");
      const addedVal = beforeVal(addIndex) + afterVal(addIndex);

      displayValArr.splice(addIndex - 1, 3, addedVal);
    }

    if (displayValArr.includes("-")) {
      const subtractIndex = displayValArr.indexOf("-");
      const subtractVal = beforeVal(subtractIndex) - afterVal(subtractIndex);

      displayValArr.splice(subtractIndex - 1, 3, subtractVal);
    }

    calculate(displayValArr);
  }
  return displayValArr;
};

export default calculate;
