// Нарисуем мишень, состоящую из четырех с общим центром. Радиусы окружностей задаются пользователем и по умолчанию равны 40, 140, 230 и 320 пикселей. Компьютер будет пытаться попасть в центр мишени, случайным образом бросая воображаемые дротики.
// Попадания компьютера фиксируются на мишени и в браузерной консоли.

let radii = [];

do {
    // Запрос и парсинг радиусов
    let prompt = window.prompt('Пожалуйста введите 4 радиуса кругов от меньшего к большему. Максимальный радиус – 300 пикселей.', '40, 130, 220, 300');
    radii = prompt.split(",").map(Number);

}   // Защищаем круги от слишком маленьких и слишком больших радиусов, и от Not a Number
    while ( Math.max.apply(null, radii) < 10 || Math.max.apply(null, radii) > 300 || radii.includes(NaN));


function getCircleSquares() {
    let squares = [];
    for (let i = 0; i < radii.length; i++) {

        // Площадь круга равна Pi * R²
        squares.push( Math.round( 3.14 * Math.pow(radii[i], 2) )  );
    }
    console.log(`The squares of the circles you entered are ${squares}`);
}

// Инициализация Canvas
const canvas = document.getElementById("canvas");
if (canvas.getContext) var ctx = canvas.getContext('2d');


function drawCircles() {
    for (let i = 0; i < radii.length; i++) {
        ctx.arc (300, 300, radii[i], 0, Math.PI * 2, false);
        ctx.stroke ();
    }
}

function darts() {
    for (let i=0; i < radii[radii.length]; i++)  {

    }
}





// -------------------------------  Function calls   ------------------------------//
// Calculate the squares of circles
getCircleSquares();

// Draw some circles that will represent an aim
drawCircles()

// Start throwing darts
darts();












