import React, { useEffect, useRef, useState } from 'react'
import { useFrame } from 'react-three-fiber'
import { Html } from 'drei'
export function Cube (props) {
  const mesh = useRef()
  let colors = ['red', 'blue', 'yellow', 'green', 'aqua','coral','crimson','darkblue','darkred'];
  const [hovered, setHover] = useState(false)
  const [is_17, setIs_17] = useState(false)

  useEffect(() => {
    if(props.index  === 17) {
      setIs_17(true)
    }
  },[props.value])
  useFrame(() => {
    if(props.animated) {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01
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
      ref={mesh}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
        <Shape/>
        <Html scaleFactor={1}>
        <div class="content">
          {props.value}
        </div>
      </Html>
      <meshStandardMaterial color={colors[props.color]} />
    </mesh>
  )
}