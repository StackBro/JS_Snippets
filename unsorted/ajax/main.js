const loadBtn = document.getElementById('load_btn');
const contentBlock = document.getElementsByClassName('content');


loadBtn.addEventListener('click', function (event) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'phones.json', false);
    xhr.send();

    if (xhr.status != 200) {
        alert(xhr.status + ': ' + xhr.statusText);
    } else {
        contentBlock[0].innerHTML = `<strong>${xhr.responseText}</strong>`
    }
})