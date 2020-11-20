import './App.css'
import { Button } from './Styles/Button'
import { Cube } from './Styles/Cube'
import { reducer } from './reducers/cube';
import { useReducer } from 'react';
import { Canvas } from 'react-three-fiber'
const initialState = [];
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="container">
      <h1>Alban Bleicher | Sujet 4</h1>
      <Button onClick={() => dispatch({type:'ADD CUBE'})}>ADD CUBE</Button>
      <Button onClick={() => dispatch({type:'SHUFFLE'})}>SHUFFLE</Button>
      <Button onClick={() => dispatch({type:'CHANGE ODD'})}>CHANGE ODD</Button>
      <Button onClick={() => dispatch({type:'STOP ODD'})}>END ODD</Button>
      <div className="list">
      <Canvas  style={{height:"100vh",width:"90vw"}}>
      <ambientLight />
    <pointLight position={[10, 10, 10]} />
        {state.map((item, index) => {
          return (
            <Cube {...item} key={index} position={[-1+((index%10)*0.2),0.4-(0.2*(Math.floor(index/10))),4]} />
          )
        })}
        </Canvas>
       </div>
    </div>
  );
}

export default App;
