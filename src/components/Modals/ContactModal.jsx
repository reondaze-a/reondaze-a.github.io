import Modal from "./Modal";
import FormField from "../Forms/FormField";
import FormWrapper from "../Forms/FormWrapper";
import { useState } from "react";

import { useModal } from "../../contexts/ModalContext";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

export default function ContactModal() {
  const { activeModal, setActiveModal } = useModal();
  const { values, handleChange, errors, isValid, resetForm, useErrorTimeOut } =
    useFormAndValidation();

  // localized loading
  const [loading, setLoading] = useState(false);

  // general error message
  const [error, setError] = useState("");
  useErrorTimeOut(error, setError);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const payload = {
      name: values.name?.trim(),
      email: values.email?.trim(),
      message: values.message?.trim(),
    };

    try {
      await fetch("");
      resetForm();
      setActiveModal(null);
    } catch (err) {
      setError(err?.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Modal
      isOpen={activeModal === "contact"}
      onClose={() => setActiveModal(null)}
      title="Contact me"
    >
      <FormWrapper
        onSubmit={handleSubmit}
        disabled={!isValid || loading}
        error={error}
        submitLabel={loading ? "Submitting..." : "Submit"}
      >
        <FormField
          label="Name"
          name="name"
          required
          value={values.name || ""}
          error={errors.name}
          onChange={handleChange}
        />
        <FormField
          label="Email"
          name="email"
          required
          type="email"
          value={values.email || ""}
          error={errors.email}
          onChange={handleChange}
        />
        <FormField
          label="Message"
          name="message"
          required
          type="textarea"
          value={values.message || ""}
          error={errors.message}
          onChange={handleChange}
        />
      </FormWrapper>
    </Modal>
  );
}
