"use client";
import { useForm } from "react-hook-form";
// import { setAuthenticatedUser } from '../state/ userActions';
import { useDispatch } from "react-redux";
// import { useNavigate } from 'react-router-dom';  usar useRouter de next

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    const { confirm, ...cleanedData } = data;
    const url = "/api/auth/signup";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cleanedData), // Corrected usage
      });

      if (response.status === 201) {
        const responseData = await response.json();
        const { token } = responseData;
        localStorage.setItem("token", token);
        // dispatch(setAuthenticatedUser(data)); //cambie la variable data por response
        // navigate('/');
      }

      if (response.status === 400) {
        alert("user already exists");
      }
      console.log("envie mi form");
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="bg-zinc-500 h-[calc(100vh-5rem)]  flex flex-col justify-center items-center">
      <h4 className="mb-3 text-black">
        Sign up and keep your favorite movies!
      </h4>
      <form
        className="rounded-lg p-8 w-2/3 sm:w-1/3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          placeholder="email"
          className="w-full rounded mb-3 p-2"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email format",
            },
          })}
        />
        {errors.email && (
          <p className="text-red-900" role="alert">
            {errors.email.message}
          </p>
        )}

        <input
          type="text"
          placeholder="username"
          className="w-full rounded mb-3 p-2"
          {...register("username", {
            minLength: {
              value: 4,
              message: "Username should have at least 4 characters",
            },
            required: "Username is required",
          })}
        />
        {errors.username && (
          <p className="text-red-900" role="alert">
            {errors.username.message}
          </p>
        )}

        <input
          type="password"
          autoComplete="on"
          placeholder="password"
          className="w-full rounded mb-3 p-2"
          {...register("password", {
            minLength: {
              value: 4,
              message: "Password should have at least 4 characters",
            },
            required: "Password is required",
          })}
        />
        {errors.password && (
          <p className="text-red-900" role="alert">
            {errors.password.message}
          </p>
        )}

        <input
          type="password"
          autoComplete="on"
          placeholder="confirm password"
          className="w-full rounded mb-3 p-2"
          {...register("confirm", {
            minLength: {
              value: 4,
              message: "Confirm password should have at least 4 characters",
            },
            required: "Confirm password is required",
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          })}
        />
        {errors.confirm && (
          <p className="text-red-900" role="alert">
            {errors.confirm.message}
          </p>
        )}

        <button
          type="submit"
          className="mt-6 bg-stone-700 hover:bg-stone-700 focus:shadow-outline rounded w-full py-2 text-white"
        >
          Sign up!
        </button>
      </form>
    </div>
  );
}

export default SignUp;
