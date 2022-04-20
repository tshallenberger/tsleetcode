/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

export class TreeNode {
  public left: TreeNode | null | undefined;
  public right: TreeNode | null | undefined;
  constructor(public val: number | null) {
    this.left = null;
    this.right = null;
  }
}
// [2, 1, 3] ->
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
export var serialize = function (root: TreeNode): string {
  // TODO: encode the Tree
  // TODO: encode node values
  // TODO: choose delimiters
  // We need a Tree serializer that turns a TreeNode and its children into a string

  let result = _postOrder(root);

  return result.join(",");

  function _postOrder(root: TreeNode | null | undefined): (number | null)[] {
    if (root) {
      const left = _postOrder(root?.left);
      const right = _postOrder(root?.right);
      const current = [root.val];
      return left.concat(right).concat(current);
    } else return [];
  }
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
export var deserialize = function (data: string): TreeNode {
  const arr = data.split(",");
  const tree = new TreeNode(null);
  if (arr.length) {
    const root = _helper(arr);
    return root || tree;
  }
  return tree;

  function _helper(nums: string[]): TreeNode | null {
    if (!nums.length) {
      return null;
    }

    const val = nums.pop();
    if (val) {
      const root = new TreeNode(+val);
      root.right = _helper(nums);
      root.left = _helper(nums);
      return root;
    } else {
      return null;
    }
  }
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

 const root = new TreeNode(2);
 root.left = new TreeNode(1);
 root.right = new TreeNode(3);
 const res = deserialize(serialize(root));
 console.log(res);
