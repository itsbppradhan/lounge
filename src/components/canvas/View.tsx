'use client'

import { forwardRef, Suspense, useImperativeHandle, useRef, useEffect } from 'react'
import { OrbitControls, PerspectiveCamera, View as ViewImpl } from '@react-three/drei'
import { Three } from '@/helpers/components/Three'

function useResizeCanvas(ref) {
  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        ref.current.style.width = `${window.innerWidth}px`;
        ref.current.style.height = `${window.innerHeight}px`;
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial size

    return () => window.removeEventListener('resize', handleResize);
  }, [ref]);
}

export const Common = ({ color }) => (
  <Suspense fallback={null}>
    {color && <color attach='background' args={[color]} />}
    <ambientLight intensity={0.5} />
    <pointLight position={[20, 30, 10]} intensity={1} />
    <pointLight position={[-10, -10, -10]} color='blue' />
    <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
  </Suspense>
)

const View = forwardRef(({ children, orbit, ...props }, ref) => {
  const localRef = useRef(null);
  useResizeCanvas(localRef); // Use the custom hook

  useImperativeHandle(ref, () => localRef.current);

  return (
    <>
      <div ref={localRef} {...props} />
      <Three>
        <ViewImpl track={localRef}>
          {children}
          {orbit && (
            <OrbitControls
              enableZoom={false}
              minDistance={5}
              maxDistance={10}
            />
          )}
        </ViewImpl>
      </Three>
    </>
  );
});
View.displayName = 'View'

export { View }
