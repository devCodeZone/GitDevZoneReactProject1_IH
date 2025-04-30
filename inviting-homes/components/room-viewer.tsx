"use client"

import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Suspense, useState } from "react"
import { Button } from "@/components/ui/button"
import { Sofa, Table, LampFloor, Palette, RotateCcw, ZoomIn, ZoomOut } from "lucide-react"

function Model() {
  // Using a sample 3D model for demonstration
  return (
    <mesh position={[0, 0, 0]} scale={[1, 1, 1]}>
      <boxGeometry args={[1, 0.05, 1]} /> {/* Floor */}
      <meshStandardMaterial color="#f0f0f0" />
      {/* Wall 1 */}
      <mesh position={[-0.5, 0.5, 0]} rotation={[0, 0, Math.PI / 2]}>
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial color="#e6e6e6" />
      </mesh>
      {/* Wall 2 */}
      <mesh position={[0, 0.5, -0.5]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial color="#e6e6e6" />
      </mesh>
      {/* Sofa */}
      <mesh position={[-0.25, 0.15, 0.3]}>
        <boxGeometry args={[0.5, 0.2, 0.2]} />
        <meshStandardMaterial color="#4a7aff" />

        {/* Sofa back */}
        <mesh position={[0, 0.15, -0.1]}>
          <boxGeometry args={[0.5, 0.3, 0.05]} />
          <meshStandardMaterial color="#4a7aff" />
        </mesh>

        {/* Sofa arms */}
        <mesh position={[0.25, 0, 0]}>
          <boxGeometry args={[0.05, 0.25, 0.2]} />
          <meshStandardMaterial color="#4a7aff" />
        </mesh>
        <mesh position={[-0.25, 0, 0]}>
          <boxGeometry args={[0.05, 0.25, 0.2]} />
          <meshStandardMaterial color="#4a7aff" />
        </mesh>
      </mesh>
      {/* Coffee table */}
      <mesh position={[0, 0.1, 0]}>
        <boxGeometry args={[0.3, 0.02, 0.2]} />
        <meshStandardMaterial color="#8b4513" />

        {/* Table legs */}
        <mesh position={[0.12, -0.05, 0.08]}>
          <boxGeometry args={[0.02, 0.1, 0.02]} />
          <meshStandardMaterial color="#8b4513" />
        </mesh>
        <mesh position={[-0.12, -0.05, 0.08]}>
          <boxGeometry args={[0.02, 0.1, 0.02]} />
          <meshStandardMaterial color="#8b4513" />
        </mesh>
        <mesh position={[0.12, -0.05, -0.08]}>
          <boxGeometry args={[0.02, 0.1, 0.02]} />
          <meshStandardMaterial color="#8b4513" />
        </mesh>
        <mesh position={[-0.12, -0.05, -0.08]}>
          <boxGeometry args={[0.02, 0.1, 0.02]} />
          <meshStandardMaterial color="#8b4513" />
        </mesh>
      </mesh>
      {/* Floor lamp */}
      <mesh position={[0.4, 0.3, -0.3]}>
        <cylinderGeometry args={[0.02, 0.02, 0.6]} />
        <meshStandardMaterial color="#333" />

        {/* Lamp shade */}
        <mesh position={[0, 0.35, 0]}>
          <coneGeometry args={[0.1, 0.15, 16, 1, true]} />
          <meshStandardMaterial color="#f5f5dc" />

          {/* Light bulb */}
          <pointLight position={[0, -0.05, 0]} intensity={0.8} color="#fff9e6" />
        </mesh>

        {/* Lamp base */}
        <mesh position={[0, -0.3, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 0.02]} />
          <meshStandardMaterial color="#333" />
        </mesh>
      </mesh>
    </mesh>
  )
}

export function RoomViewer() {
  const [cameraPosition, setCameraPosition] = useState([1.5, 1.5, 1.5])
  const [roomColor, setRoomColor] = useState("#4a7aff")

  const zoomIn = () => {
    setCameraPosition((prev) => [prev[0] * 0.8, prev[1] * 0.8, prev[2] * 0.8])
  }

  const zoomOut = () => {
    setCameraPosition((prev) => [prev[0] * 1.2, prev[1] * 1.2, prev[2] * 1.2])
  }

  const resetView = () => {
    setCameraPosition([1.5, 1.5, 1.5])
  }

  return (
    <div className="flex flex-col">
      <div className="h-[500px] w-full relative">
        <Canvas shadows>
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={cameraPosition} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
            <Model />
            <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
            <Environment preset="apartment" />
          </Suspense>
        </Canvas>

        <div className="absolute bottom-4 left-4 flex flex-col gap-2">
          <Button variant="secondary" size="icon" onClick={zoomIn}>
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button variant="secondary" size="icon" onClick={zoomOut}>
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Button variant="secondary" size="icon" onClick={resetView}>
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 flex items-center gap-2 mb-3">
            <Sofa className="h-5 w-5" /> Furniture Options
          </h3>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" className="justify-start">
              Modern Sofa
            </Button>
            <Button variant="outline" className="justify-start">
              Sectional
            </Button>
            <Button variant="outline" className="justify-start">
              Armchair
            </Button>
            <Button variant="outline" className="justify-start">
              Ottoman
            </Button>
          </div>
        </div>

        <div className="bg-blue-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 flex items-center gap-2 mb-3">
            <Table className="h-5 w-5" /> Accessories
          </h3>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" className="justify-start">
              Coffee Table
            </Button>
            <Button variant="outline" className="justify-start">
              Side Table
            </Button>
            <Button variant="outline" className="justify-start">
              Bookshelf
            </Button>
            <Button variant="outline" className="justify-start">
              TV Stand
            </Button>
          </div>
        </div>

        <div className="bg-blue-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 flex items-center gap-2 mb-3">
            <LampFloor className="h-5 w-5" /> Lighting
          </h3>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" className="justify-start">
              Floor Lamp
            </Button>
            <Button variant="outline" className="justify-start">
              Table Lamp
            </Button>
            <Button variant="outline" className="justify-start">
              Pendant
            </Button>
            <Button variant="outline" className="justify-start">
              Chandelier
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-blue-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-800 flex items-center gap-2 mb-3">
          <Palette className="h-5 w-5" /> Color Schemes
        </h3>
        <div className="flex flex-wrap gap-2">
          <button
            className="w-8 h-8 rounded-full bg-blue-600 border-2 border-white"
            onClick={() => setRoomColor("#4a7aff")}
            aria-label="Blue color scheme"
          />
          <button
            className="w-8 h-8 rounded-full bg-green-600 border-2 border-white"
            onClick={() => setRoomColor("#4caf50")}
            aria-label="Green color scheme"
          />
          <button
            className="w-8 h-8 rounded-full bg-purple-600 border-2 border-white"
            onClick={() => setRoomColor("#9c27b0")}
            aria-label="Purple color scheme"
          />
          <button
            className="w-8 h-8 rounded-full bg-amber-600 border-2 border-white"
            onClick={() => setRoomColor("#ff9800")}
            aria-label="Amber color scheme"
          />
          <button
            className="w-8 h-8 rounded-full bg-red-600 border-2 border-white"
            onClick={() => setRoomColor("#f44336")}
            aria-label="Red color scheme"
          />
          <button
            className="w-8 h-8 rounded-full bg-teal-600 border-2 border-white"
            onClick={() => setRoomColor("#009688")}
            aria-label="Teal color scheme"
          />
        </div>
      </div>
    </div>
  )
}

