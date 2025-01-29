import Purchases from "react-native-purchases";

const isDecksAccessPurchased = async () => {
    try {
        const customerInfo = await Purchases.getCustomerInfo();
        console.log("CUSTOMER INFO: ", customerInfo);
        let isPurchased = typeof customerInfo.entitlements.active['product.decks.all'] !== "undefined";
        console.log("IS PURCHASED: "+isPurchased);
        return isPurchased;
    } catch (e) {
        console.log(e);
    }
    return false;
};

const purchaseProduct = async () => {
    try {
        const { customerInfo } = await Purchases.purchasePackage('product.decks.all');
        return isDecksAccessPurchased();
      } catch (e) {
        if (!e.userCancelled) {
          console.log(e);
        }
      }
    return false;
};


export {
    isDecksAccessPurchased,
    purchaseProduct
};
