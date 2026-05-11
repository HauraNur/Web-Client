// Contact form handling
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const nama = document.getElementById('nama').value;
            const email = document.getElementById('email').value;
            const telepon = document.getElementById('telepon').value;
            const layanan = document.getElementById('layanan').value;
            const pesan = document.getElementById('pesan').value;

            alert('Terima kasih, ' + nama + '! Pesan Anda telah terkirim.');
            contactForm.reset();
        });
    }
});
