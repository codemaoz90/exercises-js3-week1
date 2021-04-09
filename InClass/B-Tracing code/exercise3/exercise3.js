const getRepos = function (repoName) {
	return fetch("https://api.github.com/users/" + repoName + "/repos")
		.then((data) => data.json())
		.then(function (response) {
			return response.map(function (rep) {
				console.log(rep.name);
				return rep.name;
			});
		});
};

var myElement = document.querySelector("#main");
const migracodeRepos = getRepos("migracode-barcelona"); // migracode store a promise. I can use then and catch.

migracodeRepos.then((result) => {
	result.map((p) => {
		var paragraph = document.createElement("p");
		paragraph.innerText = p;
		myElement.appendChild(paragraph);
	});
});

//Task1. Fix the code
//Task2. Create a <p> for each repository
