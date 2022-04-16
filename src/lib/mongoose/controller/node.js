import schema from '../model/model.js'
const {Node} = schema

const readNode = async (nodename)=>{
	const node = await Node.findOne({nodename})
	console.log(node)
	// 노드가 검색되면 1, 아니면 0 으로 입력
	const isExist = 1 // 임시
	return isExist
}

const writeNode =async (name, description)=> {
	const isExist = await readNode(name)
	if(!isExist){
		const newNode =  Node({ name, description})
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