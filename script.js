const btnShow = document.getElementById("btnShow");
const title = document.getElementById("title");
const fecha = document.getElementById("date");
const detalle = document.getElementById("explanation");
const imgFoto = document.getElementById("imagen");

btnShow.addEventListener("click", function () {
  const xhr = new XMLHttpRequest();
  const input = document.getElementById("input").value;

  xhr.addEventListener("load", function () {
    const response = JSON.parse(xhr.responseText);

    imgFoto.src = response.url;
    title.textContent = response.title;
    fecha.textContent = response.date;
    detalle.textContent = response.explanation;
    /*  console.log(xhr);
     console.log(input);  */
  });
  xhr.open(
    "GET",
    "https://api.nasa.gov/planetary/apod?api_key=RHt4jhhPnbnlcz4erwp2id2g9QpjqmQuUpB6d0uE&date=" +
      input
  );

  xhr.send();
});
