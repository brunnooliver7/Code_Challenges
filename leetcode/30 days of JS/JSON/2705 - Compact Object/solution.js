/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
  if (Array.isArray(obj)) return compactArray(obj);
  else return compactObj(obj);
};

function compactArray(arr) {
  return arr
    .map((el) => {
      if (Boolean(el)) {
        if (Array.isArray(el)) return compactArray(el);
        if (typeof el === "object") return compactObj(el);
        if (Boolean(el)) return el;
      }
    })
    .filter((el) => Boolean(el));
}

function compactObj(obj) {
  let res = {};

  Object.entries(obj).forEach((pair) => {
    let key = pair[0];
    let value = pair[1];

    if (Array.isArray(value)) res[key] = compactArray(value);
    else if (typeof value === "object" && Boolean(value))
      res[key] = compactObj(value);
    else if (Boolean(value)) res[key] = value;
  });

  return res;
}
