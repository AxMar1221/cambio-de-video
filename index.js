window.addEventListener('load', ()=> {
    console.log('Body loaded')
})

const vidWomen = document.querySelector('.vid1')
const vidMen = document.querySelector('.vid2')
const vidDefault = document.querySelector('.vid3')

const videoBox = document.querySelector('.videos')
const videoBase = document.getElementById('videoBase')

function showVid1(){
    videoBox.classList.add('hide')
    setTimeout(() => {
        videoBase.src = vidWomen.src
        setTimeout(() => {
            videoBox.classList.remove('hide')
            videoBase.play();  
        }, 200);
    }, 300);
}
function showVid2(){
    videoBox.classList.add('hide')
    setTimeout(() => {
        videoBase.src = vidMen.src
        setTimeout(() => {
            videoBox.classList.remove('hide')
            videoBase.play();  
        }, 200);
    }, 300);
}
function showVid3(){
    videoBox.classList.add('hide')
    setTimeout(() => {
        videoBase.src = vidDefault.src
        setTimeout(() => {
            videoBox.classList.remove('hide')
            videoBase.play();  
        }, 200);
    }, 300);
}

// let totalWomen = document.getElementById('count-women')
// let totalMen = document.getElementById('count-men')
// let mostDif = document.getElementById('most')

const counter = 'http://3.140.212.226:5003/countpeople'

fetch( counter )
    .then( resp => { return resp.json()})
    .then( data => {
        console.log(data)

        // let totalW = data.mujeres; totalWomen.textContent = totalW;
        // let totalM = data.hombres; totalMen.textContent = totalM;

        if (data.mujeres > data.hombres ){
            // let mostWomen = 'mujeres'; mostDif.textContent = `Hay más ${mostWomen}`;
            videoBase.src = showVid1()
        } else if (data.mujeres < data.hombres) {
            // let mostMen = 'hombres'; mostDif.textContent = `Hay más ${mostMen}`;
            videoBase.src = showVid2()
        } else {
            videoBase.src = showVid3()
        }

})
.catch( err => { console.log(err); })

setInterval('location.reload()', 15000);