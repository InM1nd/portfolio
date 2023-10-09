/**
 * Initiate and update renderer on resize
 * @param renderer
 */
const updateRenderer = (renderer) => {
    if (renderer) {
      renderer.setSize(window.innerWidth, window.innerHeight)
      // set the maximum pixel ratio to 2
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }
  }
  
  /**
   * Handle window resize
   * @param camera
   * @param renderer
   */
  const onResize = (camera, renderer) => {
    // update camera
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
  
    updateRenderer(renderer)
  }
  
  export { updateRenderer, onResize }