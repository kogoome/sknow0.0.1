import * as cookie from 'cookie';

// 서버에서 돌아가는 함수 클라이언트의 세션값을 리턴해서 백단에서 적합한지 검사 후 로그인 정보를 리턴해줄 수 있다.

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

