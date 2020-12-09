import React from 'react'
import {Canvas} from 'react-three-fiber'
import styles from '../styles/Home.module.css'
import {OrbitControls} from 'drei'


const Globe = () => {
  return(
    <mesh>
      <sphereBufferGeometry attach='geometry' args={[7, 32, 32]}/>
      <meshStandardMaterial attach='material' wireframe color="white" opacity={0.7}/>
    </mesh>
  )
}





const GlobeCanvas = () => {

  return(
    <Canvas 
      className={styles.globe_canvas}
      camera={{ position: [0, 0, 35] }}
    >
      <OrbitControls />
      <directionalLight intensity={0.5} />
      <Globe />
    </Canvas>
  )
}

const Journal = () => {
  return (
    <div>Journal</div>
  )
}



export default function EarthJournal() {
  return (
  <>
    <h1>Earth Journal</h1>
    <div className={styles.EarthJournal}>
        <GlobeCanvas />
        <Journal />
    </div>
  </>
  )
}
