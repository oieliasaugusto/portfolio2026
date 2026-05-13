import React from 'react';
import { motion, TargetAndTransition } from 'framer-motion';

const animations: Record<string, TargetAndTransition> = {
    "_885_1988_brilho": {
        "x": [
            null,
            145.09
        ],
        "transition": {
            "x": {
                "type": "keyframes",
                "ease": [
                    0,
                    0,
                    1,
                    1
                ],
                "times": [
                    0,
                    0.5643835616438356
                ],
                "duration": 0.365
            },
            "opacity": {
                "type": "keyframes",
                "ease": [
                    0,
                    0,
                    1,
                    1
                ],
                "times": [
                    0,
                    1
                ],
                "duration": 0.365
            }
        },
        "opacity": [
            1,
            1
        ]
    }
}

export function App() {
    return (
        <>
            <motion.div id="_885_1988_brilho" animate={animations._885_1988_brilho} />
        </>
    )
}
