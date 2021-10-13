function contactPeople(method, ...people) {
    if (method === "email")
        people.forEach(sendEmail);
    else
        people.forEach(sendTextMessage);
}
function sendEmail() { }
function sendTextMessage() { }
export {};
