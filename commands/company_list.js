/* eslint-disable camelcase */
const { prefix } = require("../config.json");
const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const fs = require("fs");


const USERNAME_SELECTOR = "#rollno";
const PASSWORD_SELECTOR = "#pass";
const SUBMIT_BUTTON = "#content > div > div > table:nth-child(7) > tbody > tr:nth-child(4) > td > input[type=submit]";
// const COMPANIES_BUTTON = '#site_content > div.sidebar_container > div:nth-child(1) > div > table > tbody > tr > td:nth-child(2) > p:nth-child(5) > a > font > b'
const username = "me17b173";
const password = "Unni@1999";

const url = "https://placement.iitm.ac.in/students/login.php";
const companies_url = "https://placement.iitm.ac.in/students/comp_list.php"

exports.run = async (bot, message, args) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.click(USERNAME_SELECTOR);
    await page.keyboard.type(username);
    await page.click(PASSWORD_SELECTOR);
    await page.keyboard.type(password);

    const element = await page.$(SUBMIT_BUTTON)
    element.click();
    page.on( "dialog", async dialog => {
        await dialog.accept();
    } );

    await page.waitForNavigation();
    await page.goto(companies_url);
    const data = await page.content()
    
    const $ = cheerio.load(data);
    const outer_table = $("#content");
    var raw_text = outer_table.text();
    let s = raw_text.split("Registrations");
    let company_list_raw = s[1].trim(); 
    another_list = company_list_raw.split("\n")
    var m = 0;
    var n = 0;
    var output = ""
    for (let i = 0; i < another_list.length; i++) {
        if (m < 4 && n == 0){
            output = output + another_list[i] + "\n";
            m += 1;
        }
        else if (m == 4 & n < 6){
            n += 1;
        }
        else if ( m == 4 && n == 6){
            m = 0;
            n = 0;
            output = output + "\n" + another_list[i] + "\n";
            m += 1;
        }
      }
    browser.close();
    return bot.reply(message.from, output, message.id);
    
};

exports.help = {
    name: "company_list",
    description: "Print list of companies open for Mech DD",
    usage: `company_list`,
    cooldown: 3
};