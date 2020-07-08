let flexObject = document.querySelector('.flex-box');
let flexControls = document.querySelectorAll('.control input');

for (let i = 0; i < flexControls.length; i++) {
    let optionName = flexControls[i].value;
    flexControls[i].addEventListener('change', function () {
        flexObject.dataset.class = optionName;
        alert('Уверены, что хотите изменить свойство на ' + flexObject.dataset.class + '?');
    });
}



/*
1. При клике на radio (flexControls[i]) должно срабатывать событие
2. В ходе этого события должна выполняться проверка
    2.1 Удаление всех классов, кроме .flex-box
    2.2 Добавление того класса контейнеру (flexObject), который содержит нажатый radio (flexControls[i].value);

let flexObject = document.querySelector('.flex-box');
let flexControls = document.querySelectorAll('.control input');

for (let i = 0; i < flexControls.length; i++) {
    let optionName = flexControls[i].value;
    flexControls[i].addEventListener('change', function () {
        flexObject.dataset.class = optionName;
    });
}

 */