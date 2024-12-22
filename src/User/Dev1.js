import React from "react";
import { useForm, Controller } from "react-hook-form";

const MyForm = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Form Submitted Successfully!");
  };

  console.log(watch("name"));

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>React Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Input Field 1 */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            // {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        </div>

        {/* Input Field 2 using Controller */}
        <div>
          <label htmlFor="email">Email:</label>
          <Controller
            control={control}
            name="email"
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => <input {...field} type="email" />}
          />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
        </div>

        {/* Input Field 3 */}
        <div>
          <label htmlFor="age">Age:</label>
          <input
            id="age"
            type="number"
            {...register("age", {
              required: "Age is required",
              min: { value: 1, message: "Age must be at least 1" },
            })}
          />
          {errors.age && <p style={{ color: "red" }}>{errors.age.message}</p>}
        </div>

        {/* Input Field 4 */}
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
        </div>

        {/* Input Field 5 */}
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            id="confirmPassword"
            type="password"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MyForm;
