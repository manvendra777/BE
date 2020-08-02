import React from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
import './styles.css'
import JobsCard from './JobsCard'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 50, (x - window.innerWidth / 2) / 50, 1.05]
const trans = (x, y, s) => `perspective(600px) rotateX(${0}deg) rotateY(${0}deg) scale(${s})`

function Animate(xyz) {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 500, friction: 40 } }))
    return (
        <animated.div
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}

            style={{ transform: props.xys.interpolate(trans) }}
        >
            <JobsCard id={xyz.id} tags={xyz.tags} description={xyz.description} image={xyz.image} header={xyz.header} feedbackList={xyz.feedbackList} />
        </animated.div>
    )
}
export default Animate