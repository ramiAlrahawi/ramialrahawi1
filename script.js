document.addEventListener('DOMContentLoaded', function() {
    // اختيار عنصر الأيقونة (menu-icon) باستخدام الـ class
    const menuIcon = document.querySelector('.menu-icon');

    // اختيار عنصر الإغلاق (close-icon) باستخدام الـ class
    const closeIcon = document.querySelector('.close-icon');

    // اختيار عنصر الـ nav باستخدام الـ id
    const navHeader = document.getElementById('header');

    // التحقق من وجود العناصر قبل إضافة المستمعات
    if (menuIcon && closeIcon && navHeader) {
        // إضافة مستمع حدث للنقر على menu-icon
        menuIcon.addEventListener('click', function() {
            // تغيير الكلاس إلى nav-active
            navHeader.classList.remove('nav-bar');
            navHeader.classList.add('nav-active');
        });

        // إضافة مستمع حدث للنقر على close-icon
        closeIcon.addEventListener('click', function() {
            // إعادة الكلاس إلى nav-bar
            navHeader.classList.remove('nav-active');
            navHeader.classList.add('nav-bar');
        });
    } else {
        console.error('العناصر غير موجودة في الصفحة!');
    }
});



document.querySelectorAll('.menu-items a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // منع السلوك الافتراضي للرابط

        const targetId = this.getAttribute('href').substring(1); // استخراج ID القسم
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth' // التنقل السلس
            });
        }
    });
});