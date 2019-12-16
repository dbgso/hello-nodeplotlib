import { Plot, stack, plot } from "nodeplotlib";
function main() {
  const trace1: Plot = { x: [1, 2], y: [1, 2], type: "scatter" };
  const trace2: Plot = { x: [3, 4], y: [9, 16], type: "scatter" };
  stack([trace1, trace2]);
  stack([{ x: [1, 2], y: [1, 2], type: "bar" }]);
  stack([
    { x: [9, 8, 5, 1], y: [1, 2, 4, 8], z: [11, 8, 15, 3], type: "scatter3d" }
  ]);
  stack([
    {
      colorscale: "Viridis",
      z: [
        [3, 5, 7, 9],
        [21, 13, 8, 5]
      ]
    }
  ]);
  plot();
}
main();
