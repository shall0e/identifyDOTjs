# identifyDOTjs
## Javascript Library to add fingerprinting measures!

To call a fingerprint value, run
```Javascript
await getFingerprint()
```
Will return a hashed value unique to every device.

### HTML Javascript
```HTML
<script src="https://raw.githubusercontent.com/Shall0e/identifyDOTjs/main/identify.js/"></script>
```

### Pure Javascript:
```Javascript
eval(await fetch("https://raw.githubusercontent.com/Shall0e/identifyDOTjs/main/identify.js/").then(e=>e.text()))
```
