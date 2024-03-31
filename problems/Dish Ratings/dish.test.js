import { expect, test } from "vitest";
import { solution } from "./solution5";

test("must take the highest rate avg", () => {
  const ratings = [
    [101, 2],
    [102, 3],
    [103, 4],
    [104, 5],
  ];

  expect(solution(4, ratings)).toBe(104);
});

test("must take the highest rate avg and the minimum id", () => {
  const ratings = [
    [987654423, 4],
    [987654220, 5],
    [987654202, 4],
    [987654250, 1],
    [987654419, 5],
  ];

  expect(solution(5, ratings)).toBe(987654220);
});

test("must take the highest rate avg and the minimum id", () => {
  const ratings = [
    [512, 2],
    [123, 4],
    [987, 4],
  ];

  expect(solution(4, ratings)).toBe(123);
});

test("must take the highest rate avg and the minimum id, with id repetition", () => {
  const ratings = [
    [512, 2],
    [123, 3],
    [987, 4],
    [123, 5],
  ];

  expect(solution(4, ratings)).toBe(123);
});

test("must get the minimum id with the same avg", () => {
  const ratings = [
    [987654171, 2],
    [987654478, 2],
    [987654092, 2],
    [987654421, 2],
    [987654001, 2],
  ];

  expect(solution(5, ratings)).toBe(987654001);
});

test("one has a high value, but low avg", () => {
  // avg of 101: 2
  // avg of 102: 3
  const ratings = [
    [101, 5],
    [101, 1],
    [101, 1],
    [101, 1],
    [102, 3],
    [102, 3],
    [102, 3],
    [102, 3],
  ];

  expect(solution(8, ratings)).toBe(102);
});
