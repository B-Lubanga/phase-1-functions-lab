// Code your solution in this file

function distanceFromHqInBlocks(pickuplocation) {
  const scuberHeadquarters = 42;
  let distanceFromHq = pickuplocation - scuberHeadquarters;
  return Math.abs(distanceFromHq);
}

function distanceFromHqInFeet(pickuplocation) {
  const lengthofblockInFeet = 264;
  let distInFeet = distanceFromHqInBlocks(pickuplocation) * lengthofblockInFeet;
  return distInFeet;
}

function distanceTravelledInFeet(start, destination) {
  //returns the number of feet traveled
  let distTraveled = Math.abs(start - destination) * 264;
  return distTraveled;
}

function calculatesFarePrice(start, destination) {
  //returns the fare for the customer
  const dist = distanceTravelledInFeet(start, destination);
  if (dist < 400) {
    return 0;
  } else if (dist < 2000) {
    let cost = Math.abs(0.02 * (dist - 400));
    return cost;
  } else if (dist < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
