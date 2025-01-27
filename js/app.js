document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.star-rating i');
    const scrollToTopButton = document.getElementById('scrolltop');
    const reviewForm = document.getElementById('reviewForm');
    const reviewText = document.getElementById('reviewText');
    let selectedRating = 0;

    // > Gestion des étoiles
    if (stars.length > 0) {
        stars.forEach(star => {
            star.addEventListener('click', () => {
                selectedRating = parseInt(star.getAttribute('data-value'), 10);
                stars.forEach(s => s.classList.remove('selected'));
                for (let i = 0; i <selectedRating; i++) {
                    stars[i].classList.add('selected');
                }
            });
        });
    }

    // > Gestion du formulaire
    if (reviewForm) {
        reviewForm.addEventListener('submit', (e) => {
            e.preventDefault();

            if (!reviewText || !reviewText.value || selectedRating === 0) {
                alert('Veuillez remplir tous les champs.');
                return;
            }

            console.log('Avis:', reviewText.value);
            console.log('Note:', selectedRating);
            alert('Merci pour votre avis !');
            reviewForm.reset();
            stars.forEach(s => s.classList.remove('selected'));
            selectedRating = 0;
        });
    }

    // > Gestion du bouton scroll-top
    if (scrollToTopButton) {
        let debounce;
        window.addEventListener('scroll', function () {
            clearTimeout(debounce);
            debounce = setTimeout(() => {
                if (window.scrollY > 300) {
                    scrollToTopButton.style.display = 'block';
                } else {
                    scrollToTopButton.style.display = 'none';
                }
            }, 100);
        });

        scrollToTopButton.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
