const body = document.querySelector('body');
const form = document.querySelector('form');
let image = document.querySelector('#image');
let topText = document.querySelector('#toptext');
let bottomText = document.querySelector('#bottomtext');

form.addEventListener('submit', function(e){
    e.preventDefault();

    // Creates image
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('imgDiv');
    const img = document.createElement('img');
    img.setAttribute('src', image.value);
    body.append(imgDiv);
    imgDiv.append(img);
    image.value = '';
    
    // Adds top text if text is there
    if(!topText.value === false){
        const topDiv = document.createElement('div');
        topDiv.classList.add('topDiv');
        const tText = document.createElement('h1');
        tText.classList.add('imgText');
        tText.innerText = topText.value;
        imgDiv.append(topDiv);
        topDiv.append(tText);
        topText.value = '';
    }

    // Adds bottom text if text is there
    if(!bottomText.value === false){
        const bottomDiv = document.createElement('div');
        bottomDiv.classList.add('bottomDiv');
        const bText = document.createElement('h1');
        bText.classList.add('imgText')
        bText.innerText = bottomText.value;
        imgDiv.append(bottomDiv);
        bottomDiv.append(bText);
        bottomText.value = '';
    }

    // Removes image & all text
    imgDiv.addEventListener('click', function(event){
        imgDiv.remove();
    })

})
