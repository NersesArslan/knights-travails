import _, { fill, reject } from "lodash";
import "./style.css";
import printMe from "./print.js";
import love from "./test.js";

class Cell {
  constructor(x, y, dis) {
    this.x = x;
    this.y = y;
    this.dis = dis;
  }
}

function isInside(x, y, N) {
  if (x >= 1 && x <= N && y >= 1 && y <= N) return true;
  return false;
}

function knightMoves(start, end, N) {
  let dx = [-2, -1, 1, 2, -2, -1, 1, 2];
  let dy = [-1, -2, -2, -1, 1, 2, 2, 1];

  let q = [];

  q.push(new Cell(start[0], start[1], 0));

  let t;
  let x, y;
  let visit = new Array(N + 1);

  for (let i = 1; i <= N; i++) {
    visit[i] = new Array(N + 1);
    for (let j = 1; j <= N; j++) visit[i][j] = false;
  }

  visit[start[0]][start[1]] = true;
}
