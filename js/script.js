//Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro javascript in cui:
//- Creiamo il nostro array di oggetti che rappresentano ciascun post.Ogni post dovrà avere le informazioni necessarie per stampare la relativa
// card: nome autore, foto profilo, data in formato americano, testo del post, immagine(non tutti i post devono avere una immagine), numero di likes.
//Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es.Unsplash(https://unsplash.it/300/300?image=<id>)
//Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
//Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.

const posts = [
    {
       name: 'Giorgio Bassotti',
       profile: 'KIPqvvTOC1s',
       date: '04/22/96',
       txt: 'Sono molto felice di essere stato in questo posto',
       img: 'I7oLRdM9YIw',
    },
    {
        name: 'Helena Ross',
        profile: 'KIPqvvTOC1s',
        date: '04/22/21',
        txt: 'Sono molto felice di essere stata in questo posto',
        img: 'I7oLRdM9YIw',
    },
    {
        name: 'Mastro Geppetto',
        profile: 'KIPqvvTOC1s',
        date: '04/22/21',
        txt: 'Sono molto felice di essere stato in questo posto',
        img: 'I7oLRdM9YIw',
    },
];

function printPosts(array, container) {
    container.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        const obj = array[i];
        const templateDiv = `
      <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="https://unsplash.it/300/300?image=${array[i].profile}" alt="${array[i].name}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${array[i].name}</div>
                        <div class="post-meta__time">${array[i].date}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${array[i].txt}</div>
            <div class="post__image">
                <img src="https://unsplash.it/300/300?image=${array[i].img}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">80</b> persone
                    </div>
                </div> 
            </div>            
        </div>`;

        container.innerHTML += templateDiv;
    }
}

const container = document.getElementById('container');
printPosts(posts, container);
