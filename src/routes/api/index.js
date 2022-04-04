export const get = async () => {
  return {
    status: 200,
    body: {
      x: "index"
    }
  }
}

export const post = async ({ request }) => {

  // fetch 요청 처리 (json)
  const data = await request.json() // .text() 도 사용 가능. 비추
  const name = data.name
  const email = data.email

  return {
    status: 200,
    body: {
      name, email
    }
  }
}