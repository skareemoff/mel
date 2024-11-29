export const shuffle = (array) => {
    const sortedList = [...array];
    for (let i = sortedList.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [sortedList[i], sortedList[j]] = [sortedList[j], sortedList[i]];
    }
    return sortedList;
  }

