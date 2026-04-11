
const messageArea = document.querySelector('textarea');
messageArea.addEventListener('focus', () => {
    messageArea.style.backgroundColor = 'lightblue';
});
messageArea.addEventListener('blur', () => {
    messageArea.style.backgroundColor = '';
});

