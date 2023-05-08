const close=document.getElementById('close');
close.addEventListener('click', function(){
    document.getElementById('name').style.display = 'none';
});
function alert1(status){
    document.getElementById('name').style.display=status;
}
function alert2(status){
    document.getElementById('grade').style.display=status;
}
function alert3(status){
    document.getElementById('number').style.display=status;
}
function alert4(status){
    document.getElementById('insta').style.display=status;
}
function alert5(status){
    document.getElementById('hobby').style.display=status;
}
function alert6(status){
    document.getElementById('likelion').style.display=status;
}
function alert7(status){
    document.getElementById('coding').style.display=status;
}

const addButton = document.getElementById('addBtn');
const question = document.getElementById('question');
const inputField = document.getElementById('inputField');

addButton.addEventListener('click', function(){
    const paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    question.appendChild(paragraph);
    inputField.value = "";


})