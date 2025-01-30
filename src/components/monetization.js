import { Alert } from "react-native";
import Purchases from "react-native-purchases";

const checkDecksAccessPurchased = async (setPurchaseState) => {
    try {
          await Purchases.getCustomerInfo().then(customerInfo => {
            console.log("CUSTOMER INFO: ", customerInfo);
            let isPurchased = typeof customerInfo.entitlements.active['decks.all'] !== "undefined";
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
          console.log("INITIATING PACKAGE PURCHASE: ", offerings)
          Purchases.purchasePackage(offerings.current.availablePackages[0]).then(customerInfo => {
            console.log("CUSTOMER INFO: ", customerInfo);
            let isPurchased = typeof customerInfo.entitlements.active['decks.all'] !== "undefined";
            setPurchaseState(isPurchased);
            console.log("IS PURCHASED CHECKED: "+isPurchased);
          });
        }
      })
  } catch (e) {
    if (!e.userCancelled) {
      console.log("ERROR WHILE PURCHASING", e);
      Alert.alert('Making a purchase is not available at this moment.\nPlease tryt again later.');
    }
    else {
      console.log("USER CANCELLED");
    }
  }
};

export {
    checkDecksAccessPurchased,
    purchaseProduct
};
