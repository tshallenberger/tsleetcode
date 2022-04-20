// Top 5 means use a HEAPQ, PriorityQueue to push scores and pop them
// in a sorted manner to get running top 5 average
export function highFive(scores: number[][]): number[][] {
  const averages: number[][] = [];

  const smap: { [key: number]: number[] } = {};
  for (let i = 0; i < scores.length; i++) {
    const studentScore = scores[i];
    const id = studentScore[0];
    const score = studentScore[1];
    if (!smap[id]) {
      smap[id] = [score];
    } else {
    }
  }

  return averages;
}
interface IPriorityQueue {
  insert(item: number): void;
  peek(): number | null;
  pop(): number | null;
  size(): number | null;
  isEmpty(): boolean;
}
class PriorityQueue implements IPriorityQueue {
  data: number[] = [];
  insert(num: number): void {
    if (this.data.length == 0) {
      this.data.push(num);
    }
    for (let i = 0; i < this.data.length; i++) {
      const n = this.data[i];
      if (i == this.data.length - 1) {
        this.data.push(i);
        return;
      }
      if (n > num) {
        this.data.splice(i, 0, num);
        return;
      }
    }
  }
  peek(): number | null {
    return this.data.length ? null : this.data[0];
  }
  pop(): number | null {
    if (this.data.length) {
      return this.data.pop() || null;
    } else return null;
  }
  size(): number | null {
    return this.data.length;
  }
  isEmpty(): boolean {
    return this.data.length == 0;
  }
}
new PriorityQueue();
