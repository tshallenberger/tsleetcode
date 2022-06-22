/**
 * Input: root = [1,2,3,4,5]
 * Output: 3
 * Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
 *
 * [2,3,null,1]
 * output: 2
 */
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
/**
 *
 * 1: left: 0, right: 0, return 1
 * 3: left: 1, right: 0, return 2
 * 2: left: 2, right: 0, return 3
 *
 */
let vals: { [map: string]: number } = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
  IV: 5,
  IX: 9,
  XL: 50,
  XC: 90,
  CD: 500,
  CM: 900,
};

function diameterOfBinaryTree(root: TreeNode | null): number {
  if (!root) return 0;
  let sln = new Sln();
  sln.maxDepthOf(root);
  return sln.diam;
}

class Sln {
  constructor(public diam: number = 0) {}
  maxDepthOf(node: TreeNode | null): number {
    if (!node) return 0;
    let left = this.maxDepthOf(node.left);
    let right = this.maxDepthOf(node.right);
    this.diam = Math.max(this.diam, left + right);

    return Math.max(left, right) + 1;
  }
}
