"use client";
import CustomInput from "@/components/CustomInput";
import Image from "next/image";
import {useRouter} from "next/navigation";
import {useForm} from "react-hook-form";

export default function CustomForm({
  inputOptions,
  apiRoute,
  fetchMethod,
  redirect,
}) {
  const route = useRouter();

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await fetch(apiRoute, {
        method: fetchMethod,
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const resJson = await res.json();
      if (!res.ok) throw new Error(resJson.message);

      console.log("Success", resJson);

      if (redirect) route.push(redirect);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <section className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          className="mx-auto w-auto"
          alt="Your Company"
          src={"/images/logo.png"}
          width={100}
          height={100}
        />
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={onSubmit} className="space-y-6" action="#">
          {inputOptions.map((input) => (
            <CustomInput
              id={input.name}
              type={input.type}
              label={input.label}
              errorsMessage={errors?.[input.name]?.message}
              refer={register(input.name).ref}
              {...register(input.name, input.validationOptions)}
            />
          ))}

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
