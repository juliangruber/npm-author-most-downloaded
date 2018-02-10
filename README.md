# npm-author-most-downloaded

Get the most downloaded npm packages per author.

## Usage

List packages by an author sorted descending by daily download count:

```bash
$ npx npm-author-most-downloaded juliangruber | head
 1026857 : http://npm.im/isarray
  601308 : http://npm.im/balanced-match
  548211 : http://npm.im/brace-expansion
  329360 : http://npm.im/component-emitter
  269907 : http://npm.im/merge-descriptors
  170671 : http://npm.im/constants-browserify
  134105 : http://npm.im/multipipe
  121082 : http://npm.im/component-bind
  109674 : http://npm.im/throttleit
   73830 : http://npm.im/array-filter
```

## API

```bash
$ npm install npm-author-most-downloaded
```

```js
const npmAuthorMostDownloaded = require('npm-author-most-downloaded')

const packages = await npmAuthorMostDownloaded('juliangruber')
for (const pkg of packages) {
  console.log(`${String(pkg.downloads).padStart(8)} : http://npm.im/${pkg.name}`)
}
```

## License

MIT