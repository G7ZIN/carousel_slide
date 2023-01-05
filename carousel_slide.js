const carousel = document.querySelectorAll('[data-js="carousel_item"]')
const next = document.querySelector('.bnt-right')
const prev = document.querySelector('.bnt-left')
let slide = 0
let slides = 1
let slid = 2
let sli = 3
let sl=4

next.addEventListener('click', () => {
    if (slide === carousel.length - 1,slide===9) {
        slide = 0
    } else {

        slide++
    }

    carousel.forEach(carousel => {
        carousel.classList.remove('carousel_item--visible')
    })
    
    carousel[slide].classList.add('carousel_item--visible')

    
    if (slides === carousel.length - 1,slides===10) {
        slides = 1
    } else {
        slides++
    }

    carousel.forEach(carousel=>{
        carousel.classList.remove('carousel_item1')
    })
    carousel[slides].classList.add('carousel_item1')




    if (slid === carousel.length - 1, slid===11) {
        slid = 2
    } else {
        slid++
    }

    carousel.forEach(carousel=>{
        carousel.classList.remove('carousel_item2')
    })
    carousel[slid].classList.add('carousel_item2')




    if (sli === carousel.length - 1 ,sli===12) {
        sli= 3
    } else {
        sli++
    }

    carousel.forEach(carousel=>{
        carousel.classList.remove('carousel_item3')
    })
    carousel[sli].classList.add('carousel_item3')



    if (sl === carousel.length - 1 ,sl===13) {
        sl= 4
    } else {
        sl++
    }

    carousel.forEach(carousel=>{
        carousel.classList.remove('carousel_item4')
    })
    carousel[sl].classList.add('carousel_item4')


})


prev.addEventListener('click', () => {
    if (slide === 0) {
        slide === carousel.length - 1
    } else {

        slide--
    }
    carousel.forEach(carousel => {
        carousel.classList.remove('carousel_item--visible')
    })
    carousel[slide].classList.add('carousel_item--visible')


    if (slides === 1) {
        slides === carousel.length - 1
    } else {

        slides--
    }
    carousel.forEach(carousel => {
        carousel.classList.remove('carousel_item1')
    })
    carousel[slides].classList.add('carousel_item1')




    if (slid === 2) {
        slid === carousel.length - 1
    } else {

        slid--
    }
    carousel.forEach(carousel => {
        carousel.classList.remove('carousel_item2')
    })
    carousel[slid].classList.add('carousel_item2')



    if (sli === 3) {
        sli === carousel.length - 1
    } else {

        sli--
    }
    carousel.forEach(carousel => {
        carousel.classList.remove('carousel_item3')
    })
    carousel[sli].classList.add('carousel_item3')

    if (sl === 4) {
        sl === carousel.length - 1
    } else {

        sl--
    }
    carousel.forEach(carousel => {
        carousel.classList.remove('carousel_item4')
    })
    carousel[sl].classList.add('carousel_item4')
})
