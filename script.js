const input = document.getElementById("input");
const btnShow = document.getElementById("btnShow");


const title = document.getElementById("title");
const fecha = document.getElementById("date");
const detalle = document.getElementById("explanation");
const imagenPic = document.getElementById("imagen");

btnShow.addEventListener("click", function () {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("load", function () {
    const response = JSON.parse(xhr.responseText);

    imagenPic.src = response.url;
    title.textContent = response.title;
    fecha.textContent = response.date;
    detalle.textContent = response.explanation;
     console.log(xhr);
     console.log(input); 
  });

  xhr.open(
    "GET",
    `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${input.value}`
  );
  xhr.send();
});
