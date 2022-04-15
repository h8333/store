/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const createSections = document.querySelectorAll("section");

// build the nav
document.addEventListener("DOMContentLoaded",createNavbar);
function createNavbar()
{
    const item=document.querySelector("ul#navbar__list");
    const dfragemnt = document.createDocumentFragment();
    for(const section of createSections)
    {
        const list = document.createElement("li");
        list.innerHTML= `<a href="#${section.id}" 
        class="menu__link">
        ${section.dataset.nav}</a>`
        //create Function to scroll to view smooth
        list.addEventListener("click",(e) =>
        {
            e.preventDefault();
            section.scrollIntoView({behavior:"smooth"});
        });
        dfragemnt.appendChild(list);
    }
    item.appendChild(dfragemnt);
}
// Add class 'active' to section when near top of viewport
window.addEventListener("scroll",activSection);
function activSection()
{
    for(const section of createSections)
    {
        const topSection=section.getBoundingClientRect().top;
        const ilink=document.querySelector(`a[href="#${section.id}"]`);
        if(topSection > 0 && topSection <= 300)
        {
            section.classList.add("your-active-class");
            ilink.classList.add("active");
        }
        else
        {
           section.classList.remove("your-active-class");
           ilink.classList.remove("active");
        }
    }
}



