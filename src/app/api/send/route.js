import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { destinatario, assunto, mensagem } = req.body;

        const msg = {
            to: destinatario,
            from: "brunocorrea094@gmail.com",
            subject: assunto,
            text: mensagem,
        };

        try {
            await sgMail.send(msg);
            res.status(200).json({ sucesso: true });
        } catch (erro) {
            console.error("Erro ao enviar o e-mail:", erro);
            res.status(500).json({ erro: "Erro ao enviar o e-mail" });
        }
    } else {
        res.status(405).json({ erro: "Método não permitido" });
    }
}
