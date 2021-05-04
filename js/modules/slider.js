function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
    const current = document.querySelector(currentCounter),
          total = document.querySelector(totalCounter),
          slider = document.querySelector(container),
          btnPrev = document.querySelector(prevArrow),
          btnNext = document.querySelector(nextArrow),
          slideWraper = document.querySelector(wrapper),
          sliders = document.querySelectorAll(slide),
          slidersField = document.querySelector(field),
          width = window.getComputedStyle(slideWraper).width;

    let slideIndex = 1;
    let ofset = 0;

    slidersField.style.width = 100*sliders.length + '%';
    slidersField.style.display = 'flex';
    slidersField.style.transition = '0.5s all';

    slideWraper.style.overflow = 'hidden';

    sliders.forEach(slide => {
        slide.style.width = width;
    });

    if(sliders.length < 10){
            total.textContent = `0${sliders.length}`;
            current.textContent = `0${slideIndex}`;
        } else {
            total.textContent = sliders.length;
            current.textContent = slideIndex;
        }

    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),
          dots = [];
    indicators.classList.add('carousel-indicatirs');
    indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;
    slider.append(indicators);

    for(let i = 0; i < sliders.length; i ++){
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;
       
        if( i == 0 ){
            dot.style.opacity = 1;
        }

        indicators.append(dot);
        dots.push(dot);
    }
    function typeNumber () {
        if(sliders.length < 10){
            current.textContent = `0${slideIndex}`;
        }else{
            current.textContent = slideIndex;
        }
    }
    function changeDots () {
        dots.forEach(dot => dot.style.opacity = ".5");
        dots[slideIndex-1].style.opacity = 1;
    }

    setInterval( function () {
        if(ofset == +width.replace(/\D/g, '' ) * (sliders.length -1)){
            ofset = 0;
        }else{
            ofset += +width.replace(/\D/g, '' );
        }

        slidersField.style.transform = `translateX(-${ofset}px)`;

        if(slideIndex == sliders.length){
            slideIndex = 1;
        }
        else{
            slideIndex++;
        }

        typeNumber();

        changeDots();

    }, 5000);

    btnNext.addEventListener('click', () => {
        if(ofset == +width.replace(/\D/g, '' ) * (sliders.length -1)){
            ofset = 0;
        }else{
            ofset += +width.replace(/\D/g, '' );
        }

        slidersField.style.transform = `translateX(-${ofset}px)`;

        if(slideIndex == sliders.length){
            slideIndex = 1;
        }
        else{
            slideIndex++;
        }

        typeNumber();

        changeDots();

    });

    btnPrev.addEventListener('click', () => {
        if(ofset == 0){
            ofset = +width.replace(/\D/g, '' ) * (sliders.length -1);
        }else{
            ofset -= +width.replace(/\D/g, '' );
        }

        slidersField.style.transform = `translateX(-${ofset}px)`;

        if(slideIndex == 1){
            slideIndex = sliders.length;
        }
        else{
            slideIndex--;
        }

        typeNumber();
        changeDots();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            ofset = +width.replace(/\D/g, '' ) * (slideTo - 1);

            slidersField.style.transform = `translateX(-${ofset}px)`;

           typeNumber();

            changeDots();
        });
    });
}

export default slider;