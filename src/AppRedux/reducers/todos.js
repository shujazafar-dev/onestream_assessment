

const initialState = {
    todos: 'all todo list'
}


export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case 'YOUR_CASE':

            return state;

        default:
            return state;
    }
};