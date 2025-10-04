import { useState, useCallback, useEffect } from "react";

export function useFormAndValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update values (functional to read latest prev state)
    setValues((prev) => {
      const next = { ...prev, [name]: value };

      // Compute validation message (HTML5)
      const fieldMessage = e.target.validationMessage || "";

      // Prepare next errors copy
      setErrors((prevErr) => {
        const nextErr = { ...prevErr, [name]: fieldMessage };

        // Custom rule: confirmPassword must equal password
        if (name === "confirmPassword") {
          if (value !== next.password)
            nextErr.confirmPassword = "Passwords do not match";
          else nextErr.confirmPassword = "";
        }
        // Also if password changed, re-evaluate confirmPassword error
        if (
          name === "password" &&
          next.confirmPassword !== undefined
        ) {
          if (
            next.confirmPassword &&
            next.confirmPassword !== value
          ) {
            nextErr.confirmPassword = "Passwords do not match";
          } else {
            nextErr.confirmPassword = "";
          }
        }

        return nextErr;
      });

      return next;
    });
  };

  // Recalculate form validity whenever values OR errors change
  useEffect(() => {
    // find the nearest form automatically — assumes only one form per page or wrapper
    const form = document.querySelector("form");
    if (!form) {
      setIsValid(false);
      return;
    }
    const htmlValid = form.checkValidity();
    const hasCustomError = Object.values(errors).some(Boolean);
    setIsValid(htmlValid && !hasCustomError);
  }, [values, errors]);

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    []
  );

  const useErrorTimeOut = (err, setErr) => {
    useEffect(() => {
      if (!err) return;
      const t = setTimeout(() => setErr(""), 4000);
      return () => clearTimeout(t);
    }, [err]);
  };

  return {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    setValues,
    setIsValid,
    useErrorTimeOut,
  };
}