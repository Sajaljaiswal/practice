import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

function Form1() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "Shagun",
      password: "",
      subscribe: false,
      gender: "male",
      role: "",
    },
  });
  const [data, setData] = useState({});

  const onSubmit = (data) => {
    setData(data);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>React Controller with Validation</h1>
      <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
        <Controller
          control={control}
          name="name"
          rules={{
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters",
            },
          }}
          render={({ field }) => (
            <div>
              <input
                style={styles.input}
                type="text"
                placeholder="Enter your name"
                {...field}
              />
              {errors.name && <p style={styles.error}>{errors.name.message}</p>}
            </div>
          )}
        />

        <Controller
          control={control}
          name="password"
          rules={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          }}
          render={({ field }) => (
            <div>
              <input
                style={styles.input}
                type="password"
                placeholder="Enter your password"
                {...field}
              />
              {errors.password && (
                <p style={styles.error}>{errors.password.message}</p>
              )}
            </div>
          )}
        />

        <Controller
          control={control}
          name="subscribe"
          render={({ field }) => (
            <label style={styles.label}>
              <input style={styles.checkbox} type="checkbox" {...field} />
              Subscribe to Newsletter
            </label>
          )}
        />

        <div style={styles.radioContainer}>
          <Controller
            control={control}
            name="gender"
            rules={{ required: "Please select a gender" }}
            render={({ field }) => (
              <div>
                <label style={styles.radioLabel}>
                  <input
                    type="radio"
                    value="male"
                    checked={field.value === "male"}
                    onChange={field.onChange}
                  />
                  Male
                </label>
                <label style={styles.radioLabel}>
                  <input
                    type="radio"
                    value="female"
                    checked={field.value === "female"}
                    onChange={field.onChange}
                  />
                  Female
                </label>
                {errors.gender && (
                  <p style={styles.error}>{errors.gender.message}</p>
                )}
              </div>
            )}
          />
        </div>

        <Controller
          control={control}
          name="role"
          rules={{ required: "Please select a role" }}
          render={({ field }) => (
            <div>
              <select style={styles.select} {...field}>
                <option value="" disabled>
                  Select Role
                </option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="manager">Manager</option>
              </select>
              {errors.role && <p style={styles.error}>{errors.role.message}</p>}
            </div>
          )}
        />

        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>

      {Object.keys(data).length > 0 && (
        <div style={styles.result}>
          <h3 style={styles.resultHeading}>Submitted Data:</h3>
          <p>
            <strong>Name:</strong> {data.name}
          </p>
          <p>
            <strong>Password:</strong> {data.password}
          </p>
          <p>
            <strong>Subscribed:</strong> {data.subscribe ? "Yes" : "No"}
          </p>
          <p>
            <strong>Gender:</strong> {data.gender}
          </p>
          <p>
            <strong>Role:</strong> {data.role}
          </p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  checkbox: {
    marginRight: "10px",
  },
  label: {
    display: "flex",
    alignItems: "center",
    fontSize: "16px",
  },
  radioContainer: {
    display: "flex",
    gap: "20px",
  },
  radioLabel: {
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
  },
  select: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#007BFF",
    color: "white",
    cursor: "pointer",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
  result: {
    marginTop: "20px",
    padding: "10px",
    backgroundColor: "#e9ecef",
    borderRadius: "4px",
  },
  resultHeading: {
    marginBottom: "10px",
    color: "#333",
  },
  error: {
    color: "red",
    fontSize: "14px",
  },
};

export default Form1;
