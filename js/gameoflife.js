function seed() {
  console.log('Hello World');
  return Array.from(arguments);}

function same([x, y], [j, k]) {let a=JSON.stringify(arguments[0]); let b=JSON.stringify(arguments[1]); return (a===b);}

// The game state to search for `cell` is passed as the `this` value of the function.
function contains(cell) {
  for(let i=0; i<this.length; i++){
  if (same(this[i], cell)) return true;
  }
};

const printCell = (cell, state) => {if (contains.call(state, cell)){return '\u25A3'}; return '\u25A2';};

const corners = (state = []) => {
  if (state.length==0){ 
    return {topRight:[0,0], bottomLeft:[0,0]};
  }
  else{
    let maxX = state[0][0];
    let maxY = state[0][1];
    let minX = state[0][0];
    let minY = state[0][0];

    for (var i=0; i<state.length; ++i){
      if (state[i][0] > maxX || state[i][1] > maxY){ 
        maxX = state[i][0];
        maxY = state[i][1];
      }
      if (state[i][0] < minX || state[i][1] < minY){
        minX = state[i][0];
        minY = state[i][1];
      }
    }
    return {topRight:[maxX,maxY],bottomLeft:[minX,minY]}
  }
};

const printCells = (state) => {};

const getNeighborsOf = ([x, y]) => {};

const getLivingNeighbors = (cell, state) => {};

const willBeAlive = (cell, state) => {};

const calculateNext = (state) => {};

const iterate = (state, iterations) => {};

const main = (pattern, iterations) => {};

const startPatterns = {
    rpentomino: [
      [3, 2],
      [2, 3],
      [3, 3],
      [3, 4],
      [4, 4]
    ],
    glider: [
      [-2, -2],
      [-1, -2],
      [-2, -1],
      [-1, -1],
      [1, 1],
      [2, 1],
      [3, 1],
      [3, 2],
      [2, 3]
    ],
    square: [
      [1, 1],
      [2, 1],
      [1, 2],
      [2, 2]
    ]
  };
  
  const [pattern, iterations] = process.argv.slice(2);
  const runAsScript = require.main === module;
  
  if (runAsScript) {
    if (startPatterns[pattern] && !isNaN(parseInt(iterations))) {
      main(pattern, parseInt(iterations));
    } else {
      console.log("Usage: node js/gameoflife.js rpentomino 50");
    }
  }
  
  exports.seed = seed;
  exports.same = same;
  exports.contains = contains;
  exports.getNeighborsOf = getNeighborsOf;
  exports.getLivingNeighbors = getLivingNeighbors;
  exports.willBeAlive = willBeAlive;
  exports.corners = corners;
  exports.calculateNext = calculateNext;
  exports.printCell = printCell;
  exports.printCells = printCells;
  exports.startPatterns = startPatterns;
  exports.iterate = iterate;
  exports.main = main;