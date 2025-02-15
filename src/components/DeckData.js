import { localStorage } from "./storage";

const _SUFFIX_FAVOURITE = "FAV_";
export const ID_FAVOURITES = 'favourites';

export class DeckData {

    constructor() {
        this._userData = {state: 'unknown'};
        this._rawData = require('../data/cards.json');
        this._favourites = [];
        this._deckNames = {};
        this._storage = localStorage;
        this._decks = [];
        this._purchasedState = false;
        this.filterDecks();
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


    setPurchasedState(purchasedState) {
        this._purchasedState = purchasedState;
        this.filterDecks();
    }

    filterDecks() {
        const DEFAULT_ITEM_COUNT = 3;
        const newDecks = [];

        this._rawData.decks.map((deck) => {
            // Love Life and Connections 101 are accessible for free fully
            if(deck.id == 7 || deck.id == 5 || this._purchasedState) {
                const newDeck = {...deck};
                newDeck.totalCards = deck.cards.length;
                newDecks.push(newDeck);
            }
            else {
                const newDeck = {...deck};
                newDeck.isLocked = true;
                newDeck.totalCards = deck.cards.length;
                newDeck.cards = deck.cards.slice(0, DEFAULT_ITEM_COUNT);
                newDecks.push(newDeck);
            }
        });
        this._decks = newDecks;
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

export const deckDataInstance = new DeckData();