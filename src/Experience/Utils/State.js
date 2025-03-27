let instance = null;

export default class State {

    static STATES = {
        LOADING: 'LOADING',
        MENU: 'MENU',
        EXPERIENCE: 'EXPERIENCE',
        RESTART: 'RESTART',
        EXPERIENCE_END: 'END',
        SECTION_END: 'SECTION_END',
        SECTION_START: 'SECTION_START',
    };

    constructor(STARTING_STATE = null) {
        // Singleton
        if (instance) {
            return instance;
        }
        instance = this;
        window.state = this;

        this.setState(STARTING_STATE);
    }

    setState(state) {
        // check if state is in the enum of states
        if (Object.values(State.STATES).includes(state)) {
            this.state = state;
        } else {
            console.error('State not found in enum');
        }
    }

    getState() {
        return this.state;
    }
}
