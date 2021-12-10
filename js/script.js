//Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro javascript in cui:
//- Creiamo il nostro array di oggetti che rappresentano ciascun post.Ogni post dovrà avere le informazioni necessarie per stampare la relativa
// card: nome autore, foto profilo, data in formato americano, testo del post, immagine(non tutti i post devono avere una immagine), numero di likes.
//Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es.Unsplash(https://unsplash.it/300/300?image=<id>)
//Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
//Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.

const posts = [
    {
       name: 'Giorgio Bassotti',
        profile: 'https://images.unsplash.com/photo-1606406054219-619c4c2e2100?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
       date: '04/22/96',
       txt: 'Sono molto felice di essere stato in questo posto',
        img: 'https://images.unsplash.com/photo-1500043357865-c6b8827edf10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
        name: 'Helena Ross',
        profile: 'https://images.unsplash.com/photo-1606406054219-619c4c2e2100?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
        date: '04/22/21',
        txt: 'Sono molto felice di essere stata in questo posto',
        img: 'https://images.unsplash.com/photo-1500043357865-c6b8827edf10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
        name: 'Mastro Geppetto',
        profile: 'https://images.unsplash.com/photo-1606406054219-619c4c2e2100?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
        date: '04/22/21',
        txt: 'Sono molto felice di essere stato in questo posto',
        img: 'https://images.unsplash.com/photo-1500043357865-c6b8827edf10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
        name: 'Sono Asociale',
        profile: '',
        date: '05/27/19',
        txt: 'Sono molto felice di essere stato in questo posto',
        img: 'https://images.unsplash.com/photo-1500043357865-c6b8827edf10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
];

function takeUppercase(str){
    let upper = '';
    for (let i=0; i < str.length; i++) {
        if (str.charAt(i) === str.charAt(i).toUpperCase()) {
            upper += str[i];
        }
    }
    return upper;
}

function printPosts(array, container) {
    container.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        const obj = array[i];
        if (array[i].profile == ''){
           const newStr = takeUppercase(array[i].name);
            const templateDiv = `
      <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <div class="profile-pic-default">
                        <span>${newStr}</span>
                        </div>                 
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${array[i].name}</div>
                        <div class="post-meta__time">${array[i].date}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${array[i].txt}</div>
            <div class="post__image">
                <img src="${array[i].img}" alt="">
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
        else {
        const templateDiv = `
      <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${array[i].profile}" alt="${array[i].name}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${array[i].name}</div>
                        <div class="post-meta__time">${array[i].date}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${array[i].txt}</div>
            <div class="post__image">
                <img src="${array[i].img}" alt="">
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
}

const container = document.getElementById('container');
printPosts(posts, container);

//BONUS
//1. Formattare le date in formato italiano(gg / mm / aaaa)
//2. Gestire l’assenza dell’immagine profilo con un elemento di fallback che contiene le iniziali dell’utente(es.Luca Formicola > LF).
//3. Al click su un pulsante “Mi Piace” di un post, incrementare il contatore di like al post e cambiare colore al testo del bottone.

