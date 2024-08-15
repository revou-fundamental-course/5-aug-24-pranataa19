// Mengambil referensi elemen-elemen yang diperlukan
const form = document.getElementById('kalkulatorbmi');
const genderInputs = document.getElementsByName('gender');
const weightInput = document.getElementById('weight');
const ageInput = document.getElementById('age');
const heightInput = document.getElementById('height');
const hasilBMI = document.getElementById('hasilbmi');
const categoryOutput = document.getElementById('category');
const bmiValueOutput = document.getElementById('bmivalue');
const miniDescOutput = document.getElementById('minidesc');
const rangeBMIOutput = document.getElementById('rangebmi');
const solusiBMIOutput = document.getElementById('solusibmi');

// Fungsi untuk menghitung
function hitung() {
    // Validasi input
    if (!validateInputs()) {
        return;
    }

    const gender = document.querySelector('input[name="gender"]:checked').value;
    const weight = parseFloat(weightInput.value);
    const age = parseInt(ageInput.value);
    const height = parseFloat(heightInput.value) / 100; // Ubah tinggi ke meter

    // Rumus hitung BMI berdasarkan tuagas
    const bmi = weight / (height * height);
    displayBMIResult(bmi, gender);
}

// Fungsi untuk menampilkan hasil 
function displayBMIResult(bmi, gender) {
    let category, miniDesc, rangeBMI, solusiBMI;

    // Klasifikasi Berat badan
    if (bmi < 18.5) {
        category = "Kekurangan Berat Badan";
        miniDesc = "Anda berada dalam kategori kekurangan berat badan.";
        rangeBMI = "BMI di bawah 18,5 menunjukkan berat badan kurang.";
        solusiBMI = "Konsultasikan dengan ahli gizi untuk rencana peningkatan berat badan yang sehat.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal (Ideal)";
        miniDesc = "Anda berada dalam kategori berat badan normal.";
        rangeBMI = "BMI antara 18,5 dan 24,9 menunjukkan berat badan ideal.";
        solusiBMI = "Pertahankan gaya hidup sehat untuk menjaga BMI Anda.";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Kelebihan Berat Badan";
        miniDesc = "Anda berada dalam kategori kelebihan berat badan.";
        rangeBMI = "BMI antara 25 dan 29,9 menunjukkan berat badan lebih.";
        solusiBMI = "Konsultasikan dengan ahli gizi untuk rencana penurunan berat badan yang sehat.";
    } else {
        category = "Obesitas";
        miniDesc = "Anda berada dalam kategori obesitas.";
        rangeBMI = "BMI 30 atau lebih menunjukkan obesitas.";
        solusiBMI = "Konsultasikan dengan ahli gizi untuk rencana penurunan berat badan yang lebih serius.";
    }

    // Menampilkan hasil di elemen HTML
    bmiValueOutput.textContent = bmi.toFixed(2);
    categoryOutput.textContent = category;
    miniDescOutput.textContent = miniDesc;
    rangeBMIOutput.textContent = rangeBMI;
    solusiBMIOutput.textContent = solusiBMI;
    hasilBMI.style.display = 'block';
}

// Fungsi untuk validasi input
function validateInputs() {
    let hasError = false;

    // Validasi jenis kelamin
    if (!document.querySelector('input[name="gender"]:checked')) {
        hasError = true;
    }

    // Daftar input yang harus divalidasi
    const inputs = [weightInput, ageInput, heightInput];

    inputs.forEach(input => {
        if (input.value.trim() === "" || input.value <= 0 || isNaN(input.value)) {
            hasError = true;
        }
    });

    if (hasError) {
        alert("Data yang Anda input belum lengkap.");
        return false;
    }

    return true;
}

// Fungsi untuk mereset form dan hasil
function resetFormAndResult() {
    form.reset();
    hasilBMI.style.display = 'none';
    categoryOutput.textContent = '';
    bmiValueOutput.textContent = '';
    miniDescOutput.textContent = '';
    rangeBMIOutput.textContent = '';
    solusiBMIOutput.textContent = '';
}

//Fitur download
document.getElementById("downloadbtn").addEventListener("click", function (event) {
    event.preventDefault();
    alert("Maaf, fiitur ini belum tersedia.");
});


// Event listener untuk tombol hitung 
document.getElementById('hitungbtn').addEventListener('click', hitung);

// Event listener untuk tombol reset
document.getElementById('resetbtn').addEventListener('click', resetFormAndResult);
