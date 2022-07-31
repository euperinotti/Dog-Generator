let button = document.querySelector('.btn-generate');
let image = document.querySelector('img');
let download = document.querySelector('.btn-download');

button.addEventListener('click', () => {
    //using the unsplash api
    fetch('https://api.unsplash.com/photos/random?query=dog&client_id=3ElZfutFs2Xro49kzTn3uQiARTF1DTQLfJxPL5lH_mk')
        .then(value => {
            //converting the result to json
            return value.json();
        })
            .then(function(json) {
                let dogo = json;
                console.log(dogo);
                document.querySelector('span').style.display = 'none';
                image.src = dogo.urls.regular;
            })
        .catch(error => {console.log(error)})
})

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
