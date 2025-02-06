const content = document.getElementById('element-2');
const button = document.getElementById('seeMoreBtn');


button.addEventListener('click', () => {
    content.classList.toggle('expanded');
    if (content.classList.contains('expanded')) {
        button.textContent = 'See Less';
    } else {
        button.textContent = 'See More';
    }
});