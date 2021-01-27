const links = document.querySelectorAll('.main li');
const hamLinks = document.querySelectorAll('.side-nav li');
const sections = document.querySelectorAll('section');
const hamburger =  document.querySelector('.hamburger-cont');
let currentClass = "about";
links.forEach(el=>{
    el.addEventListener('click',(e)=>{
        setTimeout(() => {
            document.querySelector('.side-nav').classList.add('shift');
            hamburger.querySelector('.hamburger').classList.remove('toggle')
        }, 200);
        links.forEach(el=>{
            el.classList.remove('fill');
        });
        el.classList.add('fill');

        hamLinks.forEach(elH=>{
            elH.classList.remove('fill');
            if(elH.dataset.link== el.dataset.link){
                elH.classList.add('fill');
            }
        });

        const visibleClass = `.${el.dataset.link}`;
        currentClass = el.dataset.link;
        sections.forEach(el=>{
            if(currentClass !== el.className){
                el.classList.add('hidden');
            setTimeout(() => {
                el.classList.add('dispnone');
            }, 201);
            }
        });
        setTimeout(() => {
            document.querySelector(visibleClass).classList.remove('dispnone');
        }, 201);

        setTimeout(() => {
            document.querySelector(visibleClass).classList.remove('hidden');
        }, 201);
    });
});

hamburger.addEventListener('click',(e)=>{
    hamburger.querySelector('.hamburger').classList.toggle('toggle');
    document.querySelector('.side-nav').classList.toggle('shift');
});

hamLinks.forEach(el=>{
    el.addEventListener('click',()=>{
        setTimeout(() => {
            document.querySelector('.side-nav').classList.add('shift');
            hamburger.querySelector('.hamburger').classList.remove('toggle')
        }, 200);

        hamLinks.forEach(el=>{
            el.classList.remove('fill');
        });
        el.classList.add('fill');
        links.forEach(elM=>{
            elM.classList.remove('fill');
            if(el.dataset.link == elM.dataset.link){
                elM.classList.add('fill');
            }
        })

        //

        const visibleClass = `.${el.dataset.link}`;
        currentClass = el.dataset.link;
        sections.forEach(el=>{
            if(currentClass !== el.className){
                el.classList.add('hidden');
            setTimeout(() => {
                el.classList.add('dispnone');
            }, 201);
            }
        });
        setTimeout(() => {
            document.querySelector(visibleClass).classList.remove('dispnone');
        }, 201);

        setTimeout(() => {
            document.querySelector(visibleClass).classList.remove('hidden');
        }, 201);
    });
});
