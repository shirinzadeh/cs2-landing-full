function showToast(message, type = 'success', duration = 3000) {
    const toastContainer = document.querySelector('.toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        ${message}
        <div class="toast-progress"></div>
    `;
    toastContainer.appendChild(toast);

    const progress = toast.querySelector('.toast-progress');

    setTimeout(() => {
        toast.classList.add('show');
        progress.style.transition = `transform ${duration/1000}s linear`;
        progress.style.transform = 'scaleX(0)';
    }, 10);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toastContainer.removeChild(toast);
        }, 300);
    }, duration);
}

document.querySelector('.header_promoCode__DnHGg').addEventListener('click', function() {
    let promoSubtitle = document.querySelector('.header_promoSubtitle__hLTOV').textContent;
    promoSubtitle = promoSubtitle.replace(/[«»]/g, '');

    navigator.clipboard.writeText(promoSubtitle)
        .then(() => {
            showToast('Promo code copied to clipboard!', 'success', 2000);
        })
        .catch(err => {
            showToast('Failed to copy promo code.', 'error', 2000);
            console.error('Failed to copy: ', err);
        });
});