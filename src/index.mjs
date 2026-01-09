addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)

  // Check the URL path and serve the corresponding HTML file
  if (url.pathname === "/") {
    return fetchPage(MAIN_PAGE_URL)
  } else if (url.pathname === "/sub") {
    return fetchPage(SUB_PAGE_URL)
  } else if (url.pathname === "/link") {
    return fetchPage(LINK_PAGE_URL)
  } else {
    return new Response("Page not found", { status: 404 })
  }
}

// Function to fetch the HTML content
async function fetchPage(pageUrl) {
  const response = await fetch(pageUrl)
  const html = await response.text()
  return new Response(html, {
    headers: {
      'Content-Type': 'text/html',
    },
  })
}
