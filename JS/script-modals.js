let modal = document.getElementById("myModal");
// Get the image and insert it inside the modal - use its "alt" text as a caption
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");

let classImgForModal = document.querySelectorAll('.imgForModal')
// console.log(classImgForModal)

// let element = document.querySelector('.scene');
// let elementStyles = window.getComputedStyle(element);
// let elementURL = elementStyles.getPropertyValue('background-image')
//ftext = elementURL.toString()

// let elementURL_cut = elementURL.substr(26,40)
// let elementURL_IMG = elementURL_cut.replace('")', '')

// console.log(elementURL_IMG);
// console.log(element.src)

const getUrl_IMGBackground = (imgID) =>{
    console.log(imgID)
    // console.log(imgID.outerText)
    let elementURL = imgID.style.backgroundImage
    let elementURL_cut = elementURL.substr(7,40)
    let elementURL_IMG = elementURL_cut.replace('")', '')
    console.log(elementURL_IMG)
    let i = 0;
    i++
    console.log(i);

    modal.style.display = "block";
    modalImg.src = elementURL_IMG;
    captionText.innerHTML = imgID.title;
}

classImgForModal.forEach(imgID => {
    imgID.addEventListener("click", ()=>{
        let elementURL = imgID.style.backgroundImage
        let elementURL_cut = elementURL.substr(7,50)
        let elementURL_IMG = elementURL_cut.replace('")', '')
        // console.log(elementURL_IMG)
        modal.style.display = "block";
        modalImg.src = elementURL_IMG;
        // captionText.innerHTML = imgID.textContent;
        captionText.insertAdjacentText("beforeend", imgID.textContent) 
        // ME CONCATENA LOS CONTENIDOS Y SE HACE ENORME EL CAPTION
    })
})
// let scene = document.querySelector('.scene')
// HAY QUE AUTOMATIZAR 
// let urlscene = scene.window.getComputedStyle(ul, null);
// console.log(elementURL)
/*

    for(let i=0;i<classImgForModal.length;i++){
        classImgForModal[i].addEventListener("click", function(){
            console.log("El coso es "+this.id)
        }); 
    }




function showImg_AsModal(imgID){
    // imgID.addEventListener("click", () => {
        img = imgID.id
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
    // })
}
*/



// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {}
span.addEventListener("click", () =>{
    modal.style.display = "none";
})
