import * as cookie from 'cookie';
import api from '$api/0.index';
// User include session array
const { User } = api


// routes>acount>login
// userAuth -> DB confirm, setSession, setCookie, return name=loginId
export const post = async ({ request }) => {
  const { id, email, password } = await request.json()
  // DB confirm
  const { status, name } = await User.login(id, email, password)
  if (status == 200) {
    // set Session
    const session = await User.createSession(name)

    const headers = {
      // set Cookie
      "Set-Cookie": cookie.serialize('sknowSession', session.sknowSession, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
        sameSite: 'lax',
      })
    }
    return {
      status,
      headers,
      body: {
        status,
        // return loginId
        name
      }
    }
  }
  return {
    status,
    body: {
      status
    }
  }
}