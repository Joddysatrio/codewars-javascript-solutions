const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  let perkiraan = mpg * fuelLeft
  if (perkiraan >= distanceToPump){
    return true
  } else {
    return false
  }
};
​
​