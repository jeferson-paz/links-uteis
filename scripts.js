// scripts.js

function downloadLinks() {
    var links = [
        { url: "https://carrera.sonda.com/?locale=pt_BR", text: "Sonda Carreiras" },
        { url: "https://www.linkedin.com/jobs/search/?currentJobId=3966702456&f_C=9592&geoId=92000000&origin=JOB_SEARCH_PAGE_JOB_FILTER&sortBy=R", text: "Sonda Empregos no LinkedIn" },
        { url: "https://www.linkedin.com", text: "LinkedIn" },
        { url: "https://www.vagas.com.br", text: "Vagas.com" },
        { url: "https://www.glassdoor.com", text: "Glassdoor" },
        { url: "https://www.vagas.com.br/mapa-de-carreiras/", text: "Mapa de Carreiras no Vagas.com" },
        { url: "https://roadmap.sh/", text: "roadmap.sh é um esforço da comunidade para criar roteiros, guias e outros conteúdos educacionais para ajudar a orientar os desenvolvedores na escolha de um caminho e orientar seu aprendizado." },
        { url: "https://techguide.sh/", text: "Descubra possíveis caminhos para se tornar profissional em T." },
        { url: "https://pfpmaker.com/", text: "Para remover o fundo da foto e adicionar qualquer cor."}
    ];

    var htmlContent = '<html><head><title>Links Úteis Exportados</title></head><body><h1>Links Úteis</h1><ul>';

    links.forEach(function(link) {
        htmlContent += '<li><a href="' + link.url + '" target="_blank">' + link.text + '</a></li>';
    });

    htmlContent += '</ul><footer><p>2024 | Jeferson Paz</p></footer></body></html>';

    var blob = new Blob([htmlContent], { type: 'text/html' });

    // Verifica se o navegador suporta a API de download
    if (navigator.msSaveBlob) { // Internet Explorer
        navigator.msSaveBlob(blob, 'links.html');
    } else {
        // Cria um URL temporário para o Blob
        var url = URL.createObjectURL(blob);

        // Cria um link <a> para iniciar o download
        var a = document.createElement('a');
        a.href = url;
        a.download = 'links.html';
        document.body.appendChild(a);
        a.click();
        
        // Limpa o URL temporário
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}

document.getElementById('downloadLinks').addEventListener('click', downloadLinks);
