<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Kado Spesial Untuk Ali</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>
    <style>
        body { 
            margin: 0; padding: 0; font-family: 'Poppins', sans-serif; 
            background-color: #f0f4ed; 
            /* Pattern Background */
            background-image: radial-gradient(#c8e6c9 1px, transparent 1px);
            background-size: 20px 20px;
            display: flex; justify-content: center; align-items: center; 
            min-height: 100vh; color: #3e4e3b; overflow: hidden; 
        }
        .container { 
            text-align: center; padding: 40px; width: 85%; max-width: 500px; 
            background: #ffffff; border-radius: 25px; 
            box-shadow: 0 15px 35px rgba(100, 120, 90, 0.2); 
            border: 3px solid #a8c69f; position: relative; 
        }
        .slide { display: none; animation: fadeIn 0.5s; font-size: 1.2rem; line-height: 1.8; }
        @keyframes fadeIn { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }
        
        h1 { color: #556b2f; font-size: 1.6rem; margin-bottom: 20px; }
        .btn-nav { margin-top: 30px; padding: 12px 30px; background: #6b8e23; color: white; border: none; border-radius: 50px; cursor: pointer; font-size: 1.1rem; font-weight: bold; }
        
        /* Tombol NO lincah */
        #no-btn { 
            position: absolute; background: #d1d8c5; padding: 12px 30px; 
            border-radius: 50px; border: none; cursor: pointer; font-weight: bold; font-size: 1.1rem; 
        }

        .final-msg { font-size: 1.5rem; font-weight: bold; color: #4a5d4e; margin-top: 20px; }
    </style>
</head>
<body>

    <!-- Awal -->
    <div class="container" id="welcome" style="display: block;">
        <h1>ALIII ALII, RUNI PUNYA KADOO!</h1>
        <div style="height: 100px; position: relative;">
            <button class="btn-nav" style="position: absolute; left: 10%;" onclick="nextSlide('welcome', 'slide1')">YES!</button>
            <button id="no-btn" style="right: 10%;" onmouseover="moveNo()">NO</button>
        </div>
    </div>

    <!-- Slides -->
    <div class="container slide" id="slide1"><p>Wkwkw halaman pertama agak maksa yahh, santai lii, <i>it just for fun</i>, kalo gamau nonton gapapa ko, aku sangat paham wkwkw.</p><button class="btn-nav" onclick="nextSlide('slide1', 'slide2')">Next ➡️</button></div>
    <div class="container slide" id="slide2"><p>Oh iya, i have a wish for u: semoga di umur 24 ini kamu bisa berdamai sama riuh di kepala. Semoga kamu menemukan ruang-ruang tenang (ehh puitis bgt wkwkwkw) dan intinya, semoga semua harapan kamu terwujud secara bertahap.</p><button class="btn-nav" onclick="nextSlide('slide2', 'slide3')">Next ➡️</button></div>
    <div class="container slide" id="slide3"><p>Btw, makasih udah berjuang sejauh ini (sejauh ku memandang.....). Oh jangan terlalu diiniin apa sih namanya wkwkw, kalo nanti ada luka masa lalu yang muncul tiba-tiba (kek jin tomang) dan bikin nggak nyaman, please.....jangan lari yawww, mari kita peluk semua luka dan nikmatin prosesnya. Kata Runi yang bijak (narsis dolooo): tiap tahapan hidup itu harus dilaluin, ngga boleh lompat-lompat, nanti pincang loh! Santai aja, sakit sih pasti, tapi di situ letak belajarnya wkwkw (i know u know it).</p><button class="btn-nav" onclick="nextSlide('slide3', 'slide4')">Next ➡️</button></div>
    <div class="container slide" id="slide4"><p>Emm, apa lagi yah? Coba kasih ide, liiii, jangan cuma baca doang wkwk</p><button class="btn-nav" onclick="nextSlide('slide4', 'slide5')">Next ➡️</button></div>
    <div class="container slide" id="slide5"><p>Oh ini kawan, kamu ngga harus selalu kuat ko li. Aku tetep di sini besok, besoknya lagi, besoknyaaaaaaa lagi. Jadi, kalo lagi cape, mau nangis, mau jadi manusia semanusia-manusianya (manusia silver juga boleh), kamu bisa cari aku liii. Jangan sungkan to be yourself, okay, bestieee (lha kok alay). Gapapa kamu tetep keren ko, tapi lebih keren aku liii, trust me wkwkw.</p><button class="btn-nav" onclick="nextSlide('slide5', 'slide6')">Next ➡️</button></div>
    <div class="container slide" id="slide6">
        <p><i>Lastly, thank God for letting me know u 🤍</i></p>
        <p class="final-msg">Sekali lagi, happy level up day! Jangan lupa makan enak ya hari ini. See u when I see u, Ali!</p>
        <button class="btn-nav" onclick="finish()">Selesai Baca ✨</button>
    </div>

    <script>
        function nextSlide(curr, next) {
            document.getElementById(curr).style.display = 'none';
            document.getElementById(next).style.display = 'block';
            if(next === 'slide1') confetti({ particleCount: 150, spread: 70 });
        }

        function moveNo() {
            const btn = document.getElementById('no-btn');
            const container = document.querySelector('.container');
            // Biar tombol lari di dalam area container saja
            const x = Math.random() * (container.offsetWidth - 100);
            const y = Math.random() * (container.offsetHeight - 50);
            btn.style.left = x + 'px';
            btn.style.top = y + 'px';
        }

        function finish() {
            confetti({ particleCount: 300, spread: 150, origin: { y: 0.5 } });
            alert("Happy Level Up Day, Ali! 🥳");
        }
    </script>
</body>
</html>
