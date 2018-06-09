const { performance } = require("perf_hooks");

//setup

let iterations = 1e7;
const a = 1;
const b = 2;

const add = (x, y) => x + y;

performance.mark("start");

while (iterations--) {
  add(a, b);
}

performance.mark("end");
performance.measure("My Benchmark", "start", "end");
const [measure] = performance.getEntriesByName("My Benchmark");
console.log(measure);
