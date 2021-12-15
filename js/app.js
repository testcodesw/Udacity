var listsection = document.querySelectorAll('section');
var seul = document.querySelector('ul');
const treeitems = document.createDocumentFragment();


listsection.forEach(section => {

    // Comes with section data-nav  value
    const datavalue = section.getAttribute("data-nav");

    // Comes with section id value
    const idattrvalue = section.getAttribute('id');

    //create li
    const newli = document.createElement("li");

    //create li
    const clinks = document.createElement("a");

    //give section id value to href value
    clinks.setAttribute('href',idattrvalue);

    //invalidate href value && get specific section smooth scroll
    clinks.addEventListener('click', e => {
        e.preventDefault();
        section.scrollIntoView({behavior : "smooth"})
    });

    // add the name of sections from the data-nav
    const text = document.createTextNode(datavalue);

    clinks.appendChild(text);
    newli.appendChild(clinks);
    treeitems.appendChild(newli);
    });

    // Aggregate all operations in li 
    seul.appendChild(treeitems);


//Check when scrolling starts

window.addEventListener('scroll',()=>{

   //Specify the activated section to deactivate it
            const reacsection = document.getElementsByClassName('your-active-class')[0];
    
            if(reacsection !== undefined){
                reacsection.classList.remove('your-active-class')
            }
   //Specify the activated link to deactivate it
   const reaclink = document.getElementsByClassName('active-link')[0];
    
            if(reaclink !== undefined){
                reaclink.classList.remove('active-link')
            }
    

    // Loop Section


            listsection.forEach(section => {
    
            const scposition = section.getBoundingClientRect();
    
            if(scposition.top >=-50 && scposition.top<394){
                                   
                //To give the specified sections a class
                    section.classList.add('your-active-class');

                    
             const listactive = document.querySelectorAll(`a[href='${section.id}']`)[0].parentElement;
             //To give the li sections a class
    
             listactive.classList.add("active-link");
            }
        })
    })






