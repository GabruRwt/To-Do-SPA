import page from '../pages/home.html';


const home=()=>{
    const newElement=document.createElement('div');
    newElement.innerHTML=page;
    newElement.querySelector('#name').innerHTML="Rohit Rawat";  
    newElement.querySelector('#dated').innerHTML=new Date().toDateString();
    let task_list = [];
    if(localStorage.getItem('user'))
        task_list=JSON.parse(localStorage.getItem("user"));
    else
        localStorage.setItem("user","[]");
        
    newElement.querySelector('#create').innerHTML= task_list.length;
    newElement.querySelector('#com').innerHTML= task_list.filter(item=>{
       return item.status==='completed'
    }).length;
    newElement.querySelector('#all-cal').innerHTML= task_list.filter(item=>{
        return task_list;
    }).length;
    newElement.querySelector('#personal-cal').innerHTML= task_list.filter(item=>{
       return item.category==='PersonalErrands'
    }).length;
    newElement.querySelector('#work-cal').innerHTML= task_list.filter(item=>{
       return item.category==='Work'
    }).length;
    newElement.querySelector('#grocery-cal').innerHTML= task_list.filter(item=>{
        return item.category==='Grocery'
    }).length;
    newElement.querySelector('#school-cal').innerHTML= task_list.filter(item=>{
        return item.category==='School'
    }).length;

    return newElement;

}
export default home;