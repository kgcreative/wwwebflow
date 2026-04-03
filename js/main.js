document.addEventListener('DOMContentLoaded', () => {
    const wave = document.getElementById('wave');
    const refresh = document.getElementById('refresh');
    const content = document.querySelector('.content');
    const links = document.querySelector('.links');
    const shortName = document.getElementById('shortName');
    const fullName = document.getElementById('fullName');

    wave.addEventListener('click', () => {
        content.classList.remove('hidden');
        wave.classList.add('hidden');
        refresh.classList.remove('hidden');
    });
    shortName.addEventListener('click', () => {
        shortName.classList.add('hidden');
        fullName.classList.remove('hidden');
    }); 

    refresh.addEventListener('click', () => {
        window.location.reload();
    });
});