import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei';
import { Suspense, useState } from 'react';
import { Button } from '@/components/ui/button';
import { RotateCw, ZoomIn, ZoomOut } from 'lucide-react';

// Fallback 3D satellite made with primitives
const FallbackSatellite = () => {
  return (
    <group>
      {/* Satellite body */}
      <mesh>
        <boxGeometry args={[1.2, 0.8, 0.8]} />
        <meshStandardMaterial color="#1e40af" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* Solar panel left */}
      <mesh position={[-1.2, 0, 0]}>
        <boxGeometry args={[1, 1.5, 0.05]} />
        <meshStandardMaterial color="#1e3a8a" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Solar panel right */}
      <mesh position={[1.2, 0, 0]}>
        <boxGeometry args={[1, 1.5, 0.05]} />
        <meshStandardMaterial color="#1e3a8a" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Antenna */}
      <mesh position={[0, 0.6, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.8]} />
        <meshStandardMaterial color="#64748b" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Sensor dome */}
      <mesh position={[0, -0.5, 0]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#0ea5e9" metalness={0.5} roughness={0.3} emissive="#0ea5e9" emissiveIntensity={0.3} />
      </mesh>
    </group>
  );
};

const Scene = ({ resetTrigger }: { resetTrigger: number }) => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[3, 2, 3]} />
      <OrbitControls 
        enablePan={false} 
        minDistance={2} 
        maxDistance={8}
        key={resetTrigger}
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <directionalLight position={[-3, -3, -3]} intensity={0.3} />
      <Suspense fallback={null}>
        <FallbackSatellite />
      </Suspense>
    </>
  );
};

export const SatelliteModel = () => {
  const [resetTrigger, setResetTrigger] = useState(0);

  return (
    <div className="relative w-full h-[400px] rounded-2xl overflow-hidden glass-panel">
      <Canvas>
        <Scene resetTrigger={resetTrigger} />
      </Canvas>
      
      <div className="absolute top-4 right-4 flex gap-2">
        <Button
          size="icon"
          variant="outline"
          className="h-8 w-8 bg-background/80 backdrop-blur"
          onClick={() => setResetTrigger(prev => prev + 1)}
          title="Reset view"
        >
          <RotateCw className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="absolute bottom-4 left-4 text-xs text-muted-foreground bg-background/80 backdrop-blur px-3 py-2 rounded-lg">
        Drag to rotate • Scroll to zoom
      </div>
    </div>
  );
};
