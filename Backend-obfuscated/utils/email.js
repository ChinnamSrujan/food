const { Resend } = require("resend");
const pug = require("pug");
const htmlToText = require("html-to-text");

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.name.split(" ")[0];
    this.url = url;
    this.from = `OrderIt <${process.env.EMAIL_FROM}>`;
  }

  async send(template, subject) {
    const html = pug.renderFile(`${__dirname}/../view/${template}.pug`, {
      firstName: this.firstName,
      url: this.url,
      subject,
    });

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: this.from,
      to: this.to,
      subject,
      html,
      text: htmlToText.convert(html),
    });

    if (error) {
      console.error("Resend error:", error);
      throw new Error(error.message);
    }
  }

  async sendWelcome() {
    await this.send("welcome", "Welcome to Order It!");
  }

  async sendPasswordReset() {
    await this.send(
      "passwordReset",
      "Password reset token (valid for only 10 minutes)"
    );
  }
};
