export default class State {

    static instance;

    constructor () {
        if (instance) {
            return instance;
        }

        this.instance = this;
    }

}