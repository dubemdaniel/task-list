// define UI variabel
const taskInputUI = document.getElementById('taskInput')
const submitTaskUI = document.getElementById('submitTask')
const clearList = document.querySelector('.clearListBox')
const listCollection = document.getElementById('list_collection')
const taskSubmit = document.getElementById('task-form')
const warning = document.querySelector('.warning')


// ====================================
// load event listeners

loadEventListeners()

// =====================================
// call all event listeners

function loadEventListeners(){
    // add submit event

    taskSubmit.addEventListener('submit', inputTask);
    taskInputUI.addEventListener('click', taskInput)


}
// input task

function inputTask(e){
    if(taskInputUI.value === ''){
        console.log('add a task boss');
        warnings();
        
        // li.style.display = 'none'
    }
    // else {
    //     console.log('your task have been added')
    // }
    
    // create element
    const li = document.createElement('li')

    const h4 = document.createElement('h4')

    const link = document.createElement('a')

    h4.appendChild(document.createTextNode(taskInputUI.value))

    li.appendChild(h4)

    li.appendChild(link)


    link.innerHTML = '<img src="/cancel.png">'

    listCollection.appendChild(li)

    taskInputUI.value = ''

    e.preventDefault();
}


function warnings() {
    if (warning.textContent) {

    }
    warning.appendChild(document.createTextNode("please input a task"));
    warning.style.color = 'red'

    // e.preventDefault
}

function taskInput(e) {
    if (taskInputUI.value.length > 0){
        document.getElementById('newTask').style.transform = 'translateX(0px) translateY(-20px)';
        console.log('alert')
    }else if (taskInputUI.value === '' || taskInputUI.onfocus === true){
        document.getElementById('newTask').style.transform = 'translateX(0px) translateY(-20px)';
        console.log('hello')

    e.preventDefault();
    }

}


    // }else if (taskInputUI.value.length <= 0 || taskInputUI.onfocus === false){
    //     document.getElementById('newTask').style.transform = 'translateX(0px) translateY(40px)';
    //     console.log('jhgfhfg')