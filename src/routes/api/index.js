import controller from '$controller/0.index.js'
const { User } = controller

// 요놈을 세션 포스트로 써야겟군
export const post = async ({ request }) => {

  // fetch 요청 처리 (json)
  let loginId = ""
  const { sessionId } = await request.json() // .text() 도 사용 가능. 비추
  const session = await User.getSession(sessionId)
  loginId = session ? session.id : ""

  return {
    status: 200,
    body: {
      loginId
    }
  }
}
