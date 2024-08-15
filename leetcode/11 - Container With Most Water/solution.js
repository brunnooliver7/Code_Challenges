function maxAreaBrutalForce(height) {
  let maxArea = 0;

  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const minHeight = Math.min(height[i], height[j]);
      const area = minHeight * (j - i);
      maxArea = Math.max(maxArea, area);
    }
  }

  return maxArea;
}

function maxAreaOptimized(height) {
  let p1 = 0;
  let p2 = height.length - 1;
  let area = calculateArea(height, p1, p2);

  while (p1 < p2) {
    const min = Math.min(height[p1], height[p2]);

    if (min === height[p1]) {
      p1++;
    } else if (min === height[p2]) {
      p2--;
    }

    area = Math.max(area, calculateArea(height, p1, p2));
  }

  return area;
}

function calculateArea(height, p1, p2) {
  return Math.min(height[p1], height[p2]) * (p2 - p1);
}

const t1B = maxAreaBrutalForce([1, 8, 6, 2, 5, 4, 8, 3, 7]);
const t1O = maxAreaOptimized([1, 8, 6, 2, 5, 4, 8, 3, 7]);
console.log(t1B, t1O);

const t2B = maxAreaBrutalForce([1, 1]);
const t2O = maxAreaOptimized([1, 1]);
console.log(t2B, t2O);
