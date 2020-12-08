const app = {
    init: () => {
        document.addEventListener('DOMContentLoaded', app.load);
        console.log('HTML loaded');
    },
    load: () => {
        //the page had finished loading its HTML
        //app.showLoading();
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

            case 'about':
                app.getAboutUs();

                break;

            default:
                app.somethingElse();
        }

        const menuBtn = document.querySelector('.showMenu');
        const closeBtn = document.querySelector('.closeMenu');
        
        menuBtn.addEventListener('click', app.displayMenu);
        closeBtn.addEventListener('click', app.hideMenu)
        
    },
    getIndex: () => {
        // console.log('This is the homepage');
        console.log('Homepage');
        // Hamburger menu //
       
    },
    getAboutUs: () =>{
        console.log('About Us page');
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