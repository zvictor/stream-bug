# stream-js#99

This repo contains a minimal reproducible of the bug described by [GetStream/stream-js#99](https://github.com/GetStream/stream-js/issues/99).

To run it, follow the steps:

```bash
git clone git@github.com:zvictor/stream-bug.git && cd stream-bug
npm install
meteor run
```

Alternatively, just copy the file `stream.js` to your codebase and remember to run `npm install getstream` there.

## expected output

![Console log](/screenshot.png)
