Given a data structure, generate GEDCOM text output.

This module expects the data structure output by the [parse-gedcom](https://github.com/tmcw/parse-gedcom) library.

```
npm i generate-gedcom -S
```

```
const astToGedcom = require('generate-gedcom')
```

This module exports a single function that takes an array of GEDCOM data and returns a string.


# Esample

<!--js
const astToGedcom = require('./')
-->

```js
const input = [ { pointer: '',
    tag: 'HEAD',
    data: '',
    tree:
     [ { pointer: '',
         tag: 'SOUR',
         data: 'Millennial Children',
         tree: [ { pointer: '', tag: 'VERS', data: 'V5.5', tree: [] } ] },
       { pointer: '', tag: 'CHAR', data: 'UNICODE', tree: [] } ] },
  { pointer: '@I1@',
    tag: 'INDI',
    data: '',
    tree: [ { pointer: '', tag: 'NAME', data: 'Pie /Cakeson/', tree: [] } ] } ]

const expectedOutput = `0 HEAD
1 SOUR Millennial Children
2 VERS V5.5
1 CHAR UNICODE
0 @I1@ INDI
1 NAME Pie /Cakeson/`

astToGedcom(input) // => expectedOutput

```

# License

[WTFPL](http://wtfpl2.com)
