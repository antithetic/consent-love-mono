/**
 * Utility functions for managing dynamic header height
 */

/**
 * Calculates and updates the header height CSS variable based on the actual header element height
 */
export function updateHeaderHeight(): void {
  const header = document.querySelector('header')
  if (!header) {
    console.warn('Header element not found. Header height will not be updated.')
    return
  }

  // Get the actual height of the header including margins and padding
  const headerHeight = header.getBoundingClientRect().height
  const headerTop = header.getBoundingClientRect().top

  // Update the CSS variable with the calculated height
  document.documentElement.style.setProperty(
    '--header-height',
    `${headerHeight + headerTop}px`,
  )
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
  try {
    // Initial update
    updateHeaderHeight()

    // Update on resize with error handling
    const resizeHandler = () => {
      try {
        updateHeaderHeight()
      } catch (error) {
        console.error('Error updating header height on resize:', error)
      }
    }
    window.addEventListener('resize', resizeHandler)

    // Update on orientation change (for mobile devices)
    orientationHandler = () => {
      try {
        // Small delay to ensure the DOM has updated
        setTimeout(() => {
          try {
            updateHeaderHeight()
          } catch (error) {
            console.error('Error updating header height after orientation change:', error)
          }
        }, 100)
      } catch (error) {
        console.error('Error in orientation change handler:', error)
      }
    }
    window.addEventListener('orientationchange', orientationHandler)
  } catch (error) {
    console.error('Error initializing header height:', error)
  }
}

export function cleanupHeaderHeight(): void {
  window.removeEventListener('resize', updateHeaderHeight)
  if (orientationHandler) {
    window.removeEventListener('orientationchange', orientationHandler)
    orientationHandler = null
  }
}
