
module.exports = astToGedcom

function astToGedcom(ary, depth = 0) {
	return ary.map(node => nodeToGedcom(node, depth)).join('\n')
}

function nodeToGedcom({ tag, pointer, data, tree }, depth) {
	const children = astToGedcom(tree, depth + 1)

	return newline(space(depth, pointer, tag, data), children)
}

function space(...args) {
	return joinNonEmpty(args, ' ')
}

function newline(...args) {
	return joinNonEmpty(args, '\n')
}

function joinNonEmpty(ary, joinWith) {
	return ary.filter(str => str !== '').join(joinWith)
}
