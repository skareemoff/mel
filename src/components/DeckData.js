import AsyncStorage from '@react-native-async-storage/async-storage';

const SUFFIX_FAVOURITE = "favourite_";

export default class DeckData {
    static _instance = null;
    _questionOfTheDay = null;
    _dayOfTheQuestion = null;
    _data = require('../data/cards.json');
    _favourites = [];

    _images = {
        deckBG1: require("../assets/images/deckBG1.png"),
        deckBG2: require("../assets/images/deckBG2.png"),
        deckBG3: require("../assets/images/deckBG3.png"),
        deckBG4: require("../assets/images/deckBG4.png"),
        deckBG5: require("../assets/images/deckBG5.png"),
        deckBG6: require("../assets/images/deckBG6.png"),
        homeBG:  require("../assets/images/homeBG.png"),
        deckBGFav: require("../assets/images/deckBGFav.png")
      };

      static inst() {
        if (DeckData._instance == null) {
            DeckData._instance = new DeckData();
            DeckData._instance._loadQoD();
            DeckData._instance._loadFavourites();
        }

        return DeckData._instance;
    }

    _loadFavourites = async () => {
        try {
            try {
                const keys = await AsyncStorage.getAllKeys();
                const favourites = [];
                keys.map((item) => {
                    if(item[0].startsWith(SUFFIX_FAVOURITE)) {
                        favourites.push(item.substring(10));
                    }
                });
                this._favourites = [...favourites];
            } catch (error) {
                console.error(error)
            }
        } catch (e) {
            console.error("Failed to load Favourites: ", e)
        }
      };

      _storeValue = async (key, value) => {
        try {
          await AsyncStorage.setItem(key, value);
        } catch (e) {
        }
      };

      _removeValue = async (key) => {
        try {
          await AsyncStorage.removeItem(key);
        } catch(e) {
        }
      };

    _loadQoD() {
        if(this._verifyQoD()) {
            return this._questionOfTheDay;
        }

        try {
            const url = 'https://script.google.com/macros/s/AKfycbyGVjLmAHYviTXCulytpptgo-g9t6TbCNmEAJ4QUsDTZ28yBmkYr56mtzBuiOvvSOFD/exec?action=questionOfTheDay';
            const response = fetch(url).then((response) => response.json() ).then((response) => {
                if(response.status == 'ok') {
                    const tmpDate = new Date(response.date);
                    if(this._isToday(tmpDate)) {
                        this._dayOfTheQuestion = tmpDate;
                        this._questionOfTheDay = response.question;
                    }
                }
            });
        }
        catch(err) {
            setError(true);
        }
        return this._questionOfTheDay;
    }

    _verifyQoD= () =>  {
        if(this._questionOfTheDay != null && this._dayOfTheQuestion != null && this._isToday(this._dayOfTheQuestion)) {
            return true;
        }
        this._dayOfTheQuestion = null;
        this._questionOfTheDay = null;
        return false;
    }

    _isToday = (date) => {
        var curDate = new Date();
        return curDate.getFullYear() == date.getFullYear()
                && curDate.getMonth() == date.getMonth()
                && curDate.getDate() == date.getDate();
    }

    static addFavourite(cardID) {
        DeckData.inst()._storeValue(SUFFIX_FAVOURITE+cardID, ''+cardID);
        DeckData.inst()._favourites.push(SUFFIX_FAVOURITE+cardID);
    }

    static removeFavourite(cardID) {
        DeckData.inst()._removeValue(SUFFIX_FAVOURITE+cardID);
        DeckData.inst()._favourites = DeckData.inst()._favourites.filter(item => item != SUFFIX_FAVOURITE+cardID);
    }

    static isFavourite(cardID) {
        const isFavorite = DeckData.inst()._favourites.includes(SUFFIX_FAVOURITE+cardID);
        return isFavorite;
    }

    static gatherFavourites() {
        const favourites = [];
        DeckData.inst()._data.map((deck) => {
            deck.cards.map((card) => {
                DeckData.inst()._favourites.forEach(item => {
                    const cardID = DeckData.getDeck(item.substring(10));
                    if(card.id == cardID) {
                        const tmpCard = [...card];
                        tmpCard.deckName = deck.deckName;
                        favourites.push(tmpCard);
                    }
                });
            });
        });

        return favourites
    }

    static data() {
        return DeckData.inst()._data;
    }

    static decks() {
        return DeckData.data().decks;
    }

    static getRandomCard(deckID) {
        const cards = DeckData.getDeck(deckID).cards;
        return cards[Math.round(Math.random() * (cards.length - 1))];
    }

    static getDeck(id) {
        return DeckData.decks().filter(item => item.id == id)[0];
    }

    static getDeckImage(imageName){
        return DeckData.inst()._images[imageName];
    }

    static getQuestionOfTheDay() {
        return DeckData.inst()._questionOfTheDay;
    }
}