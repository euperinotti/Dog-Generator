let button = document.querySelector('.btn-generate');
let image = document.querySelector('img');
let download = document.querySelector('.btn-download');

button?.addEventListener('click', () => {
    //using the unsplash api
    fetch('https://api.unsplash.com/photos/random?query=dog&client_id=3ElZfutFs2Xro49kzTn3uQiARTF1DTQLfJxPL5lH_mk')
        .then(value => {
            return value.json();
        })
            .then(function(json) {
                let dogo = json;
                console.log(dogo);
                document.querySelector('span')!.style.display = 'none';
                image!.src = dogo.urls.regular;
            })
        .catch(error => {
            console.log(error);
        })
})