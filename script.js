function changeText() {
    const message = document.getElementById('message');
    message.textContent = "You've changed the heading text!";
}

function toggleHighlight() {
    const message = document.getElementById('message');
    message.classList.toggle('highlight');
}

function addOrRemoveElement() {
    const list = document.getElementById('dynamic-list');
    const existing = document.getElementById('dynamic-item');

    if (existing) {
        list.removeChild(existing);
    } else {
        const newItem = document.createElement('li');
        newItem.id = 'dynamic-item';
        newItem.textContent = 'This is a dynamically added item!';
        list.appendChild(newItem);
    }
}
