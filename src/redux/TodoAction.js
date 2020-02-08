import {ADDPENDDING_TODO, ADDFINISH_TODO, ADDFINISH_PENDDING_TODO, DELETE_TODO, RECOVER_TODO } from './actionType'


export function AddToPendding(item) {
    return {
        type:ADDPENDDING_TODO,
        item:item
}    
}
export function AddToFinish(item) {
    return {
        type: ADDFINISH_TODO,
        item:item
    }
}
export function AddFinish_Pendding(item) {
    return {
        type:ADDFINISH_PENDDING_TODO,
        item:item
    }
}
export function Add_Delete(item) {
    return {
        type: DELETE_TODO,
        item:item
    }
}

export function Add_recover(item) {
    return {
        type: RECOVER_TODO,
        item:item
    }
}