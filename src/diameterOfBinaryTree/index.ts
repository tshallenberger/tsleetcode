class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
export function diameterOfBinaryTree(root: TreeNode | null): number {
  if (!root) return 0;
  let sln = new Solution();
  sln.maxDepthOf(root);
  return sln.diameter;
}

class Solution {
  public diameter: number;
  constructor() {
    this.diameter = 0;
  }
  maxDepthOf(node: TreeNode | null): number {
    if (!node) return 0;
    let left = this.maxDepthOf(node.left);
    let right = this.maxDepthOf(node.right);
    this.diameter = Math.max(this.diameter, left + right);
    return (
      Math.max(this.maxDepthOf(node.left), this.maxDepthOf(node.right)) + 1
    );
  }
}
