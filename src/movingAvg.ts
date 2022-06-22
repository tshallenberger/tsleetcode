// 3
// 1, 10, 3, 5
// 1, 5.5, 4.666, 6

class MovingAverage {
  constructor(
    private size: number = 0,
    private q: number[] = [],
    private sum = 0
  ) {}

  next(val: number): number {
    this.q.push(val);
    this.sum += val;
    if (this.q.length > this.size) {
      let sub = this.q.shift();
      if (sub) {
        this.sum -= sub;
      }
    }
    const size = this.q.length < this.size ? this.q.length : this.size;
    return this.sum / size;
  }
}
