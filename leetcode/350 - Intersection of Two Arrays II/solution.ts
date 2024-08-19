function intersect(nums1: number[], nums2: number[]): number[] {
  const map1 = new Map();
  for (const n of nums1) {
    const freq = (map1.has(n) ? map1.get(n) : 0) + 1;
    map1.set(n, freq);
  }

  const map2 = new Map();
  for (const n of nums2) {
    const freq = (map2.has(n) ? map2.get(n) : 0) + 1;
    map2.set(n, freq);
  }

  let res = [];

  map1.forEach((value, key, map) => {
    if (map2.has(key)) {
      const f1 = value;
      const f2 = map2.get(key);
      const minor = Math.min(f1, f2);

      for (let i = 0; i < minor; i++) {
        res.push(key);
      }
    }
  });

  return res;
}
