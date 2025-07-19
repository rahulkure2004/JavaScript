let toDo =[];
let req = prompt('Please Enter your request');
while(true){
    if(req==='quit'){
        console.log('You Quit');
        break;
    }
    if(req==='list'){
        for(task of toDo){
            console.log(task);
        }
    }
    else if(req==='add'){
        let adds = prompt('please  enter the task you want to add');
        toDo.push(adds);
        console.log('Task added successfully!');
    }
    else if(req==='delete'){
        let idx = prompt('plase enter the delete  index');
        toDo.splice(idx,1);
        console.log('Task delete successfully!');
    }
    req = prompt('Please Enter your request');
}