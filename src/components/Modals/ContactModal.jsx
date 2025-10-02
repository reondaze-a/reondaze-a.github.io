import Modal from "./Modal";
import FormField from "../Forms/FormField";
import FormWrapper from "../Forms/FormWrapper";
import { useState } from "react";

import { useModal } from "../../contexts/ModalContext";

export default function ContactModal() {
  const { activeModal, setActiveModal } = useModal();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted:", form);
    setActiveModal(null);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <Modal
      isOpen={activeModal === "contact"}
      onClose={() => setActiveModal(null)}
      title="Contact me"
    >
      <FormWrapper onSubmit={handleSubmit}>
        <FormField
          label="Name"
          name="name"
          required={true}
          value={form.name}
          onChange={handleChange}
        />
        <FormField
          label="Email (optional)"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />
        <FormField
          label="Message"
          name="message"
          type="textarea"
          value={form.message}
          onChange={handleChange}
        />
      </FormWrapper>
    </Modal>
  );
}
