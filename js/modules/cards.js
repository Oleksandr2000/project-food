import{getRecource} from '../services/services';
function cards() {
    class menuCard {
        constructor(src, alt, title, text, price, selector, ...classes){
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.text = text;
            this.price = price;
            this.parent = document.querySelector(selector);
            this.classes = classes;
            this.transferUSD = 28;
            this.changeToUah();
        }

        changeToUah() {
            this.price = this.price * this.transferUSD;
        }

        render() {
            const element = document.createElement('div');
            if(this.classes.length === 0){
                this.classes = 'menu__item';
                element.classList.add(this.classes);
            }else{
            this.classes.forEach(className => element.classList.add(className));
            }
            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.text}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            this.parent.append(element);
        }
    }

    getRecource('http://localhost:3000/menu')
    .then(data => {
        data.forEach(({img, altimg, title, descr, price}) => {
            new menuCard(img, altimg, title, descr, price, '.menu .container').render();
        });
    });
} 

export default cards;