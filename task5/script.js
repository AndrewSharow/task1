const string = document.querySelector(".text-content");
const fullString = document.querySelector(".text-content").innerHTML;
const button = document.querySelector(".button-readmore");
function cutString(){
    let newSTring = string.innerHTML.slice(0, 20);
    string.innerHTML = newSTring + "...";
}
function changeButton(){
    if (button.innerHTML === "Read More"){
        button.innerHTML = "Read Less";
        string.innerHTML = fullString;
    }
    else if (button.innerHTML === "Read Less"){
        button.innerHTML = "Read More";
        cutString();
    }
}
changeButton()
button.addEventListener('click', changeButton);
