const figureBtns = document.querySelectorAll('.figureBtn');
const infoContainer = document.getElementById('infoContainer');

const figuresData = {
    pawn: {
        image: '../img/pawn.png',
        title: 'The Pawn &#9823;',
        description: "A pawn is a chess piece that moves forward one square and captures diagonally."
    },
    knight: {
        image: '../img/knight.png',
        title: 'The Knight &#9822;',
        description: "A knight moves in an 'L' shape, two squares in one direction and one square perpendicular to that."
    },
    bishop: {
        image: '../img/bishop.png',
        title: 'The Bishop &#9821',
        description: "A bishop moves diagonally."
    },
    rook: {
        image: '../img/rook.png',
        title: 'The Rook &#9820;',
        description: "A rook moves straight."
    },
    queen: {
        image: '../img/queen.png',
        title: 'The Queen &#9819;',
        description: "A queen moves straight and diagonally."
    },
    king: {
        image: '../img/king.png',
        title: 'The King &#9818;',
        description: "A king moves one square in any direction."
    }
};
showFigureInfo('pawn');

figureBtns.forEach(button => {
    button.addEventListener('click', () => {
        const figure = button.getAttribute('data-figure');
        showFigureInfo(figure);
    });
});

function showFigureInfo(figure) {
    const figureData = figuresData[figure];

    if (figureData) {
        const infoSection = document.createElement('section');
        infoSection.classList.add('container', 'section', 'section-info');
        infoSection.classList.add('show');

        infoSection.innerHTML = `
            <div class="section__block">
                <div class="section__block-description">
                    <img src="${figureData.image}" alt="Изображение фигуры" class="figureIMG">
                </div>
                <div class="section__block-description">
                    <h2 class="title title-main white">${figureData.title}</h2>
                    <p class="title title-chess white half">${figureData.description}</p>
                </div>
            </div>
        `;
        const existingInfoSection = infoContainer.querySelector('.section-info');
        if (existingInfoSection) {
            existingInfoSection.classList.remove('show');
            setTimeout(() => {
                infoContainer.removeChild(existingInfoSection);
            }, 300);
        }
        infoContainer.appendChild(infoSection);
    }
}