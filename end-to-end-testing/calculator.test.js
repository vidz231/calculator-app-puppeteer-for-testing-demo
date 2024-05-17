const puppeteer = require("puppeteer");
describe("Calculator End-to-End Tests", () => {
  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
    await page.goto("http://localhost:5173/"); // Adjust URL as needed
  });

  it("should display the result of 1 + 2 + 3", async () => {
    await page.click("#input-1");
    await page.click("#input-plus");
    await page.click("#input-2");
    await page.click("#input-plus");
    await page.click("#input-3");
    await page.click("#input-equal");

    const displayValue = await page.$eval(
      ".text-right",
      (el) => el.textContent
    );
    expect(displayValue).toBe("6");
  });

  it("should clear the display when clear is clicked", async () => {
    await page.click("#input-clear");
    const displayValue = await page.$eval(
      ".text-right",
      (el) => el.textContent
    );
    expect(displayValue).toBe("");
  });

  afterAll(() => {
    browser.close();
  });
});
