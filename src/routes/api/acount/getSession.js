import api from '$api/0.index.js'
// User include session array
const { User } = api

// routes>__layout
// client sessionId -> return server loginId
export const post = async ({ request }) => {

  let loginId = ""
  const { sessionId } = await request.json()
  const session = await User.getSession(sessionId)
  loginId = session ? session.id : ""
  console.log("세션확인 loginId", loginId)

  return {
    status: 200,
    body: {
      loginId
    }
  }
}
