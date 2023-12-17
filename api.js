// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Code ini akan dieksekusi setelah halaman selesai dimuat

    // Menampilkan pesan pada console browser
    console.log('Selamat datang di CiptaHost API!');

    // Menampilkan pesan di halaman HTML
    var messageElement = document.createElement('p');
    messageElement.textContent = 'Selamat datang di CiptaHost API!';
    document.body.appendChild(messageElement);
});
