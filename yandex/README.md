Тестовое задание от Яндекс.

Вторая задача:

Почему this._i не увеличивается. Как исправить?

function Ticker() {
    this._i = 0
};

Ticker.prototype = {
    tick: function() {
    console.log(this._i++);
    }
};

var ticker = new Ticker();
setInterval(ticker.tick, 1000);

Ответ:

Был переопределен объект прототипа без явного указания конструктора, чтобы работало, нужно явно указать конструктор вот так:

Ticker.prototype = {
    tick: function() {
    console.log(this._i++);
    },
    constructor: Ticker()
};