const btnMenu = document.getElementById('btn-menu')
const navigation = document.querySelector('.nav')
const main = document.querySelector('.main')
const footer = document.querySelector('.footer')

btnMenu.addEventListener('click', () => {
    navigation.classList.toggle('nav-active')
    main.classList.toggle('fade-away')
    footer.classList.toggle('fade-away')
})

const features = [
    {   
        img: "../images/illustration-features-tab-1.svg",
        h3: "Bookmark in one click",
        p: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."

    },
    {
        img: "../images/illustration-features-tab-2.svg",
        h3: "Intelligent search",
        p: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
    },
    {
        img: "../images/illustration-features-tab-3.svg",
        h3: "Share your bookmarks",
        p: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
    }
]

const featureBookmarking = document.querySelector('.bookmarking')
const featureSearching = document.querySelector('.searching')
const featureSharing = document.querySelector('.sharing')
const spanFeature = document.querySelectorAll('.span-feature')
const h3Title = document.getElementById('title-feature')
const pText = document.getElementById('text-feature')
const imgFeature = document.getElementById('img-feature')

let currentItem = 0

window.addEventListener('DOMContentLoaded', function() {
    showFeature(currentItem)
})

function showFeature(currentItem) {
    const item = features[currentItem]
    imgFeature.src = item.img
    h3Title.textContent = item.h3
    pText.textContent = item.p
}

featureBookmarking.addEventListener('click', function () {
        currentItem = 0
        spanFeature[0].classList.add('box-active')
        spanFeature[1].classList.remove('box-active')
        spanFeature[2].classList.remove('box-active')
        showFeature(currentItem)
})

featureSearching.addEventListener('click', function () {
        currentItem = 1
        spanFeature[0].classList.remove('box-active')
        spanFeature[1].classList.add('box-active')
        spanFeature[2].classList.remove('box-active')
        showFeature(currentItem)
})

featureSharing.addEventListener('click', function () {
        currentItem = 2
        spanFeature[0].classList.remove('box-active')
        spanFeature[1].classList.remove('box-active')
        spanFeature[2].classList.add('box-active')
        showFeature(currentItem)
})

const accordion = document.querySelectorAll('.accordion')

accordion.forEach(function (item) {
    item.addEventListener('click', (e) => {
        const active = e.currentTarget
        active.classList.toggle('accordion-active')
    })
})

const btnEmail = document.getElementById('btn-email')
const inputEmail = document.getElementById('input-email')
const inputDiv = document.querySelector('.input-div')

inputEmail.addEventListener('keypress', function (e) {
    if (e.which == 13) {
        validateEmail();
    }
}, false);

function validateEmail() {
    if (inputEmail.value === '' || inputEmail.value === null || inputEmail.value === undefined) {
        inputDiv.classList.add('input-invalidate')
        inputDiv.classList.remove('input-validate')
    } else if (inputEmail.value.indexOf('@') < 0 || inputEmail.value.indexOf('.com') < 0) {
        inputDiv.classList.add('input-invalidate')
        inputDiv.classList.remove('input-validate')
    } else {
        inputDiv.classList.remove('input-invalidate')
        inputDiv.classList.add('input-validate')
        inputEmail.value = ''
    }
}

btnEmail.addEventListener('click', () => {
    validateEmail()
})