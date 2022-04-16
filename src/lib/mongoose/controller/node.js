import schema from '../model/model.js'
const {Node} = schema


const readNode = async (nodeArr)=>{
	const orCondition = nodeArr.map(word=>({name:word}))
	console.log(orCondition)
	const nodes = await Node.find().or(orCondition)
	return nodes
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