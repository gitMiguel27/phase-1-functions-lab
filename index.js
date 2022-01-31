// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
    //returns the number of blocks given a value
    return Math.abs(42 - pickup);
  }

  function distanceFromHqInFeet(pickup) {
    const pickupDistance = distanceFromHqInBlocks(pickup);
    return pickupDistance * 264;
  }

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    return Math.abs(destination - start) * 264;
  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const distanceFeet = distanceTravelledInFeet(start, destination);
    if (distanceFeet > 2500) {
        return 'cannot travel that far';
    } else if (distanceFeet <= 400) {
        return 0;
    } else if (distanceFeet > 400 && distanceFeet <= 2000) {
        return (distanceFeet - 400) * .02;
    } else if (distanceFeet > 2000 && distanceFeet <= 2500) {
        return 25;
    }
  }