import _, { fill, reject } from "lodash";
import "./style.css";
import printMe from "./print.js";

class cell {
  constructor(x, y, dis) {
    this.x = x;
    this.y = y;
    this.dis = dis;
  }
}

function isInside(x, y) {
  if (x >= 0 && x <= 8 && y >= 0 && y <= 8) return true;
  return false;
}

function minStepToTarget(knightPos, targetPos) {
  let dx = [-2, -1, 1, 2, -2, -1, 1, 2];
  let dy = [-1, -2, -2, -1, 1, 2, 2, 1];

  let q = [];

  q.push(new cell(knightPos[0], knightPos[1], 0));

  let t;
  let x, y;
  let visit = new Array(9);

  for (let i = 0; i <= 8; i++) {
    visit[i] = new Array(8 + 1);
    for (let j = 1; j <= 8; j++) visit[i][j] = false;
  }
  visit[knightPos[0]][knightPos[1]] = true;

  while (q.length != 0) {
    t = q.shift();
    if (t.x == targetPos[0] && t.y == targetPos[1]) return t.dis;
    for (let i = 0; i < 8; i++) {
      x = t.x + dx[i];
      y = t.y + dy[i];
      if (isInside(x, y) && !visit[x][y]) {
        visit[x][y] = true;
        q.push(new cell(x, y, t.dis + 1));
      }
    }
  }
  return Number.MAX_VALUE;
}

minStepToTarget([0, 0], [6, 6]);
console.log(minStepToTarget([0, 0], [6, 6]));
