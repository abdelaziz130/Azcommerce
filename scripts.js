// شريط التقدم
window.onscroll = function() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";

    // زر العودة للأعلى
    if (winScroll > 20) {
        document.getElementById("back-to-top").style.display = "block";
    } else {
        document.getElementById("back-to-top").style.display = "none";
    }
};

// زر العودة للأعلى
document.getElementById("back-to-top").onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// الوضع الليلي
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', isDarkMode);
    darkModeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// تحميل الوضع الليلي من التخزين المحلي
if (localStorage.getItem('dark-mode') === 'true') {
    body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// تحقق من نموذج الاتصال
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        Swal.fire('خطأ!', 'الرجاء ملء جميع الحقول المطلوبة.', 'error');
    } else {
        Swal.fire('تم الإرسال!', 'سنقوم بالرد عليك قريبًا.', 'success');
        document.getElementById('contactForm').reset();
    }
});

// تفعيل AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true
});

// إضافة تقييمات بالنجوم
const stars = document.querySelectorAll('.star');
stars.forEach(star => {
    star.addEventListener('click', () => {
        const value = star.getAttribute('data-value');
        alert(`تم التقييم بـ ${value} نجوم`);
    });
});