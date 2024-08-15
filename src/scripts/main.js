document.body.style.zoom = 0.8;

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    const questions = document.querySelectorAll('[data-faq-question]');
    
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaHero) {
            ocultaElementosDoHeader();
        } else {
            exibeElementosDoHeader();
        }
    })

    //seção de atraçoes, programação das abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id = ${abaAlvo}]`);
            escondeTodasAbas(); 
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active')
        })
    }


    //seção FAQ accordion
    for(let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta);
    }


    
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        loop: true,
        centerSlide: 'true',
        grabCursor: 'true',
        rewind: true, //
        //spaceBetween: 0,
        //centeredSlides: true,
        //freeMode: true,
        //fade: 'true',

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        hashNavigation: {
            watchState: true, //
        },
        //breakpoints: {
            //0: {
            //    slidesPerView: 1,
            //},
            //520: {
            //    slidesPerView: 2,
            //},
            //1000: {
            //    slidesPerView: 2,
            //},
        //}

        /*
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },*/
    });


    window.addEventListener('scroll', function() {
        const section2 = document.querySelector('.section-2');
        const section3 = document.querySelector('.background2');
        const scrollTop = window.scrollY;
        const cont = document.querySelector('.cont');

        if (scrollTop >= section2.offsetTop && scrollTop < section3.offsetTop) {
          section2.style.opacity = 1; // Brilho normal
        } else if (scrollTop >= section3.offsetTop) {
            section3.style.opacity = 0.3; // Brilho menor

        }
    });
})






function ocultaElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}
function exibeElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}





function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;
    elementoPai.classList.toggle(classe);
}






function removeBotaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}
function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]'); 
    
    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}


