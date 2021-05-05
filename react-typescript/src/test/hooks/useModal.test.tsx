import { renderHook } from "@testing-library/react-hooks";
import ModalContextProvider from "../../contexts/ModalContext";
import useModal from "../../hooks/useModal";

describe("useModal", () => {
  it("verifies that it renders global context value", () => {
    const { result } = renderHook(() => useModal(), {
      wrapper: (props) => (
        <ModalContextProvider>{props.children}</ModalContextProvider>
      ),
    });

    expect(result.current.isOpen).toBeFalsy();
    expect(result.current.renderModal).toBeDefined();
    expect(result.current.closeModal).toBeDefined();
  });
});
