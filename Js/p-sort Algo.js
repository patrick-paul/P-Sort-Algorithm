/* 
  ________________________THE P-SORT ALGORITHIM_________________________
  This algorithim Works By sorting an arrays of any length with random,
  non-repeating whole numbers in a linear manner by ascending order 
  basing On Your Computer's Computing Speed.

  This algorithim is designed and developed by Software Engineer & 
  Mathematician Patrick Paul, The Founder & CEO Of Horizon Corporation
  under the inspiration of Binary Search Algorithim.
  
  Depending On Your Computer's Computing Power, This Algorithim Can Sort 
  Numbers To Unlimited Level!!! 

  @ 2021 Horizon Corporation . All Rights Reserved

  For Talks About It... 
    Git: sam-dev404
    Instagram: @patrick_forreal
               @sam.dev404 
    Email: patrickpaul370@gmail.com
*/

////////////////////////////// The Algorithim /////////////////////////////////

//Variables...
var oldNumb;
var newNumb;

var firstNo;
var lastNo;

var low;
var high;
var mean;

var attachment;
var phase1;
var random;

var counter;
var pointer;

var n;
var z;

///// The Intro Of The User To The Program..... ///////////
console.log("Hello There..... ");
console.log('Welcome To "P-Sort Algorithim" Software!');
console.log("Lets Get Started....");
console.log("Please Generate Random Numbers By The Function rand(x , y)");
console.log(
  'Where "x" is The Approximate Number Of Elements You Want To Generate &'
);
console.log('      "y" is The Range Of Your Numbers From 1!');
console.log(
  'NOTE: For Better Review Of The Algorithim, It Is Recommended "y" > "x"'
);

/////// Random Number Generation...
function rand(x, y) {
  oldNumb = [];
  newNumb = [];
  console.log("........... Working On It! ...........");
  console.log("This Might Take A While!!!");
  console.log("                             ");
  for (let i = 0; i < x; i++) {
    random = Math.floor(Math.random() * y + 1);
    if (!oldNumb.includes(random)) {
      oldNumb.push(random);
    }
  }

  counter = oldNumb.length - 1;
  z = oldNumb.length - 1;

  console.log("Completed!!!!");

  /////////////// Thus... Given Random Numbers Are........
  console.log("Random Batch");
  console.log(oldNumb);
  console.log(newNumb);
  console.log(
    "................................................................................."
  );
  console.log(
    "Good! Now You Can Sort That Array Of Numbers By A Function pSort()"
  );
  return "___________________________________________________________________________________";
}

///////////////// The Algo.... /////////////////////////////
function reco() {
  if (attachment < newNumb[mean]) {
    high = mean;
    mean = Math.round((low + mean) / 2);
  } else if (attachment > newNumb[mean]) {
    low = mean;
    mean = Math.round((mean + high) / 2);
  }

  if (low + 1 == high) {
    phase1 = newNumb.splice(high, newNumb.length);
    newNumb.push(attachment);
    newNumb = newNumb.concat(phase1);
    phase1 = [];
    oldNumb.pop();
    return -1;
  } else if (low + 1 != high) {
    reco();
  }
  return -1;
}

function universal() {
  pointer = Math.floor(z / 10);
  n = 1;

  console.log(
    ".......... Process='sorting-data'; Type='numbers'; Quantity ='" +
      (z + 1) +
      "'; Phase: " +
      n +
      "/10 .........."
  );
  console.log("                           ");
  n = n + 1;

  for (let i = 0; i < z + 1; i++) {
    counter = 0;
    firstNo = newNumb[counter];
    lastNo = newNumb[newNumb.length - 1];
    attachment = oldNumb[oldNumb.length - 1];

    if (attachment < firstNo) {
      newNumb.unshift(attachment);
      oldNumb.pop();
    } else if (attachment > lastNo) {
      newNumb.push(attachment);
      oldNumb.pop();
    } else if (attachment > firstNo && attachment < lastNo) {
      //Binary Search....
      low = 0;
      high = newNumb.length - 1;
      mean = Math.round((low + high) / 2);
      reco();
    }

    if (i == n * pointer) {
      console.log(
        ".......... Process='sorting-data'; Type='numbers'; Quantity='" +
          (z + 1) +
          "'; Phase: " +
          n +
          "/10 .........."
      );
      console.log("                           ");
      n = n + 1;
    }
  }
  console.log(
    "...................................................................................................."
  );
  console.log("Final Batch");
  console.log(newNumb);
  console.log(oldNumb);

  return -1;
}

function pSort() {
  /////////////////// Starter //////////////////
  firstNo = oldNumb[counter];
  lastNo = oldNumb[(counter = counter - 1)];

  if (firstNo > lastNo) {
    newNumb.unshift(lastNo);
    newNumb.push(firstNo);
  } else if (firstNo < lastNo) {
    newNumb.unshift(firstNo);
    newNumb.push(lastNo);
  }

  oldNumb.pop();
  oldNumb.pop();

  universal();
  console.log('Done');
  console.log('.......................................................................');
  console.log("           ")
  console.log('P-Sort Algorithim');
  console.log('@ 2021 Horizon Corporation. All Rights Reserved');
  return "_________________________________________________________________________________________";
}
