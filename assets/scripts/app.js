const navToggleIcon = document.querySelector('.nav__toggle-icon')
const menu = document.querySelector('.menu')
const cover = document.querySelector('.cover')
const resumeListItems = document.querySelectorAll('.resume__list-item')
const porfolioListItems = document.querySelectorAll('.portfolio__list-item')


navToggleIcon.addEventListener('click',function (){
    this.classList.toggle('nav__toggle-icon--open')
    menu.classList.toggle('menu--open')
    cover.classList.toggle('cover--show')
})

resumeListItems.forEach(resumeListItem => {
    resumeListItem.addEventListener('click',function (){
        document.querySelector('.resume__list-item--active').classList.remove('resume__list-item--active')
        document.querySelector('.resume__content--show').classList.remove('resume__content--show')
        this.classList.add('resume__list-item--active')
        let contentId = this.getAttribute('data-content-id')
        document.querySelector(contentId).classList.add('resume__content--show')
    })
})


porfolioListItems.forEach(portfolioListItem => {
    portfolioListItem.addEventListener('click',function (){
        document.querySelector('.portfolio__item--active').classList.remove('portfolio__item--active')
        document.querySelector('.portfolio__content--show').classList.remove('portfolio__content--show')
        this.classList.add('portfolio__item--active')
        let contentId = this.getAttribute('data-content-id')
        document.querySelector(contentId).classList.add('portfolio__content--show')
    })
})

