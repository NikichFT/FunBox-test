let selected = document.getElementsByClassName('columns');
let textUnder = document.getElementsByClassName('textUnder');
let textUnderDefault = document.getElementsByClassName('textUnderDefault');
let eclipse = document.getElementsByClassName('eclipse');
let textUnderDisabled = document.getElementsByClassName('textUnderDisabled');
let a = textUnderDefault[1].innerHTML;
let showText = document.getElementsByClassName('showText');
let hideText = document.getElementsByClassName('hideText');
let selectButton = document.getElementsByClassName('selectButton');
let columns = [];
let arrTextUnderDefault = [];
let arrEclipse = [];
let arrTextUnder = [];
let arrShowText = [];
let arrHideText = [];
let arrSelectButton = [];
for (var i = 0; i < selected.length; i++) {
    columns.push(selected[i]);
    arrTextUnderDefault.push(textUnderDefault[i]);
    arrEclipse.push(eclipse[i]);
    arrTextUnder.push(textUnder[i]);
    arrShowText.push(showText[i])
    arrHideText.push(hideText[i])
    arrSelectButton.push(selectButton[i])

    selected[i].data = columns.indexOf(columns[i])
    textUnderDefault[i].data = arrTextUnderDefault.indexOf(arrTextUnderDefault[i])
    eclipse[i].data = arrEclipse.indexOf(arrEclipse[i])
    textUnder[i].data = arrTextUnder.indexOf(arrTextUnder[i])
    showText[i].data = arrShowText.indexOf(arrShowText[i])
    hideText[i].data = arrHideText.indexOf(arrHideText[i])
    selectButton[i].data = arrSelectButton.indexOf(arrSelectButton[i])

    if (!selected[i].classList.contains('disabled')) {
        selected[i].addEventListener('click', select)

        function select() {
            this.classList.toggle('selected');
            //Выбор елемента по нажатию на блок
            if (this.classList.contains('selected') && !this.classList.contains('disabled')) {
                textUnderDefault[this.data].style.visibility = 'hidden'
                textUnder[this.data].style.visibility = 'visible'
                eclipse[this.data].style.backgroundColor = '#d91667';
            } else if (!this.classList.contains('selected') && !this.classList.contains('disabled')) {
                textUnder[this.data].style.visibility = 'hidden'
                textUnderDefault[this.data].style.visibility = 'visible'
                eclipse[this.data].style.backgroundColor = '#1698d9'
            }
        }
        //Наведение на нажатый элемент
        selected[i].onmouseleave = function hoverOut() {
            if (this.classList.contains('selected') && !this.classList.contains('disabled')) {
                showText[this.data].style.display = "block";
                hideText[this.data].style.display = 'none';
                selected[this.data].classList.add('selectedHover');
                eclipse[this.data].style.backgroundColor = '#e62e7a';
            }
        }
        selected[i].onmouseenter = function() {
                if (selected[this.data].classList.contains('selected')) {
                    showText[this.data].style.display = 'none';
                    hideText[this.data].style.display = 'block';
                    selected[this.data].classList.remove('selectedHover');
                    eclipse[this.data].style.backgroundColor = '#d91667';
                }
            }
            //Наведение на ненажатый элемент
        selected[i].onmouseover = function hoverdownDefault() {
            this.classList.add('hoverdownDefault');
            if (this.classList.contains('hoverdownDefault') && !this.classList.contains('selected') && !this.classList.contains('disabled')) {
                eclipse[this.data].style.backgroundColor = '#2ea8e6'
            }
        }
        selected[i].onmouseout = function hoverdownDefault() {
            this.classList.remove('hoverdownDefault');
            if (!this.classList.contains('hoverdownDefault') && !this.classList.contains('selected') && !this.classList.contains('disabled')) {
                eclipse[this.data].style.backgroundColor = '#1698d9'
            }
        }
        selectButton[i].addEventListener('click', selectOnText)

        function selectOnText() {
            selected[this.data].classList.add('selected')
            if (selected[this.data].classList.contains('selected') && !selected[this.data].classList.contains('disabled')) {
                textUnderDefault[this.data].style.visibility = 'hidden'
                textUnder[this.data].style.visibility = 'visible'
                eclipse[this.data].style.backgroundColor = '#d91667';
            } else if (!selected[this.data].classList.contains('selected') && !selected[this.data].classList.contains('disabled')) {
                textUnder[this.data].style.visibility = 'hidden'
                textUnderDefault[this.data].style.visibility = 'visible'
                eclipse[this.data].style.backgroundColor = '#1698d9'
            }
        }
    }
    //Сделать элемент недоступным
    selected[2].classList.add('disabled');
    eclipse[2].classList.add('eclipseDisabled');
    textUnderDefault[2].style.visibility = 'hidden';
    textUnderDisabled[2].style.visibility = 'visible';
}