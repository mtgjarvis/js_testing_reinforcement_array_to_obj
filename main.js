function arrayToObj(aList) {
   let arr = {};
   aList.forEach((element) => {
      arr[element[0]] = element[1];
   })
   return arr
}

module.exports = arrayToObj;
