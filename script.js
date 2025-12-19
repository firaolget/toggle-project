const statusText = document.getElementById('statusText');
const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', () => {
    // 1. Check current state
    const isOff = statusText.textContent === "OFF";

    // 2. Smoothly update content and classes
    if (isOff) {
        statusText.textContent = "ON";
        statusText.classList.add('on-state');
    } else {
        statusText.textContent = "OFF";
        statusText.classList.remove('on-state');
    }
});