const endPoint = "https://freetestapi.com/api/v1/movies";

async function hitAPI() {
  const api = await fetch(endPoint);
  const result = await api.json();
  console.log(result);
  return result;
}
hitAPI().then((file) => html(file));

function html(file) {
  let a = document.querySelector(".list-film");
  let dataAPI = file;

  dataAPI.forEach((element) => {
    let b = document.createElement("div");
    a.append(b);

    let c = document.createElement("div");
    let img = document.createElement("img");
    img.src = "https://fakeimg.pl/220x310/ff0000";
    c.append(img);
    b.append(c);

    let d = document.createElement("article");

    b.append(d);

    let e = document.createElement("h4");
    e.textContent = `${element.title}`;
    let f = document.createElement("p");
    f.textContent = `${element.year}`;
    let g = document.createElement("h5");
    g.textContent = `Rating: ${element.rating}`;
    d.append(e);
    d.append(f);
    d.append(g);
  });
}
