import { Dimensions } from 'react-native';
export const shuffle = (array) => {
    const sortedList = [...array];
    for (let i = sortedList.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [sortedList[i], sortedList[j]] = [sortedList[j], sortedList[i]];
    }
    return sortedList;
  }

// Screen dimensions
export const { height, width } = Dimensions.get('window');

// Card dimensions
export const FULL_CARD_HEIGHT = height * 0.7;
export const HALF_CARD_HEIGHT = height * 0.25;
