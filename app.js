import {imageData} from '/data.js'

const imageSection = document.getElementById('image-section')

function allImagesFunction(){
    let imageSet = ''
    for (let data of imageData.all){
        imageSet += 
            `
            <div class="col-lg-4 col-sm-12">
                <img class="w-100 h-75" src="Images/${data}">
            </div>
            `
        imageSection.innerHTML = imageSet
    }
}

allImagesFunction()

document.addEventListener('click',function(e){
    if(e.target.id){
        if(e.target.id === "all-btn"){
                allImagesFunction()
        }
        else{
            const filterImage = imageData.all.filter(function(data){
                return data.includes(`${e.target.id}`)
            })
            let imageFilter = ""
            for (let filterData of filterImage){
            imageFilter += 
                `
                <div class="col-lg-4 col-sm-12">
                    <img class="w-100 h-75" src="Images/${filterData}">
                </div>
                `
            imageSection.innerHTML = imageFilter
            }
        }
    }
})