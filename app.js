document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: 'apple',   //first object
            img: 'images/apple.jpg'
        },
        {
            name: 'grapes',  //second object
            img: 'images/grapes.jpg'
        },
        {
            name: 'kivi',  //third object
            img: 'images/kivi.jpg'
        },
        {
            name: 'orange',
            img: 'images/orange.jpg'
        },
        {
            name: 'watermelon',
            img: 'images/watermelon.jpg'
        },
        {
            name: 'pineapple',
            img: 'images/pineapple.jpg'
        },
        {
            name: 'apple',   
            img: 'images/apple.jpg'
        },
        {
            name: 'grapes',  
            img: 'images/grapes.jpg'
        },
        {
            name: 'kivi',  
            img: 'images/kivi.jpg'
        },
        {
            name: 'orange',
            img: 'images/orange.jpg'
        },
        {
            name: 'watermelon',
            img: 'images/watermelon.jpg'
        },
        {
            name: 'pineapple',
            img: 'images/pineapple.jpg'
        }
    ]

    //document.body.style.backgroundImage = "url('images/backg1.png')";
    document.body.style.backgroundColor = "#85edff";


    cardArray.sort(() => 0.5 - Math.random()) //it will randomly sort the array

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    //create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img') //create image
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)

        }
    }

    //check for matches
    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            alert('You have clicked the same image!')
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            // cards[optionOneId].setAttribute('src', 'images/removed img.png')
            // cards[optionTwoId].setAttribute('src', 'images/removed img.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            alert('Sorry, try again')
        }
        cardsChosen = [] //making empty
        cardsChosenId = [] //making empty
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }

    //flip your card
    function flipCard() {
        let cardId = this.getAttribute('data-id')//this keyword allows us to interact with the item what we clicked
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})