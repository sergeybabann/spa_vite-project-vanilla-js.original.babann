export default function Sidebar2() {
    const sidebar2 = document.createElement('sidebar2');
    sidebar2.classList.add('sidebar2');
    sidebar2.innerHTML = `
        <div class="sidebar2__content">
           Содержание
        </div>
    `;
    return sidebar2;
}

