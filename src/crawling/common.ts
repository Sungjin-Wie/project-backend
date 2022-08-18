export const checkIfItsRecentlyAdded = (
  hotDealArray: any[],
  newHotDeal: any,
) => {
  let isAddedAlready = false;
  let isMutated = false;
  hotDealArray.map((hotDeal: any) => {
    if (hotDeal.link == newHotDeal.link || hotDeal.name == newHotDeal.name) {
      isAddedAlready = true;
    }
  });
  if (!isAddedAlready) {
    isMutated = true;
    hotDealArray.unshift(newHotDeal);
    if (hotDealArray.length > 10) {
      hotDealArray.pop();
    }
  }
  return [hotDealArray, isMutated];
};
