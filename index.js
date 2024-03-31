let input =document.querySelector(".entered-list");
let addBtn =document.querySelector(".add-list");
let task =document.querySelector(".task");
// add button disabled

input.addEventListener('keyup',() => {
    if(input.value.trim()!=0){
        addBtn.classList.add('active')
    }
    else{
        addBtn.classList.remove('active')
    }
})
//add new iteam
addBtn.addEventListener('click',() => {
    if(input.value.trim()!=0){
        let newIteam = document.createElement('div');
        newIteam.classList.add('iteam');
        newIteam.innerHTML=`<p>${input.value}</p>
        <div class="iteam-btn" >
            <i class="fa-solid fa-square-check"></i>
            <i class="fa-solid fa-square-xmark"></i>
        </div>`
        task.appendChild(newIteam);
        input.value = '';
    }
    else{
        alert("Please Enter a Task")
    }
})
//delet iteam
task.addEventListener("click" ,(e) =>  {
    if(e.target.classList.contains('fa-square-xmark')){
        e.target.parentElement.parentElement.remove();
    }
})
//edit iteam
task.addEventListener('click',(e) =>
{
    if(e.target.classList.contains('fa-square-check'))
    {
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
})