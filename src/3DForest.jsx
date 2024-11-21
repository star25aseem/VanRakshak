import { Canvas } from '@react-three/fiber';
import { Physics, RigidBody } from '@react-three/rapier';
import {Ground} from './Components/Ground'; // Ensure this is the correct import for your Ground component
import { Player } from './Components/Player';
import { FPV } from './Components/FPV';
import { ForestGen } from './Components/ForestGenerator';
import { SkyCycle } from './Components/ChangeDayNight';
import { TimeMachine2 } from './models/TimeMachine2';
import { Hindu } from './models/HinduTempleModel';
import { EntryCircle } from './models/EntryCircle';
import { Loader, PointerLockControls } from '@react-three/drei';
import { Suspense } from "react"
import { KeyboardControls } from '@react-three/drei';
import { Hut } from './models/Hut';
import { Axes } from './Components/AxesHelper';
import { MyPlayer } from './Components/MyPlayer';
import { Pond } from './models/Pond';
import { Cart } from './models/Cart';
import { Peackock } from './models/Peackock';
import { Tiger } from './models/Tiger';
import { FaunaGen } from './Components/FaunaGenerator';
import { CarryCart } from './models/Cart1';

import "../src/CompCSS/ThreeD.css"
import { Mountain } from './Mountain';
function Forest() {  
  return (
    <>    
    <link rel='stylesheet' href='../src/CompCSS/ThreeD.css'></link>
      <Suspense>
      <KeyboardControls
          map={[
            { name: "forward", keys: ["ArrowUp", "w", "W"] },
            { name: "backward", keys: ["ArrowDown", "s", "S"] },
            { name: "left", keys: ["ArrowLeft", "a", "A"] },
            { name: "right", keys: ["ArrowRight", "d", "D"] },
            { name: "jump", keys: ["Space"] },
          ]}>
      <Canvas>
        <SkyCycle />
        <ambientLight /> 
        <FPV />
        <Axes/>
        <Physics gravity={[0, -10, 0]} debug>
        <Player />          
        <TimeMachine2 position={[40, 0,9]} rotation={[0, Math.PI/2, 0]} scale={[.5, .5, .5]}/> 
        <RigidBody
            sensor
            type="fixed"
            onIntersectionEnter={() => {
              console.log('hi');
              window.open("/timeTravel","_top");        
            }}
          >
        <EntryCircle position={[40, 0, 14]} rotation={[0, Math.PI/2, 0]} scale={[.5, .1, .5]}/>
        </RigidBody>
        <RigidBody
            sensor
            type="fixed"
           
            onIntersectionEnter={() => {
              console.log('hi');
              window.open("/NavigationPage","_top");        
            }}
          >
        <EntryCircle position={[-21, 7, 27]} rotation={[0, Math.PI/2, 0]} scale={[.5, .1, .5]}/>
        </RigidBody>
        <ForestGen /> 
        <FaunaGen />
        <Hindu position={[30, 0, 40]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1]}/>
        <Pond position={[-69, -3.2, 10]} rotation={[-Math.PI/26, -Math.PI / 2, -Math.PI/15]} scale={[.05, .05, .05]} />
        <Ground position={[0,0,0]}/>
        <Hut position={[-30, 1.5, 27]} rotation={[0, Math.PI / 2, 0]} scale={[1.7,1.7,1.7]}/>
        <Cart position={[-15, 0, 39]} rotation={[0, Math.PI/2 , 0]} scale={[.3,.3,.3]}/>  
        <CarryCart position={[-10, 0, 39]} rotation={[0, -Math.PI , 0]} scale={[1,1,1]}/>  
        <Mountain position={[75, -15, 15]} rotation={[0, -Math.PI/2 , 0]} scale={[1.5,1.5,1.5]} />
        <Mountain position={[90, -25, 20]} rotation={[0, Math.PI/2 , 0]} scale={[2,2,2]} />
        <Mountain position={[69, -10, -34]} rotation={[0, Math.PI/2 , 0]} scale={[1,1,1]} />
        <Mountain position={[-25, -15, -60]} rotation={[0, 3*Math.PI/4 , 0]} scale={[1,1,1]} />   
        <Mountain position={[39, -20, -60]} rotation={[0, 3*Math.PI/4 , 0]} scale={[2,2,2]} />   
        <Mountain position={[-55, -15, -40]} rotation={[0, 3*Math.PI/4 , 0]} scale={[1,1,1]} />  
        <Mountain position={[-105, -20, -50]} rotation={[0, 3*Math.PI/4 , 0]} scale={[2,2,2]} /> 
        <Mountain position={[-145, -20, 20]} rotation={[0, 3*Math.PI/2 , 0]} scale={[2,2,2]} /> 
        <Mountain position={[-145, -15, 5]} rotation={[0, Math.PI/6, 0]} scale={[1,1,1]} />  
        <Mountain position={[35, -30, 105]} rotation={[0, Math.PI/2, 0]} scale={[2,2,2]} />  
        <Mountain position={[-45, -20, 105]} rotation={[0, Math.PI/2, 0]} scale={[2,2,2]} />  
        </Physics>
      <PointerLockControls />
      </Canvas>
      </KeyboardControls>
      <Loader />
      </Suspense>    
      <div className='absolute centered cursor'>+</div>  
    </>
  );
}

export default Forest;
