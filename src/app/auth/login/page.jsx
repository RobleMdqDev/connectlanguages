import CustomForm from "@/components/CustomForm";
import {inputConfig} from "./inputOptions";

export default async function Login() {
  return (
    <CustomForm
      inputOptions={inputConfig}
      buttonText="Login"
      formType="login"
      redirect={"/"}
    />
  );
}
