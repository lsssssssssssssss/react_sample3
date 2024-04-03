import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { legacy_createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';

function Main(props) {
  return (<div>
    <h1>메인이다!</h1>
    <div>슬라이더~~
      <Product></Product>
    </div>
  </div>
  );
}

function Product(props) {
  return <div>
        제품 목록~~~
          <Board></Board>
        </div>
}

function Board(props) {
  var num = useSelector((state)=>state.num);
  console.log(num);
  return <div>
    숫자:{num}<br />
    게시판 목록~!
    </div>
}

function Main2(props) {
  return (<div>
    <h1>서브 메인이다!</h1>
    <div>슬라이더~~222
      <Product2></Product2>
    </div>
    
  </div>
  );
}

function Product2(props) {
  var addFunc = useDispatch();
  return <div>
    숫자:<button onClick={()=>{addFunc({type : "minus"})}}>Decrease!</button><br />
        제품 목록~~~222
          <Board2></Board2>
        </div>
}

function Board2(props) {
  var addFunc = useDispatch();
  return <div>
    숫자:<button onClick={()=>{addFunc({type : "add"})}}>Increase!</button><br />
    게시판 목록~!222
    </div>
}

function reducer(state, action){
  if(state == undefined){
    return {num : 1}
  }
  var newState = {...state};
  if(action.type == 'add'){
    newState.num += 1;
  } else if(action.type == 'minus'){
    newState.num -= 1;
  }
  console.log(action);
  return newState;
}

const store = legacy_createStore(reducer);

function App() {
  // const [num, setNum] = useState(1);
  
  // const increaseNum = () => {
  //   setNum(num + 1);
  // };

  return (
    <>
      <Provider store={store}>
        <Main></Main>
        <Main2></Main2>
      </Provider>
    </>
  );
}

export default App;
