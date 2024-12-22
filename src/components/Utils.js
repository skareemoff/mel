import { Dimensions } from 'react-native';

export const shuffle = (array) => {
  const sortedList = [...array];
  for (let i = sortedList.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [sortedList[i], sortedList[j]] = [sortedList[j], sortedList[i]];
  }
  return sortedList;
}

// Make sure the first card is not a special card
export const specialShuffle = (array) => {
  var tmpArray = array;
  do {
    tmpArray = shuffle(tmpArray);
  } while(tmpArray.length > 0 && tmpArray[0].type == 'special');
  return tmpArray;
};

export const getAllFiles = async (folder) => {
  const reader = RNFS.readDirAssets(folder);
  const files = reader.filter((item) => item.isFile()).map((file) => file.name);
  return [...files];
};

export const calculateCardHeight = (cardData) => {
  return (typeof(cardData.height) !== 'undefined' && cardData.height != null)
    ? (cardData.height == 'full' ? 'full' : 'half')
    : ((cardData.type == 'card') ? 'full' : 'half');
}
