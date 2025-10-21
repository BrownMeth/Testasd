// frontend JavaScript logic for the film summary application

document.addEventListener('DOMContentLoaded', function() {
    const filmForm = document.getElementById('film-form');
    const filmSummaryContainer = document.getElementById('film-summary');

    filmForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const filmTitle = document.getElementById('film-title').value;
        const filmDescription = document.getElementById('film-description').value;

        const filmSummary = document.createElement('div');
        filmSummary.classList.add('film-summary-item');
        filmSummary.innerHTML = `<h3>${filmTitle}</h3><p>${filmDescription}</p>`;

        filmSummaryContainer.appendChild(filmSummary);
        filmForm.reset();
    });
});