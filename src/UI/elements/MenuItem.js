import EventEmitter from "../../Experience/Utils/EventEmitter";

export default class MenuItem extends EventEmitter {
    constructor(option, index, onSelect) {
        super();
        this.option = option;
        this.index = index;
        this.onSelect = onSelect;

        // Create the DOM element
        this.element = document.createElement('div');
        this.element.classList.add('menu-item');
        this.element.textContent = option.text;

        // Wrap the onClick function to bind the correct context
        const boundOnClick = () => {
            if (this.option.onClick) {
                this.option.onClick(this); // Pass the MenuItem instance
            }
            this.onSelect(this.index);
        };

        // Bind click event
        this.element.onclick = boundOnClick;

        // Bind touch event
        this.element.addEventListener('touchstart', boundOnClick);

        // Bind hover event
        this.element.addEventListener('mouseenter', () => {
            this.onSelect(this.index);
        });
    }

    setSelected(isSelected) {
        if (isSelected) {
            this.element.classList.add('selected');
        } else {
            this.element.classList.remove('selected');
        }
    }
    
    stateChanged(eventName) {
        window.experience.state.trigger(eventName);
    }
}
