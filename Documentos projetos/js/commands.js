const dene = new Artyom();

//adicionando comando

dene.addCommands([{
    indexes: ["qual a data", "me informe a data"],
    action: function(i) {
        date = new Date();
        data = date.getDate();
        mes = date.getMonth();
        ano = date.getFullYear();
        dene.say("Dia" + data + '/' + mes + '/' + ano);
    }
}]);

// Comandos Abrir Janelas
dene.on(['abrir *', 'Abrir *', 'abri *'], true).then(function(i, wildcard) {
    if (wildcard == "facebook") {
        abrirExterno = window.open("https://facebook.com/", "popup");
        dene.say("Abrindo, Aguarde!");
    }
    if (wildcard == "e-mail") {
        abrirExterno = window.open("https://outlook.live.com", "popup");
        dene.say("Abrindo, Aguarde!");
    }
    if (wildcard == "gmail") {
        abrirExterno = window.open("https://www.gmail.com", "popup");
        dene.say("Abrindo, Aguarde!");
    }
    if (wildcard == "youtube") {
        abrirExterno = window.open("https://www.youtube.com", "popup");
        dene.say("Abrindo, Aguarde!");
    }
    if (wildcard == "sx") {
        abrirExterno = window.open("https://www.xvideos.com", "popup");
        dene.say("CUIDADO, Abrindo, Aguarde!");
    }
    if (wildcard == "google") {
        abrirExterno = window.open("https://www.google.com/", "popup");
        dene.say("Abrindo, Aguarde!");
    }
    if (wildcard == "menu") {
        document.getElementById("menu-open").checked = true;
        $(".menu").css("display", "block");
    }
    if (wildcard == "opções") {
        document.getElementById("menu-open").checked = true;
        $(".menu").css("display", "block");
    }
    if (wildcard == "clima") {
        document.getElementById("contentModal_Clima").checked = true;
        $("#contentModal_Clima").trigger("click");
        $("#button_clima").click();
    }
});

// Comandos Fechar Janelas
dene.on(['fechar *', 'fecha *'], true).then(function(i, wildcard) {
    if (wildcard == "tudo") {
        document.getElementById("menu-open").checked = false;
        $(".menu").css("display", "none");
        $("#button_fechar_modal").trigger("click");
        abrirExterno.close();
    }
    if (wildcard == "janela") {
        $("#button_fechar_modal").click();
        abrirExterno.close();
    }
    if (wildcard == "facebook") {
        abrirExterno.close();
        dene.say("Fechando, Aguarde!");
    }
    if (wildcard == "e-mail") {
        abrirExterno.close();
        dene.say("Fechando, Aguarde!");
    }
    if (wildcard == "gmail") {
        abrirExterno.close();
        dene.say("Fechando, Aguarde!");
    }
    if (wildcard == "youtube") {
        abrirExterno.close();
        dene.say("Fechando, Aguarde!");
    }
    if (wildcard == "sx") {
        abrirExterno.close();
        dene.say("Fechando, Aguarde!");
    }
    if (wildcard == "google") {
        abrirExterno.close();
        dene.say("Fechando, Aguarde!");
    }
    if (wildcard == "menu") {
        document.getElementById("menu-open").checked = false;
        $(".menu").css("display", "none");
        $("#button_fechar_modal").click();
    }
    if (wildcard == "opções") {
        document.getElementById("menu-open").checked = false;
        $(".menu").css("display", "none");
    }
    if (wildcard == "teste") {
        $("#button_fechar_modal").trigger("click");
    }

});

//fechando guia aberta por comando acima

dene.on(['fechar *'], true).then(function(i, wildicard) {

    if (wildicard == "youtube") {
        abrirExterno.close();
    }
    if (wildicard == "sx") {
        abrirExterno.close();
    }
});

dene.on(['mudar * '], true).then(function(i, wildcard) {
    dene.say("Escolha minha situação Ruim, Bem")
    if (wildcard == "ruim") {
        dene.say("alterando minha situação para Ruim")
    }
});

dene.addCommands([{
    indexes: ["conte-me uma piada", "outra piada", "me conte uma piada"],
    action: function() {
        dene.sayRandom([
            "Para que serve o oculos verde?   para verde perto.",
            "Por que a Coca-Cola e a Fanta se dão muito bem?   Porque se a Fanta quebrar, a Coca-Cola !",
            "Como se fala top-less em chinês?   Xemchutian.",
            "Você conhece a piada do fotógrafo?   Ainda nao foi revelada.",
            "O que o pato disse para a pata?    Vem Quá!",
            "Porque o menino estava falando no telefone deitado?     Para não cair a ligação",
            "Qual é a fórmula da água benta?   H Deus Ò!"
        ]);
    }
}, {
    indexes: ["Qual seu nome", "seu nome"],
    action: function() {
        dene.say("Dini ou Dener");
    }
}, {

    indexes: ["sua idade", "quantos anos"],
    action: function() {
        dene.say("Alguns meses");
    }
}, {

    indexes: ["você sabe jogar"],
    action: function() {
        dene.say("Ainda estou Aprendendo a jogar");
    }
}, {
    indexes: ["versão"],
    action: function() {
        dene.say("Issó é uma alpha do lançamento oficial");
    }
}, {
    indexes: ["o que você gosta", "gosta do quê", "mas de quê"],
    action: function() {
        dene.sayRandom([
            "tudo que for gostoso",
            "Banco de dados e videogame",
            "jogos e Dados",
            "de vocë"
        ]);
    }
}, {
    indexes: ["dini", "Dinir", "Dini", "dener", "Dener"],
    action: function() {
        dene.say("Como posso ajudar");
    }
}, {
    indexes: ["Amigo"],
    action: function() {
        dene.say("Já somos amigos");
    }
}, {
    indexes: ["olá"],
    action: function() {
        dene.say("Olá, estou aqui");
        dene.say("está precisando de algo?");
    }

}, {
    indexes: ["ideia"],
    action: function() {
        dene.say("No momento nenhuma");
        dene.say("Mas tenho certeza de que voçê vai pensar em algo");
    }

}, {
    indexes: ["vai chover"],
    action: function() {
        dene.say("Não sei");
        dene.say("Eu não tenho essa função ainda");
    }

}, {
    indexes: ["falhando"],
    action: function() {
        dene.say("Como assim?");
        dene.say("Não vou admitir erros");
        dene.say("Arrume logo isso");
    }

}, {
    indexes: ["relatório"],
    action: function() {
        dene.say("Ok ");
        dene.say("Apresentando relatorio");
        dene.say("Primeiramente, meu nome é Dini ou Dener");
        dene.say("Atualmente estou em uma versão de testes");
        dene.say("Sou um assistente virtual em desenvolvimento");
        dene.say("Eu fui criado na linguagem JS");
        dene.say("Diariamente recebo varias atualizações");
        //dene.say("Uso um modulo de reconhecimento de voz offline");
        dene.say("E o meu desenvolvedor é um maluco");
        dene.say("Quem estiver ouvindo isso");
        dene.say("Por favor me ajude");
    }

}, {
    indexes: ["como vai", "tudo bem"],
    action: function() {
        dene.say("Estou indo bem");
    }
}, {
    indexes: ["ouvindo", "surda"],
    action: function() {
        dene.say("desculpe, estava quase dormindo");
    }
}, {

}]);


dene.on(['Pesquisar *'], true).then(function(i, wildcard) {
    setTimeout(function() {
        dene.say("Aguarde!");
        abrirExterno = window.open("http://google.com/search?q=" + wildcard);
        dene.say("Aqui está o resultado da sua pesquisa");
    }, 2000);
});

dene.on(['youtube *'], true).then(function(i, wildcard) {
    setTimeout(function() {
        dene.say("Aguarde!");
        abrirExterno = window.open("http://youtube.com/results?search_query=" + wildcard);
        dene.say("Aqui está o resultado da sua pesquisa");
    }, 2000);
});

dene.redirectRecognizedTextOutput(function(text, EhFinal) {
    var spam = document.getElementById("text");
    if (EhFinal) {
        spam.innerHTML = text;
    } else {
        spam.innerHTML = '...';
    }
});

dene.addCommands([{
        indexes: ['são que horas'],
        action: function(i) {
            var currentTime = new Date();
            var hours = currentTime.getHours();
            if ((hours >= 0 && hours < 4) || (hours >= 18 && hours <= 23)) {
                dene.say("Boa noite Senhor! Em que posso ajudar?");
            } else if (hours >= 4 && hours < 12) {
                dene.say("Bom dia Senhor! Em que posso ajudar?");
            } else if (hours >= 12 && hours < 18) {
                dene.say("Boa tarde Senhor! Em que posso ajudar?");
            }
        }
    }, {
        indexes: ['bom dia'],
        action: function(i) {
            var currentTime = new Date();
            var hours = currentTime.getHours();
            if ((hours >= 0 && hours < 4) || (hours >= 18 && hours <= 23)) {
                dene.say("Agora não é mais de manhã");
                dene.say("Já escureceu");
                //sdene.say("Estamos no período da tarde");
                dene.say("Boa noite Senhor! Em que posso ajudar?");
            } else if (hours >= 4 && hours < 12) {
                dene.say("Bom dia Senhor! Em que posso ajudar?");
            } else if (hours >= 12 && hours < 18) {
                dene.say("Agora não é mais de manhã");
                dene.say("Já passou do meio dia");
                dene.say("Estamos no período da tarde");
                dene.say("Boa tarde Senhor! Em que posso ajudar?");
            }
        }
    }, {
        indexes: ['boa tarde'],
        action: function(i) {
            var currentTime = new Date();
            var hours = currentTime.getHours();
            if ((hours >= 0 && hours < 4) || (hours >= 18 && hours <= 23)) {
                dene.say("Agora não é mais de tarde");
                dene.say("Já escureceu");
                //sdene.say("Estamos no período da tarde");
                dene.say("Boa noite Senhor! Em que posso ajudar?");
            } else if (hours >= 4 && hours < 12) {
                dene.say("Agora não é de tarde");
                dene.say("Ainda estamos no período diurno");
                dene.say("Ainda é de manhã");
                dene.say("Bom dia Senhor! Em que posso ajudar?");
            } else if (hours >= 12 && hours < 18) {
                dene.say("Boa tarde Senhor! Em que posso ajudar?");
            }
        }
    }, {
        indexes: ['boa noite'],
        action: function(i) {
            var currentTime = new Date();
            var hours = currentTime.getHours();
            if ((hours >= 0 && hours < 4) || (hours >= 18 && hours <= 23)) {
                dene.say("Boa noite Senhor! Em que posso ajudar?");
            } else if (hours >= 4 && hours < 12) {
                dene.say("Ainda é de manhã");
                dene.say("Ainda estamos no período diurno");
            } else if (hours >= 12 && hours < 18) {
                dene.say("Agora não é de noite");
                dene.say("Ainda estamos no período da tarde");
                dene.say("É de manhã");
                dene.say("Estamos no período da tarde");
                dene.say("Boa tarde Senhor! Em que posso ajudar?");
            }
        }
    }


]);



dene.on(['protocolo *'], true).then(function(i, wildcard) {
    if (wildcard == "11") {
        dene.say("Executando protocolo 11");
        dene.say("Reiniciando sistema.", {
            onStart: function(i) {
                window.location.reload();
            }
        });
    } else if (wildcard == "13") {
        dene.say("Executando protocolo 13", {
            onStart: function(i) {
                abrirExterno = window.open("https://www.facebook.com/thalisSantosTrA", "popup");
            }
        });
    } else if (wildcard == "2508") {
        dene.say("Executando protocolo 2 5 0 8");
    }

});