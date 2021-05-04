function callModalWindow (modalSelector, callInTime) {
    const modal = document.querySelector(modalSelector);
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        
        console.log(callInTime);
        if (callInTime){
            clearInterval(callInTime);
        }
    }
function closeModalWindow(modalSelector) {
     const modal = document.querySelector(modalSelector);   
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function modal(trigerSelector, modalSelector, callInTime) {
    //  Modal winndiw
    const modalTriger = document.querySelectorAll(trigerSelector),
          modal = document.querySelector(modalSelector);

// добавим функционал который будет вызывать модальное окно;
    modalTriger.forEach(btn => {
        btn.addEventListener('click', () => callModalWindow(modalSelector, callInTime));     
    });

// Функционал который будет закрывать модальное окно нажатием на пространство вне границ модального окна;

    modal.addEventListener('click', (e) => {
        if(e.target === modal || e.target.getAttribute('data-close') == ''){
            closeModalWindow(modalSelector);
        }
    });
// функционал который закроет модальное окно нажатием на клавишу "Escape" ее № 27;
    document.addEventListener('keydown', (e) => {
        if(e.which === 27 && modal.classList.contains('show')) {
            closeModalWindow(modalSelector);
        }
    });
    
    function openModalByScroll() {
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            callModalWindow(modalSelector, callInTime);
            window.removeEventListener('scroll', openModalByScroll);
        }
    }
    
    window.addEventListener('scroll',openModalByScroll );
}

export default modal;
export {closeModalWindow};
export {callModalWindow};