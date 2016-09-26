const test = require('tape')
const toGedcom = require('./')

test('Basic test', t => {
	const input = [ { pointer: '',
		tag: 'HEAD',
		data: '',
		tree:
		 [ { pointer: '',
			 tag: 'SOUR',
			 data: 'SomeApp',
			 tree: [ { pointer: '', tag: 'VERS', data: 'V5.5', tree: [] } ] },
		   { pointer: '', tag: 'CHAR', data: 'UNICODE', tree: [] } ] },
	  { pointer: '@I1@',
		tag: 'INDI',
		data: '',
		tree:
		 [ { pointer: '', tag: 'NAME', data: 'Josh /Duff/', tree: [] },
		   { pointer: '', tag: 'SEX', data: 'M', tree: [] } ] },
	  { pointer: '@I2@',
		tag: 'INDI',
		data: '',
		tree:
		 [ { pointer: '', tag: 'NAME', data: 'Anna /Duff/', tree: [] },
		   { pointer: '', tag: 'SEX', data: 'F', tree: [] } ] } ]

	const actualOutput = toGedcom(input)

	const expected = `0 HEAD
1 SOUR SomeApp
2 VERS V5.5
1 CHAR UNICODE
0 @I1@ INDI
1 NAME Josh /Duff/
1 SEX M
0 @I2@ INDI
1 NAME Anna /Duff/
1 SEX F`

	t.equal(actualOutput, expected)
	t.end()
})

test('The sample document from Wikipedia', t => {
	const input = [ { pointer: '',
		tag: 'HEAD',
		data: '',
		tree:
		 [ { pointer: '',
			 tag: 'SOUR',
			 data: 'Reunion',
			 tree:
			  [ { pointer: '', tag: 'VERS', data: 'V8.0', tree: [] },
				{ pointer: '',
				  tag: 'CORP',
				  data: 'Leister Productions',
				  tree: [] } ] },
		   { pointer: '', tag: 'DEST', data: 'Reunion', tree: [] },
		   { pointer: '', tag: 'DATE', data: '11 FEB 2006', tree: [] },
		   { pointer: '', tag: 'FILE', data: 'test', tree: [] },
		   { pointer: '',
			 tag: 'GEDC',
			 data: '',
			 tree: [ { pointer: '', tag: 'VERS', data: '5.5', tree: [] } ] },
		   { pointer: '', tag: 'CHAR', data: 'MACINTOSH', tree: [] } ] },
	  { pointer: '@I1@',
		tag: 'INDI',
		data: '',
		tree:
		 [ { pointer: '', tag: 'NAME', data: 'Bob /Cox/', tree: [] },
		   { pointer: '', tag: 'SEX', data: 'M', tree: [] },
		   { pointer: '', tag: 'FAMS', data: '@F1@', tree: [] },
		   { pointer: '',
			 tag: 'CHAN',
			 data: '',
			 tree: [ { pointer: '', tag: 'DATE', data: '11 FEB 2006', tree: [] } ] } ] },
	  { pointer: '@I2@',
		tag: 'INDI',
		data: '',
		tree:
		 [ { pointer: '', tag: 'NAME', data: 'Joann /Para/', tree: [] },
		   { pointer: '', tag: 'SEX', data: 'F', tree: [] },
		   { pointer: '', tag: 'FAMS', data: '@F1@', tree: [] },
		   { pointer: '',
			 tag: 'CHAN',
			 data: '',
			 tree: [ { pointer: '', tag: 'DATE', data: '11 FEB 2006', tree: [] } ] } ] },
	  { pointer: '@I3@',
		tag: 'INDI',
		data: '',
		tree:
		 [ { pointer: '', tag: 'NAME', data: 'Bobby Jo /Cox/', tree: [] },
		   { pointer: '', tag: 'SEX', data: 'M', tree: [] },
		   { pointer: '', tag: 'FAMC', data: '@F1@', tree: [] },
		   { pointer: '',
			 tag: 'CHAN',
			 data: '',
			 tree: [ { pointer: '', tag: 'DATE', data: '11 FEB 2006', tree: [] } ] } ] },
	  { pointer: '@F1@',
		tag: 'FAM',
		data: '',
		tree:
		 [ { pointer: '', tag: 'HUSB', data: '@I1@', tree: [] },
		   { pointer: '', tag: 'WIFE', data: '@I2@', tree: [] },
		   { pointer: '', tag: 'MARR', data: '', tree: [] },
		   { pointer: '', tag: 'CHIL', data: '@I3@', tree: [] } ] },
	  { pointer: '', tag: 'TRLR', data: '', tree: [] } ]

	const expected = `0 HEAD
1 SOUR Reunion
2 VERS V8.0
2 CORP Leister Productions
1 DEST Reunion
1 DATE 11 FEB 2006
1 FILE test
1 GEDC
2 VERS 5.5
1 CHAR MACINTOSH
0 @I1@ INDI
1 NAME Bob /Cox/
1 SEX M
1 FAMS @F1@
1 CHAN
2 DATE 11 FEB 2006
0 @I2@ INDI
1 NAME Joann /Para/
1 SEX F
1 FAMS @F1@
1 CHAN
2 DATE 11 FEB 2006
0 @I3@ INDI
1 NAME Bobby Jo /Cox/
1 SEX M
1 FAMC @F1@
1 CHAN
2 DATE 11 FEB 2006
0 @F1@ FAM
1 HUSB @I1@
1 WIFE @I2@
1 MARR
1 CHIL @I3@
0 TRLR`

	const actual = toGedcom(input)

	t.equal(actual, expected)
	t.end()
})
