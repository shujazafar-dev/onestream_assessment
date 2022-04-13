import { REMINDER_STATUSES } from '../../constants';
import { saga_actions_types } from '../types';

const initialState = {
    todos: localStorage.getItem("reminders") && JSON.parse(localStorage.getItem("reminders")).todos || []
}

export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case saga_actions_types.REMINDER_ADDED: {
            const todos = [...state.todos, payload];
            return { ...state, todos: todos };
        }
        case saga_actions_types.REMINDER_DELETE: {
            const todos = state.todos.filter(item => item._id !== payload);
            return { ...state, todos: todos };
        }
        case saga_actions_types.REMINDER_UPDATED: {
            const todos = JSON.parse(JSON.stringify(state.todos));
            todos.forEach(item => {
                if (item._id === payload._id) {
                    item.time = payload.time;
                    item.todoText = payload.todoText
                }
            });
            return { ...state, todos: todos }
        }
        case saga_actions_types.REMINDER_COMPLETED: {
            const todos = JSON.parse(JSON.stringify(state.todos));
            todos.forEach(item => {
                if (item._id === payload) {
                    item.status = REMINDER_STATUSES.COMPLETED
                }
            });
            return { ...state, todos: todos }
        }
        default:
            return state;
    }
};