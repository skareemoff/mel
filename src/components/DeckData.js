import { useState } from "react";

export default class DeckData {
    static _instance = null;
    _questionOfTheDay = null;
    _dayOfTheQuestion = null;
    _decks = [];
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
            DeckData._instance._decks = require('../data/cards.json').decks;
            DeckData._instance._loadQoD();
        }

        return DeckData._instance;
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
        var t2 = new Date().getTime();
        var t1 = date.getTime();
        var diff = (t2-t1)/(24*3600*1000);
        return diff >= -0.5 && diff <= 0.5;
    }

    data() {
        return this._decks;
    }

    getRandomCard(deckID) {
        const cards = this.getDeck(deckID).cards;
        return cards[Math.round(Math.random() * (cards.length - 1))];
    }

    getDeck(id) {
        return this._decks.filter(item => item.id == id)[0];
    }

    getDeckImage(imageName){
        return this._images[imageName];
    }

    getQuestionOfTheDay() {
        return this._questionOfTheDay;
    }
}