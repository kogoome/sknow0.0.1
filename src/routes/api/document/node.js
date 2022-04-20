import api from '$lib/mongoose/api/0.index'
const { Node } = api

// 노드 검색
export const get = async ({ url }) => {
	const nodes = url.searchParams.get('search_node')// 인풋 네임과 동일
	console.log("🚀 ~ file: search_node.js ~ line 6 ~ get ~ nodes", nodes)
	const result = await Node.readNode(nodes.split(' '))

	// 독립적 개념과 맥락적 개념의 구분. 
	// 맥락적 개념 => edge에서만 존재. 독립적 개념은 node와 추상화된 edge로 사용.

	return {
		body: {
			result
		}
	}
}

// 노드 등록

export const post = async ({ request }) => {
	const formdata = await request.formData()
	const nodes = formdata.getAll('regist_node')


	return {
		body: {
			nodes
		}
	}
}