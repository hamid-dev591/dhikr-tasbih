// This file contains the JavaScript code for the Dhikr and Tasbih application.

document.addEventListener('DOMContentLoaded', () => {
    const countDisplay = document.getElementById('countDisplay');
    const incrementButton = document.getElementById('incrementButton');
    const resetButton = document.getElementById('resetButton');
    const surahSelect = document.getElementById('surahSelect');
    const surahText = document.getElementById('surahText');
    let count = 0;

    // نصوص السور
    const surahs = {
        fatiha: `
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ<br>
            الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ<br>
            الرَّحْمَٰنِ الرَّحِيمِ<br>
            مَالِكِ يَوْمِ الدِّينِ<br>
            إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ<br>
            اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ<br>
            صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ
        `,
        ikhlas: `
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ<br>
            قُلْ هُوَ اللَّهُ أَحَدٌ<br>
            اللَّهُ الصَّمَدُ<br>
            لَمْ يَلِدْ وَلَمْ يُولَدْ<br>
            وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ
        `
        // يمكنك إضافة المزيد من السور هنا
    };

    // تحديث النص عند اختيار سورة
    surahSelect.addEventListener('change', () => {
        const selectedSurah = surahSelect.value;
        surahText.innerHTML = surahs[selectedSurah] || 'اختر سورة لعرض النص.';
    });

    // عرض النص الافتراضي (أول سورة)
    surahText.innerHTML = surahs[Object.keys(surahs)[0]];

    incrementButton.addEventListener('click', () => {
        count++;
        updateCountDisplay();
    });

    resetButton.addEventListener('click', () => {
        count = 0;
        updateCountDisplay();
    });

    function updateCountDisplay() {
        countDisplay.textContent = count;
    }
});

function increment(id) {
    const countElement = document.getElementById(id);
    let count = parseInt(countElement.textContent);
    count++;
    countElement.textContent = count;
}