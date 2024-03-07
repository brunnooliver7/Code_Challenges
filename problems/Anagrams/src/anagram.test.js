import { expect, test } from "vitest";
import { anagram } from "./solution";

test("must evaluate anagram", () => {
  let arr1 = ["a", "ab", "abc", "de"];
  let arr2 = ["a", "ac", "def", "def"];
  let answer = [0, 1, 3, -1];

  expect(anagram(arr1, arr2)).toStrictEqual(answer);
});

test("must evaluate anagram", () => {
  let arr1 = ["abc", "def", "ghi", "jkl"];
  let arr2 = ["cba", "fed", "ihg", "lkj"];
  let answer = [0, 0, 0, 0];

  expect(anagram(arr1, arr2)).toStrictEqual(answer);
});

test("must evaluate anagram", () => {
  let arr1 = ["aaa", "bbb", "ccc", "ddd"];
  let arr2 = ["bbb", "ccc", "ddd", "aaa"];
  let answer = [3, 3, 3, 3];

  expect(anagram(arr1, arr2)).toStrictEqual(answer);
});

test("must evaluate anagram", () => {
  let arr1 = ["listen", "silent", "what"];
  let arr2 = ["enlist", "lentil", "world"];
  let answer = [0, 1, -1];

  expect(anagram(arr1, arr2)).toStrictEqual(answer);
});

test("must evaluate anagram", () => {
  let arr1 = ["abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz"];
  let arr2 = ["zyxwvutsrqponmlkjihgfedcba", "abcdefghijklmnopqrstuvwxyy"];
  let answer = [0, 1];

  expect(anagram(arr1, arr2)).toStrictEqual(answer);
});
