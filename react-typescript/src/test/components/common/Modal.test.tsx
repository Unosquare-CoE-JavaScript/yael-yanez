import { fireEvent, render, screen } from "@testing-library/react";
import Modal from "../../../components/common/Modal";
import Expenses from "../../../components/expenses/Expenses";
import { ModalContext } from "../../../contexts/ModalContext";

describe("<Modal /> Component", () => {
  it("should not be rendered at load", () => {
    const { container } = render(
      <Modal>
        <h1>This is a test title</h1>
      </Modal>
    );

    expect(container.innerHTML).toHaveLength(0);
  });
});
