import home from './app/scripts/home'
import addtask from './app/scripts/add_task';
import allSch from './app/scripts/all_schedule';
const root = document.getElementById('root');
const route =(value)=>{
    root.innerHTML=''
    switch(value){
        case '':{
            return root.appendChild(home());
        }
        case '#/':{
            return root.appendChild(home());
        }
        case '#/all':{
            return root.appendChild(allSch('All'));
        }
        case '#/personal':{
            return root.appendChild(allSch('PersonalErrands'));
        }
        case '#/work':{
            return root.appendChild(allSch('Work'));
        } 
        case '#/grocery':{
            return root.appendChild(allSch('Grocery'));
        }
        case '#/school':{
            return root.appendChild(allSch('School'));
        }
        case '#/addtask':{
            return root.appendChild(addtask());
        }

    }
}
export default route;