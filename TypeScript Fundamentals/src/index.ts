export interface HasEmail {
  name: string;
  email: string;
}

export interface HasPhoneNumber {
  name: string;
  phone: number;
}

function contactPeople(
  method: "email" | "phone",
  ...people: (HasEmail | HasPhoneNumber)[]
): void {
  if (method === "email") (people as HasEmail[]).forEach(sendEmail);
  else (people as HasPhoneNumber[]).forEach(sendTextMessage);
}

function sendEmail(this: HasEmail & HasPhoneNumber): void {}
function sendTextMessage(this: HasEmail & HasPhoneNumber): void {}
