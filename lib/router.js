export class Router {
  // Change the location state and dispatch event
  push (to) {
    window.history.pushState({}, '', to)
    window.dispatchEvent(new Event('pushstate'))

    // Mark current link as active
    setTimeout(function () {
      document.body.querySelectorAll('.router-link').forEach(function (link) {
        link.classList[ link.pathname === to ? 'add' : 'remove' ]('active')
      })
    })
  }
}

export const router = new Router()
export default router
