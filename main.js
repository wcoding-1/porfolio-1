
//imported modules
// import { languageData } from './modules/rawData';
import  rawDataPage  from './modules/rawData.js';
import data from './modules/process.js';
const {processData} = data;

const {languageDatas ,getNav} = rawDataPage

//return data from rawData page;
const navs = getNav();
const programm = languageDatas()

//function to create navigation elements and insert content in them.
function renderNav(nav){
    const navigations = document.getElementById('navigation');
    let ul = document.createElement('ul');
    navigations.appendChild(ul)
    
    for(let i = 0; i < nav.length; i++){
        
        let li = document.createElement('li');
            let anchor = document.createElement('a');
            li.setAttribute('class', nav[i]);
            anchor.setAttribute('href', '#');
            anchor.innerHTML = nav[i];
            ul.appendChild(li);
            li.appendChild(anchor);
   
    }
   
}


renderNav(navs);



//function for creating and rendering the galary tags.
const renderGalary = (data)=>{
    const galary = document.querySelector('.galary')

for(let i = 0; i < data.length; i++){
    let divBox = document.createElement('div');
    divBox.setAttribute('id', data[i].name)
    divBox.style.textAlign = 'center';
    divBox.style.padding = '10px';
    let imgTag = document.createElement('img');
    imgTag.setAttribute('src', data[i].src);
    divBox.appendChild(imgTag);
    galary.appendChild(divBox)

    //create element for languages creators
    let h4 = document.createElement('h4');
    h4.innerHTML =`Creator: ${data[i].author}`;
    divBox.appendChild(h4)

    //create element for language descreption.
    let paragraph = document.createElement('p');
    paragraph.textContent = data[i].descreption
    divBox.append(paragraph)

}



}

renderGalary(processData(programm));

