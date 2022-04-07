import { call, put, takeLatest, takeEvery } from 'redux-saga/effects'



function* addTodo(action) {
    try {
        
    } catch (error) {
        
    }
}


export default function* () {
    yield [
        takeEvery('YOUR_TYPE', addTodo)
    ]
}