import controller from '$lib/mongoose/controller/0.index'
const { Node } = controller

export const post = async ({ request }) => {
	const { keyword } = await request.json()
	const result = await Node.readNode(keyword.split(' '))

	// const result = await Node.readNode(nodes)

	// 검색된 노드들과 초기입력값인 nodeArr와 비교해서 없는 요소 필터링하고
	// 필터링 된 요소들을 메시지로 묶어 잘못된 키워드 혹은 등록되지 않은 키워드입니다. 라고 메시지 리턴해줌
	// 독립적 개념과 맥락적 개념의 구분. 
	// 맥락적 개념 => edge에서만 존재. 독립적 개념은 node와 추상화된 edge로 사용.

	return {
		body: {
			result
		}
	}
}