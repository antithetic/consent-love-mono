import Lenis from 'lenis'

let lenis: Lenis | null = null

export function initLenis() {
  if (typeof window === 'undefined') return

  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    touchMultiplier: 2,
    infinite: false,
  })

  function raf(time: number) {
    lenis?.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  return lenis
}

export function getLenis() {
  return lenis
}

export function destroyLenis() {
  lenis?.destroy()
  lenis = null
}
