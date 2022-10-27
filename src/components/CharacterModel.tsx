import { Canvas, useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

type Props = {
  url: string;
};

const Scene = ({ url }: Props) => {
  const fbx = useLoader(FBXLoader, url);
  return (
    <>
      <primitive object={fbx} scale={0.06} position={[0, -5, 0]} />
      <ambientLight intensity={0.1} />
      <directionalLight color='red' position={[0, 0, 5]} />
    </>
  );
};

export const CharacterModel = ({ url }: Props) => {
  return (
    <>
      <Canvas>
        <Scene url={url} />
        <PerspectiveCamera position={[0, 0, 0]} />
        <OrbitControls autoRotate={true} />
      </Canvas>
    </>
  );
};
