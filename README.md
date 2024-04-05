# identifyDOTjs
Javascript Library to add fingerprinting measures!

To call a fingerprint value, run
```Javascript
await getFingerprint()
```
This function returns a hashed value unique to **every** device.



### HTML Javascript
```HTML
<script src="https://raw.githubusercontent.com/Shall0e/identifyDOTjs/main/identify.js"></script>
```
### Pure Javascript:
```Javascript
eval(await fetch("https://raw.githubusercontent.com/Shall0e/identifyDOTjs/main/identify.js").then(e=>e.text()))
```

This project is supposed to be an alternative to FingerprintJS/fingerprint.com
I believe FingerprintJS is inherentely shading, and the fact that it is GEARED towards tracking is absolutely awful, especially since it can be used to identify you on any site.
identifyJS is completely front-end, with no server or database backing. Unless someone uses this program to build a database surrounding their prints.
