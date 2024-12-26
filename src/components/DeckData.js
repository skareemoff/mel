import { useState } from 'react';
import { MMKV } from 'react-native-mmkv'

const _SUFFIX_FAVOURITE = "favourite_";
const URL = 'https://script.google.com/macros/s/AKfycbyGVjLmAHYviTXCulytpptgo-g9t6TbCNmEAJ4QUsDTZ28yBmkYr56mtzBuiOvvSOFD/exec?';
export const ID_FAVOURITES = 'favourites';

export default class DeckData {

    constructor() {
        this._questionOfTheDay = null;
        this._dayOfTheQuestion = null;
        this._revealed = 0;
        this._data = require('../data/cards.json');
        this._favourites = [];
        this._deckNames = {};
        this._storage = new MMKV();

        this.loadQoD();
        this.loadFavourites();
        this.decks().map((deck) => {
            this._deckNames[deck.id] = deck.deckName;
        });
        return this;
    }

    readValue(key){
        return this._storage.getString(key);
    };

    storeValue(key, value){
        this._storage.set(key, value);
    };

    removeValue(key){
        this._storage.delete(key);
    };


    loadFavourites(){
        const keys = this._storage.getAllKeys();
        const favourites = [];
        keys.forEach((key) => {
            if(key.startsWith(_SUFFIX_FAVOURITE)) {
                favourites.push(key.substring(10));
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
        const storedVal = this.readValue("REVEALED");
        return typeof(storedVal) !== 'undefined'
                && storedVal != null
                && this.isToday(new Date(storedVal));
    }

    revealQoD(callBack) {
        if(!isRevealedToday()) {
            try {
                const url = URL+'action=addRevealed';
                fetch(url).then((response) => response.json() ).then((response) => {
                    if(response.status == 'ok') {
                        _revealed = response.revealed;
                        const dateKey = this._dayOfTheQuestion.toISOString().split('T')[0];
                        this.storeValue("REVEALED", dateKey);
                        callBack(_revealed);
                    }
                });
            }
            catch(err) {
                setError(true);
            }
        }
        return this._revealed;
    }

    addFavourite(cardID) {
        this.storeValue(_SUFFIX_FAVOURITE+cardID, cardID);
        this._favourites.push(cardID.toString());
    }

    removeFavourite(cardID) {
        this._favourites = this._favourites.filter(item => item != cardID.toString());
        this.removeValue(_SUFFIX_FAVOURITE+cardID);
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

    getQoDTTLHours() {
        if(this._dayOfTheQuestion == null) {
            return (24 - new Date().getHours());
        }
        return (24 - (new Date().getHours() - this._dayOfTheQuestion.getHours()));
    }

    getQoDRevealedCount() {
        return this._revealed;
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

    getRandomCard(deckID) {
        const cards = this.getDeck(deckID).cards;
        return cards[Math.round(Math.random() * (cards.length - 1))];
    }

    getDeck(id) {
        if(id == ID_FAVOURITES) {
            return this.getFavDeck();
        }
        return this.decks().filter(item => item.id == id)[0];
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

    getQuestionOfTheDay() {
        return this._questionOfTheDay;
    }
}