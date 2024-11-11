// //global scope////////////////////////////////////////////////////////////////////////////////////////////////


// let goo ='scope'

// function fuu() {
//     console.log(goo);   
// }

// fuu()

// //local scope////////////////////////////////////////////////////////////////////////////////////////////////
// function nam(){
//     let qonun='aaa'
//     console.log(qonun);
// }
// namangan()

// function samarqand(){
//     console.log(qonun);
// }

// samarqand()
let sub = document.getElementById('sub')
let subV = document.getElementById('subV')
sub.addEventListener('click', () => {
    let inpImage = document.getElementById('image')
    if (inpImage.value == "") {
        alert("Please enter a valid URL")
    } else {
        let valueImage = inpImage.value
    inpImage.value = ""
    let aa = document.getElementById('imgs')

    aa.style.cssText=`
        width: 100%;
        height: 100%;
        background-size: 100% 100%;
    `
    
    aa.src = `${valueImage}`
    }


    
})

subV.addEventListener('click', () => {
    let inpVideo = document.getElementById('video')

    if (inpVideo.value=="") {
        alert('please enter a valid url')
    } else {
        let valueVideo = inpVideo.value
        inpVideo.value = ""
        let bb = document.getElementById('vids')
        bb.style.cssText = `
        width: 100%;
        height: 100%;
        background-size: 100% 100%;
    `
    bb.src = `${valueVideo}`

    }
})

let downloadI = document.getElementById('downloadI')
let downloadV = document.getElementById('downloadV');


downloadI.addEventListener('click', () => {
    let aa = document.getElementById('imgs')
    let name = document.getElementById('name')
    let link =aa.src
    let vv =name.value
    let a= document.createElement('a')
    a.href = link
    a.download = `${vv}.jpg`
    a.click()
    name.value = ""

    if (vv == "") {
        alert('Please enter a name')
    }
});
downloadV.addEventListener('click', () => {
    let aaV = document.getElementById('video')
    let nameV = document.getElementById('nameV')
    let linkV =aaV.src
    let vvV =nameV.value
    let aV= document.createElement('a')
    aV.href = linkV
    aV.download = `${vvV}.jpg`
    aV.click()
    nameV.value = ""

    if (vvV == "") {
        alert('Please enter a name')
    }
});