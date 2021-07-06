import {createStore, combineReducers} from 'redux';


import classesReducer from './carts/Classes.reducer';

const rootReducer = combineReducers({
    classes: classesReducer
})

const store = createStore(rootReducer)

export default store;