class SerializeBstSolution {
  private q: (TreeNode | null)[] = [];
  private visited: string[] = [];
  constructor() { }

  serialize(root: TreeNode | null) {
    // q.push(root)
    if (root == null) {
      return "";
    }
    this.q.push(root);
    while (this.q.length) {
      let current = this.q.shift();
      let str = current == null ? "x" : current.val.toString();
      this.visited.push(str);

      // if (current)
      if (current == null)
        continue;
      if (current.left) {
        this.q.push(current.left);
      } else
        this.q.push(null);
      if (current.right) {
        this.q.push(current.right);
      } else
        this.q.push(null);
    }

    return this.visited.join(",");
  }

  deserialize(str: string): TreeNode | null {
    if (!str?.length)
      return null;
    let nodes = str.split(",");
    let q: TreeNode[] = [];

    let root = new TreeNode(parseInt(nodes[0]));
    q.push(root);
    let i = 0;
    while (q.length) {
      let node = q.shift();
      if (node) {
        const leftVal = nodes[i];
        const rightVal = nodes[i + 1];

        var left = nodes[i] == "x" || leftVal == undefined
          ? null
          : new TreeNode(parseInt(leftVal));
        var right = rightVal == "x" || rightVal == undefined
          ? null
          : new TreeNode(parseInt(rightVal));

        if (left) {
          node.left = left;
          q.push(node.left);
        }
        if (right) {
          node.right = right;
          q.push(node.right);
        }
        i += 2;
      }
    }
    return root;
  }
}
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
/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  return new SerializeBstSolution().serialize(root);
}
/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  return new SerializeBstSolution().deserialize(data);
}
const t1 = new TreeNode(1);
const t2 = new TreeNode(2);
const t3 = new TreeNode(3);
const t4 = new TreeNode(4);
t1.left = t2;
t1.right = t3;
t3.left = t4;
/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
console.log(deserialize(serialize(t1)));
