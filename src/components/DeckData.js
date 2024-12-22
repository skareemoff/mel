import AsyncStorage from '@react-native-async-storage/async-storage';

const _SUFFIX_FAVOURITE = "favourite_";
export const ID_FAVOURITES = 'favourites';

export default class DeckData {
    static _instance = null;
    _questionOfTheDay = null;
    _dayOfTheQuestion = null;
    _data = require('../data/cards.json');
    _favourites = [];
    _deckNames = {};

    static inst() {
        if (DeckData._instance == null) {
            DeckData._instance = new DeckData();
            DeckData._instance._loadQoD();
            DeckData._instance._loadFavourites();
            DeckData.decks().map((deck) => {
                DeckData._instance._deckNames[deck.id] = deck.deckName;
            });
        }

        return DeckData._instance;
    }

    _loadFavourites = async () => {
        try {
            try {
                const keys = await AsyncStorage.getAllKeys();
                const favourites = [];
                keys.forEach((item) => {
                    if(item.startsWith(_SUFFIX_FAVOURITE)) {
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
        if(this._questionOfTheDay != null &&
            this._dayOfTheQuestion != null &&
            this._isToday(this._dayOfTheQuestion)) {
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

    static revealQoD() {
        //TODO: this requres creation of profiles, logins etc. to uniquely count users, who revealed thr QoD
    }

    static addFavourite(cardID) {
        DeckData.inst()._storeValue(_SUFFIX_FAVOURITE+cardID, ''+cardID);
        DeckData.inst()._favourites.push(''+cardID);
    }

    static removeFavourite(cardID) {
        DeckData.inst()._favourites = DeckData.inst()._favourites.filter(item => item != ''+cardID);
        DeckData.inst()._removeValue(_SUFFIX_FAVOURITE+cardID);
    }

    static isFavourite(cardID) {
        return DeckData.inst()._favourites.includes(''+cardID);
    }

    static gatherFavourites() {
        const favourites = [];
        DeckData.decks().map((deck) => {
            deck.cards.map((card) => {
                DeckData.inst()._favourites.forEach(item => {
                    if(card.id == item) {
                        favourites.push(card);
                    }
                });
            });
        });
        return favourites;
    }

    static getQoDTTLHours() {
        if(DeckData.inst()._dayOfTheQuestion == null) {
            return (24 - new Date().getHours());
        }
        return (24 - (new Date().getHours() -DeckData.inst()._dayOfTheQuestion.getHours()));
    }

    static getQoDRevealedCount() {
        return 1;
    }

    static getFavDeck() {
        const favDeck = DeckData.data().favourites;
        favDeck.cards = DeckData.gatherFavourites();
        favDeck.subText = "You have " + (favDeck.cards.length > 0 ? favDeck.cards.length : "no") + " favourite questions";
        return favDeck;
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
        if(id == ID_FAVOURITES) {
            return DeckData.getFavDeck();
        }
        return DeckData.decks().filter(item => item.id == id)[0];
    }

    static getDeckName(deckID) {
        if(deckID == ID_FAVOURITES) {
            return 'Favourites';
        }
        return DeckData.inst()._deckNames[deckID];
    }

    static getDeckImageSvg(imageName){
        return DeckData.data().svgLibrary[imageName];
    }

    static getQuestionOfTheDay() {
        return DeckData.inst()._questionOfTheDay;
    }
}