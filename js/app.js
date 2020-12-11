const app = {
    init: () => {
        document.addEventListener('DOMContentLoaded', app.load);
        console.log('HTML loaded');
    },
    load: () => {
        //the page had finished loading its HTML
        // app.showLoading();
        app.getData();

    },
    // showLoading: () => {
    //     let p = document.querySelector('.list');    
    //     p.textContent = 'Loading content...';
    //     p.className = 'loading-list';
    // },
    getData: () =>{
        // based on the current page ...
        let page = document.body.id;
        switch (page) {
            case 'homepage':
                app.getIndex();

                break;
            case 'faq_page':
                app.getFAQ();

                break;

            default:
                app.somethingElse
        }

        // Menu page
        const menuBtn = document.querySelector('.showMenu');
        const closeBtn = document.querySelector('.closeMenu');
        const displaydropdown = document.querySelector('.display-navs');
        const dropdown_diplay = document.querySelector('.dropdown');
       
        menuBtn.addEventListener('click', app.displayMenu);
        closeBtn.addEventListener('click', app.hideMenu)

        if(window.screen.availWidth < 798){
            dropdown_diplay.classList.toggle('hide-dropdown')
            displaydropdown.addEventListener('click', function(){

                if (dropdown_diplay.classList.contains('hide-dropdown')) {
                    dropdown_diplay.classList.remove('hide-dropdown');
                } else {
               
                    dropdown_diplay.classList.add('hide-dropdown')
                }
            });
        }
        
    },
    getIndex: () => {
        // console.log('This is the homepage');
        console.log('Homepage');
        // Hamburger menu //
       
    },
    getFAQ: () =>{
        const accordions = document.getElementsByClassName('accordion')
        for (let i = 0; i < accordions.length; i++){
            accordions[i].onclick = function(){
                this.classList.toggle('is-open');

                var content = this.nextElementSibling;
                if(content.style.maxHeight){
                    //accordion currently open, so close it
                    content.style.maxHeight = null
                }else{
                    //accordion is currently close, so open it
                    content.style.maxHeight = content.scrollHeight + 'px';
                }

            }
        }

    },
    somethingElse: () => {
        // Hamburger menu //
   
    },
    displayMenu: () =>{
        const show = document.getElementById('menu-content');
        show.style.right = "0";
        show.style.display = "inline-block";
        show.style.transition = "right .4s";
    },
    hideMenu: () =>{
        const show = document.getElementById('menu-content');
        show.style.right = "-220px";
        
    }
}
app.init();