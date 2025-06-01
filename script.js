var dateDiffInDays = function (date1, date2) {
  //   write your code here
	  let d1 = date1.split("-").map(i => Number(i));
  
  let d2 = date2.split("-").map(i => Number(i));
    return d2[2]-d1[2];
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
