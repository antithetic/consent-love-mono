import Lenis from 'lenis'

let lenis: Lenis | null = null
let animationId: number | null = null

export function initLenis() {
  if (typeof window === 'undefined') return

  lenis = new Lenis({
    duration: 1.2,
    // easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    easing: (t) => 1 - Math.pow(2, -10 * t), // expo-out easing
    touchMultiplier: 2,
    infinite: false,
  })

  function raf(time: number) {
    lenis?.raf(time)
    animationId = requestAnimationFrame(raf)
  }

  animationId = requestAnimationFrame(raf)

  return lenis
}

export function getLenis() {
  return lenis
}

export function destroyLenis() {
  if (animationId) {
    cancelAnimationFrame(animationId)
    animationId = null
  }
  lenis?.destroy()
  lenis = null
}
