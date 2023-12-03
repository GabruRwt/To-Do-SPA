import page from '../pages/add_task.html'
import '../styles/add_task.css'

const addtask=()=>{
    const newElement=document.createElement('div');
    newElement.innerHTML=page;  
    const task_list=JSON.parse(localStorage.getItem("user"));
    var element= newElement.querySelector("#adding");
    var select= newElement.querySelector('#cat');
    element.addEventListener("click", myfunc);
function myfunc(){
    
    const user={
        category:'',
        task_name:'',
        date:'',
        status: 'pending',
        id: (new Date()).getTime(),
        };
           user.category= select.options[select.selectedIndex].value;
           user.task_name= newElement.querySelector("#taskName").value;
           user.date= newElement.querySelector("#DateTime").value;
           task_list.push(user);
           localStorage.setItem("user", JSON.stringify(task_list))
}
return newElement;

}
export default addtask;