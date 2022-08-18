export const checkIfItsRecentlyAdded = (hotDealArray: any, newHotDeal: any) => {
  let isAddedAlready = false;
  let isMutated = false;
  hotDealArray.map((hotDeal: any) => {
    if (hotDeal.link == newHotDeal.link || hotDeal.name == newHotDeal.name) {
      isAddedAlready = true;
    }
  });
  if (!isAddedAlready) {
    isMutated = true;
    hotDealArray.push(newHotDeal);
    if (hotDealArray.length > 3) {
      hotDealArray.shift();
    }
  }
  return [hotDealArray, isMutated];
};
