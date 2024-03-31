// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// var input_ = "";

// process.stdin.on('data', function (data) {
//     input_ += data.toString().trim();
//     input_ += '\n';
// });

function solution(N, ratings) {
  // You must complete the logic for the function that is provided
  // before compiling or submitting to avoid an error.

  // Write your code here

  // let highestStar = Math.max(...ratings.map(item => item[1]))

  // let amount = 0
  // let counter = 0

  // let star = 0;
  // let res = 0;

  // ratings.forEach(item => {
  //     if (item[1] === highestStar) {
  //         amount += item[0];
  //         counter++;
  //     }
  // });

  // let ans = Math.floor(amount / counter)
  // console.log(ans, amount, counter)

  // return Math.floor(amount / counter)

  let map = new Map();

  ratings.forEach((item) => {
    if (map.has(item[0])) {
      let mapEl = map.get(item[0]);
      map.set(item[0], {
        ...mapEl,
        counter: mapEl.counter + 1,
        rating: mapEl.amount + item[1],
      });
    } else {
      map.set(item[0], {
        rating: item[1],
        counter: 1,
        amount: item[1],
      });
    }
  });

  let res = Number.MAX_SAFE_INTEGER;
  let maxAvg = 0;

  let avgs = [];

  Array.from(map).forEach((mapEl) => {
    let key = mapEl[0];
    let value = mapEl[1];

    let avg = value.amount / value.counter;

    if (avg > maxAvg) {
      // console.log('entrei no if', key, value, avg)
      maxAvg = avg;
      // res = key
      avgs.push(mapEl);
    }
  });

  let theOne = Number.MAX_SAFE_INTEGER;
  console.log(avgs);
  avgs.forEach((avgPair) => {
    if (avgPair[0] < theOne) {
      theOne = avgPair[0];
    }
  });

  return theOne;

  // console.log(map)
}

// process.stdin.on('end', function () {
//     input_ = input_.replace(/\n$/, "");
//     input_ = input_.split("\n");

//     var idx_ = 0;
//     var N = parseInt(input_[idx_++].trim(), 10);
//     var ratings = [];
//     for(var i_ratings = 0; i_ratings < N; i_ratings++) {
//     	ratings.push(input_[idx_++].trim().split(' ').map(function(el) {
//     		return parseInt(el, 10);
//     	}));
//     }

//     var out_ = solution( N,  ratings);
//     process.stdout.write(out_.toString());

//     process.exit();

// });
