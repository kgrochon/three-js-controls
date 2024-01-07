import './App.css'
import { ThreeCanvas } from './three/ThreeCanvas';
import { Text } from "@react-three/drei";

function App() {

  return (
    <div className="App">
      <div style={{position: 'fixed', top: '20px', left: '20px'}}>Hello World</div>
      <ThreeCanvas>
        <Text
          fontSize={4}
          color={"red"}
          >
            Hello World
        </Text>
      </ThreeCanvas>
    </div>
  )
}

export default App
