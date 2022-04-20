export class BTreeNode {
  private _value: number;
  public get val(): number {
    return this._value;
  }
  public set val(value: number) {
    this._value = value;
  }

  private _left: TreeNode;
  public get left(): TreeNode {
    return this._left;
  }
  public set left(value: TreeNode) {
    this._left = value;
  }
  private _right: TreeNode;
  public get right(): TreeNode {
    return this._right;
  }
  public set right(value: TreeNode) {
    this._right = value;
  }
  constructor(v: number) {
    this._value = v;
    this._left = null;
    this._right = null;
  }
}

export type TreeNode = BTreeNode | null;
