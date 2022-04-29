const mail = require("@sendgrid/mail");

export default function mailHandler(req, res) {
  const { fields } = JSON.parse(req.body);
  mail.setApiKey(process.env.SENDGRID_API_KEY);

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
