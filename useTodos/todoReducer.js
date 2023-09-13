
export const todoReducer = (initialStage = [], action) => {


    switch (action.type) {
        case '[TODO] Add Todo':
            return [ ...initialStage, action.payload ];
        case '[TODO] Remove Todo':
            return initialStage.filter( todo => todo.id !== action.payload )
        case '[TODO] Toogle Todo':
            return initialStage.map(todo => {
                if(todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            });
    
        default:
            return initialStage;
    }
}