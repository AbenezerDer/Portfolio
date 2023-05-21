const sections = document.querySelectorAll('.section');
const sectBnts = document.querySelectorAll('.controlls');
const sectBnt = document.querySelectorAll('.control');
const allSectios = document.querySelectorAll('.main-content');


function Pagetransition(){
    //Button click active class
    for(let i = 0; i < sectBnts.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currenrBtn = document.querySelectorAll('.active-btn');
            currenrBtn[0].className = currenrBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //Section Active class
    allSectios.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            //resmove selected from the other btns
            sectBnts.forEach((bnt) =>{
                bnt.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })
            
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}
