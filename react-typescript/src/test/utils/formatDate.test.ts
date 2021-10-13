import { formatDate } from "../../utils/formatDate";

const date = "2020-05-21";

describe("Format Date Util", () => {
  it("should return the correct formatted date", () => {
    const formattedDate = formatDate(date);
    expect(formattedDate).toBe("21 May 20");
  });
});
