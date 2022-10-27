var button = document.querySelector('.btn-generate');
var image = document.querySelector('img');
var download = document.querySelector('.btn-download');
button === null || button === void 0 ? void 0 : button.addEventListener('click', function () {
    //using the unsplash api
    fetch('https://api.unsplash.com/photos/random?query=dog&client_id=3ElZfutFs2Xro49kzTn3uQiARTF1DTQLfJxPL5lH_mk')
        .then(function (value) {
        //converting the result to json
        return value.json();
    })
        .then(function (json) {
        var dogo = json;
        console.log(dogo);
        document.querySelector('span').style.display = 'none';
        image.src = dogo.urls.regular;
    })["catch"](function (error) {
        console.log(error);
    });
});
//To be continued...
// download.addEventListener('click', () => {
//     if(image.src == '' || image == null){
//         alert('No image availabe');
//     } else {
//         fetchFile(image.src);
//     }
// })
// function fetchFile(url) {
//     fetch(url)
//         .then(value => {
//             return value.blob();
//         })
//             .then(file => {
//                 let tempUrl = URL.createObjectURL(file);
//                 let aTag = document.createElement("a");
//                 aTag.href = tempUrl;
//                 aTag.download = "dogo";
//                 document.body.appendChild(aTag);
//                 aTag.click();
//                 aTag.remove();
//             })
// }
