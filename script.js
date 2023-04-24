var button = document.querySelector('.btn-generate');
var image = document.querySelector('img');
var download = document.querySelector('.btn-download');
button === null || button === void 0 ? void 0 : button.addEventListener('click', function () {
    fetch('https://api.unsplash.com/photos/random?query=dog&client_id=3ElZfutFs2Xro49kzTn3uQiARTF1DTQLfJxPL5lH_mk')
        .then(function (value) {
        return value.json();
    })
        .then(function (json) {
        var dogo = json;
        console.log(dogo);
        document.querySelector('span').style.display = 'none';
        document.querySelector('.container-image').style.border = 'none';
        image.src = dogo.urls.regular;
    })["catch"](function (error) {
        console.log(error);
    });
});
