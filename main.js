import { Telegraf, Markup } from "telegraf";
import { message } from "telegraf/filters";

const token = "6708863262:AAEDc3pgTXQ-VDiN2fiazYMdOsZq2fs_6oE";
const webAppUrl = "https://angular-tg-app-135b5.web.app/";

const bot = new Telegraf(token);

bot.command("start", (ctx) => {
  ctx.reply(
    "Добро пожаловать! Нажмите на кнопку ниже, чтобы запустить приложение",
    Markup.keyboard([
      Markup.button.webApp("Отправить сообщение", webAppUrl + "/feedback"),
    ])
  );
});

bot.on(message("web_app_data"), async (ctx) => {
  const data = ctx.webAppData.data.json();
  ctx.reply(`Ваше сообщение: ${data.feedback} отправлено`);
});

bot.launch();
