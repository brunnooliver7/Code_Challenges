/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    /**
     * Definition for isBadVersion()
     *
     * @param {integer} version number
     * @return {boolean} whether the version is bad
     * isBadVersion = function(version) {
     *     ...
     * };
     */

    /**
     * @param {function} isBadVersion()
     * @return {function}
     */
    var solution = function (isBadVersion) {
      /**
       * @param {integer} n Total versions
       * @return {integer} The first bad version
       */
      return function (n) {
        let i = Math.floor(n / 2);
        let l = Math.round(n / 2);

        while (l > 1) {
          l = Math.round(l / 2);
          if (isBadVersion(i)) {
            i = i - l;
          } else {
            i = i + l;
          }
        }

        if (isBadVersion(i - 1)) return i - 1;
        else if (isBadVersion(i)) return i;
        else return i + 1;
      };
    };
  };
};
