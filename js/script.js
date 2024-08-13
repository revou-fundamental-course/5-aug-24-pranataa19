function hitungBMI() {
    // Ambil nilai dari input
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Konversi cm ke meter

    // Hitung BMI
    const bmi = weight / (height * height);

    // Tentukan kategori BMI
    let category = '';
    let miniDesc = '';
    let rangeBMI = '';
    let solusiBMI = '';
    let diseases = '';
    if (bmi < 18.5) {
        category = 'Kurus';
        miniDesc = 'Anda memiliki berat badan di bawah normal.';
        rangeBMI = 'BMI Anda di bawah 18.5, ini termasuk kategori kurus.';
        solusiBMI = 'Disarankan untuk meningkatkan asupan kalori dan berkonsultasi dengan ahli gizi.';
        diseases = '<li>Malnutrisi</li><li>Anemia</li><li>Osteoporosis</li>';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal';
        miniDesc = 'Anda memiliki berat badan normal.';
        rangeBMI = 'BMI Anda berada di antara 18.5 dan 24.9, ini termasuk kategori normal.';
        solusiBMI = 'Pertahankan pola makan dan gaya hidup sehat.';
        diseases = '<li>Risiko kesehatan rendah</li>';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Berat badan berlebih';
        miniDesc = 'Anda memiliki berat badan berlebih.';
        rangeBMI = 'BMI Anda berada di antara 25 dan 29.9, ini termasuk kategori berat badan berlebih.';
        solusiBMI = 'Pertimbangkan untuk mengurangi asupan kalori dan meningkatkan aktivitas fisik.';
        diseases = '<li>Diabetes tipe 2</li><li>Hipertensi</li><li>Jantung Koroner</li>';
    } else {
        category = 'Obesitas';
        miniDesc = 'Anda memiliki obesitas.';
        rangeBMI = 'BMI Anda di atas 30, ini termasuk kategori obesitas.';
        solusiBMI = 'Disarankan untuk segera berkonsultasi dengan dokter atau ahli gizi.';
        diseases = '<li>Diabetes tipe 2</li><li>Hipertensi</li><li>Jantung Koroner</li><li>Stroke</li>';

    }

    // Tentukan range BMI dan solusi


    // Tampilkan hasil
    document.getElementById('bmiValue').innerText = bmi.toFixed(2);
    document.getElementById('category').innerText = category;
    document.getElementById('miniDesc').innerText = miniDesc;
    document.getElementById('rangeBMI').innerText = rangeBMI;
    document.getElementById('solusiBMI').innerText = solusiBMI;
}

function downloadHasil() {
    // Implementasi logika untuk mendownload hasil dalam format yang diinginkan, misalnya PDF
    alert('Fitur download hasil BMI belum tersedia.');
}
