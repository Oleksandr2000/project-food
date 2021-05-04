function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    //TABS
    // I create tabs in this lesson
    // I need get variable from index.htmll. We get them.
    const tabs = document.querySelectorAll(tabsSelector),
    tabsContent = document.querySelectorAll(tabsContentSelector),
    tabsParent = document.querySelector(tabsParentSelector);
    // The first task is to hide all unnecessary tabs
    function hideTabContent() {
        tabsContent.forEach(item=> {
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
        });
        tabs.forEach(item => {
        item.classList.remove(activeClass);
        });
    }
    // create a function that show tabs
    function showsTabContent(i = 0){
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
    }
    // Now I will call this function
    hideTabContent();
    showsTabContent(1);
    // add an event handler that will switch tabs
    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

            if(target && target.classList.contains(tabsSelector.slice(1))){
            tabs.forEach((item, i) => {
                if(target == item ){
                    hideTabContent();
                    showsTabContent(i);
                }
            });
        }
    });
}

export default tabs;