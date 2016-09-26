const parse = require('parse-gedcom').parse

const ast = parse(`
0 HEAD
1 SOUR Millennial Children
2 VERS V5.5
1 CHAR UNICODE
0 @I1@ INDI
1 NAME Pie /Cakeson/
`)

console.log(require('util').inspect(ast, { depth: null }))
