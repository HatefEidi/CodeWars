function buildFun(N){
  var res = [];
  for (let i = 0; i < N; i++) {
    res.push(function() {
      return i;
    });
  }
  return res;
}