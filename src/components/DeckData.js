import { localStorage } from "./storage";
import { getUserID } from './authentication';
import { ACTION_URL } from './Utils'

const _SUFFIX_FAVOURITE = "FAV_";
export const ID_FAVOURITES = 'favourites';

export class DeckData {

    constructor() {
        this._questionOfTheDay = null;
        this._dayOfTheQuestion = null;
        this._revealed = 0;
        this._userData = {state: 'unknown'};
        this._rawData = require('../data/cards.json');
        this._favourites = [];
        this._deckNames = {};
        this._storage = localStorage;
        this._decks = [];

        this._decks = this.doFilter([]); // default filter of data

        this.loadQoD();
        this.loadFavourites();
        this.decks().map((deck) => {
            this._deckNames[deck.id] = deck.deckName;
        });
        return this;
    }

    loadFavourites(){
        const keys = this._storage.getAllKeys();
        const favourites = [];
        keys.forEach((key) => {
            if(key.startsWith(_SUFFIX_FAVOURITE)) {
                favourites.push(key.substring(_SUFFIX_FAVOURITE.length));
            }
        });
        this._favourites = [...favourites];
      };

    loadQoD() {
        if(this.verifyQoD()) {
            return this._questionOfTheDay;
        }

        try {
            const url = ACTION_URL+'questionOfTheDay';
            fetch(url).then((response) => response.json() ).then((response) => {
                if(response.status == 'ok') {
                    const tmpDate = new Date(response.date);
                    if(DeckData.isToday(tmpDate)) {
                        this._dayOfTheQuestion = tmpDate;
                        this._questionOfTheDay = response.question;
                        this._revealed = response.revealed;
                    }
                }
            });
        }
        catch(err) {
            setError(true);
        }
        return this._questionOfTheDay;
    }

    verifyQoD(){
        if(this._questionOfTheDay != null &&
            this._dayOfTheQuestion != null &&
            DeckData.isToday(this._dayOfTheQuestion)) {
            return true;
        }
        this._dayOfTheQuestion = null;
        this._questionOfTheDay = null;
        return false;
    }

    static isToday(date){
        var curDate = new Date();
        return curDate.getFullYear() == date.getFullYear()
                && curDate.getMonth() == date.getMonth()
                && curDate.getDate() == date.getDate();
    }

    static isRevealedQoDToday(storage) {
        const storedVal = storage.getString("REVEALED");
        return typeof(storedVal) !== 'undefined'
        && storedVal != null
        && DeckData.isToday(new Date(storedVal));
    }

    isRevealedToday() {
        return DeckData.isRevealedQoDToday(this._storage);
    }

    revealQoD(callBack) {
        if(!this.isRevealedToday()) {
            try {
                const url = ACTION_URL+'addRevealed';
                fetch(url).then((response) => response.json() ).then((response) => {
                    if(response.status == 'ok') {
                        this._revealed = response.revealed;
                        const dateKey = this._dayOfTheQuestion.toISOString().split('T')[0];
                        this._storage.set("REVEALED", dateKey);
                        callBack(this._revealed);
                    }
                });
            }
            catch(err) {
                setError(true);
            }
        }
        return this._revealed;
    }

    async setLoggedIn() {
        var userID = getUserID();
        if (typeof(userID) !== 'undefined' && userID != null) {
            try {
                    const url = ACTION_URL+'filterSettings';
                    await fetch(url, {
                        method: 'POST',
                        body: JSON.stringify({
                            userID: userID
                        }),
                    }).then((response) => response.json() ).then((response) => {
                        if(response.status == 'ok')
                            this._decks = this.doFilter(response.products);
                        else
                            this._decks = this.doFilter([]);
                    });
            }
            catch(err) {
                setError(true);
                this._decks = this.doFilter([]);
            }
        }
    }

    doFilter(products) {
        const DEFAULT_ITEM_COUNT = 10;
        const newDecks = [];

        this._rawData.decks.map((deck) => {
            let filtered = false;
            products.map((item) => {
                if(item.type == 'deck' && item.id == deck.deckID) {
                    if(item.status == 'authorized') {
                        const newDeck = {...deck};
                        newDeck.totalCards = deck.cards.length;
                        newDecks.push(newDeck);
                        filtered = true;
                    }
                }
            });

            if( !filtered ) {
                if(deck.visibleByDefault) {
                    const newDeck = {...deck};
                    newDeck.totalCards = deck.cards.length;
                    if(deck.cardsByDefault > 0)
                        newDeck.cards = deck.cards.slice(0, deck.cardsByDefault);
                    else
                        newDeck.cards = deck.cards.slice(0, DEFAULT_ITEM_COUNT);
                    newDecks.push(newDeck);
                }
            }
        });
        return newDecks;
    }



    getQuestionOfTheDay() {
        return this._questionOfTheDay;
    }

    getQoDTTLHours() {
        if(this._dayOfTheQuestion == null) {
            return (24 - new Date().getHours());
        }
        return (24 - (new Date().getHours() - this._dayOfTheQuestion.getHours()));
    }

    getQoDRevealedCount() {
        return this._revealed;
    }




    addFavourite(cardID) {
        this._storage.set(_SUFFIX_FAVOURITE+cardID, cardID);
        this._favourites.push(cardID.toString());
    }

    removeFavourite(cardID) {
        this._favourites = this._favourites.filter(item => item != cardID.toString());
        this._storage.delete(_SUFFIX_FAVOURITE+cardID);
    }

    isFavourite(cardID) {
        return this._favourites.includes(cardID.toString());
    }

    gatherFavourites() {
        const favourites = [];
        this.decks().map((deck) => {
            deck.cards.map((card) => {
                this._favourites.forEach(item => {
                    if(card.id == item) {
                        favourites.push(card);
                    }
                });
            });
        });
        return favourites;
    }

    getFavDeck() {
        const favDeck = this._rawData.favourites;
        favDeck.cards = this.gatherFavourites();
        favDeck.subText = "You have " + (favDeck.cards.length > 0 ? favDeck.cards.length : "no") + " favourite questions";
        return favDeck;
    }




    decks() {
        return this._decks;
    }

    onboarding() {
        return this._rawData.onboarding;
    }

    getDeck(id) {
        if(id == ID_FAVOURITES) {
            return this.getFavDeck();
        }
        return this.decks().filter(item => item.id == id)[0];
    }

    getDeckInfo(deck) {
        if(deck.id === ID_FAVOURITES)
            return null;
        const info = [];
        info.push({'type': 'likedCount', 'info': Math.floor(Math.random() * 99)});
        info.push({'type': 'cardCount',  'info': deck.cards ? deck.totalCards : 0});
        return info;
    }

    getDeckName(deckID) {
        if(deckID == ID_FAVOURITES) {
            return 'Favourites';
        }
        return this._deckNames[deckID];
    }

    getDeckImageSvg(imageName, cardHeight){
        if(this._rawData.svgLibrary[imageName+'-'+cardHeight])
            return this._rawData.svgLibrary[imageName+'-'+cardHeight];
        else
            return this._rawData.svgLibrary[imageName];
    }
}