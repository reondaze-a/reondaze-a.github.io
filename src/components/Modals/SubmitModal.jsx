import Modal from "./Modal";
import { useModal } from "../../contexts/ModalContext";

export default function SubmitModal() {
  const { activeModal, setActiveModal } = useModal();

  return (
    <Modal
      isOpen={activeModal === "submitted"}
      onClose={() => setActiveModal(null)}
      title="Thank you!"
    >
      <p className="pt-0.5 text-center">
        I will reply to you as soon as I can!
      </p>
    </Modal>
  );
}
