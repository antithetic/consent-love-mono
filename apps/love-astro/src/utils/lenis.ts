import Lenis from 'lenis'

let lenis: Lenis | null = null
let animationId: number | null = null

/**
 * Initializes the Lenis smooth scrolling instance with custom configuration.
 * Sets up the animation frame loop for smooth scrolling.
 *
 * @returns {Lenis | undefined} The initialized Lenis instance or undefined if running on server
 */
export function initLenis() {
  if (typeof window === 'undefined') return
  if (lenis) return lenis
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

/**
 * Retrieves the current Lenis instance.
 *
 * @returns {Lenis | null} The current Lenis instance or null if not initialized
 */
export function getLenis() {
  return lenis
}

/**
 * Destroys the current Lenis instance and cleans up animation frames.
 * Should be called before reinitializing or when component unmounts.
 */
export function destroyLenis() {
  if (animationId) {
    cancelAnimationFrame(animationId)
    animationId = null
  }
  lenis?.destroy()
  lenis = null
}
