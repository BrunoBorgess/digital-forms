const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json({ limit: "100mb" }));

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "digitalforms365@gmail.com",
    pass: "mahu tkgb qzdb powx",
  },
});

// Função para formatar data DD/MM/AAAA
const formatarData = (dataStr) => {
  const data = new Date(dataStr);
  const dia = String(data.getDate()).padStart(2, "0");
  const mes = String(data.getMonth() + 1).padStart(2, "0");
  const ano = data.getFullYear();
  return `${dia}/${mes}/${ano}`;
};

// HTML  para o cliente
const gerarEmailUsuarioHTML = ({ name, produto, date, time }) => `
<div style="font-family: 'Poppins', sans-serif; max-width: 600px; margin: 20px auto; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 25px rgba(0,0,0,0.12); border: 1px solid #eee;">
  <div style="background: linear-gradient(90deg, #28a745, #71d182); color: white; padding: 25px; text-align: center;">
    <img src="https://i.ibb.co/6R2RgYv/logo.png" alt="Digital Forms" style="height: 50px; margin-bottom: 15px;">
    <h1 style="margin: 0; font-size: 26px;">Agendamento Confirmado!</h1>
    <p style="margin: 5px 0 0 0; font-size: 16px;">Digital Forms</p>
  </div>
  <div style="padding: 25px; color: #333; line-height: 1.5;">
    <p>Olá <strong>${name}</strong>,</p>
    <p>Seu agendamento para conhecer o <strong>${produto}</strong> foi confirmado com sucesso! 🎉</p>

    <div style="display: flex; gap: 15px; margin: 20px 0; flex-wrap: wrap;">
      <div style="flex: 1; min-width: 120px; background: #e6f7ea; padding: 15px; border-radius: 12px; text-align: center; font-weight: 500;">
        📅 Data<br><span style="font-weight: bold; font-size: 16px;">${formatarData(date)}</span>
      </div>
      <div style="flex: 1; min-width: 120px; background: #e6f7ea; padding: 15px; border-radius: 12px; text-align: center; font-weight: 500;">
        ⏰ Hora<br><span style="font-weight: bold; font-size: 16px;">${time}</span>
      </div>
    </div>

    <p>Nosso <strong>Time de Especialistas</strong> entrará em contato em breve para confirmar todos os detalhes e tirar suas dúvidas.</p>

    <div style="text-align: center; margin: 25px 0;">
      <a href="https://wa.me/5567981775552" style="background-color: #28a745; color: white; padding: 16px 32px; border-radius: 12px; text-decoration: none; font-weight: bold; display: inline-block; font-size: 16px; transition: 0.3s;">
        Falar com o Time de Especialistas
      </a>
    </div>

    <p>Obrigado por confiar na <strong>Digital Forms</strong>! 💚</p>
  </div>
  <div style="background-color: #e6f7ea; padding: 15px; text-align: center; font-size: 12px; color: #555;">
    Este é um email automático. Por favor, não responda diretamente.
  </div>
</div>
`;

// HTML  para a equipe de especialistas
const gerarEmailEquipeHTML = ({ name, email, whatsapp, empresa, cpf, cargo, produto, date, time, arquivo }) => `
<div style="font-family: 'Poppins', sans-serif; max-width: 600px; margin: 20px auto; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 25px rgba(0,0,0,0.12); border: 1px solid #eee;">
  <div style="background: linear-gradient(90deg, #71d182, #28a745); color: white; padding: 20px; text-align: center;">
    <h2 style="margin: 0; font-size: 22px;">Novo Agendamento Recebido</h2>
    <p style="margin: 5px 0 0 0; font-size: 14px;">Digital Forms</p>
  </div>
  <div style="padding: 20px; color: #333; line-height: 1.5;">
    <p><strong>Nome:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>WhatsApp:</strong> ${whatsapp}</p>
    <p><strong>Empresa:</strong> ${empresa}</p>
    <p><strong>CPF/CNPJ:</strong> ${cpf}</p>
    <p><strong>Cargo/Função:</strong> ${cargo}</p>
    <p><strong>Produto:</strong> ${produto}</p>
    <p><strong>Data:</strong> ${formatarData(date)}</p>
    <p><strong>Hora:</strong> ${time}</p>

    ${arquivo && arquivo.data ? `<p><strong>Anexo recebido:</strong> ${arquivo.name || "arquivo"}</p>` : ""}

  </div>
</div>
`;

app.post("/agendar", async (req, res) => {
  try {
    const { name, email, whatsapp, empresa, cpf, cargo, produto, date, time, arquivo } = req.body;

    if (!name || !email || !date || !time) {
      return res.status(400).json({ message: "Campos obrigatórios ausentes" });
    }

    console.log("📦 Recebendo arquivo:", arquivo ? arquivo.name : "Nenhum arquivo");

    let attachments = [];
    if (arquivo && arquivo.data) {
      let filename = arquivo.name && arquivo.name.trim() !== "" ? arquivo.name : `arquivo_${Date.now()}.bin`;
      let contentType = "application/octet-stream";
      if (filename.toLowerCase().endsWith(".pdf")) contentType = "application/pdf";
      else if (filename.toLowerCase().endsWith(".png")) contentType = "image/png";
      else if (filename.toLowerCase().endsWith(".jpg") || filename.toLowerCase().endsWith(".jpeg"))
        contentType = "image/jpeg";

      attachments.push({
        filename,
        content: Buffer.from(arquivo.data, "base64"),
        contentType,
      });
    }

    // Email para o cliente (sem anexos)
    const emailUser = {
      from: "digitalforms365@gmail.com",
      to: email,
      subject: `Confirmação de agendamento - ${produto}`,
      html: gerarEmailUsuarioHTML({ name, produto, date, time }),
    };

    // Email para o time de especialistas (com anexos)
    const emailTeam = {
      from: "digitalforms365@gmail.com",
      to: "digitalforms365@gmail.com",
      subject: `Novo agendamento - ${produto}`,
      html: gerarEmailEquipeHTML({ name, email, whatsapp, empresa, cpf, cargo, produto, date, time, arquivo }),
      attachments,
    };

    await transporter.sendMail(emailUser);
    await transporter.sendMail(emailTeam);

    res.json({ message: "Agendamento realizado com sucesso! Nossa equipe entrará em contato em breve. Obrigado!" });
  } catch (err) {
    console.error("❌ Erro ao enviar email:", err);
    res.status(500).json({ message: "Erro ao enviar email, tente novamente!" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
