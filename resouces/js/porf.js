const navs = ['About Me','Projects', 'Skills', 'Contact', 'To Do'];

function renderNav(nav){
    const navigations = document.getElementById('navigation');
    console.log(navigations)
    let ul = document.createElement('ul');
    navigations.appendChild(ul)
    
        // console.log(text)
    for(let i = 0; i < nav.length; i++){
        console.log(nav[i])
        if(nav[i] == 'About Me'){
            let li = document.createElement('li');
            let anchor = document.createElement('a');
            li.setAttribute('class', nav[i])
            anchor.setAttribute('href', '#');
            anchor.innerHTML = nav[i];
            ul.appendChild(li)
            li.appendChild(anchor)
        
        }else if(nav[i] == 'Projects'){
            let li = document.createElement('li');
            let anchor = document.createElement('a');
            li.setAttribute('class', nav[i])
            anchor.setAttribute('href', '#');
            anchor.innerHTML = nav[i];
            ul.appendChild(li)
            li.appendChild(anchor)
        
        }else if(nav[i] == 'Skills'){
            let li = document.createElement('li');
            let anchor = document.createElement('a');
            li.setAttribute('class', nav[i])
            anchor.setAttribute('href', '#');
            anchor.innerHTML = nav[i];
            ul.appendChild(li)
            li.appendChild(anchor)
    
        }else if(nav[i] == 'Contact'){
            let li = document.createElement('li');
            let anchor = document.createElement('a');
            li.setAttribute('class', nav[i])
            anchor.setAttribute('href', '#');
            anchor.innerHTML = nav[i];
            ul.appendChild(li)
            li.appendChild(anchor)
    
        
        }else if(nav[i] == 'To Do'){
           
            let li = document.createElement('li');
            let anchor = document.createElement('a');
            li.setAttribute('class', nav[i])
            anchor.setAttribute('href', '#');
            anchor.innerHTML = nav[i];
            ul.appendChild(li)
            li.appendChild(anchor)
    
        }
   
    }
   
}

renderNav(navs)