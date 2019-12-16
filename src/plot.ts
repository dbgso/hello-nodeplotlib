import { Plot, stack, plot } from "nodeplotlib";
function scatter3d() {
  const trace: Plot = {
    x: [9, 8, 5, 1],
    y: [1, 2, 4, 8],
    z: [11, 8, 15, 3],
    type: "scatter3d"
  };
  plot([trace]);
}

function line() {
  const trace1: Plot = { x: [1, 2], y: [1, 2], type: "scatter" };
  const trace2: Plot = { x: [3, 4], y: [9, 16], type: "scatter" };
  plot([trace1, trace2]);
}

function main() {
  scatter3d();
  line();
}
main();
