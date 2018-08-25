export default ({ dispatch }) => next => action => {
    //Check if the action has a promise on its payload  
    if(!action.payload || !action.payload.then){
        //If it doesn't send the action to the next middleware
        return next(action);        
    }

    //If it does wait for the promise to resolve and then create a newaction with the data and dispatch it
    action.payload.then((response) => {
        //Create a new action with all the properties of the action passed to this middleware and then override 
        //the payload property with the resolved promise data
        const newAction = { ...action, payload: response };
        
        //Then dispatch the new action
        dispatch(newAction);
    });
}