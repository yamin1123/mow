// متغير لتخزين الإعجابات لكل منشور
const likes = {};

// وظيفة الإعجاب
function likePost(button, userId) {
    const postId = button.dataset.postId; // الحصول على معرف المنشور
    // تأكد من أن كائن الإعجاب يحتوي على معرف المنشور
    if (!likes[postId]) {
        likes[postId] = new Set(); // إذا لم يكن موجودًا، أنشئ مجموعة جديدة
    }

    // تحقق مما إذا كان المستخدم قد أعجب بالمنشور مسبقًا
    if (!likes[postId].has(userId)) {
        likes[postId].add(userId); // إضافة المستخدم إلى مجموعة الإعجابات
        const likesCount = button.querySelector('.likes-count');
        likesCount.textContent = parseInt(likesCount.textContent) + 1; // زيادة عدد الإعجابات
        button.classList.add('liked'); // إضافة فئة مميزة للزر
    } else {
        likes[postId].delete(userId); // إزالة المستخدم من مجموعة الإعجابات
        const likesCount = button.querySelector('.likes-count');
        likesCount.textContent = parseInt(likesCount.textContent) - 1; // تقليل عدد الإعجابات
        button.classList.remove('liked'); // إزالة الفئة المميزة للزر
    }
}
