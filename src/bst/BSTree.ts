import { BTreeNode, TreeNode } from "./TreeNode";

export class BSTree {
  private _root: TreeNode = null;
  public get root(): TreeNode {
    return this._root;
  }
  public set root(v: TreeNode) {
    this._root = v;
  }

  constructor() {
    this._root = null;
  }

  public addNode(value: number): boolean {
    // Create new Node
    // Check to see if root is null
    // If root not null, traverse tree from root node until correct spot is found
    // TraverseTree:
    //  Create temp = root
    //    if newNode == temp, return; duplicate found
    //  if newNode < temp
    //    check if temp.left exists
    //      if temp.left, TraverseTree(left)
    //      else temp.left = newNode
    //  if newNode > temp
    //    check if temp.right exists
    //      if (temp.right) TraverseTree(right)
    //      else temp.right = newNode

    const newNode: TreeNode = new BTreeNode(value);
    if (!this._root) {
      this._root = newNode;
      return true;
    }
    let currentNode = this._root;
    let traversing = true;

    while (traversing) {
      if (newNode.val == currentNode.val) {
        traversing = false;
        return false;
      } else if (newNode.val < currentNode.val) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          traversing = false;
          return true;
        } else {
          currentNode = currentNode.left;
        }
      } else if (newNode.val > currentNode.val) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          traversing = false;
          return true;
        } else {
          currentNode = currentNode.right;
        }
      }
    }

    return false;
  }
  public addNode_r(value: number): boolean {
    // Create new Node
    // Check to see if root is null
    // If root not null, traverse tree from root node until correct spot is found
    // TraverseTree:
    //  Create temp = root
    //    if newNode == temp, return; duplicate found
    //  if newNode < temp
    //    check if temp.left exists
    //      if temp.left, TraverseTree(left)
    //      else temp.left = newNode
    //  if newNode > temp
    //    check if temp.right exists
    //      if (temp.right) TraverseTree(right)
    //      else temp.right = newNode

    const newNode: TreeNode = new BTreeNode(value);
    if (!this._root) {
      this._root = newNode;
      return true;
    }
    let currentNode = this._root;
    let traversing = true;

    while (traversing) {
      if (newNode.val == currentNode.val) {
        traversing = false;
        return false;
      } else if (newNode.val < currentNode.val) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          traversing = false;
          return true;
        } else {
          currentNode = currentNode.left;
        }
      } else if (newNode.val > currentNode.val) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          traversing = false;
          return true;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
    // function _traverse(newNode: BTreeNode, current: BTreeNode): boolean {
    //   if (newNode?.value == current?.value) {
    //     return false;
    //   }

    //   if (newNode.value < current.value) {
    //     if (!current.left) {
    //       current.left = newNode;
    //       return false;
    //     } else {
    //       return _traverse(newNode, current.left);
    //     }
    //   }
    //   if (newNode.value > current.value) {
    //     if (!current.right) {
    //       current.right = newNode;
    //       return false;
    //     } else {
    //       return _traverse(newNode, current.right);
    //     }
    //   }
    // }

    return false;
  }

  /**
   * Create queue to hold nodes to be visited
   * Create array to hold node values visited
   * Add root to queue
   * While queue not empty
   * Dequeue first element in queue and set to currentNode
   * Add currentNode value to visited value array
   * If currentNode has left, add to queue
   * If currentNode has right, add to queue
   */
  public bfs(): number[] {
    const q: BTreeNode[] = [];
    const visited: number[] = [];
    if (this._root) {
      q.push(this._root);
      while (q.length !== 0) {
        const current = q.shift(); // pops off beginning
        if (current) {
          visited.push(current.val);
          if (current.left) {
            q.push(current.left);
          }
          if (current.right) {
            q.push(current.right);
          }
        }
      }
    }

    return visited;
  }

  // Create a stack to hold visited nodes info
  // Create a dfsData to hold numbers info in the order of traversal
  // Add root to the stack
  // While stack not empty
  // Pop currentNode from stack
  // Add currentNode.val to dfsData
  // If currentNode.right, add right to stack
  // If currentNode.left, add left to stack
  // Once done processing all nodes, return dfsData
  public dfs_i(): number[] {
    const stack: BTreeNode[] = [];
    const visited: number[] = [];

    if (this._root) {
      stack.push(this._root);
      while (stack.length !== 0) {
        const current = stack.pop();
        if (current) {
          visited.push(current.val);
          if (current.right) stack.push(current.right);
          if (current.left) stack.push(current.left);
        }
      }
    }

    return visited;
  }

  // Create visited numbers array
  // Create current = this.root
  // Define fn _traverse taking TreeNode
  //  push current.value onto visited
  //  if current.left, traverse left
  //  if current.right, traverse right
  public dfs_r(): number[] {
    const visited: number[] = [];

    function _traverse(node: BTreeNode) {
      if (!node) {
        return;
      }
      visited.push(node.val);
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
    }
    if (this._root) _traverse(this._root);
    return visited;
  }
}
