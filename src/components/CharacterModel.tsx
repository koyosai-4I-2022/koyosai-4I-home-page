import { Canvas, useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { Loader, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { TextureLoader } from 'three';
import { Suspense } from 'react';
import { Spinner } from '@chakra-ui/react';

const Scene = () => {
  const fbx = useLoader(FBXLoader, '/Volinier-motion2.fbx');
  const colorMap = useLoader(TextureLoader, '/tex.png');
  console.log(fbx);
  return (
    <>
      <primitive
        object={fbx}
        map={colorMap}
        scale={0.06}
        position={[0, -5, 0]}
      />
      <ambientLight intensity={0.1} />
      <directionalLight color='red' position={[0, 0, 5]} />
    </>
  );
};

export const CharacterModel = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Scene />
          <PerspectiveCamera position={[0, 0, 0]} />
          <OrbitControls autoRotate={true} />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};
