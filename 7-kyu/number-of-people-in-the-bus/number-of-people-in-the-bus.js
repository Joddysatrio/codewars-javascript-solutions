var number = function(busStops){
  let total = 0
  for (let [naik , turun] of busStops){
   total= total + naik - turun
  }
  return total
}
​