import plantSeed from './plantSeed'
import { createStore } from 'redux';


//initial state set to empty array 
const initialState = plantSeed;


//action creator function 'add' ; accepts a plant object as parameter and uses it as payload

const addPlant = (plant)=> {
    return {type:'add', payload:plant}
}

//action creator function 'remove' ; accepts plant object and uses it as payload
const removePlant = (plant) => {
    return {type: 'remove', payload: plant}
}

//reducer function takes in an action and returns new state based on that action
const plantReducer = (state = initialState, action) => {

    //switch statement to check action.type, which describes what happens to state
    switch (action.type) {
        //add returns new state that includes existing state + payload
        case 'add':
            return [...state, action.payload]
        //remove uses a filter function to return all objects in state - the plant being removed
        case 'remove':
            return state.filter((aPlant)=>aPlant !=action.payload)
        //default returns current state
        default: 
            return state;
    }
}

const store = createStore(plantReducer)

export default store 