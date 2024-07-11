(function() {
    // Daftar kunci API yang valid
    const validKeys = ["wxy901def234stu901mno345ijk123qrs345vwx012nop012tuv678ghi567klm567lmn45", "6cde567bcd890yza567nop890rst012fgh890mno123abc901jkl012stu789zab234ghi78", "9klm789pqr456pqr678hij234uvw345def456abc123vwx234yza345hij456opq789efg90"]; // Ganti dengan daftar kunci API yang valid

    // Mendapatkan ID elemen script
    const scriptElement = document.currentScript;
    const apiKey = scriptElement.getAttribute('id');

    // Memeriksa apakah kunci API valid
    if (validKeys.includes(apiKey)) {
        // Buat elemen iframe
        const iframe = document.createElement('iframe');
        iframe.src = 'https://weplystudio.my.id'; // Ganti dengan URL konten yang di-embed
        iframe.width = '100%';
        iframe.height = '100%'; // Sesuaikan tinggi iframe sesuai kebutuhan
        iframe.frameBorder = '0';
        iframe.allowFullscreen = true;

        // Tambahkan iframe ke dalam elemen div dengan ID 'embed-box'
        const embedBox = document.getElementById('embed-box');
        if (embedBox) {
            embedBox.appendChild(iframe);
        } else {
            console.error("Element with id 'embed-box' not found.");
        }
    } else {
        console.error("Invalid API key.");
    }
})();
