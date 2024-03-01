const state = {
    score: {
        playerScore: 0,
        computerScore: 0,
        scoreBox: document.getElementById('score_points'),
    },
    cardSprites: {
        avatar: document.getElementById('card-image'),
        name: document.getElementById('card-name'),
        type: document.getElementById('card-type'),
    },
    fieldCards: {
        player: document.getElementById('player-field-card'),
        computer: document.getElementById('computer-field-card'),
    },
    actions: {
        button: document.getElementById('next-duel'),
    }
};

const players = {
    player1: "player-cards",
    player1BOX: document.getElementById('player-cards'),
    computer: "computer-cards",
    computerBOX: document.getElementById('computer-cards'),
}

const getImagePath = (imgName) => `src/assets/icons/${imgName}.png`;

const cardData = [
    {
        id: 0,
        name: "Blue Eyes White Dragon",
        type: "Paper",
        img: getImagePath('dragon'),
        WinOf: [1],
        LoseOf: [2],
    },
    {
        id: 1,
        name: "Dark Magician",
        type: "Rock",
        img: getImagePath('magician'),
        WinOf: [2],
        LoseOf: [0],
    },
    {
        id: 2,
        name: "Exodia",
        type: "Scissors",
        img: getImagePath('exodia'),
        WinOf: [0],
        LoseOf: [1],
    }
];

(function() {
})();
