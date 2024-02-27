const marvelHeroes = [
    {
        "id":"1",
        "about": "Ipsum duis incididunt ullamco tempor. Amet incididunt Lorem consequat labore culpa. Pariatur amet veniam reprehenderit sunt laborum excepteur. Labore eu ut ut Lorem labore aliqua quis ex elit nulla in incididunt commodo aliquip. Velit excepteur eiusmod Lorem esse officia. Irure aliquip Lorem fugiat voluptate dolor duis consectetur aliquip pariatur tempor reprehenderit deserunt.",
        "picture": "https://comicvine.gamespot.com/a/uploads/scale_small/5/57023/7469590-wolverinerb.jpg",
        "squarePic": "https://dam.smashmexico.com.mx/wp-content/uploads/2018/06/27181227/ironman_portada2.jpg",
        "name": "Wolverine"
    },
    {   
        "id":"2",
        "about": "Ipsum duis incididunt ullamco tempor. Amet incididunt Lorem consequat labore culpa. Pariatur amet veniam reprehenderit sunt laborum excepteur. Labore eu ut ut Lorem labore aliqua quis ex elit nulla in incididunt commodo aliquip. Velit excepteur eiusmod Lorem esse officia. Irure aliquip Lorem fugiat voluptate dolor duis consectetur aliquip pariatur tempor reprehenderit deserunt.",
        "picture": "https://comicvine.gamespot.com/a/uploads/scale_small/12/124259/8126579-amazing_spider-man_vol_5_54_stormbreakers_variant_textless.jpg",
        "squarePic": "https://dam.smashmexico.com.mx/wp-content/uploads/2018/06/27181227/ironman_portada2.jpg",
        "name": "Spider-Man"
    },
    {   "id":"3",
        "about": "Mollit officia ad excepteur anim proident incididunt eiusmod mollit consectetur id sit velit. Laborum ut magna officia qui laboris eiusmod do culpa. Culpa dolor officia velit cillum culpa deserunt cupidatat cillum ipsum laborum.",
        "picture": "https://comicvine.gamespot.com/a/uploads/scale_small/11157/111571376/9141418-2521717259-fc318.jpg",
        "squarePic": "https://bolavip.com/__export/1557252167649/sites/bolavip/img/2019/05/07/hulk_crop1557252167265.jpg_1693159006.jpg",
        "name": "Thor"
    },
    {   "id":"4",
        "about": "Laboris est duis eiusmod adipisicing cillum ut sit ea Lorem non laboris quis Lorem. Est culpa esse aliqua non labore dolor esse labore nulla mollit. Nostrud amet est quis adipisicing dolor. Labore veniam elit veniam non ad ex consequat excepteur eiusmod. Minim cupidatat velit Lorem culpa quis consequat incididunt qui amet incididunt pariatur ex aliquip aliqua. Magna ex elit in aliquip minim eu ut ut fugiat ullamco deserunt adipisicing cillum.",
        "picture": "https://comicvine.gamespot.com/a/uploads/scale_small/12/124259/8654427-ezgif-1-2f113089e4.jpg",
        "name": "Iron Man"
    },
    {   "id":"5",
        "about": "Ipsum tempor sunt Lorem est. Fugiat nisi velit veniam labore et ullamco minim adipisicing do culpa. Cillum voluptate reprehenderit aute consectetur.",
        "picture": "https://comicvine.gamespot.com/a/uploads/scale_small/12/124259/9174497-21.jpeg",
        "squarePic": "https://comicvine.gamespot.com/a/uploads/scale_small/12/124259/9174497-21.jpeg",
        "name": "Hulk"
    },
    {   
        "id":"6",
        "about": "Deserunt voluptate aliquip ex dolor Lorem exercitation aliqua nisi fugiat aliquip sunt non. Eu cillum enim velit exercitation officia proident exercitation ipsum exercitation Lorem nulla do. Minim sint dolor nostrud ipsum laborum. Velit ea ad ad consectetur nisi Lorem laborum officia esse. Do eu incididunt eiusmod voluptate excepteur consequat ipsum ad. Quis veniam exercitation eiusmod amet non non eu aliquip quis ea. Tempor deserunt nulla adipisicing qui fugiat ipsum labore duis et ea consectetur.",
        "picture": "https://comicvine.gamespot.com/a/uploads/scale_small/12/124259/8459983-rco031_1650495781.jpg",
        "squarePic": "https://wipy.tv/wp-content/uploads/2019/07/filtran-el-tr%C3%A1iler-de-%E2%80%98Black-Widow%E2%80%99.jpg",
        "name": "Captain America"
    },
    {   
        "id":"7",
        "about": "Esse magna Lorem ipsum incididunt sit. Enim eiusmod proident in adipisicing anim excepteur laborum magna aliqua adipisicing ad qui aliqua. Eiusmod enim ullamco laboris adipisicing tempor sint labore. Exercitation cupidatat incididunt nostrud velit nisi aute eu ex pariatur deserunt mollit. Deserunt nisi enim irure elit. Aute amet amet consequat laborum dolor sint anim Lorem id fugiat commodo cupidatat ad. Ipsum quis enim consectetur occaecat laboris esse.",
        "picture": "https://comicvine.gamespot.com/a/uploads/scale_small/11118/111187046/7397359-0398898002-EQH1ysWWsAA7QLf",
        "squarePic": "https://www.tooys.mx/pub/media/catalog/product/cache/89d4a95274a31fe8bdfcc437494b2c9e/f/a/falcon_marvel_gallery_5c4dc5df6c14d_-_copia.jpg",
        "name": "Daredevil"
    },
    {   
        "id":"8",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://comicvine.gamespot.com/a/uploads/scale_small/11156/111564182/9110190-punisherinhyuk.jpeg",
        "squarePic": "http://www.mundocinematografico.net/wp-content/uploads/2018/02/black-panther-marvel-cosas-felices.jpg",
        "name": "Punisher"
    },
    {   
        "id":"9",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://comicvine.gamespot.com/a/uploads/scale_small/12/124259/8926324-large-2680196.jpg",
        "squarePic": "https://img-cdn.hipertextual.com/files/2019/09/hipertextual-filtracion-revela-que-doctor-strange-2-resucitara-dos-personajes-muertos-marvel-2019435911.jpg?strip=all&lossy=1&quality=57&resize=740%2C490&ssl=1",
        "name": "Deadpool"
    }, {
        "id":"10",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://comicvine.gamespot.com/a/uploads/scale_small/12/124259/8469814-ezgif-4-76f99dd072.jpg",
        "squarePic": "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/09/28/15696592030335.jpg",
        "name": "Silver Surfer"
    },
    {   "id":"11",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://comicvine.gamespot.com/a/uploads/scale_small/11126/111269625/7324346-excalibur%20variant.jpg",
        "squarePic": "https://img.chilango.com/2018/05/quien-es-capitan-marvel.jpg",
        "name": "Gambit"
    },
    {   "id":"12",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://comicvine.gamespot.com/a/uploads/scale_small/12/124259/7740086-rco001_1609391996.jpg",
        "squarePic": "https://img.chilango.com/2018/05/quien-es-capitan-marvel.jpg",
        "name": "Cyclops"
    },
    {   
        "id":"13",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://comicvine.gamespot.com/a/uploads/scale_small/11112/111123579/7316596-fantastic_four_vol_6_1_mr._fantastic_variant_textless.jpg",
        "squarePic": "https://img.chilango.com/2018/05/quien-es-capitan-marvel.jpg",
        "name": "Mr. Fantastic"
    },
    {   "id":"14",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://comicvine.gamespot.com/a/uploads/scale_small/12/124259/9098745-large-5032428.jpg",
        "squarePic": "https://img.chilango.com/2018/05/quien-es-capitan-marvel.jpg",
        "name": "Nightcrawler"
    },
    {   
        "id":"15",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://comicvine.gamespot.com/a/uploads/scale_small/8/80111/5323224-nick%20furia%2016.png",
        "squarePic": "https://img.chilango.com/2018/05/quien-es-capitan-marvel.jpg",
        "name": "Nick Fury"
    }
]

const dcHeroes = [
    {   "id":"201",
        "about": "Ipsum duis incididunt ullamco tempor. Amet incididunt Lorem consequat labore culpa. Pariatur amet veniam reprehenderit sunt laborum excepteur. Labore eu ut ut Lorem labore aliqua quis ex elit nulla in incididunt commodo aliquip. Velit excepteur eiusmod Lorem esse officia. Irure aliquip Lorem fugiat voluptate dolor duis consectetur aliquip pariatur tempor reprehenderit deserunt.",
        "picture": "https://comicvine.gamespot.com/a/uploads/scale_small/11156/111564182/8725495-batgirls-15-open-to-order-variant-scaled.jpeg",
        "squarePic": "https://dam.smashmexico.com.mx/wp-content/uploads/2018/06/27181227/ironman_portada2.jpg",
        "name": "Batwoman"
    },
    {   "id":"202",
        "about": "Ipsum duis incididunt ullamco tempor. Amet incididunt Lorem consequat labore culpa. Pariatur amet veniam reprehenderit sunt laborum excepteur. Labore eu ut ut Lorem labore aliqua quis ex elit nulla in incididunt commodo aliquip. Velit excepteur eiusmod Lorem esse officia. Irure aliquip Lorem fugiat voluptate dolor duis consectetur aliquip pariatur tempor reprehenderit deserunt.",
        "picture": "https://comicvine.gamespot.com/a/uploads/scale_small/11111/111113340/9032624-green-lantern-4-open-to-order-variant-shaner.jpg",
        "squarePic": "https://dam.smashmexico.com.mx/wp-content/uploads/2018/06/27181227/ironman_portada2.jpg",
        "name": "Green Lantern"
    },
    {   
        "id":"203",
        "about": "Mollit officia ad excepteur anim proident incididunt eiusmod mollit consectetur id sit velit. Laborum ut magna officia qui laboris eiusmod do culpa. Culpa dolor officia velit cillum culpa deserunt cupidatat cillum ipsum laborum.",
        "picture": "https://comicvine.gamespot.com/a/uploads/scale_small/11144/111442876/8759934-jrjrhr.jpg",
        "squarePic": "https://comicvine.gamespot.com/a/uploads/scale_small/11144/111442876/8759934-jrjrhr.jpg",
        "name": "Batman"
    },
    {   
        "id":"204",
        "about": "Laboris est duis eiusmod adipisicing cillum ut sit ea Lorem non laboris quis Lorem. Est culpa esse aliqua non labore dolor esse labore nulla mollit. Nostrud amet est quis adipisicing dolor. Labore veniam elit veniam non ad ex consequat excepteur eiusmod. Minim cupidatat velit Lorem culpa quis consequat incididunt qui amet incididunt pariatur ex aliquip aliqua. Magna ex elit in aliquip minim eu ut ut fugiat ullamco deserunt adipisicing cillum.",
        "picture": "https://comicvine.gamespot.com/a/uploads/scale_small/11111/111113340/9200557-00_superman_03.jpg",
        "name": "Superman"
    },
    {   "id":"205",
        "about": "Ipsum tempor sunt Lorem est. Fugiat nisi velit veniam labore et ullamco minim adipisicing do culpa. Cillum voluptate reprehenderit aute consectetur.",
        "picture": "https://comicvine.gamespot.com/a/uploads/scale_small/5/57023/7917028-gabymaleev.jpg",
        "squarePic": "https://comicvine.gamespot.com/a/uploads/scale_small/12/124259/9174497-21.jpeg",
        "name": "Green Arrow"
    },
    {   
        "id":"206",
        "about": "Deserunt voluptate aliquip ex dolor Lorem exercitation aliqua nisi fugiat aliquip sunt non. Eu cillum enim velit exercitation officia proident exercitation ipsum exercitation Lorem nulla do. Minim sint dolor nostrud ipsum laborum. Velit ea ad ad consectetur nisi Lorem laborum officia esse. Do eu incididunt eiusmod voluptate excepteur consequat ipsum ad. Quis veniam exercitation eiusmod amet non non eu aliquip quis ea. Tempor deserunt nulla adipisicing qui fugiat ipsum labore duis et ea consectetur.",
        "picture": "https://comicvine.gamespot.com/a/uploads/scale_small/2/24477/9099281-sgspec1.jpg",
        "squarePic": "https://wipy.tv/wp-content/uploads/2019/07/filtran-el-tr%C3%A1iler-de-%E2%80%98Black-Widow%E2%80%99.jpg",
        "name": "Supergirl"
    },
    {   
        "id":"207",
        "about": "Esse magna Lorem ipsum incididunt sit. Enim eiusmod proident in adipisicing anim excepteur laborum magna aliqua adipisicing ad qui aliqua. Eiusmod enim ullamco laboris adipisicing tempor sint labore. Exercitation cupidatat incididunt nostrud velit nisi aute eu ex pariatur deserunt mollit. Deserunt nisi enim irure elit. Aute amet amet consequat laborum dolor sint anim Lorem id fugiat commodo cupidatat ad. Ipsum quis enim consectetur occaecat laboris esse.",
        "picture": "https://comicvine.gamespot.com/a/uploads/scale_small/12/124259/8929444-large-7243214.jpg",
        "squarePic": "https://www.tooys.mx/pub/media/catalog/product/cache/89d4a95274a31fe8bdfcc437494b2c9e/f/a/falcon_marvel_gallery_5c4dc5df6c14d_-_copia.jpg",
        "name": "Flash"
    },
    {   
        "id":"208",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://comicvine.gamespot.com/a/uploads/scale_small/11111/111113340/9032622-aquaman-and-the-lost-kingdom-special-1-open-to-order-variant-cheung.jpg",
        "squarePic": "http://www.mundocinematografico.net/wp-content/uploads/2018/02/black-panther-marvel-cosas-felices.jpg",
        "name": "Aquaman"
    },
    {   
        "id":"209",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://comicvine.gamespot.com/a/uploads/scale_small/12/124259/8988502-ezgif-5-6e9998db59.jpg",
        "squarePic": "https://img-cdn.hipertextual.com/files/2019/09/hipertextual-filtracion-revela-que-doctor-strange-2-resucitara-dos-personajes-muertos-marvel-2019435911.jpg?strip=all&lossy=1&quality=57&resize=740%2C490&ssl=1",
        "name": "Wonderwoman"
    }, {    
        "id":"210",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://comicvine.gamespot.com/a/uploads/scale_small/11138/111381541/8988425-blue-beetle-1-open-to-order-variant-lafuente-675x1024.jpg",
        "squarePic": "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/09/28/15696592030335.jpg",
        "name": "Blue Beetle"
    },
    {   
        "id":"211",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://comicvine.gamespot.com/a/uploads/scale_small/11138/111381541/8408668-large-9468300.jpg",
        "squarePic": "https://img.chilango.com/2018/05/quien-es-capitan-marvel.jpg",
        "name": "Black Adam"
    },
    {   
        "id":"212",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://comicvine.gamespot.com/a/uploads/scale_small/10/100647/6876907-mm4.jpg",
        "squarePic": "https://img.chilango.com/2018/05/quien-es-capitan-marvel.jpg",
        "name": "Martian Manhunter"
    },
    {   
        "id":"213",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://comicvine.gamespot.com/a/uploads/scale_small/1/18154/9236577-0022278698-39168.jpg",
        "squarePic": "https://img.chilango.com/2018/05/quien-es-capitan-marvel.jpg",
        "name": "Catwoman"
    },
    {   
        "id":"214",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://comicvine.gamespot.com/a/uploads/scale_small/11136/111365307/8875022-static-shadows-of-dakota-4-1-25-variant.jpg",
        "squarePic": "https://img.chilango.com/2018/05/quien-es-capitan-marvel.jpg",
        "name": "Static"
    },
    {   
        "id":"215",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://comicvine.gamespot.com/a/uploads/scale_small/11161/111612243/8912349-1325762190-FuFtnhWWYAUk1ub.jpg",
        "squarePic": "https://img.chilango.com/2018/05/quien-es-capitan-marvel.jpg",
        "name": "Beast Boy"
    }
]

let marvel = document.querySelector('#marvel');
let dc = document.querySelector('#dc');

marvel.addEventListener('click', detectarBoton);
dc.addEventListener('click',detectarBoton);


function detectarBoton (event){  
    let listaHeroes;
    if(event.target.classList.contains('details')){
        if (event.target.classList.contains('dc')){
            listaHeroes = dcHeroes;
        }else if(event.target.classList.contains('marvel')){
            listaHeroes = marvelHeroes;
        }
        let id = event.target.classList[1];
        traerInfo(id,listaHeroes)
    }   
}

function traerInfo (id,heroes) {
    const heroe = heroes.find(heroe => heroe.id === id);
    console.log(heroe)
}

const createCards = (company, heroes) => {
    heroes.forEach(heroe => {
        let heroesList = document.getElementById(`${company}`);
        let newHero = document.createElement('div');
        newHero.classList.add('card');
        heroesList.append(newHero);
        let newHeroImg = document.createElement('img');
        newHeroImg.src = heroe.picture;
        let heroInfo = document.createElement('div');
        heroInfo.classList.add('info');
        newHero.append(newHeroImg, heroInfo);
        let heroName = document.createElement('h4');
        heroName.innerText = heroe.name;
        let heroButton = document.createElement('button');
        heroButton.classList.add('details',heroe.id,company);
        heroButton.innerText = 'Details';
        heroButton.id = heroe.name;
        heroInfo.append(heroName, heroButton)
    });
}

createCards('marvel', marvelHeroes);
createCards('dc', dcHeroes);



