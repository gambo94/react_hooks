


const initialState = [{
    id: 1,
    todo: 'Comprar leche',
    done: false
}];

// this is a reducer
const todoReducer = ( state = initialState, action ) => {

    if (action?.type === 'add'){
        return [...state, action.payload]
    }
    return state;
}


let todos = todoReducer();

// add a new todo

const newTodo = {
    id: 2,
    todo: 'Comprar pan',
    done: false
}

// creating the action for the reducer
const addTodoAction = {
    type: 'add',
    payload: newTodo
}

todos = todoReducer( todos, addTodoAction );

console.log(todos);