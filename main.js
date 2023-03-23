/** @format */

const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const form = document.querySelector(".form__form");
const emailRegex = new RegExp("[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]");

form.addEventListener("submit", (event) => {
	const iboxes = document.querySelectorAll(".ibox");
	iboxes.forEach((ibox) => {
		if (ibox.children[0].value === "") {
			event.preventDefault();
			ibox.children[0].classList.add("ibox__input--error");
			ibox.children[1].classList.remove("noerror");
			ibox.children[2].classList.remove("noerror");
		} else {
			ibox.children[0].classList.remove("ibox__input--error");
			ibox.children[1].classList.add("noerror");
			ibox.children[2].classList.add("noerror");
		}
	});
	const ibox = iboxes["2"];
	console.log(ibox.children);
	if (email.value !== "") {
		if (!emailRegex.test(email.value)) {
			event.preventDefault();
			ibox.children[0].classList.add("ibox__input--error");
			ibox.children[1].classList.remove("noerror");
			ibox.children[3].classList.remove("noerror");
		} else {
			console.log("noerror");
			ibox.children[0].classList.remove("ibox__input--error");
			ibox.children[1].classList.add("noerror");
			ibox.children[3].classList.add("noerror");
		}
	}
});
