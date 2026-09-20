export const registerServiceWorker = ({
  isProduction = import.meta.env.PROD,
  serviceWorker = globalThis.navigator?.serviceWorker,
  windowObject = globalThis.window,
} = {}) => {
  if (!isProduction || !serviceWorker || !windowObject) return

  windowObject.addEventListener('load', () => {
    serviceWorker.register('/sw.js').catch((error) => {
      console.error('No se pudo registrar el service worker.', error)
    })
  })
}
