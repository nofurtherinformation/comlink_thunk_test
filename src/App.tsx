import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import {store, useAppDispatch, useAppSelector} from './store'
import {addToList} from './asyncSlice';


const StateViewer: React.FC =()=>{
  const state = useAppSelector(state => state.test)
  const dispatch = useAppDispatch()

  const addList = ()=>dispatch(addToList('test'))

  return<div>
    <p>
    {JSON.stringify(state, null, 2)}
    </p>
    <button onClick={addList}>ADDDDDD </button>
  </div>
}

function App() {

  return (
    <Provider store={store}> 
      <div className="App">
        <StateViewer />
      </div>
    </Provider>
  );
}

export default App;
