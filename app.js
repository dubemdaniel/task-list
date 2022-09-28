// define UI variabel
const taskInputUI = document.getElementById('taskInput')
const submitTaskUI = document.getElementById('submitTask')
const clearList = document.querySelector('.clearListBox')
const listCollection = document.getElementById('list_collection')
const warning = document.querySelector('.warning')
const li = document.createElement('li')

clearList.style.display = 'none'

// ====================================
// load event listeners

loadEventListeners()

// =====================================
// call all event listeners

function loadEventListeners(){
    document.addEventListener('DOMcontentLoaded', loadTasks)

    // add submit event
    document.getElementById('task-form').addEventListener('submit', inputTask)

    taskInputUI.addEventListener('mouseup', taskInput)

    clearList.addEventListener('click', clearAll)

}
// input task

function inputTask(e){
    const taskInputUI = document.getElementById('taskInput')
    const clearList = document.querySelector('.clearListBox')

    if(taskInputUI.value === ''){
        console.log('add a task boss');
       
        warnings()
        
        li.style.display = 'none'
    }
    else {
        //     console.log('your task have been added')
        //      creating li elements starts here
        // ===========================================================
        // const li = document.createElement('li')

        const h4 = document.createElement('h4')

        const link = document.createElement('a')

        link.id = 'delete'

        h4.appendChild(document.createTextNode(taskInputUI.value))

        li.appendChild(h4)

        li.appendChild(link)


        link.innerHTML = '<img src="/cancel.png">' 
    
        link.addEventListener('click', listRemove )

        listCollection.appendChild(li)

        warningsU()

    }
    
    // creating li element ends here
    // ==========================================================

    taskInputUI.value = ''

    clearList.style.display = 'block'

    addToLocalStorage((taskInputUI.value))

}
// creating the clearAll funtion
// ==========================================
function clearAll(e) {
    while (listCollection.firstChild) {
       if (confirm('are you sure you want to clear list??')){
            listCollection.removeChild(listCollection.firstChild)
             clearList.style.display = 'none'
       }
    }
    e.preventDefault
}

// error message if functions
// =========================================
function warnings() {
const warning = document.querySelector('.warning')

    warning.textContent = "please input a task"

    warning.style.color = 'red'

}
//  error message else function
// ===========================================
function warningsU() {

    const warning = document.querySelector('.warning')

    warning.textContent = ""
   
}

// list remove function
// ===============================================
function listRemove(e) {
    if (e.target.id ='delete') {
        e.target.parentElement.parentElement.remove()
    }

    e.preventDefault()
}

// adding items to local storage function
// ============================================

function addToLocalStorage(task){
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = []
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.push(task)

    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function loadTasks(){
    console.log('loaded')

    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = []
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    
    tasks.forEach(function(task){
        const h4 = document.createElement('h4')

        const link = document.createElement('a')

        link.id = 'delete'

        h4.appendChild(document.createTextNode(task))

        li.appendChild(h4)

        li.appendChild(link)


        link.innerHTML = '<img src="/cancel.png">' 
    
        link.addEventListener('click', listRemove )

        listCollection.appendChild(li)
    });


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