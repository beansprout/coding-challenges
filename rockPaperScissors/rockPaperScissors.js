/*
 * * Write a function that generates every sequence of throws a single
 * * player could throw over a three-round game of rock-paper-scissors.
 * *
 * * Your output should look something like:
 * *   [["rock", "rock", "rock"],
 * *    ["rock", "rock", "paper"],
 * *    ["rock", "rock", "scissor"],
 * *    ["rock", "paper", "rock"],
 *              ...etc...
 *                   */

const rockPaperScissors = () => {
	let arr = [];
	const options = ["rock", "paper"];
	let prefix = options[0];
	arr.push([arr[0], arr[0]]);
	return arr;
};

rockPaperScissors();
console.log('rockPaperScissors();: ', rockPaperScissors());

