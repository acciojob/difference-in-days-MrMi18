var dateDiffInDays = function (date1, date2) {
  //   write your code here
	// let d1 = date1.split("-").map(i => Number(i));
  
 //  let d2 = date2.split("-").map(i => Number(i));
 //    return d2[2]-d1[2];
	    let d1 = new Date(date1);
    let d2 = new Date(date2);

    // Convert to UTC milliseconds and get the difference
    let diffInMs = Date.UTC(d2.getFullYear(), d2.getMonth(), d2.getDate()) - 
                   Date.UTC(d1.getFullYear(), d1.getMonth(), d1.getDate());

    // Convert milliseconds to days
    return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
