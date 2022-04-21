// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// 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

const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.SENDGRID_API_KEY);

export default function mailHandler(req, res) {
  const { fields } = JSON.parse(req.body);

  const message = `
  Name: ${fields.name}\r\n
  Email: ${fields.email}\r\n
  Phone: ${fields.phone}\r\n
  Message: ${fields.message}
  `;

  const data = {
    to: "matiaswebservice@gmail.com",
    from: "matiaswebservice@gmail.com",
    subject: "New form message",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  mail.send(data);

  res.status(200).json({ status: "Ok" });
}
