function MiComponente(elementoPadre) {
    this.elementoPadre = elementoPadre;
    this.elementoHijo = document.createElement('div');
    const username="usuario 1";
    const userImg="../assets/backgorund.jpg"

    this.elementoHijo.innerHTML = 
    `
        <ul class="nav-ul">
            <li class="user-li">
                <a href="#">
                    <img class="img-user" src="${userImg}">
                    ${username}
                </a>
            </li>
            <li class="search-li">
                <a href="#">
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
        

        <div class="search-dropdown">
            <input type="text" placeholder="Search for a show, movie, genre, e.t.c."/>
        </div>

    `;
    this.elementoPadre.appendChild(this.elementoHijo);
  }
  
  // Para usar el componente:
  const contenedor = document.getElementById('main-nav');
  const miComponente = new MiComponente(contenedor);
  