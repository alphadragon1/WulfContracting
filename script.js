/* JavaScript to trigger the scroll animation */
const sections = document.querySelectorAll('section:not(#home)');

const revealSection = function (entries, observer) {
    const [entry] = entries;
    if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
    }
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.1
});

sections.forEach(section => {
    sectionObserver.observe(section); 1 
});