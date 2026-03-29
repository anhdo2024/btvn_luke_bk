let isElementDisplayed = true;
let errorMessage = "";

console.log(typeof isElementDisplayed, typeof errorMessage);

let testResult;

if (isElementDisplayed == true && errorMessage == "") {
    testResult = "true";
}
else {
    testResult = "false";
}

console.log(`Kết quả của bài kiểm tra là: ${testResult}`);