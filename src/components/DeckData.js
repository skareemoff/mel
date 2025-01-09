import { localStorage } from "./storage";

const _SUFFIX_FAVOURITE = "FAV_";
const URL = 'https://script.google.com/macros/s/AKfycbyGVjLmAHYviTXCulytpptgo-g9t6TbCNmEAJ4QUsDTZ28yBmkYr56mtzBuiOvvSOFD/exec?';
export const ID_FAVOURITES = 'favourites';

export class DeckData {

    constructor() {
        this._questionOfTheDay = null;
        this._dayOfTheQuestion = null;
        this._revealed = 0;
        this._data = require('../data/cards.json');
        this._favourites = [];
        this._deckNames = {};
        this._storage = localStorage;

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
            const url = URL+'action=questionOfTheDay';
            fetch(url).then((response) => response.json() ).then((response) => {
                if(response.status == 'ok') {
                    const tmpDate = new Date(response.date);
                    if(this.isToday(tmpDate)) {
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
            isToday(this._dayOfTheQuestion)) {
            return true;
        }
        this._dayOfTheQuestion = null;
        this._questionOfTheDay = null;
        return false;
    }

    isToday(date){
        var curDate = new Date();
        return curDate.getFullYear() == date.getFullYear()
                && curDate.getMonth() == date.getMonth()
                && curDate.getDate() == date.getDate();
    }

    isRevealedToday() {
        const storedVal = this._storage.getString("REVEALED");
        return typeof(storedVal) !== 'undefined'
                && storedVal != null
                && this.isToday(new Date(storedVal));
    }

    revealQoD(callBack) {
        if(!this.isRevealedToday()) {
            try {
                const url = URL+'action=addRevealed';
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
        const favDeck = this.data().favourites;
        favDeck.cards = this.gatherFavourites();
        favDeck.subText = "You have " + (favDeck.cards.length > 0 ? favDeck.cards.length : "no") + " favourite questions";
        return favDeck;
    }




    data() {
        return this._data;
    }

    decks() {
        return this.data().decks;
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
        info.push({'type': 'cardCount',  'info': deck.cards ? deck.cards.length : 0});
        return info;
    }

    getDeckName(deckID) {
        if(deckID == ID_FAVOURITES) {
            return 'Favourites';
        }
        return this._deckNames[deckID];
    }

    getDeckImageSvg(imageName, cardHeight){
        if(this.data().svgLibrary[imageName+'-'+cardHeight])
            return this.data().svgLibrary[imageName+'-'+cardHeight];
        else
            return this.data().svgLibrary[imageName];
    }
}