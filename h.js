
const formulario = document.getElementById("form-pedido");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    // TROQUE PELO NÚMERO DO WHATSAPP DA DOCERIA
    // Formato: código do Brasil + DDD + número
    const whatsappDoceria = "5511988015293";

    // Capturar os dados do formulário
    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const produto = document.getElementById("produto").value;
    const data = document.getElementById("data").value;
    const quantidade = document.getElementById("quantidade").value.trim();
    const detalhes = document.getElementById("detalhes").value.trim();

    // Formatar a data
    const dataFormatada = data
        ? data.split("-").reverse().join("/")
        : "Não informada";

    // Criar a mensagem do pedido
    const mensagem = `
🍰 *NOVO PEDIDO — DELÍCIAS DA DOCINHO*

Olá! Gostaria de solicitar uma encomenda.

👤 *Nome:* ${nome}
📱 *WhatsApp do cliente:* ${telefone}
🍬 *Produto:* ${produto}
📅 *Data desejada:* ${dataFormatada}
📦 *Quantidade:* ${quantidade || "A combinar"}

💗 *Detalhes do pedido:*
${detalhes || "Não informado"}

Aguardo o retorno para confirmar os valores e a disponibilidade. Obrigado(a)!
    `.trim();

    // Criar o link do WhatsApp
    const linkWhatsApp =
        `https://wa.me/${whatsappDoceria}?text=${encodeURIComponent(mensagem)}`;

    // Abrir o WhatsApp com a mensagem pronta
    window.open(linkWhatsApp, "_blank");
});
