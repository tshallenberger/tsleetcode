import { rob } from "./houseRobber/rob";
const nums = [1, 2, 3, 1]; // 4
const alt = [2, 7, 9, 3, 1]; // 12, 2 + 9 + 1
const alt2 = [2, 1, 1, 2];
console.log(rob(nums)); // should equal 4, sinze 1 + 3 = 4
console.log(rob(alt));
console.log(rob(alt2));
