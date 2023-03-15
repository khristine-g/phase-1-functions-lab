function distanceFromHqInBlocks(location) {
    const hq = 42; 
    return Math.abs(location - hq);
  }


  function distanceFromHqInFeet(location) {
    const blockLength = 264; 
    return distanceFromHqInBlocks(location) * blockLength;
  }

  function distanceTravelledInFeet(start, end) {
    const distanceInBlocks = Math.abs(end - start);
    const distanceInFeet = distanceInBlocks * 264;
    return distanceInFeet;
  }

  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    let fare = 0;
    if (distanceInFeet <= 400) {
      fare = 0;
    } else if (distanceInFeet <= 2000) {
      fare = (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet <= 2500) {
      fare = 25;
    } else {
      return 'cannot travel that far';
    }
    return fare;
  }