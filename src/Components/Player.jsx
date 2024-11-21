import * as THREE from "three";
import { useRef, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import { CapsuleCollider, RigidBody } from "@react-three/rapier";


const SPEED = 10;
const JUMP_VELOCITY = 7.5;
const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();

export function Player() {
    const ref = useRef();
    const isJumpingRef = useRef(false);
    const { camera } = useThree();
    const [, get] = useKeyboardControls();
    
    useFrame(() => {
        if (ref.current) {
            const { forward, backward, left, right, jump } = get();
            const velocity = ref.current.linvel();
            const position = ref.current.translation();

            // Camera follows the player
            if (position) {
                camera.position.set(position.x, position.y + 1, position.z);
            }

            // Movement logic
            frontVector.set(0, 0, backward - forward);
            sideVector.set(left - right, 0, 0);
            direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(SPEED).applyEuler(camera.rotation);

            // Set horizontal velocity (X and Z)
            ref.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z });

            // Jump logic without ground detection
            // console.log(forward)
            if (jump && !isJumpingRef.current) {
                ref.current.setLinvel({ x: velocity.x, y: JUMP_VELOCITY, z: velocity.z });
                isJumpingRef.current = true;
            }
            
            if (!jump && isJumpingRef.current) {
                isJumpingRef.current = false;
            }
        }
    });

    return (
        <RigidBody ref={ref} colliders={false} mass={1} type="dynamic" position={[3, 10, 0]} enabledRotations={[false, false, false]}>
            <CapsuleCollider args={[0.75, 0.5]} />
        </RigidBody>
    );
}
