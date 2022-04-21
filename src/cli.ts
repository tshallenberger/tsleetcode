class MovingAverage {
  private _q: number[];
  private _size: number;
  private _currentSum: number;
  constructor(size: number) {
    this._size = size;
    this._q = [];
    this._currentSum = 0;
  }

  next(val: number): number {
    this._q.push(val);
    this._currentSum += val;
    if (this._q.length > this._size) {
      let sub = this._q.shift();
      if (sub) this._currentSum -= sub;
    }
    const size = this._q.length < this._size ? this._q.length : this._size;
    return this._currentSum / size;
  }
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
let movingAverage: MovingAverage = new MovingAverage(3);
console.log(movingAverage.next(1)); // return 1.0 = 1 / 1
console.log(movingAverage.next(10)); // return 5.5 = (1 + 10) / 2
console.log(movingAverage.next(3)); // return 4.66667 = (1 + 10 + 3) / 3
console.log(movingAverage.next(5)); // return 6.0 = (10 + 3 + 5) / 3
