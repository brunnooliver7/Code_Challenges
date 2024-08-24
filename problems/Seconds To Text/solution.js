process.stdin.resume();
process.stdin.setEncoding("utf-8");

var input_ = "";

process.stdin.on("data", function (data) {
  input_ += data.toString().trim();
  input_ += "\n";
});

function solution(seconds) {
  // You must complete the logic for the function that is provided
  // before compiling or submitting to avoid an error.

  // Write your code here

  let years = 0;
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let secs = 0;

  if (Math.floor(seconds / 3600 / 24 / 365)) {
    years = Math.floor(seconds / 3600 / 24 / 365);
  }

  if (years) {
    // if (Math.floor((seconds/3600)/24)) {
    days = Math.floor(seconds / 3600 / 24 - years * 365);
  } else {
    days = Math.floor(seconds / 3600 / 24);
  }

  if (days) {
    hours = Math.floor(seconds / 3600) - days * 24;
  } else {
    hours = Math.floor(seconds / 3600 / 24);
  }

  if (hours) {
    minutes = Math.floor(seconds / 60) - hours * 60;
  } else {
    hours = Math.floor(seconds / 3600 / 24);
  }

  if (minutes) {
    secs = Math.floor(seconds / 60) - minutes * 60;
  } else {
    secs = Math.floor(seconds / 60);
  }

  // let days = Math.floor((seconds/3600)/24)
  // let hours = Math.floor(seconds/3600)
  // let minutes = Math.floor(seconds / 60)
  // let secs = Math.floor(seconds % 60)

  let res = "";

  if (years > 0) {
    // if (res.length > 0) res += ' and '
    if (years === 1) res += `${years} year`;
    else res += `${years} years`;
  }

  if (days > 0) {
    if (res.length > 0) res += " and ";
    if (days === 1) res += `${days} day`;
    else res += `${days} days`;
  }

  if (hours > 0) {
    if (res.length > 0) res += " and ";
    if (hours === 1) res += `${hours} hour`;
    else res += `${hours} hours`;
  }

  if (minutes > 0) {
    if (res.length > 0) res += " and ";
    if (minutes === 1) res += `${minutes} minute`;
    else res += `${minutes} minutes`;
  }

  if (secs > 0) {
    if (res.length > 0) res += " and ";
    if (secs === 1) res += `${secs} second`;
    else res += `${secs} seconds`;
  }

  return res;
}

process.stdin.on("end", function () {
  input_ = input_.replace(/\n$/, "");
  input_ = input_.split("\n");

  var idx_ = 0;
  var seconds = parseInt(input_[idx_++].trim(), 10);

  var out_ = solution(seconds);
  process.stdout.write(out_.toString());

  process.exit();
});
