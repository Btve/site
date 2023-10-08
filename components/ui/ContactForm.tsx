import { TextField, TextareaAutosize } from "@mui/material";
import { useFormik } from "formik";
import { MuiTelInput } from "mui-tel-input";
import { useState } from "react";
import toast from "react-hot-toast";

import * as yup from "yup";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  phone: yup.string().required("Phone number is required"),
  instagram: yup
    .string()
    .min(2, "Enter a valid telegram name")
    .required("Telegram is required"),
  telegram: yup
    .string()
    .min(2, "Enter a valid telegram name")
    .required("Telegram is required"),
  message: yup.string(),
});

export const ContactForm = () => {
  const [information, setInformation] = useState<{
    email: string;
    phone: string;
    instagram: string;
    telegram: string;
    message?: string;
  }>();

  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
      instagram: "",
      telegram: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      toast.success("Information sent successfully");
      setInformation(values);
      formik.resetForm();
    },
  });

  return (
    <form
      className="flex w-full max-w-[400px] flex-col items-center justify-center gap-5"
      onSubmit={formik.handleSubmit}
    >
      <TextField
        fullWidth
        id="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />

      <TextField
        fullWidth
        id="instagram"
        name="instagram"
        label="Instagram"
        type="text"
        value={formik.values.instagram}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.instagram && Boolean(formik.errors.instagram)}
        helperText={formik.touched.instagram && formik.errors.instagram}
      />
      <TextField
        fullWidth
        id="telegram"
        name="telegram"
        label="Telegram"
        type="text"
        value={formik.values.telegram}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.telegram && Boolean(formik.errors.telegram)}
        helperText={formik.touched.telegram && formik.errors.telegram}
      />
      <MuiTelInput
        id="phone"
        name="phone"
        label="Phone Number"
        onChange={(value) => formik.setFieldValue("phone", value)}
        value={formik.values.phone}
        onBlur={formik.handleBlur}
        error={formik.touched.phone && Boolean(formik.errors.phone)}
        helperText={formik.touched.phone && formik.errors.phone}
        fullWidth
      />
      <TextareaAutosize
        minRows={2}
        id="message"
        name="message"
        value={formik.values.message}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="w-full rounded-sm bg-transparent p-2.5 outline  outline-1 outline-neutral-400/80"
      />
      <button
        className="w-full rounded-md bg-custom py-2 text-white"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};
