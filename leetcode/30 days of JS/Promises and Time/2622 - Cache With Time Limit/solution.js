var TimeLimitedCache = function () {
  this.map = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const alreadyExists = this.map.has(key);

  if (alreadyExists) clearTimeout(this.map.get(key).timeout);

  const to = setTimeout(() => {
    this.map.set(key, { ...this.map.get(key), accessible: false });
  }, duration);

  this.map.set(key, {
    value,
    accessible: true,
    timeout: to,
  });

  return alreadyExists;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  if (this.map.has(key) && this.map.get(key).accessible)
    return this.map.get(key).value;
  else return -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  let counter = 0;

  for (value of this.map.values()) {
    if (value.accessible) counter++;
  }

  return counter;
};
