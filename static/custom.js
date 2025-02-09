const HIDE_CLASS = "d-none"

addSearch() // Too much work
scrollFix()

function scrollFix() {
  let tdNav = document.getElementById("td-section-nav")
  if (!tdNav) {
    return
  }
  
  let href = window.location.pathname
  let matchingLink = tdNav.querySelector(`a[href="${href}"]`)

  if (!matchingLink) {
    return
  }

  // let linkRect = matchingLink.getBoundingClientRect()
  // let windowHeight = window.innerHeight
  // let height = linkRect.height
  // let centerY = linkRect.y + (height * 0.5)
  // let centerDif =  centerY - (windowHeight * 0.5)
  // tdNav.scrollBy({top: centerDif, behavior: "instant"})

  const sectKey = "scroll-tracker.section"
  const scrollKey = "scroll-tracker.scroll"

  let section = getSection(window.location.pathname)

  let foundSect = localStorage[sectKey] ?? section
  let foundScroll = Number(localStorage[scrollKey] ?? "0")

  if (foundSect != section) {
    foundScroll = 0
  }

  localStorage[sectKey] = section
  localStorage[scrollKey] = foundScroll

  tdNav.scrollTo({top: foundScroll, behavior: "instant"})

  tdNav.onscrollend = (ev) => {
    localStorage[sectKey] = section
    localStorage[scrollKey] = tdNav.scrollTop
  }
}

/**
 * 
 * @param {string} pathname 
 */
function getSection(pathname) {
  if (pathname[0] == "/") {
    pathname = pathname.substring(1)
  }

  let idx = pathname.indexOf('/')
  if (idx == -1) {
    return pathname
  }

  return pathname.substring(0, idx)
}

function addSearch() {
  let menuTop = document.querySelector(`#td-section-nav ul li[id^="m-"] a[id^="m-"]`)
  if (!menuTop) {
    return
  }

  let parent = menuTop.parentElement
  let navlist = menuTop.nextElementSibling

  let params = new URLSearchParams(window.location.search ?? "?")
  let q = params.get("q")

  let form = createSearchElement(navlist, q)

  parent.insertBefore(form, navlist)

  if (!q) {
    return
  }

  let decoded = decodeURIComponent(q)
  applySearch(navlist, decoded)
}

function createSearchElement(navlist, currentSearch) {
  let form = document.createElement("form")
  form.id = "custom-nav-search"
  form.onsubmit = (ev) => {
    ev.preventDefault()
  }

  let input = document.createElement("input")
  input.type = "text"
  input.placeholder = "Search..."
  input.className = "w-100 p-1 mb-3"

  if (currentSearch) {
    input.value = currentSearch
  }

  input.oninput = (ev) => {
    applySearch(navlist, input.value.toLowerCase())
  }

  form.appendChild(input)
  
  return form
}

/**
 * @param {HTMLElement} navlist 
 * @param {string} search 
 * @returns 
 */
function applySearch(navlist, search) {
  search = (search ?? "").toLowerCase()

  let clear = search.length < 1
  let links = navlist.querySelectorAll("a")

  let curl = new URL(window.location.href)
  if (clear) {
    let hasQ = curl.searchParams.has("q")
    curl.searchParams.delete("q")
    
    if (hasQ) {
      window.history.pushState(null, '', curl)
    }
  } else {
    curl.searchParams.set("q", encodeURIComponent(search))
  }
  //window.history.pushState(null, '', curl)

  for (let link of links) {
    if (clear) {
      link.classList.remove(HIDE_CLASS)
      removeSearchParam(link)
    } else {
      link.classList.add(HIDE_CLASS)
    }
  }

  if (clear) {
    return
  }

  for (let link of links) {
    let txt = link.textContent.toLowerCase()
    if (!txt.includes(search)) {
      continue
    }

    showLink(link, search)

    showNavTreeDownwards(link, search)
    showNavTreeUpwards(link, navlist, search)
  }
}

/**
 * @param {HTMLAnchorElement} a 
 * @param {HTMLElement} navlist
 */
function showNavTreeUpwards(a, navlist, search) {
  while (true) {
    let li = a.parentElement
    let ul = li.parentElement

    if (ul == navlist) {
      break
    }

    let prev = ul.previousElementSibling
    showLink(prev, search)

    a = prev
  }
}

/**
 * @param {HTMLAnchorElement} a 
 * @param {HTMLElement} navlist
 */
function showNavTreeDownwards(a, search) {
  let ul = a.nextElementSibling
  if (!ul) {
    return
  }

  for (let link of ul.querySelectorAll("a[href]")) {
    showLink(link, search)
  }
}

/**
 * @param {HTMLAnchorElement} a 
 */
function showLink(a, search) {
  a.classList.remove(HIDE_CLASS)
  let ref = a.href
  let url = new URL(ref)
  a.href = url.pathname + `?q=${encodeURIComponent(search)}`
}

/**
 * @param {HTMLAnchorElement} a 
 */
function removeSearchParam(a) {
  let ref = a.href
  let url = new URL(ref)
  a.href = url.pathname
}
