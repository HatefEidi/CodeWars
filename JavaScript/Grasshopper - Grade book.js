function getGrade (s1, s2, s3) {
    // Code here
    const totalScore= s1+ s2+s3
    let grade = totalScore/3
    
    if(90<=grade && grade<=100) {
      return 'A'
      }
    else if(80<= grade && grade<90)
      {
        return 'B'
       }
    else if(70<= grade && grade<80) {
      return 'C'
      }
    else if(60<= grade && grade<70) {
      return 'D'
      }
    else{return 'F'} 
  } 