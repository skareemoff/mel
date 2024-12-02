export default class DeckData {
    static _instance = null;
    _decks = [];

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
}