import api from '$api/0.index.js'
// User include session array
const { User } = api

// routes>__layout
// client sessionId -> delete server session
export const post = async ({ request }) => {

  // console.log("3 세션삭제 엔드포인트 실행");
  const { sessionId } = await request.json()
  // console.log("4 sessionId: ", sessionId);
  try {
    const session = await User.removeSession(sessionId)
    console.log("7. 삭제된 세션: ", session);
    return {
      status: 200,
      body: {
        message: 'logout success',
      }
    }
  } catch (error) {
    return {
      status: 400, body: {
        message: 'session not found',
        error
      }
    }
  }

}
