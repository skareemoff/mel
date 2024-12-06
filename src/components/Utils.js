import { Dimensions } from 'react-native';

export const shuffle = (array) => {
  const sortedList = [...array];
  for (let i = sortedList.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [sortedList[i], sortedList[j]] = [sortedList[j], sortedList[i]];
  }
  return sortedList;
}

export const getAllFiles = async (folder) => {
  const reader = RNFS.readDirAssets(folder);
  const files = reader.filter((item) => item.isFile()).map((file) => file.name);
  return [...files];
};

// Screen dimensions
export const { height, width } = Dimensions.get('window');

// Card dimensions
export const FULL_CARD_HEIGHT = height * 0.7;
export const HALF_CARD_HEIGHT = height * 0.25;
export const BOTTOM_APPBAR_HEIGHT = 160;