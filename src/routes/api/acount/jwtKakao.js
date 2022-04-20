import api from '$api/0.index.js'
const { User } = api

export const post = async ({ request }) => {
  const { id, password } = await request.json()

  // 몽구스 로그인 미들웨어
  console.log("유져 컨트롤러", User.test());
  // 연결 확인 

  return {
    status: 200,
    body: {
      id
    }
  }
}