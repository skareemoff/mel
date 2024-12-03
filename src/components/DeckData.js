export default class DeckData {
    static _instance = null;
    _decks = [];

    _images = {
        deckBG1: require("../assets/images/deckBG1.png"),
        deckBG2: require("../assets/images/deckBG2.png"),
        deckBG3: require("../assets/images/deckBG3.png"),
        deckBG4: require("../assets/images/deckBG4.png"),
        deckBG5: require("../assets/images/deckBG5.png"),
        homeBG:  require("../assets/images/homeBG.png")
      };

    /**
     * @returns {CommonDataManager}
     */
    static inst() {
        if (DeckData._instance == null) {
            DeckData._instance = new DeckData();
            this._instance._decks = require('../data/cards.json').decks;
        }

        return this._instance;
    }

    data() {
        return this._decks;
    }

    getDeck(id) {
        return this._decks.filter(item => item.id == id)[0];
    }

    getDeckImage(imageName){
        return this._images[imageName];
    }
}