import controller from '$controller/0.index.js'
const { User } = controller

export const post = async ({ request }) => {
  const { id, email, password } = await request.json()
  const { status, name } = await User.login(id, email, password)

  return {
    status,
    body: {
      status,
      name
    }
  }
}