import React from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
import './styles.css'
import Feedback from './Feedback'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 50, (x - window.innerWidth / 2) / 50, 1.05]
const trans = (x, y, s) => `perspective(600px) rotateX(${0}deg) rotateY(${0}deg) scale(${s})`

function JobsFeedback(xyz) {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 1000, friction: 50 } }))
    return (
        <animated.div
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}

            style={{ transform: props.xys.interpolate(trans) }}
        >
            <Feedback userId={xyz.userId} name={xyz.name} body={xyz.body} />
        </animated.div>
    )
}
export default JobsFeedback