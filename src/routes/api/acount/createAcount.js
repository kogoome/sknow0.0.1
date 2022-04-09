import controller from '$controller/0.index.js'
const { User } = controller

export const post = async ({ request }) => {
  const { email, id, nickname, password2 } = await request.json()
  const response = await User.createAcount(email, id, nickname, password2)
  const resid = response.id
  // TODO: 응답값이 없을때 작성

  return {
    status: 200,
    body: {
      resid
    }
  }
}