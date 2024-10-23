'use client';
import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient';
import * as reactSpring from '@react-spring/three';
import * as drei from '@react-three/drei';
import * as fiber from '@react-three/fiber';

export const CanvasShaderGradient = () => {
  return (
    <ShaderGradientCanvas
      importedfiber={{ ...fiber, ...drei, ...reactSpring }}
      style={{
        position: 'absolute',
        top: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
      }}
      pixelDensity={1}
      fov={40}
    >
      <ShaderGradient
        type="plane"
        color1="#000000"
        color2="#4e148c"
        color3="#e1c6cf"
        frameRate={60}
        cameraZoom={1}
        brightness={3.6}
        lightType="3d"
        cDistance={3.9}
        cAzimuthAngle={180}
        cPolarAngle={115}
        range="disabled"
        uAmplitude={0}
        uDensity={1.1}
        uFrequency={5.5}
        uStrength={2.4}
        uSpeed={0.1}
        uTime={0.2}
        grain="on"
        reflection={0.1}
        enableTransition={false}
      />
    </ShaderGradientCanvas>
  );
};
