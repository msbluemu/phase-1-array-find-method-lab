// code your solution here
const record = [
     { year: "2015", result: "W"},
     { year: "2014", result: "N/A"},
     { year: "2013", result: "L"},
   ]

   function superbowlWin(record) {
    const winObject = record.find(obj => obj.result === 'W');
    return winObject ? winObject.year : undefined;
  }
  
console.log(superbowlWin(record));