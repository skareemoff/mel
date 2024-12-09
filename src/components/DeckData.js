//import AsyncStorage from '@react-native-async-storage/async-storage';

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
        homeBG:  require("../assets/images/homeBG.png")
      };

      static inst() {
        if (DeckData._instance == null) {
            DeckData._instance = new DeckData();
            DeckData._instance._loadQoD();
        }

        return DeckData._instance;
    }

    _loadFavourites = async () => {
        try {
            try {
                const keys = await AsyncStorage.getAllKeys();
                const result = await AsyncStorage.multiGet(keys);
                console.log(result);
                //return result.map(req => JSON.parse(req)).forEach(console.log);
            } catch (error) {
                console.error(error)
            }
        } catch (e) {
            console.error("Failed to load Favourites: ", e)
        }
      };

      _parseFavourites(data) {
        const favourites = [];
        this._data.map((deck) => {
            deck.cards.map((card) => {
                data.map((item) => {
                    if(card.id == item.id) {
                        const tmpCard = [...card];
                        tmpCard.deckName = deck.deckName;
                        tmpCard.deckBackground = deck.deckBackground;
                        favourites.push(tmpCard);
                    }
                });
            });
        });

        this._favourites = [...favourites];
      }

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