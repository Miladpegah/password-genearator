# base16-js

[Base16](https://github.com/Miladpegah/password-generator) password generator as JS array.


## Installation

### Fast installation
**Add index.js to your project and run `generatePassword()`**

### Package installaion

**npm install @miladpegah/password-generator**

## HTML Usage

#### Add the button `id` and add the password length in `data-passwordLength`.
#### Show generated password in element with **id=passwordshow**

- Example

```html
	<button id="password-generator" data-passwordLength="10">generate password</button>
	<p id="passwordshow"></p>
```


## Js Usage

**Add library to your project and use the methods**


```js
	let len  = 10 // password length
	generatePassword(len);
```