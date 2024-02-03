function distanceFromHqInBlocks(someValue) {
    return Math.abs(42 - someValue);
  }

  function distanceFromHqInFeet(someValue) {
    const blocksTravelled = distanceFromHqInBlocks(someValue);
    return blocksTravelled * 264;
  }

  function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(destination - start);
    const feetTravelled = blocksTravelled * 264;
    return feetTravelled;
  }

  function calculatesFarePrice(start, destination) {
    const feetTravelled = distanceTravelledInFeet(start, destination);
  
    if (feetTravelled === 400) {
      return 0;
    } else if (feetTravelled > 400 && feetTravelled <= 2000) {
      return (feetTravelled - 400) * 0.02;
    } else if (feetTravelled > 2000 && feetTravelled <= 2500) {
      return 25;
    } else if (feetTravelled > 2500) {
      return 'cannot travel that far';
    }
  }