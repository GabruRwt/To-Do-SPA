
import page from '../pages/all_schedule.html'
import '../styles/all_schedule.css'
let task=[];
const allSch=(type)=>{
   task = JSON.parse(localStorage.getItem("user"));
   
   // if(type!=='All')
   //    task = task.filter(t=>t.category === type);
   // console.log(task);
   const all=document.createElement('div');
   all.innerHTML=page; 
   all.querySelector('#cat_name').innerHTML = type;

   const alltab=all.querySelector('#all');
   const pendingtab=all.querySelector('#pending');
   const completedtab=all.querySelector('#completed');

   alltab.addEventListener('click',()=>{
         let tasks=task;
         if(type!=='All'){
            tasks=task.filter((item)=>{
               return item.category === type
            })
         }

      // let tasks=task;
      let li=''
      const task_name=all.querySelector('#task-box');
      tasks.forEach((todo)=>{
         
        //  let isCompleted=todo.status== "completed" ? "checked" : "";
         li+=`<li class="task">
         <label for="${todo.id}">
         <input type="checkbox" class="checkbox-round name="" id="${todo.id}" ${todo.status === "completed"?"checked":""} />
         <div id="titem">
         <p class="tname">${todo.task_name}</p>
         <p class="tcat">${todo.category}</p>
         <p class="tdate">${todo.date}</p>
         </div>
         </label>
         </li>`
      });
        task_name.innerHTML=li;
      showtodo(all);
  });


  pendingtab.addEventListener('click',()=>{
   let tasks=task.filter((item)=>{
      return item.status==='pending';
   });
   if(type!=='All'){
      tasks=task.filter((item)=>{
              return item.status==='pending' && item.category === type
         // return item.category === type
      })
   }
   //   let tasks=task.filter((item)=>{
   //   })

   let li=''
    const task_name=all.querySelector('#task-box');
    tasks.forEach((todo)=>{
       
      //  let isCompleted=todo.status== "completed" ? "checked" : "";
       li+=`<li class="task">
       <label for="${todo.id}">
       <input type="checkbox" class="checkbox-round name="" id="${todo.id}" ${todo.status === "completed"?"checked":""} />
       <div id="titem">
         <p class="tname">${todo.task_name}</p>
         <p class="tcat">${todo.category}</p>
         <p class="tdate">${todo.date}</p>
         </div>
       </label>
       </li>`
    });
       task_name.innerHTML=li;
      showtodo(all);
       
 });

completedtab.addEventListener('click',()=>{
   let tasks=task.filter((item)=>{
      return item.status==='completed';
   });
   if(type!=='All'){
      tasks=task.filter((item)=>{
         // return item.category === type
              return item.status==='completed' && item.category === type
      })
   }
//   let tasks=task.filter((item)=>{
//   });
  let li=''
  const task_name=all.querySelector('#task-box');
  tasks.forEach((todo)=>{
     
    //  let isCompleted=todo.status== "completed" ? "checked" : "";
     li+=`<li class="task">
     <label for="${todo.id}">
     <input type="checkbox" class="checkbox-round name="" id="${todo.id}" ${todo.status === "completed"?"checked":""} />
     <div id="titem">
         <p class="tname">${todo.task_name}</p>
         <p class="tcat">${todo.category}</p>
         <p class="tdate">${todo.date}</p>
         </div>
     </label>
     </li>`
  });
    task_name.innerHTML=li;
    showtodo(all);
    
});

 alltab.click();
 showtodo(all);
 return all;
}

function showtodo(all){
   const ele = all.querySelectorAll('input');
  //  console.log(adj);
   ele.forEach(value => {
      value.addEventListener('change',(e)=>{
        const idx = task.findIndex((t)=>t.id==value.id);
        console.log(idx);
        if(task[idx].status === "completed")
           task[idx].status = "pending";
        else
           task[idx].status = "completed";
           
        localStorage.setItem('user',JSON.stringify(task));
      }); 
   });
}

export default allSch;