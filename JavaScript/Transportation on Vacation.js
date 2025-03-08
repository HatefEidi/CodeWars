function rentalCarCost(d) {
    // Your solution here
    //Conditions for each length of days
    
    const dailyRent =40
    if (d>=7){
      return d * dailyRent - 50
    }
    else if(d>=3 && d<7){
      return d * dailyRent - 20;
    }
    else{
      return d * dailyRent;
    }
    
  }