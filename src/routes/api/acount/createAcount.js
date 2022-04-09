import controller from '$controller/0.index.js'
const { User } = controller

export const post = async ({ request }) => {
  const { email, id, nickname, password2 } = await request.json()
  console.log("post 데이터 전송확인")
  // 디비에 데이터 저장
  const response = await User.createAcount(email, id, nickname, password2)
  // 저장데이터 출력
  console.log(response)
  const resid = response.id
  // TODO: 응답값이 부정일

  return {
    status: 200,
    body: {
      resid
    }
  }
}