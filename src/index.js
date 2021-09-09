import {caracters} from './caracters.js';

let password = '';
let generatePassword = (len) => {
	while(password.length < len){
		let i = Math.floor(Math.random() * caracters.length);
		password += caracters[i];
	}
	if (password.length == len) {
		document.getElementById('passwordshow').innerHTML = password;
	}
}