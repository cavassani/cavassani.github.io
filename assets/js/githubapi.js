function requestUserRepositories(username) {
  const xhr = new XMLHttpRequest();
  const url = `https://api.github.com/users/${username}/repos`;

  xhr.open("GET", url, true);

  xhr.onload = function() {
    const data = JSON.parse(this.response);

    let row = document.createElement("div");
    row.classList.add("row");

    data.forEach(function(repo) {
      let divCol = document.createElement("div");
      divCol.classList.add("col-sm-6", "col-md-3");
      divCol.classList.add("teste");
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
      link.href = repo.html_url;
      divIcon.appendChild(link);

      let spanIcon = document.createElement("span");
      spanIcon.classList.add("icon-notebook");
      link.appendChild(spanIcon);

      let divText = document.createElement("div");
      divText.classList.add("iconbox-text");
      divIconFather.appendChild(divText);

      let h3 = document.createElement("h3");
      h3.classList.add("iconbox-title");
      h3.innerHTML = repo.name;
      divText.appendChild(h3);

      let divDesc = document.createElement("div");
      divDesc.classList.add("iconbox-desc");
      divDesc.innerHTML = repo.description;
      divText.appendChild(divDesc);
    });

    document.getElementById("github-repos").appendChild(row);
  }

  xhr.onerror = function() {
    document.getElementById("github-repos").innerHTML =
      '<p class="text-center">Nao foi possivel carregar os repositorios do GitHub.</p>';
  }

  xhr.send();
}

// chama função passando como string github username
requestUserRepositories("cavassani");
