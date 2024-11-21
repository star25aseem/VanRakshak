import { RigidBody } from "@react-three/rapier";
import { groundTexture } from "../images/textures";
import { NearestFilter, RepeatWrapping } from "three";

export const Ground = () => {
    // Configure the ground texture
    groundTexture.magFilter = NearestFilter; // To avoid smearing 
    groundTexture.wrapS = RepeatWrapping;
    groundTexture.wrapT = RepeatWrapping;
    groundTexture.repeat.set(100, 100);

    return (
        <RigidBody type="fixed"> {/* Fixed type for static ground */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
                <planeGeometry attach='geometry' args={[100, 100]} />
                <meshStandardMaterial attach='material' map={groundTexture} />
            </mesh>
        </RigidBody>
    );
};
