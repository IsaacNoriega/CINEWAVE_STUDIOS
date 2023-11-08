function MiComponente(elementoPadre) {
    this.elementoPadre = elementoPadre;
    this.elementoHijo = document.createElement('div');
    const username = "usuario 1";
    const userImg = "../assets/backgorund.jpg";
    const searchMovies = {
      "kill Bill": "https://th.bing.com/th/id/OIP.QRoYUipqebs6BA7urEIoUgHaLH?pid=ImgDet&rs=1",
      "Coraline": "https://th.bing.com/th/id/OIP.X_zYmfuYIhLPz3nHkr9wSwHaJa?pid=ImgDet&rs=1",
      "Shrek": "https://image.tmdb.org/t/p/original/WJ9WoEPmD5gWs2l3tIyPKzEI6K.jpg"
    };
  
    // Convierte el objeto en un arreglo de pares clave-valor
    const searchItems = Object.entries(searchMovies).map(([title, image]) => ` 
        <a href="#" class="search-img-poster" >
            <img src="${image}" alt="${title}">
            <p>${title}</p>
        </a>
    `).join('');
  
    const handleClickSearch = () => {
        const searchDropdown = this.elementoHijo.querySelector(".search-dropdown");
        // Alternar el estilo de 'display' para mostrar u ocultar la barra de búsqueda
        if (searchDropdown.style.display === "none" || searchDropdown.style.display === "") {
          searchDropdown.style.display = "block";
          searchDropdown.style.top = "-100%";
          searchDropdown.style.transition = "top 1s";
          setTimeout(() => {
            searchDropdown.style.top = "10%";
          }, 0);
        } else {
          searchDropdown.style.top = "-100%";
          setTimeout(() => {
            searchDropdown.style.display = "none";
          }, 1000);
        }
      }
    
  
    this.elementoHijo.innerHTML = `
      <ul class="nav-ul">
        <li class="user-li">
          <a href="#">
            <img class="img-user" src="${userImg}">
            ${username}
          </a>
        </li>
        <li class="search-li">
          <a href="#" id="search-link">
            <img src="../assets/ant-design_search-outlined.svg">
          </a>
        </li>
        <li>
          <a href="#">Series</a>
        </li>
        <li>
          <a href="#">Movies</a>
        </li>
        <li>
          <a href="#">My List</a>
        </li>
      </ul>
      <div class="search-dropdown hidden">
        <input type="text" placeholder="Search for a show, movie, genre, e.t.c."/>
        <div class="search-imgs">
          ${searchItems}
        </div>
      </div>
    `;
  
    this.elementoPadre.appendChild(this.elementoHijo);
  
    // Agrega un manejador de evento clic al enlace de búsqueda
    const searchLink = this.elementoHijo.querySelector("#search-link");
    searchLink.addEventListener("click", handleClickSearch);
  }
  
  // Para usar el componente:
  const contenedor = document.getElementById('main-nav');
  const miComponente = new MiComponente(contenedor);
  