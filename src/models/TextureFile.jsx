
import { useTexture } from "@react-three/drei"

const Texture = () =>{
    const diff = useTexture ("./Texture/large_pebbles_diff_1k.png")
    const dis = useTexture("./Texture/large_pebbles_disp_1k.png")
    const ouh = useTexture("./Texture/large_pebbles_rough_1k.png")
    const nor = useTexture("./Texture/large_pebbles_nor_gl_1k.png")
   
     return (
       <>
       <mesh  scale={[4,4,4]} position ={[-11,2.6,11]} 
           castShadow>
          <sphereGeometry/>
          <meshStandardMaterial  map={diff} normalMap={nor} roughnessMap={ouh}  />
          </mesh>
        
       </>
     )
   }
   export default Texture ;