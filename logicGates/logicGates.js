/*
 * For this coding challenge you will be recreating low level logic gates.
 * You will first create the NAND function and then you will create
 * NOT, OR, AND, and XOR all using the NAND function that you created.
 * Implement NAND however you would like and then use NAND to implement the
 * other logic gates.
 * See the link below for the truth tables for these logic gates.
 * https://en.wikipedia.org/wiki/NAND_logic#NAND
 * All functions should return a 1 for true and a 0 for false.
 */

// x and y are inputs
// result of each function is the output
// i.e. if x is 0 and y is 0 output is...

// means not-and so its an inverted and gate
const NAND = (x, y) => {
  if (x === 0 && y == 0) return 1;
  if (x === 0 && y == 1) return 1;
  if (x === 1 && y == 0) return 1;
  if (x === 1 && y == 1) return 0;
};

const NOT = (n) => {
	return n === 1 ? 1 : 0;
  // Do not use !
};

// And is NAND inverted
const AND = (x, y) => {
	// Do not use &&, ||, or !
	// You can use any of the functions that you have already written
  if (NAND(x, y) === 0) {
    return 1;
  }
};

const OR = (x, y) => {
	// Do not use ||, &&, or !
	// You can use any of the functions that you have already written
  //truth table
  //
  const a = 1;
  const b = 1;
  if (NAND(x, y) === 1) {
    // x = 0 and y = 0
    return 0;
  }
  if (NAND(1, x) === 0) {

  }

};

const XOR = (x, y) => {
	// Do not use ||, &&, or !
	// You can use any of the functions that you have already written
};

NOT (A) = NAND (A,A)

A OR B = NAND (NAND (A, A), NAND(B, B))

