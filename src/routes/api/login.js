import { User } from '$lib/mongoose/controller/0.index'

export const post = async ({ request }) => {
  const { id, password } = await request.json()

  // 몽구스 로그인 미들웨어
  console.log("유져 컨트롤러", User.test());
  //console.log(test);

  return {
    status: 200,
    body: {
      id
    }
  }
}