const button = document.getElementById("fetch-button");
const dogInfoParagraph = document.getElementById("dog-info");



async function fetchRandomDog(){

    const response = await fetch("https://dog.ceo/api/breeds/image/random");

    const data = await response.json();
    const url = data.message;

    const imageElement = document.querySelector('img');
    imageElement.src = url;
}

button.addEventListener("click", () => {
    fetch("http://localhost:3000/api")
        .then(response => response.json())
        .then(dogs => {
            dogs.forEach((dog) => {
                const spanElement = document.createElement('span');
                 const convertStr = JSON.stringify(dog);
                 spanElement.textContent = convertStr;
                dogInfoParagraph.append(spanElement);
            });
        });
});