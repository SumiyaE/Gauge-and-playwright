import { Step } from "gauge-ts";
import { chromium, Page, expect } from "@playwright/test";

class indexPage {
    page: Page;
    @Step("Open todo application")
    public async openTodo() {
        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        page.goto('https://playwright.dev/');
    }
}