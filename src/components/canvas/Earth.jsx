import React, { useState, useEffect } from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Float,
  OrbitControls,
  Preload,
  useGLTF,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = ({ isMobile }) => {
  const earth = useGLTF("./space1/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="black" />
      <spotLight
        // position={[0, -10, 10]}
        angle={1}
        penumbra={1}
        intensity={5}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={10} />
      <primitive
        className=""
        object={earth.scene}
        scale={0.0002}
        position={isMobile ? [-1.4, 1.1, 1.9] : [-3, -0.1, 5]}
        rotation={isMobile ? [-0.02, -0.4, -0.6] : [-0.02, -0.4, -0.5]}
      />
    </mesh>
  );
};

useGLTF.preload("./space1/scene.gltf");

const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 600px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          // autoRotate
          // enableRotate
          // autoRotateSpeed={1.5}

          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth isMobile={isMobile} />
        <Environment preset="night" />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
