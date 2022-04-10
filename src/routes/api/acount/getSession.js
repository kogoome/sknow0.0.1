import controller from '$controller/0.index.js'
// User include session array
const { User } = controller

// routes>__layout
// client sessionId -> return server loginId
export const post = async ({ request }) => {

  let loginId = ""
  const { sessionId } = await request.json()
  const session = await User.getSession(sessionId)
  loginId = session ? session.id : ""

  return {
    status: 200,
    body: {
      loginId
    }
  }
}
