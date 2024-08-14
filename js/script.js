function hitungBMI() {
    // get Nilai dari input
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Konversi cm ke meter

    // Rumus 
    const bmi = weight / (height * height);

    // Kategori, Range dan Solusi
    let category = '';
    let miniDesc = '';
    let rangeBMI = '';
    let solusiBMI = '';
    if (bmi < 18.5) {
        category = 'Kurus';
        miniDesc = 'Anda memiliki berat badan di bawah normal.';
        rangeBMI = 'BMI Anda di bawah 18.5, ini termasuk kategori kurus.';
        solusiBMI = 'Disarankan untuk meningkatkan asupan kalori dan berkonsultasi dengan ahli gizi.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal';
        miniDesc = 'Anda memiliki berat badan normal.';
        rangeBMI = 'BMI Anda berada di antara 18.5 dan 24.9, ini termasuk kategori normal.';
        solusiBMI = 'Pertahankan pola makan dan gaya hidup sehat.';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Berat badan berlebih';
        miniDesc = 'Anda memiliki berat badan berlebih.';
        rangeBMI = 'BMI Anda berada di antara 25 dan 29.9, ini termasuk kategori berat badan berlebih.';
        solusiBMI = 'Pertimbangkan untuk mengurangi asupan kalori dan meningkatkan aktivitas fisik.';
    } else {
        category = 'Obesitas';
        miniDesc = 'Anda memiliki obesitas.';
        rangeBMI = 'BMI Anda di atas 30, ini termasuk kategori obesitas.';
        solusiBMI = 'Disarankan untuk segera berkonsultasi dengan dokter atau ahli gizi.';

    }

    // Meampilkan hasil
    document.getElementById('bmiValue').innerText = bmi.toFixed(2);
    document.getElementById('category').innerText = category;
    document.getElementById('miniDesc').innerText = miniDesc;
    document.getElementById('rangeBMI').innerText = rangeBMI;
    document.getElementById('solusiBMI').innerText = solusiBMI;
}

function downloadHasil() {
    // Download
    alert('Fitur download hasil BMI belum tersedia.');
}
