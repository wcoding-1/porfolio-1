
//imported modules
import process from './modules/process.js';
import { navs } from './modules/rawData';



//function to create navigation elements and insert content in them.
function renderNav(nav){
    const navigations = document.getElementById('navigation');
    console.log(navigations)
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