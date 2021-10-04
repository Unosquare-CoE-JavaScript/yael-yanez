import type { HasEmail, HasPhoneNumber } from "./index";

interface ContactMessenger1 {
  (contact: HasEmail | HasPhoneNumber, message: string): void;
}
type ContactMessenger2 = (
  contact: HasEmail | HasPhoneNumber,
  message: string
) => void;

type NumVal = 1 | 2 | 3 | NumArr;
interface NumArr extends Array<NumVal> {}

const x: NumVal = [1, 2, 3, 1, 1, [3, 1, 1, 2]];
