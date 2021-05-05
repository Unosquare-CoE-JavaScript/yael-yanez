import { fireEvent, render, screen } from "@testing-library/react";
import { PrimaryButton } from "../../../components/common/Buttons";

describe("<PrimaryButton /> Component", () => {
  it("should render the correct text on button", () => {
    const testFunction = jest.fn();

    render(
      <PrimaryButton
        text="Test button"
        type="button"
        onClick={testFunction}
        width="100%"
      />
    );

    const button = screen.getByText("Test button");

    expect(button.textContent).toBeTruthy();
  });

  it("should call once the passed function", () => {
    const testFunction = jest.fn();

    render(
      <PrimaryButton
        text="Test button"
        type="button"
        onClick={testFunction}
        width="100%"
      />
    );

    const button = screen.getByText("Test button");

    fireEvent.click(button);

    expect(testFunction).toBeCalled();
  });
});
