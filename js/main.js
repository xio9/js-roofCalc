window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.type-item');
    const tabsContent = document.querySelectorAll('.tab-cont');
    const tabsParent = document.querySelector('.types-list');
    const prodParent = document.querySelector('.prod-list');
    const tabsProd = document.querySelectorAll('.type-prod');
    const price = document.querySelector('.total-price');
    const areaSize = document.querySelector('.area-size');
    const lampSize = document.querySelector('.lamp-size');
    const angleSize = document.querySelector('.angle-size');
    const lusterSize = document.querySelector('.luster-size');

    const areaMinus = document.querySelector('.minus-area');
    const areaPlus = document.querySelector('.plus-area');
    const angleMinus = document.querySelector('.minus-angle');
    const anglePlus = document.querySelector('.plus-angle');
    const lampMinus = document.querySelector('.minus-lamp');
    const lampPlus = document.querySelector('.plus-lamp');
    const lusterMinus = document.querySelector('.minus-luster');
    const lusterPlus = document.querySelector('.plus-luster');

    let mathPrice;
    let area = 0;
    let angle = 0;
    let lamp = 0;
    let luster = 0;
    let totalAngle = 0;

    function tabsContentHide() {
        tabsContent.forEach(item => {
            item.style.display = 'none';
        });

        tabs.forEach(item => {
            item.classList.remove('tab-cont__active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tab-cont__active');
    }

    tabsContentHide();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('type-item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    tabsContentHide();
                    showTabContent(i);
                }
            });
        }
    });

    function hideProd() {
        tabsProd.forEach(item => {
            item.classList.remove('tab-cont__active');
        });
    }

    function showProd(i = 0) {
        tabsProd[i].classList.add('tab-cont__active');
    }


    function checkAngle() {
        if (angle >= 4) {
            totalAngle = (angle - 4) * 180;
        }
    }

    function totalPrice() {
        let totalPrice;
        if (area > 0) {
            checkAngle();
            totalPrice = mathPrice * area + totalAngle + lamp * 280 + luster * 450;
        } else {
            totalPrice = 0;
        }

        const finalPrice = `
        <div class="total-price">${totalPrice}Р</div>
        `
        price.innerHTML = totalPrice;
    }

    areaPlus.addEventListener('click', () => {
        area++;
        areaSize.innerHTML = area;
        totalPrice();
    });

    areaMinus.addEventListener('click', () => {
        if (area >= 1) {
            area--;
            areaSize.innerHTML = area;
            totalPrice();
        }
    });

    anglePlus.addEventListener('click', () => {
        angle++;
        angleSize.innerHTML = angle;
        totalPrice();
    });

    angleMinus.addEventListener('click', () => {
        if (angle >= 1) {
            angle--;
            angleSize.innerHTML = angle;
            totalPrice();
        }
    });

    lampPlus.addEventListener('click', () => {
        lamp++;
        lampSize.innerHTML = lamp;
        totalPrice();
    });

    lampMinus.addEventListener('click', () => {
        if (lamp >= 1) {
            lamp--;
            lampSize.innerHTML = lamp;
            totalPrice();
        }
    });

    lusterPlus.addEventListener('click', () => {
        luster++;
        lusterSize.innerHTML = luster;
        totalPrice();
    });

    lusterMinus.addEventListener('click', () => {
        if (luster >= 1) {
            luster--;
            lusterSize.innerHTML = luster;
            totalPrice();
        }
    });

    prodParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('type-prod')) {
            tabsProd.forEach((item, i) => {
                if (target == item) {
                    mathPrice = tabsProd[i].dataset.type;
                    console.log(mathPrice);
                    hideProd();
                    showProd(i);
                    totalPrice();
                }
            });
        }
    });
});