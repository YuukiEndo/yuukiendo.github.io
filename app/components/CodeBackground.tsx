'use client'

import React, { useEffect, useRef } from 'react'

const codeSnippets = [
  `function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[0];
  const left = arr.slice(1).filter(x => x < pivot);
  const right = arr.slice(1).filter(x => x >= pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
}`,
  `class GameEntity {
  constructor(x, y, health) {
    this.x = x;
    this.y = y;
    this.health = health;
  }
  
  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }
  
  takeDamage(amount) {
    this.health -= amount;
    if (this.health <= 0) {
      this.destroy();
    }
  }
  
  destroy() {
    // Remove entity from game
  }
}`,
  `const createShader = (gl, type, source) => {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  return shader;
}

const createProgram = (gl, vertexShader, fragmentShader) => {
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  return program;
}`
]

const CodeBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    ctx.font = '12px monospace'
    ctx.fillStyle = 'rgba(100, 100, 255, 0.1)'

    let yOffset = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      codeSnippets.forEach((snippet, index) => {
        const lines = snippet.split('\n')
        const snippetHeight = lines.length * 15
        let y = ((yOffset + index * canvas.height / 3) % (canvas.height + snippetHeight)) - snippetHeight

        lines.forEach((line, lineIndex) => {
          ctx.fillText(line, 20, y + lineIndex * 15)
        })
      })

      yOffset += 0.5
      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-[-1]" />
}

export default CodeBackground

