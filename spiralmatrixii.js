//Objective is to build a spiral matrix of size 'n' columns and rows

let n = 4


//O(n^2) solution where n is the number of rows/cols of the matrix
let matrix = new Array(n).fill(null).map(() => new Array(n).fill(null))
    
//Right, Down, Left, Up
let directions = [[0,1], [1,0], [0,-1], [-1,0]]

//This represents the horizontal and vertical number of elements left to fill out
//The horizontal direction starts with 'n' elements and the vertical starts with 'n - 1' elements
let movements = [n, n - 1]

let num = 1
let currDir = 0

//Since we're moving in the right direction first,
//we start 'y' at -1
let [x,y] = [0,-1]

//An even direction means we're going horizontally,
//an odd direction means we're going vertically
while (movements[currDir % 2] > 0) {
    
    //Fill up as much as you can in that direction
    for (let i = 0; i < movements[currDir % 2]; i++) {
        x += directions[currDir][0]
        y += directions[currDir][1]
        matrix[x][y] = num++
    }
    
    //Decrement the amount left for that direction
    movements[currDir % 2]--
    
    //Go to the next direction
    currDir = (currDir + 1) % 4
}

return matrix