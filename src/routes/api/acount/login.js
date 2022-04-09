import controller from '$controller/0.index.js'
const { User } = controller

export const post = async ({ request }) => {
  const { id, password } = await request.json()
  console.log(password);
  console.log(id);

  // 몽구스 로그인 미들웨어
  // 연결 확인 

  return {
    status: 200,
    body: {
      id
    }
  }
}