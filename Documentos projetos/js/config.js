document.getElementById("btn").addEventListener("click", function() {
    dene.say("Bem vindo ao Dini, seu assistente virtual, como posso lhe ajudar");
}, false);

window.onload = function StartContinuousArtyom() {
    dene.initialize({
        lang: 'pt-BR',
        continuous: true,
        listen: true,
        debug: false,
        speed: "1",
        mode: "quick",
        executionKeyWord: "Dini"
    }).then(function() {
        dene.say("Carregando Arquivos.");
        dene.say("Arquivos Carregado com sucesso!.", dene.getVoices());
    });
}