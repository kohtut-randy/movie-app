console.log("hello")
const imageDomain = "https://image.tmdb.org/t/p/w1280"
const popular = document.querySelector(".popular");
const comedy = document.querySelector(".comedy")
const carousel= document.querySelector(".carousel-inner")
const action = document.querySelector(".action")
const releaseContainer = document.querySelector(".release")

function renderCard(list,listUl){
    for(let i = 0;i<list.length;i++){
        const itemList = list[i];
        const itemContainer = generateCard(itemList);
        listUl.appendChild(itemContainer);
    }
}

function generateCard(item){
    const popularMovie=  document.createElement("div");
    popularMovie.className ="popularMovie"
    const popularImg = document.createElement("img");
    popularImg.className ="popularImg"
    popularImg.src= imageDomain + item.poster_path; 
    const popularTitle = document.createElement("p");
    popularTitle.className ="popularTitle"
    popularTitle.innerText = item.title;
    const popularRelease = document.createElement("span");
    popularRelease.className ="popularRelease"
    popularRelease.innerText =item.release_date;
    popularMovie.append(popularImg,popularTitle,popularRelease);
    return popularMovie
}
function renderCarousel(list){
    for(let i = 0;i<list.length;i++){
        const itemList = list[i];
        const itemContainer = generateCarousel(itemList);
        carousel.appendChild(itemContainer);
    }
}
function generateCarousel(item){
    const carouselItem= document.createElement("div")
    carouselItem.className ="carousel-item";
    const carouselImg = document.createElement("img");
    carouselImg.className="d-block w-100"
    carouselImg.src = imageDomain + item.backdrop_path;
    // const carouseText = document.createElement("div");
    // carouseText.className = "carousel-caption d-none d-md-block";
    // carouseText.appendChild(carouselTitle);
    // const carouselTitle = document.createElement("h5")
    // carouselTitle.innerText =item.name;
    // carouselItem.className="carouselTitle"
    carouselItem.append(carouselImg);
    return carouselItem;
}


const popularUrl ="https://api.themoviedb.org/3/movie/popular?api_key=6826c6e577e15bbff30e1a58b7082178&language=en-US&page=10"

const comedyUrl = "https://api.themoviedb.org/3/discover/movie?with_genres=35&api_key=6826c6e577e15bbff30e1a58b7082178"

const TVonAir = "https://api.themoviedb.org/3/tv/on_the_air?api_key=6826c6e577e15bbff30e1a58b7082178"

const actionUrl = "https://api.themoviedb.org/3/discover/movie?with_genres=28&api_key=6826c6e577e15bbff30e1a58b7082178"

const releaseUrl = "https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2021-09-15&primary_release_date.lte=2021-10-20&api_key=6826c6e577e15bbff30e1a58b7082178"
function getDataFromSever (url) {
    return fetch (url, {
        method : "GET",
        headers : {
             "Content-type" : "application/json"
        }
    })
    .then (function (res) {
        return res.json()
    })
    .then (function (data) {
        console.log(data.results)
        return data
    })
    .catch (function (err) {
        console.log(err)
    })
}
let getCarousel = getDataFromSever(TVonAir).then(function(item){
    getCarousel = item.results;
    renderCarousel(getCarousel)
})
let getPopular = getDataFromSever(popularUrl).then(function(item){
    getPopular = item.results;
    renderCard(getPopular,popular);
})
let getComedy = getDataFromSever(comedyUrl).then(function(item){
    getComedy = item.results;
    renderCard(getComedy,comedy);
})
let getAction = getDataFromSever(actionUrl).then(function(item){
    getAction = item.results;
    renderCard(getAction,action);
})
let getRelease = getDataFromSever(releaseUrl).then(function(item){
    getRelease = item.results;
    renderCard(getRelease,releaseContainer);
})




