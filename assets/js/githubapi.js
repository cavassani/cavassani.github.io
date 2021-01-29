function requestUserRepositories(username) {
  //cria um objeto XHMLHttpRequest
  const xhr = new XMLHttpRequest();

  //Github Endpoint. retorna os repositorios do user pelo username
  //const url = `https://api.github.com/users/${username}/repos`;
  const url = `https://gh-pinned-repos-5l2i19um3.vercel.app/?username=${username}`
  var i = 0;

  //Abrindo conexão, usando requisição tipo GET pelo Endpoint
  //Mandando 3 argumentos (GET/POST, URL, Async true/false)
  xhr.open("GET", url, true);

  //quando a requisição for recebida
  //vai ser processada aqui
  xhr.onload = function() {
    //data parse pra Json
    const data = JSON.parse(this.response);

    let row = document.createElement("row");
    row.classList.add("linha-");
    row.style.cssText = "display:flex; flex-direction: row; justify-content: center; align-items: center";

    //loop criando cards com os repos
    data.forEach(function(e) {

      let div = document.getElementById("github-repos");

      let rowSelected = row;
      div.appendChild(rowSelected);

      let divCol = document.createElement("div");
      divCol.classList.add("col-md-3");
      row.appendChild(divCol);
      let divIconFather = document.createElement("div");
      divIconFather.classList.add("iconbox");
      divCol.appendChild(divIconFather);

      let divIcon = document.createElement("div");
      divIcon.classList.add("iconbox-icon");
      divIconFather.appendChild(divIcon);

      let link = document.createElement("a");
      link.title = "";
      link.target = "_blank";
      link.href = (`${data[i].link}`);
      divIcon.appendChild(link);

      let spanIcon = document.createElement("span");
      spanIcon.classList.add("icon-notebook");
      link.appendChild(spanIcon);

      let divText = document.createElement("div");
      divText.classList.add("iconbox-text");
      divIconFather.appendChild(divText);

      let h3 = document.createElement("h3");
      h3.classList.add("iconbox-title");
      divText.appendChild(h3);
      h3.innerHTML = (`${data[i].repo}`);
      divText.appendChild(h3);

      let divDesc = document.createElement("div");
      divDesc.classList.add("iconbox-desc");
      divDesc.innerHTML = (`${data[i].description}`);
      divText.appendChild(divDesc);

      i++;

    });

  }

  //requisição enviada pro servidor
  xhr.send();
}

// chama função passando como string github username
requestUserRepositories("cavassani");
