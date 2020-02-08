import { ADDPENDDING_TODO, ADDFINISH_TODO, ADDFINISH_PENDDING_TODO, DELETE_TODO, RECOVER_TODO } from './actionType'

const initialState = {
    pendding: [],
    finish: [],
    delete: [],
    status:''
}


function ReducerADD(state,item) {
    let index = state.pendding.find((value) => value.content === item.content);
    if (index) {
       state.status = 'error'
    } else {
        item.current = 'pendding'
        state.status = 'success'
        state.pendding.push(item)
    }
    return {
        pendding: state.pendding,
        finish: state.finish,
        delete: state.delete,
        status: state.status
    }
}

function ReducerToFinish(state, item) {
console.log(item,'到finish')
    let index = state.pendding.findIndex((value) => value.content === item.content)
    item.checked = true
    state.status = 'alter'
    item.current = 'finish'
    state.pendding.splice(index, 1)
    state.finish.push(item)

    return{
        pendding: state.pendding,
        finish: state.finish,
        delete: state.delete,
        status: state.status
    }
}
function ReducerFinishToPendding(state, item) {
    console.log(item,'到pendding')
    let index = state.finish.findIndex((value) => value.content === item.content)
    item.checked = false
    item.current = 'pendding'
    state.finish.splice(index, 1)
    state.pendding.push(item)

    return{
        pendding: state.pendding,
        finish: state.finish,
        delete: state.delete,
        status: state.status
    }
}

function ToDelete(state, item) {
    if (item.current==='pendding') {
        let index = state.pendding.findIndex((value) => value.content === item.content)
        state.pendding.splice(index, 1);
        item.current = 'delete'
        state.delete.push(item)
        
    } else if (item.current === 'finish') {
        let index = state.finish.findIndex((value) => value.content === item.content)
        state.finish.splice(index, 1);
        item.current = 'delete'
        state.delete.push(item)
    } else if (item.current === 'delete') {
        let index = state.delete.findIndex((value) => value.content === item.content)
        state.delete.splice(index, 1);
    }

    return {
        pendding: state.pendding,
        finish: state.finish,
        delete: state.delete,
        status: state.status
    }
}

function RecoverTooriginal(state,item) {
    if (item.checked) {
        let index = state.delete.findIndex((value) => value.content === item.content)
        state.delete.splice(index, 1);
        item.current = 'finish'
        state.finish.push(item)
    } else {
        let index = state.delete.findIndex((value) => value.content === item.content)
        state.delete.splice(index, 1);
        item.current = 'pendding'
        state.pendding.push(item)
    }

    return {
        pendding: state.pendding,
        finish: state.finish,
        delete: state.delete,
        status: state.status
    }
}

export default function Todoist(state=initialState,action) {
    switch (action.type) {
        case ADDPENDDING_TODO :
            return ReducerADD(state,action.item)
        case ADDFINISH_TODO :
            return ReducerToFinish(state,action.item)
        case ADDFINISH_PENDDING_TODO :
            return ReducerFinishToPendding(state,action.item)
        case DELETE_TODO :
            return ToDelete(state,action.item)
        case RECOVER_TODO :
            return RecoverTooriginal(state,action.item)
        default:
            return state;
    }
}