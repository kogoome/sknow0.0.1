import * as cookie from 'cookie';
import controller from '$controller/0.index.js'
const { User } = controller

export const post = async ({ request }) => {
  const { id, email, password } = await request.json()
  const { status, name } = await User.login(id, email, password)
  if (status == 200) {
    console.log("로그인 성공")
    const session = await User.createSession(name)
    console.log("sessionId: ", session.sknowSession);
    // 세션에 저장을 하고 응답을 줘야하는데, 저장을 왜 안하냐. 그러고 보니 모듈이 서버사이드인데,

    const headers = {
      // 헤더에 키값으로 Set-Cookie를 주면 이하 값을 쿠키에 추가한다.
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
        name
      }
    }
    // 보내고 나면 {"sknowsession":"09c84d84-8730-41f4-b98c-009cf84d97a7"} 가 쿠키.user에 저장

  }
  return {
    status,
    body: {
      status
    }
  }
}