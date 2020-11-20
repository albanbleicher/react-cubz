import React, { useEffect, useRef, useState } from 'react'
import { useFrame } from 'react-three-fiber'
import { Html } from 'drei'
export function Cube (props) {
  const mesh = useRef()
  let time = 0;
  let colors = ['red', 'blue', 'yellow', 'green', 'aqua','coral','crimson','darkblue','darkred'];
  const [is_17, setIs_17] = useState(false)

  useEffect(() => {
    console.log(props.value === 17)
    if(props.value  === 17) {
      setIs_17(true)
    }
    else {
      setIs_17(false)
    }
  },[props.value])
  useFrame(() => {
    time+=0.01
    if(props.animated) {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01
      mesh.current.scale.x = mesh.current.scale.y = mesh.current.scale.z = Math.cos(time)
    }
  })
  const Shape = () => {
    if(!is_17) {
      return (
        <boxBufferGeometry args={[0.1, 0.1,0.1]} />
      )
    }
    else {
      return(
        <sphereBufferGeometry args={[0.1, 0.1,0.1]} />
      )
    }

  }

  return (
    <mesh
      {...props}
      ref={mesh}>
        <Shape/>
        <Html scaleFactor={1}>
        <div className="content">
          {props.value}
        </div>
      </Html>
      <meshStandardMaterial color={colors[props.color]} />
    </mesh>
  )
}