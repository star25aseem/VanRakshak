import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei"
import { useEffect, useRef } from "react"
import { useFrame, useThree } from "@react-three/fiber"

import * as THREE from 'three'
import { RigidBody } from "@react-three/rapier"
import { board } from "../hooks/board"

let walkDirection = new THREE.Vector3();
let rotateAngle = new THREE.Vector3(0, 1, 0);
let rotateQuarternion = new THREE.Quaternion();
let cameraTarget = new THREE.Vector3();

const directionOffset = ({ moveForward, moveBackward, moveLeft, moveRight }) => {
    let directionOffset = 0;
    if (moveForward) {
        if (moveLeft) {
            directionOffset = Math.PI / 4;
        } else if (moveRight) {
            directionOffset = -Math.PI / 4;
        }
    } else if (moveBackward) {
        if (moveLeft) {
            directionOffset = Math.PI / 4 + Math.PI / 2;
        } else if (moveRight) {
            directionOffset = -Math.PI / 4 - Math.PI / 2;
        } else {
            directionOffset = Math.PI;
        }
    } else if (moveLeft) {
        directionOffset = Math.PI / 2;
    } else if (moveRight) {
        directionOffset = -Math.PI / 2;
    }
    return directionOffset;
};

export const MyPlayer = () => {
    const { moveBackward, moveForward, moveRight, moveLeft, jump } = board();
    const model = useGLTF("/character1.glb");
    const { actions } = useAnimations(model.animations, model.scene);
   model.scene.scale.set(0.5,0.5,0.5);
    const currentAction = useRef("");
    const controlsRef = useRef(null);
    const camera = useThree((state) => state.camera);

    

    const updateCameraTarget = (moveX, moveZ) => {
        camera.position.x += moveX;
        camera.position.z += moveZ;

        cameraTarget.x = model.scene.position.x;
        cameraTarget.z = model.scene.position.z;
        cameraTarget.y = model.scene.position.y + 2;

        if (controlsRef.current) controlsRef.current.target = cameraTarget;
    };

    useEffect(() => {
        let action = "";
        if (moveBackward || moveForward || moveLeft || moveRight) {
            action = "run";
        } else if (jump) {
            action = "jump_air";
        } else {
            action = "idle";
        }

        if (currentAction.current !== action) {
            const nextActionToPlay = actions[action];
            const current = actions[currentAction.current];
            current?.fadeOut(0.2);
            nextActionToPlay?.reset().fadeIn(0.2).play();
            currentAction.current = action;
        }
    }, [moveForward, moveBackward, moveLeft, moveRight, jump]);

    useFrame((state, delta) => {
        if (currentAction.current === "run") {
            const angleYCameraDirection = Math.atan2(
                camera.position.x - model.scene.position.x,
                camera.position.z - model.scene.position.z
            );

            const newDirectionOffset = directionOffset({
                moveForward, moveBackward, moveLeft, moveRight
            });

            rotateQuarternion.setFromAxisAngle(
                rotateAngle,
                angleYCameraDirection + newDirectionOffset
            );
            model.scene.quaternion.rotateTowards(rotateQuarternion, 0.2);
            camera.getWorldDirection(walkDirection);
            walkDirection.y = 0;
            walkDirection.normalize();
            walkDirection.applyAxisAngle(rotateAngle, newDirectionOffset);

            const velocity = currentAction.current === "run" ? 10 : 5;
            const moveX = walkDirection.x * velocity * delta;
            const moveZ = walkDirection.z * velocity * delta;
            model.scene.position.x += moveX;
            model.scene.position.z += moveZ;

            updateCameraTarget(moveX, moveZ);
        }
    });

    return (
        <>
            <OrbitControls ref={controlsRef} />
            <RigidBody type="fixed" colliders='cuboid'>
            <primitive object={model.scene} />
            </RigidBody>
        </>
    );
};
