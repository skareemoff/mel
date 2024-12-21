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

export const SVG_CONN = "<svg width='393' height='852' viewBox='0 0 393 852' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M-363.442 909.777C-424.53 661.663 -485.718 165.434 -241.766 165.434C63.1735 165.434 277.341 879.675 38.4968 879.675C-129.444 879.675 -243.004 655.388 -112.315 417.308C18.3731 179.227 97.718 -349.038 277.978 -20.6514C458.238 307.735 277.978 778.422 277.978 471.928C277.978 165.434 384.632 -20.6514 441.714 -20.6514C498.796 -20.6514 560.385 614.229 441.714 830.417C323.043 1046.6 250.939 855.046 264.458 830.417C275.274 810.714 399.153 583.215 459.74 471.928' stroke='black' stroke-width='12' stroke-linejoin='round'/></svg>";
export const SVG_TINY_TALKS = "<svg width='353' height='260' viewBox='0 0 353 260' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M10.3691 294.539C10.3691 243.031 121.538 90.2975 158.5 115.5C183.963 132.862 87.5 247 148.5 258C209.5 269 159.5 157.5 188.5 138.5C231.093 110.594 251 368.5 365.471 279.578C463.615 203.339 231.515 212.059 231.515 126.698C231.515 76.4471 346.722 50.5884 382.5 38M306 -10.5C289.915 -10.8963 230.278 86.5001 220 86.5001C199.5 86.5001 266 -11.7728 266 -37.9999C266 -56.7305 34.8747 -56.9856 40.5 -37.9999C44.4999 -24.5 126 16.6682 126 69.5001C126 135.611 -39.0002 106 -44.026 118.871C-74.6074 197.186 35.777 133.534 44.4999 148C52.0962 160.598 9.34676 204.476 -20.8413 204.476' stroke='white' stroke-width='12'/></svg>";
export const SVG_EOY = "<svg width='353' height='260' viewBox='0 0 353 260' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M25.8503 160.359L133.296 62.9146L228.226 137.845L312.276 53.7954L369.31 110.83L300.644 179.496H236.481V230.151H177.946V160.359H110.405L75.1343 195.63H3.84159V110.83L86.0153 35.6558H223.722V89.8169L312.276 1.26304L382.443 71.43L443.23 132.216L351.674 223.772H281.507V282.682H153.931V195.63L75.1343 274.427V212.891H-17.1719V42.9146H39.114V-5.49011H138.924V13.5207H240.234V-5.49011' stroke='black' stroke-width='12' stroke-linejoin='round'/></svg>";
