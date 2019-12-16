import { plot, Plot, stack } from "nodeplotlib";

function main() {
  const data: Plot[] = [
    {
      x: [1, 3, 4, 6, 7],
      y: [2, 4, 6, 8, 9],
      type: "scatter"
    }
  ];

  stack(data);
  stack(data);
  stack(data);
  plot();
}

main();
