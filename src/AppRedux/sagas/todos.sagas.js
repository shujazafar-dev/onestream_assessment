import { call, put, takeLatest, takeEvery } from 'redux-saga/effects'
import { saga_action_ids, saga_actions_types } from '../types/index';


function* addReminder(data) {
    try {
        put({
            type: saga_actions_types.REMINDER_ADDED,
            reminder: data
        })
    } catch (error) {

    }
}

function* updateReminder(action) {
    try {

    } catch (error) {

    }
}

function* deleteReminder(action) {
    try {

    } catch (error) {

    }
}

export default function* () {
    yield takeEvery(saga_action_ids.ADD_REMINDER, addReminder)
    yield takeEvery(saga_action_ids.UPDATE_REMINDER, updateReminder)
    yield takeEvery(saga_action_ids.DELETE_REMINDER, deleteReminder)
}