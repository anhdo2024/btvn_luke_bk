let config = {
    browser: "Chrome",
    headless: false,
    retries: 2
}

config.headless = true;

config.screenshot = "on-failure";

console.log(config);