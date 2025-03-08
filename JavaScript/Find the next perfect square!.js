function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    //checking if the number is a square number
    // If it is square number we return the next square number
    // If not we return -1
    
    const isSquare= Math.sqrt(sq) - Math.floor(Math.sqrt(sq))===0
    return (isSquare)? Math.pow(Math.sqrt(sq)+1, 2): -1
  }
  