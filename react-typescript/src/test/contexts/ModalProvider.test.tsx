import { fireEvent, render } from "@testing-library/react";
import ModalContextProvider, {
  ModalContext,
} from "../../contexts/ModalContext";

describe("Modal Provider", () => {
  it("should not be shown as default", () => {
    const { getByText } = render(
      <ModalContextProvider>
        <ModalContext.Consumer>
          {(value) => (
            <span>{`Current modal visibility is ${value.isOpen.toString()}`}</span>
          )}
        </ModalContext.Consumer>
      </ModalContextProvider>
    );

    expect(getByText("Current modal visibility is false")).toBeTruthy();
  });

  describe(".renderModal", () => {
    it("should change modal visibily to true", () => {
      const { getByText } = render(
        <ModalContextProvider>
          <ModalContext.Consumer>
            {(value) => (
              <>
                <span>
                  {`Current modal visibility is ${value.isOpen.toString()}`}
                </span>
                <button onClick={value.renderModal}>Open Modal</button>
              </>
            )}
          </ModalContext.Consumer>
        </ModalContextProvider>
      );

      fireEvent.click(getByText("Open Modal"));

      expect(getByText("Current modal visibility is true")).toBeTruthy();
    });
  });

  describe(".closeModal", () => {
    it("should change modal visibily to false", () => {
      const { getByText } = render(
        <ModalContextProvider>
          <ModalContext.Consumer>
            {(value) => (
              <>
                <span>
                  {`Current modal visibility is ${value.isOpen.toString()}`}
                </span>
                <button onClick={value.renderModal}>Open Modal</button>
                <button onClick={value.closeModal}>Close Modal</button>
              </>
            )}
          </ModalContext.Consumer>
        </ModalContextProvider>
      );

      fireEvent.click(getByText("Open Modal"));
      fireEvent.click(getByText("Close Modal"));

      expect(getByText("Current modal visibility is false")).toBeTruthy();
    });
  });
});
