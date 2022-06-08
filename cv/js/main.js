/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // direccioname al id
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('filters__active')
        });

        target.classList.add('filters__active');

        tabs.forEach(t => {
            t.classList.remove('filter-tab-active')
        });

        tab.classList.add('filter-tab-active');
    })
})