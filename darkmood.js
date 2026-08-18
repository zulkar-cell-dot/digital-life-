/* =====================================================
   DIGITAL LIFE STUDIO
   JAVASCRIPT
   ===================================================== */


/* =====================================================
   DARK MODE
   ===================================================== */

function toggleTheme() {

    document.body.classList.toggle("dark");


    // Simpan pilihan pengguna

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("digitalTheme", "dark");

    } else {

        localStorage.setItem("digitalTheme", "light");

    }

}


/* =====================================================
   SEMAK TEMA SEMASA PAGE DIBUKA
   ===================================================== */

function loadTheme() {

    const theme =
        localStorage.getItem("digitalTheme");


    if (theme === "dark") {

        document.body.classList.add("dark");

    }

}


/* =====================================================
   SAIZ FONT
   ===================================================== */

let fontScale = 1;


function changeFont(amount) {

    fontScale =
        fontScale + (amount * 0.05);


    // Had minimum dan maksimum

    if (fontScale < 0.85) {

        fontScale = 0.85;

    }


    if (fontScale > 1.30) {

        fontScale = 1.30;

    }


    document.body.style.fontSize =
        fontScale + "em";

}


/* =====================================================
   KUIZ
   ===================================================== */

function semakJawapan(soalan, betul, button) {


    /*
       Cari card kuiz yang mengandungi
       butang yang ditekan.
    */

    const card =
        button.closest(".quiz");


    /*
       Ambil SEMUA pilihan jawapan.

       Kita tidak akan membuang pilihan
       atau menyembunyikannya.
    */

    const semuaPilihan =
        card.querySelectorAll(".option");


    /*
       Buang status lama sahaja.
    */

    semuaPilihan.forEach(function(pilihan) {

        pilihan.classList.remove("correct");

        pilihan.classList.remove("wrong");

    });


    /*
       Tandakan pilihan yang baru dipilih.
    */

    if (betul) {

        button.classList.add("correct");

    } else {

        button.classList.add("wrong");

    }


    /*
       Cari tempat mesej.
    */

    const feedback =
        document.getElementById(
            "feedback" + soalan
        );


    /*
       Paparkan mesej.
    */

    if (betul) {

        feedback.innerHTML =
            "✅ <strong>Betul!</strong> Jawapan anda tepat.";

    } else {

        feedback.innerHTML =
            "❌ <strong>Salah!</strong> Cuba fikir semula dan pilih jawapan yang lain.";

    }

}


/* =====================================================
   NOTA INTERAKTIF
   ===================================================== */

function toggleNote() {

    const note =
        document.getElementById("secretNote");


    /*
       Tambah atau buang class "show".
    */

    note.classList.toggle("show");

}


/* =====================================================
   SIMPAN REFLEKSI
   ===================================================== */

function saveReflection() {


    const reflection =
        document.getElementById("reflection");


    const message =
        document.getElementById("saveMsg");


    const text =
        reflection.value.trim();


    /*
       Jika kosong
    */

    if (text === "") {

        message.innerHTML =
            "⚠️ Sila tulis refleksi dahulu.";

        return;

    }


    /*
       Simpan dalam browser
    */

    localStorage.setItem(
        "digitalLifeReflection",
        text
    );


    /*
       Paparkan mesej
    */

    message.innerHTML =
        "✅ <strong>Refleksi berjaya disimpan!</strong>";

}


/* =====================================================
   PADAM REFLEKSI
   ===================================================== */

function clearReflection() {


    const reflection =
        document.getElementById("reflection");


    const message =
        document.getElementById("saveMsg");


    reflection.value = "";


    localStorage.removeItem(
        "digitalLifeReflection"
    );


    message.innerHTML =
        "🗑️ Refleksi telah dipadam.";

}


/* =====================================================
   LOAD REFLEKSI
   ===================================================== */

function loadReflection() {


    const saved =
        localStorage.getItem(
            "digitalLifeReflection"
        );


    if (saved) {

        document.getElementById(
            "reflection"
        ).value = saved;

    }

}


/* =====================================================
   APABILA WEBSITE SIAP DIMUATKAN
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        loadTheme();

        loadReflection();

    }
);/* =====================================================
   VOICE-OVER MULTIMEDIA
   ===================================================== */

function playMultimediaVoice() {

    // Periksa sokongan browser

    if (!("speechSynthesis" in window)) {

        alert(
            "Pelayar anda tidak menyokong fungsi Voice-over."
        );

        return;
    }


    // Hentikan suara yang sedang dimainkan

    speechSynthesis.cancel();


    // Teks Voice-over

    const text =
        "Selamat datang ke bahagian multimedia " +
        "DigitalLife Studio. " +

        "Dalam laman web ini, beberapa elemen multimedia " +
        "digunakan untuk menjadikan pembelajaran lebih menarik. " +

        "Antaranya ialah grafik, animasi, video dan voice-over. " +

        "Grafik membantu menyampaikan maklumat secara visual. " +

        "Animasi pula menjadikan kandungan lebih dinamik dan menarik. " +

        "Video dapat memberikan penerangan melalui gabungan imej " +
        "dan bunyi. " +

        "Manakala voice-over membantu pelajar memahami penerangan " +
        "melalui suara. " +

        "Gabungan elemen-elemen ini dapat menjadikan pembelajaran " +
        "gaya hidup digital lebih interaktif dan menyeronokkan.";


    // Cipta objek suara

    const voice =
        new SpeechSynthesisUtterance(text);


    // Bahasa Melayu

    voice.lang = "ms-MY";


    // Kelajuan

    voice.rate = 0.9;


    // Nada

    voice.pitch = 1;


    // Volume

    voice.volume = 1;


    // Mainkan

    speechSynthesis.speak(voice);

}


/* =====================================================
   HENTIKAN VOICE-OVER
   ===================================================== */

function stopVoice() {

    if ("speechSynthesis" in window) {

        speechSynthesis.cancel();

    }

}