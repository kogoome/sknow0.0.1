import schema from '../model/model.js'
const { Node } = schema


const readNode = async (nodeArr) => {
	// 다중검색 조건생성
	const orCondition = nodeArr.map(word => ({ name: word }))
	console.log("🚀 ~ file: node.js ~ line 8 ~ readNode ~ orCondition", orCondition)
	// 다중검색 리턴 검색값배열
	const nodes = await Node.find().or(orCondition)
	console.log("검색결과", nodes)
	//컨디션과 비교하여 노드에 있는지 없는지 판단 가능
	return nodes
}


const writeNode = async (name, description) => {
	const isExist = await readNode(name)
	if (!isExist) {
		const newNode = Node({ name, description })
		const saveNode = await newNode.save()
		return `${saveNode.name}이 등록되었습니다.`
	} else {
		return "같은 이름의 개념이 있습니다."
	}
}

const nodefunc = {
	readNode,
	writeNode
}

export default nodefunc