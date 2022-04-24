import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  phoneNumber: yup.string().required("Phone Number is required"),
  email: yup.string().email().required("Email is required"),
  resume: yup.mixed().required("Resume is required"),
  linkedIn: yup.string().url(),
  portfolio: yup.string().url(),
  additionalLink: yup.string().url(),
});

// createdOn: yup.date().default(function () {
//   return new Date();
// }),
export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [file, setFile] = useState("");

  const convert2base64 = (file) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      setFile(reader.result.toString());
      reader.readAsDataURL(file);
    };
  };

  const submitForm = (data) => {};

  const uploadApplication = async (data) => {
    const response = await fetch("/api/applications", {
      method: "POST",
      body: JSON.stringify({
        fullName: data.fullName,
        phoneNumber: data.phoneNumber,
        email: data.email,
        linkedIn: data.linkedIn,
        portfolio: data.portfolio,
        additionalLink: data.additionalLink,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseData = await response.json();
    console.log(responseData);
  };

  // JSON.stringify({
  //   input: input,
  //   fullName: fullName,
  //   phoneNumber: phoneNumber,
  //   email: email,
  //   resume: resume,
  //   linkedIn: linkedIn,
  //   portfolio: portfolio,
  //   additionalLink: additionalLink,
  //   createdAt: new Date().toString(),
  // }),
  return (
    <div className="Form">
      <div className="title">Sign Up</div>
      <div className="inputs">
        <form onSubmit={handleSubmit(uploadApplication)}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            {...register("fullName")}
          />
          {errors.fullName && errors.fullName.message}
          {/* <p> {errors.fullName?.message} </p> */}
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            {...register("phoneNumber")}
          />
          {/* <p> {errors.phoneNumber?.message} </p> */}
          <input
            type="text"
            name="email"
            placeholder="Email"
            {...register("email")}
          />
          {/* <p> {errors.email?.message} </p> */}
          <input
            type="file"
            name="resume"
            placeholder="Resume"
            {...register("resume")}
          />
          {/* <p> {errors.resume?.message} </p> */}
          <input
            type="text"
            name="linkedIn"
            placeholder="Linked In"
            {...register("linkedIn")}
          />
          <input
            type="text"
            name="portfolio"
            placeholder=" Portfolio"
            {...register("portfolio")}
          />
          <input
            type="text"
            name="additionalLink"
            placeholder="Additional link"
            {...register("additionalLink")}
          />
          <input type="submit" id="submit" />
        </form>
      </div>
    </div>
  );
}
