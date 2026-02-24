const increase_btn = document.getElementById("increasebtn");

const resetbtn = document.getElementById("resetbutton");

const decrease_btn = document.getElementById("decreasebtn"); 

const count_label = document.getElementById("count");

let count = 0; 

increase_btn.onclick = function(){
    count++;
    count_label.textContent = count;
}

decrease_btn.onclick = function(){
    count--;
    count_label.textContent = count;
}

resetbtn.onclick = function(){
    count = 0;
    count_label.textContent = count;
}