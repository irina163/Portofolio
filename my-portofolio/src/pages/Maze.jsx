import React from "react";

export function generateMaze (width, height) {
    let maze = Array(width).fill(null).map(() => Array(height).fill(0));
    
    // Set maze walls or paths (just a simple example)
    for (let i = 0; i < width; i++) {
      for (let j = 0; j < height; j++) {
        maze[i][j] = Math.random() > 0.7 ? 1 : 0; // Random walls
      }
    }
    
    maze[0][0] = 0; // Ensure the starting point is open
    maze[width - 1][height - 1] = 0; // Ensure the end point is open
    
    return maze;
  };

  export function Maze({ maze }) {
    return (
    <>
      {maze.map((row, x) =>
        row.map((cell, z) =>
          cell === 1 ? (
            <mesh key={`${x}-${z}`} position={[x, 0, z]}>
              <boxGeometry args={[1, 2, 1]} />
              <meshStandardMaterial color="gray" />
            </mesh>
          ) : null
        )
      )}
    </>
    );
  }