import { Toast } from 'bootstrap/dist/js/bootstrap.esm.js'

export function toastSuccess(message, duration = 2000) {
  createToast(message, 'bg-success text-white', duration)
}

export function toastDanger(message, duration = 2000) {
  createToast(message, 'bg-danger text-white', duration)
}

function createToast(message, colorClass, duration) {
  let container = document.getElementById('toast-container')
  if (!container) {
    container = document.createElement('div')
    container.id = 'toast-container'
    container.className = 'position-fixed top-0 end-0 p-3'
    container.style.zIndex = 1055
    document.body.appendChild(container)
  }

  const toastEl = document.createElement('div')
  toastEl.className = `toast align-items-center ${colorClass} border-0 mb-2`
  toastEl.role = 'alert'
  toastEl.ariaLive = 'assertive'
  toastEl.ariaAtomic = 'true'
  toastEl.innerHTML = `
    <div class="d-flex">
      <div class="toast-body">${message}</div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto"></button>
    </div>
  `
  container.appendChild(toastEl)

  toastEl.querySelector('.btn-close').addEventListener('click', () => {
    const bsToast = Toast.getInstance(toastEl)
    if (bsToast) bsToast.hide()
    toastEl.remove()
  })

  const bsToast = new Toast(toastEl, { delay: duration })
  bsToast.show()

  setTimeout(() => {
    toastEl.remove()
  }, duration + 200)
}
