import { localStorage } from "./storage";
import { isToday } from "./Utils";
import { ACTION_URL } from './Utils'

const REVEALED = 'REVEALED';

class QuestionOfTheDayData {

    constructor() {
        this._questionOfTheDay = null;
        this._dayOfTheQuestion = null;
        this._isLoading = false;
        this._revealed = 0;
        this._storage = localStorage;
    }

    loadQoD(setQuestionOfTheDayState) {
        if(this.verifyQoD()) {
            return this._questionOfTheDay;
        }

        if(this._isLoading) {
            return;
        }
        this._isLoading = true;
        try {
            const url = ACTION_URL+'questionOfTheDay';
            fetch(url).then((response) => response.json() ).then((response) => {
                if(response.status == 'ok') {
                    const tmpDate = new Date(response.date);
                    if(isToday(tmpDate)) {
                        this._dayOfTheQuestion = tmpDate;
                        this._questionOfTheDay = response.question;
                        this._revealed = response.revealed;
                        setQuestionOfTheDayState(prevKey => prevKey + 1);
                        this._isLoading = false;
                    }
                }
            });
        }
        catch(err) {
            console.error(err);
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

    isRevealedToday() {
        const storedVal = this._storage.getString(REVEALED);
        return typeof(storedVal) !== 'undefined'
            && storedVal != null
            && isToday(new Date(storedVal));
    }

    revealQoD(callBack) {
        if(!this.isRevealedToday()) {
            try {
                const url = ACTION_URL+'addRevealed';
                fetch(url).then((response) => response.json() ).then((response) => {
                    if(response.status == 'ok') {
                        this._revealed = response.revealed;
                        const dateKey = this._dayOfTheQuestion.toISOString().split('T')[0];
                        this._storage.set(REVEALED, dateKey);
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

    getQuestionOfTheDay(setQuestionOfTheDayState) {
        this.loadQoD();
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
}


export const qodD = new QuestionOfTheDayData();