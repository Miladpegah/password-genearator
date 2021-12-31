let caracters = [
	'A', 
	'B', 
	'C', 
	'D', 
	'E', 
	'F', 
	'G', 
	'H', 
	'I', 
	'J', 
	'K', 
	'L', 
	'M', 
	'N', 
	'O', 
	'P', 
	'Q', 
	'R', 
	'S', 
	'T', 
	'U', 
	'V', 
	'W', 
	'X', 
	'Y', 
	'Z', 
	'a', 
	'b', 
	'c', 
	'd', 
	'e', 
	'f', 
	'g', 
	'h', 
	'i', 
	'j', 
	'k', 
	'l', 
	'm', 
	'n', 
	'o', 
	'p', 
	'q', 
	'r', 
	's', 
	't', 
	'u', 
	'v', 
	'w', 
	'x', 
	'y', 
	'z', 
	'1', 
	'2', 
	'3', 
	'4', 
	'5', 
	'6', 
	'7', 
	'8', 
	'9', 
	'0', 
	'~',
	'!',
	'@',
	'#',
	'$',
	'%',
	'^',
	'&',
	'*',
	'(',
	')',
	'_',
	'+',
	'=',
	'`',
	'<',
	',',
	'>',
	'.',
	'/',
	'?',
	'|',
	'}',
	']',
	'[',
	'{'
];
let password = '';
const target = document.querySelector('#password-generator');
const generatePassword = (len) => {
	while(password.length < len){
		let i = Math.floor(Math.random() * caracters.length);
		password += caracters[i];
	}
	if (password.length == len) {
		document.getElementById('passwordshow').innerHTML = password;
	}else{
		password = '';
		generatePassword(len);
	}
	password = '';
}
target.addEventListener('click', event => {
	//call the generator and give that the element data-lenght
});