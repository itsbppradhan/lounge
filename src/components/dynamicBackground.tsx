'use client'
import React from 'react'
import { BatchedMesh } from 'three';
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
        type="waterPlane"
        color1="#ff7300"
        color2="#b03182"
        color3="#b03182"
        frameRate={10}
        cameraZoom={1}
        brightness={1.2 * Math.PI}
        lightType="3d"
        envPreset="city"
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
        grain="off"
        reflection={0.1}
        positionX={-1}
        positionZ={-1}
        rotationZ={235}
        enableTransition={false}
      />
    </ShaderGradientCanvas>
  );
};
