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

// Screen dimensions
export const { height, width } = Dimensions.get('window');

export const HALF_CARD_HEIGHT = 260;

export const BG_SVG_1 = "<svg width='393' height='852' viewBox='0 0 393 852' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M-363.442 909.777C-424.53 661.663 -485.718 165.434 -241.766 165.434C63.1735 165.434 277.341 879.675 38.4968 879.675C-129.444 879.675 -243.004 655.388 -112.315 417.308C18.3731 179.227 97.718 -349.038 277.978 -20.6514C458.238 307.735 277.978 778.422 277.978 471.928C277.978 165.434 384.632 -20.6514 441.714 -20.6514C498.796 -20.6514 560.385 614.229 441.714 830.417C323.043 1046.6 250.939 855.046 264.458 830.417C275.274 810.714 399.153 583.215 459.74 471.928' stroke='black' stroke-width='12' stroke-linejoin='round'/></svg>";
