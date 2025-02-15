import { Alert } from "react-native";
import Purchases from "react-native-purchases";

const checkDecksAccessPurchased = async (setPurchaseState) => {
    try {
          await Purchases.getCustomerInfo().then(customerInfo => {
            let isPurchased = typeof customerInfo.entitlements.active['decks.all'] !== "undefined";
            setPurchaseState(isPurchased);
        });
    } catch (e) {
        console.log(e);
    }
};

const purchaseProduct = async (setPurchaseState) => {
  try {
    await Purchases.getOfferings().then(offerings => {
        if (offerings.current !== null && offerings.current.availablePackages.length !== 0) {
          Purchases.purchasePackage(offerings.current.availablePackages[0]).then(customerInfo => {

            let isPurchased = typeof customerInfo.entitlements.active['decks.all'] !== "undefined";
            setPurchaseState(isPurchased);
          });
        }
      })
  } catch (e) {
    if (!e.userCancelled) {
      showError(e);
    }
    else {
    }
  }
};

const restorePurchases = async (setPurchaseState) => {
  try {
    await Purchases.restorePurchases().then(offerings => {
      checkDecksAccessPurchased(setPurchaseState);
      Alert.alert('Your purchases have been successfully restored');
    });
  } catch (e) {
    if (!e.userCancelled) {
      showError(e);
    }
  }
};

export {
    checkDecksAccessPurchased,
    purchaseProduct,
    restorePurchases
};
