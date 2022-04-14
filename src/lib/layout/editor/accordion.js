export const accordionOpen = (e) => {
  const title = e.target
  const icon = title.firstChild
  const panel = title.nextElementSibling
  title.classList.toggle('active')
  if (panel.style.maxHeight) {
    title.classList.replace('bg-neutral-focus', 'bg-neutral')
    icon.classList.remove('fa-caret-down')
    icon.classList.add('fa-caret-right')
    panel.style.maxHeight = null
  } else {
    title.classList.replace('bg-neutral', 'bg-neutral-focus')
    icon.classList.remove('fa-caret-right')
    icon.classList.add('fa-caret-down')
    panel.style.maxHeight = panel.scrollHeight + 'px'
  }
}