import { useCallback, useEffect, useState } from "react"

function actionByKey(key) {
    const keyActionMap = {
        ArrowUp: 'moveForward',
        ArrowDown: 'moveBackward',
        ArrowLeft: 'moveLeft',
        ArrowRight: 'moveRight',
        Space: 'jump',
        Digit1: 'dirt',
        Digit2: 'grass',
        Digit3: 'glass',
        Digit4: 'wood',
        Digit5: 'log',
    }
    return keyActionMap[key]
}

export const board = () => {
    // Keeps track of what keys are pressed 
    const [actions, setActions] = useState({
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRight: false,
        jump: false,
        texture1: false,
        texture2: false,
        texture3: false,
        texture4: false,
        texture5: false,
        exit: false
    });

    const handleKeyDown = useCallback((e) => {
        const action = actionByKey(e.code);
        if (action) {
            setActions((prev) => ({
                ...prev,
                [action]: true
            }));
        }
    }, []);

    const handleKeyUp = useCallback((e) => {
        const action = actionByKey(e.code);
        if (action) {
            setActions((prev) => ({
                ...prev,
                [action]: false
            }));
        }
    }, []);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, [handleKeyDown, handleKeyUp]);

    return actions; // This should be returned correctly
};