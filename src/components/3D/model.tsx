import { useGLTF } from "@react-three/drei";

const Model = () => {
  const { scene } = useGLTF("/assets/character.glb");

  return (
    <>
      <primitive object={scene} />
    </>
  );
};

export default Model;
