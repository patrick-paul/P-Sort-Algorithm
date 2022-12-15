/* 
  ________________________THE P-SORT ALGORITHIM_________________________
  This algorithim Works By sorting an arrays of any length with random,
  non-repeating whole numbers in a linear manner by ascending order.
  The algorithim was designed and developed by  Patrick Paul.
*/

//Variables...
var hashMap, numbData, firstNo, lastNo, low, high, mean, randomNo, counter, nTemp;

// Intro
console.log("Generate Random Numbers By The Function rand(x , y)");
console.log('"x" is The Approximate Number Of Elements You Want To Generate &');
console.log('"y" is The Range Of Your Numbers From 1!');

/////// Random Number Generation...

function rand(x, y) {
  hashMap = {};
  numbData = [];

  for (let i = 0; i < x; i++) {
    randomNo = Math.floor(Math.random() * y + 1);
    if(!hashMap[randomNo]){
      numbData.push(randomNo)
    }
    hashMap[randomNo] = true;
  }
  
  /////////////// Thus... Given Random Numbers Are........
  console.log("Random Batch");
  console.log(numbData);

  return console.log("Sort The Array With function pSort()");
}

////////////////////////////// The Algorithim /////////////////////////////////
function pSort() {
  counter = 0;
  firstNo = numbData[counter];
  lastNo = numbData[counter + 1];

  if (firstNo > lastNo) {
    numbData[counter] = lastNo;
    numbData[counter + 1] = firstNo;
  }

  for (let i = counter + 2; i < numbData.length; i++) {
    if (numbData[i] < numbData[i - 1]) {
      if (numbData[i] < numbData[0]) {
        nTemp = numbData[i];
        //////// Iterating ////////////////////
        for (let f = i; 0 < f; f--) {
          numbData[f] = numbData[f - 1];
        }
        numbData[0] = nTemp;
      } else {
        // Binary Serach...
        low = 0;
        high = i - 1;
        mean = Math.round((low + high) / 2);

        //// Running An Infinite_while_loop, the baseCase of the loop is inside the loop ///
        while (numbData.length >= numbData.length) {
          if (numbData[i] < numbData[mean]) {
            high = mean;
            mean = Math.round((low + mean) / 2);
          } else if (numbData[i] > numbData[mean]) {
            low = mean;
            mean = Math.round((mean + high) / 2);
          }
          /// BaseCase ///
          if (low + 1 == high) {
            nTemp = numbData[i];
            /////////// Iterarting ////////////////////
            for (let f = i; high < f; f--) {
              numbData[f] = numbData[f - 1];
            }
            numbData[high] = nTemp;
            break;
          }
        }
      }
    }
  }

  console.log("The Sorted Array Is: ");
  console.log(numbData);
  return;
}
