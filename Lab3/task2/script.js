const input = document.getElementById('task-input');
const list = document.getElementById('task-list');

input.addEventListener('keydown', e => { if (e.key === 'Enter') addTask(); });

function addTask() {
    const text = input.value.trim();
    if (!text) return;

    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => li.classList.toggle('done', checkbox.checked));

    const span = document.createElement('span');
    span.textContent = text;

    const del = document.createElement('button');
    del.textContent = 'Delete';
    del.className = 'delete-btn';
    del.onclick = () => li.remove();

    li.append(checkbox, span, del);
    list.appendChild(li);
    input.value = '';
    input.focus();
}