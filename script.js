//your JS code here. If required.
let fomr = document.getElementById('form');
let name document.getElementById('name');
let age = document.getElementById('age');
let btn = document.getElementById('btn');

form.addEventListener('submit',(e)=>{
	e.preventDefault();

	if(name.value === "" || age.value === ""){
		alert("Please enter valid details.");
	}
	let promise = new Promise((resolve, reject)=>{
		setTimeout(()=>{
			if (age.value > 18) {
          resolve(`Welcome, ${name.value}. You can vote.`);
        } else {
          reject(`Oh sorry ${name.value}. You aren't old enough.`);
        }
		}, 4000)
	});
	 promise
      .then((message) => {
        alert(message);
      })
      .catch((message) => {
        alert(message);
      });

	





	
});