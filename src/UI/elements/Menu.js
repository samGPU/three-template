export default class Menu {
    constructor(options) {
        this.options = options;
        this.currentIndex = 0;

        // Create menu container
        this.container = document.createElement('div');
        this.container.classList.add('menu-container');

        // Create menu items
        this.items = options.map((option, index) => {
            const item = document.createElement('div');
            item.classList.add('menu-item');
            item.textContent = option.text;
            item.onclick = option.onClick;

            if (index === this.currentIndex) {
            item.classList.add('selected');
            }

            this.container.appendChild(item);
            return item;
        });

        // Handle keyboard navigation
        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowUp') {
            this.updateSelection(-1);
            } else if (event.key === 'ArrowDown') {
            this.updateSelection(1);
            } else if (event.key === 'Enter') {
            this.items[this.currentIndex].click();
            }
        });
    }

    updateSelection(direction) {
        // Remove selected class from current item
        this.items[this.currentIndex].classList.remove('selected');

        // Update index
        this.currentIndex =
            (this.currentIndex + direction + this.items.length) % this.items.length;

        // Add selected class to new item
        this.items[this.currentIndex].classList.add('selected');
    }
}
