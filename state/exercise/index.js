const CombinationStatus = {
  locked: "LOCKED",
  open: "OPEN",
};

class CombinationLock {
  constructor(passcode) {
    this.passcode = passcode;
    this.inputPasscode = [];
    this.status = CombinationStatus.locked;
  }

  enterDigit(digit) {
    if (this.status === CombinationStatus.locked) this.status = "";

    this.status += digit;

    console.log(this.status);

    if (this.status.length >= 5) {
      const passcodeIsValid = [...this.status]
        .map((digit, idx) => passcode[idx] == digit)
        .every((item) => item === true);

      this.status = passcodeIsValid
        ? CombinationStatus.open
        : CombinationStatus.locked;
    } else return;
  }
}

const passcode = [1, 2, 3, 4, 5];
const combinationLock = new CombinationLock(passcode);

console.log(combinationLock.status);

combinationLock.enterDigit(1);
combinationLock.enterDigit(2);
combinationLock.enterDigit(3);
combinationLock.enterDigit(4);
combinationLock.enterDigit(5);

console.log(combinationLock.status);
