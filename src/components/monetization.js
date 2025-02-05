import { Alert } from "react-native";
import Purchases from "react-native-purchases";

const checkDecksAccessPurchased = async (setPurchaseState) => {
    try {
          await Purchases.getCustomerInfo().then(customerInfo => {
            let isPurchased = typeof customerInfo.entitlements.active['decks.all'] !== "undefined";
            console.log("UPDATING PURCHASE STATE");
            setPurchaseState(isPurchased);
            console.log("IS PURCHASED CHECKED: "+isPurchased);
        });
    } catch (e) {
        console.log(e);
    }
};

const purchaseProduct = async (setPurchaseState) => {
  try {
    await Purchases.getOfferings().then(offerings => {
        if (offerings.current !== null && offerings.current.availablePackages.length !== 0) {
          console.log("INITIATING PACKAGE PURCHASE: ", offerings, ' \n\n ', offerings.current.availablePackages[0]);
          Purchases.purchasePackage(offerings.current.availablePackages[0]).then(customerInfo => {

            console.log('PURCHASE COMPLETE:\n\n', customerInfo.entitlements, "\n\n", customerInfo.entitlements.active['decks.all']);
            let isPurchased = typeof customerInfo.entitlements.active['decks.all'] !== "undefined";
            console.log("SETTING STATE AFTER PURCHASE");
            setPurchaseState(isPurchased);
            console.log("IS PURCHASED CHECKED: "+isPurchased);
          });
          console.log("CONTINUING AFTER PURCHASE");
        }
      })
  } catch (e) {
    console.log("EXCEPTION: "+e);
    showError(e);
    if (!e.userCancelled) {
      console.log("ERROR WHILE PURCHASING", e);
      Alert.alert('Making a purchase attempt failed.\nPlease tryt again later.');
    }
    else {
      console.log("USER CANCELLED");
    }
  }
};

const restorePurchases = async (setPurchaseState) => {
  try {
    await Purchases.restorePurchases().then(offerings => {
      checkDecksAccessPurchased(setPurchaseState);
    });
  } catch (e) {

  }
};

export {
    checkDecksAccessPurchased,
    purchaseProduct,
    restorePurchases
};
