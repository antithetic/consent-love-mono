/**
 * Utility functions for managing dynamic header height
 */

/**
 * Calculates and updates the header height CSS variable based on the actual header element height
 */
export function updateHeaderHeight(): void {
  const header = document.querySelector('header')
  if (!header) return

  // Get the actual height of the header including margins and padding
  const headerHeight = header.getBoundingClientRect().height
  const headerTop = header.getBoundingClientRect().top

  // Update the CSS variable with the calculated height
  document.documentElement.style.setProperty('--header-height', `${headerHeight + headerTop}px`)
}

/**
 * Initializes header height management
 * - Updates height on load
 * - Updates height on resize
 * - Updates height on orientation change
 */
// (the duplicate initHeaderHeight declaration has been removed)

/**
 * Cleans up header height event listeners
 */
// add at top of file to hold the orientation handler reference
let orientationHandler: (() => void) | null = null

export function initHeaderHeight(): void {
  // Initial update
  updateHeaderHeight()

  // Update on resize
  window.addEventListener('resize', updateHeaderHeight)

  // Update on orientation change (for mobile devices)
  orientationHandler = () => {
    // Small delay to ensure the DOM has updated
    setTimeout(updateHeaderHeight, 100)
  }
  window.addEventListener('orientationchange', orientationHandler)
}

export function cleanupHeaderHeight(): void {
  window.removeEventListener('resize', updateHeaderHeight)
  if (orientationHandler) {
    window.removeEventListener('orientationchange', orientationHandler)
    orientationHandler = null
  }
}