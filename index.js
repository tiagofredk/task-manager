let input = document.querySelector("input");
let ul = document.querySelector("ul");
let form = document.querySelector("form");

function addTask(e) {
    e.preventDefault();

    if (input.value.trim() === "") {
        alert("Please insert a value")
    } else {

        let li = document.createElement("li");
        let span = document.createElement("span")
        span.innerText = "X";

        li.innerText = input.value;
        li.append(span)
        
        ul.insertBefore(li, ul.firstElementChild);

        span.addEventListener("click", ()=>{
            ul.removeChild(span.parentElement);
        })

        li.addEventListener("click", ()=>{
            li.classList.toggle("liConfirmed")
        })
        
        form.reset();
    }
    

}

form.addEventListener("submit", addTask);
