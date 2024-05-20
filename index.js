function toggleMenu() {
    var menuDropdown = document.getElementById("menu-dropdown");
    menuDropdown.classList.toggle("active");

    document.addEventListener('click', function (e) {
        if (!menuDropdown.contains(e.target) && !document.querySelector('.menu-icon').contains(e.target)) {
            menuDropdown.classList.remove('active');
        }
    });
}

function fetchComentarios() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'https://jornada-api-b57b4d5db507.herokuapp.com/feedbacks/feedbacks-home';

    fetch(proxyUrl + targetUrl)
        .then(response => response.json())
        .then(data => {
            const comentariosContainer = document.getElementById("comentarios-container");

            comentariosContainer.innerHTML = "";

            data.forEach(comentario => {
                const card = document.createElement("div");
                card.classList.add("comentario-card");

                const nome = document.createElement("h3");
                nome.textContent = comentario.nomeUsuario;

                const texto = document.createElement("p");
                texto.textContent = comentario.feedback;

                card.appendChild(nome);
                card.appendChild(texto);

                comentariosContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Erro ao buscar comentários:', error));
}

window.onload = fetchComentarios;