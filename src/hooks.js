import * as cookie from 'cookie';

/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
  // console.log("핸들러")
  const cookies = cookie.parse(event.request.headers.get('cookie') || '')
  if (cookies.sknowSession) {
    event.locals.user = cookies
    event.locals.user.authenticated = !cookies.sknowSession ? false : true
    // console.log("event.locals.user: ", event.locals.user);
  }
  const response = await resolve(event)
  return response
}

/** @type {import('@sveltejs/kit').GetSession} */
export const getSession = (request) => {
  const user = request.locals.user
  // console.log("겟세션")
  // console.log("user: ", user);
  // console.log("user.authenticated: ", user.authenticated);
  return user ? user.authenticated ? { user } : {} : {}
}

