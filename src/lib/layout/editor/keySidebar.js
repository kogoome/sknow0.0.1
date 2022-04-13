
// 사이드바-------------------------------------------------
let drawerOpen = true
let sidebarWidth = 256
export let manuIconClassName = "fa-solid fa-angles-left"

export const openSidebar = () => {
  if (drawerOpen) {
    document.getElementById("sidebar").style.width = "0";
    manuIconClassName = "fa-solid fa-bars"
  } else {
    document.getElementById("sidebar").style.width = `${sidebarWidth}px`
    manuIconClassName = "fa-solid fa-angles-left"
  }
  drawerOpen = !drawerOpen
}
const resize = (e) => {
  sidebarWidth = sidebarWidth + e.movementX
  document.getElementById("sidebar").style.width = `${sidebarWidth}px`
}
const stopResize = () => {
  document.getElementById("container").style.cursor = ""
  document.getElementById("sidebar").style.transition = "0.4s"
  document.getElementById("content").style.transition = "0.4s"
  document.removeEventListener("mousemove", resize, false)
  document.removeEventListener("mouseup", stopResize, false)
}
export const resizer = () => {
  document.getElementById("container").style.cursor = "col-resize"
  document.getElementById("sidebar").style.transition = "none"
  document.getElementById("content").style.transition = "none"
  document.addEventListener("mousemove", resize, false);
  document.addEventListener("mouseup", stopResize, false);
}
// 마우스트랩 -------------------------------------------------
export const searchFocus = () => {
  if (drawerOpen) {
    document.getElementById('search').focus()
  } else {
    setTimeout(() => { document.getElementById('search').focus() }, 400)
    openSidebar()
  }
}