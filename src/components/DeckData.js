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

    _images = {
        deckBG1: require("../assets/images/deckBG1.png"),
        deckBG2: require("../assets/images/deckBG2.png"),
        deckBG3: require("../assets/images/deckBG3.png"),
        deckBG4: require("../assets/images/deckBG4.png"),
        deckBG5: require("../assets/images/deckBG5.png"),
        deckBG6: require("../assets/images/deckBG6.png"),
        homeBG:  require("../assets/images/homeBG.png"),
        deckBGFav: require("../assets/images/deckBGFav.png"),
      };

    static _svgImages = {
        SVG_CONN: "<svg width='393' height='852' viewBox='0 0 393 852' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M-363.442 909.777C-424.53 661.663 -485.718 165.434 -241.766 165.434C63.1735 165.434 277.341 879.675 38.4968 879.675C-129.444 879.675 -243.004 655.388 -112.315 417.308C18.3731 179.227 97.718 -349.038 277.978 -20.6514C458.238 307.735 277.978 778.422 277.978 471.928C277.978 165.434 384.632 -20.6514 441.714 -20.6514C498.796 -20.6514 560.385 614.229 441.714 830.417C323.043 1046.6 250.939 855.046 264.458 830.417C275.274 810.714 399.153 583.215 459.74 471.928' stroke='black' stroke-width='12' stroke-linejoin='round'/></svg>",
        SVG_TINY_TALKS: "<svg width='353' height='260' viewBox='0 0 353 260' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M10.3691 294.539C10.3691 243.031 121.538 90.2975 158.5 115.5C183.963 132.862 87.5 247 148.5 258C209.5 269 159.5 157.5 188.5 138.5C231.093 110.594 251 368.5 365.471 279.578C463.615 203.339 231.515 212.059 231.515 126.698C231.515 76.4471 346.722 50.5884 382.5 38M306 -10.5C289.915 -10.8963 230.278 86.5001 220 86.5001C199.5 86.5001 266 -11.7728 266 -37.9999C266 -56.7305 34.8747 -56.9856 40.5 -37.9999C44.4999 -24.5 126 16.6682 126 69.5001C126 135.611 -39.0002 106 -44.026 118.871C-74.6074 197.186 35.777 133.534 44.4999 148C52.0962 160.598 9.34676 204.476 -20.8413 204.476' stroke='white' stroke-width='12'/></svg>",
        SVG_EOY: "<svg width='353' height='260' viewBox='0 0 353 260' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M25.8503 160.359L133.296 62.9146L228.226 137.845L312.276 53.7954L369.31 110.83L300.644 179.496H236.481V230.151H177.946V160.359H110.405L75.1343 195.63H3.84159V110.83L86.0153 35.6558H223.722V89.8169L312.276 1.26304L382.443 71.43L443.23 132.216L351.674 223.772H281.507V282.682H153.931V195.63L75.1343 274.427V212.891H-17.1719V42.9146H39.114V-5.49011H138.924V13.5207H240.234V-5.49011' stroke='black' stroke-width='12' stroke-linejoin='round'/></svg>",
    };

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

    static getDeckImage(imageName){
        return DeckData.inst()._images[imageName];
    }

    static getDeckImageSvg(imageName){
        return DeckData._svgImages[imageName];
    }

    static getQuestionOfTheDay() {
        return DeckData.inst()._questionOfTheDay;
    }
}