# isjpeg
**is that file really (probably) a jpeg‽**

Check the first 2 bytes of the file header to see if it's a JPEG

For when you just don't trust file extensions anymore.


## Usage

**module**

`npm install isjpeg`

```js
var isJpeg = require('isjpeg')

isJpeg('/path/to/mysterious/file', function (err, jpeg) {
  if (err) throw err
  if (jpeg) {
    console.log('file is totes JPEG.')
  } else {
    console.log('ceci n\'est pas une JPEG.')  
  }
})
```

**command line**

`npm install -g isjpeg`

```sh
isjpeg ~/Pictures/
/Users/oli/Pictures/MagrittePipe.jpg is JPEG
```

## References

- http://www.mikekunz.com/image_file_header.html
- http://stackoverflow.com/questions/772388/c-sharp-how-can-i-test-a-file-is-a-jpeg
- https://github.com/threatstack/libmagic/blob/master/magic/Magdir/jpeg#L12