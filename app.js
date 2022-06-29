var userInput;
var userName;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
  userName = userInput;
}
function generateError(message, code) {
  throw { message: message, code: code };
  // while (true) {}
}
generateError("An error occurred!", 500);
