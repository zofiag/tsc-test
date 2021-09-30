## tsc -b vs tsc -p in watch mode

Comparison of the `tsc diagnostics`:

1. `tsc -b api/tsconfig.json -w --preserveWatchOutput` (or run `npm run dev:api:b`)
Much slower.

```
Files:                         412
Lines of Library:             8664
Lines of Definitions:       577202
Lines of TypeScript:            34
Lines of JavaScript:             0
Lines of JSON:                   0
Lines of Other:                  0
Nodes of Library:            23282
Nodes of Definitions:      1689642
Nodes of TypeScript:           137
Nodes of JavaScript:             0
Nodes of JSON:                   0
Nodes of Other:                  0
Identifiers:                626998
Symbols:                    367869
Types:                         261
Instantiations:                276
Memory used:               512906K
Assignability cache size:       29
Identity cache size:             1
Subtype cache size:             10
Strict subtype cache size:       0
I/O Read time:               0.24s
Parse time:                  2.67s
ResolveModule time:          0.09s
ResolveTypeReference time:   0.00s
Program time:                3.18s
Bind time:                   0.93s
Check time:                  0.04s
transformTime time:          0.02s
commentTime time:            0.00s
printTime time:              0.04s
Emit time:                   0.04s
Source Map time:             0.00s
I/O Write time:              0.00s
Total time:                  4.20s
```


2. `tsc -p api/tsconfig.json -w --preserveWatchOutput` (or run `npm run dev:api:p`)
Much faster.

```
Files:                         412
Lines of Library:             8664
Lines of Definitions:       577202
Lines of TypeScript:            34
Lines of JavaScript:             0
Lines of JSON:                   0
Lines of Other:                  0
Nodes of Library:            23282
Nodes of Definitions:      1689642
Nodes of TypeScript:           137
Nodes of JavaScript:             0
Nodes of JSON:                   0
Nodes of Other:                  0
Identifiers:                626998
Symbols:                    367869
Types:                         261
Instantiations:                276
Memory used:               513037K
Assignability cache size:       29
Identity cache size:             1
Subtype cache size:             10
Strict subtype cache size:       0
I/O Read time:               0.00s
Parse time:                  0.00s
ResolveModule time:          0.00s
Program time:                0.01s
Bind time:                   0.00s
Check time:                  0.05s
transformTime time:          0.02s
commentTime time:            0.00s
printTime time:              0.05s
Emit time:                   0.05s
Source Map time:             0.00s
I/O Write time:              0.00s
Total time:                  0.11s
```
