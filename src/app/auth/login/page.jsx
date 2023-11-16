import CustomForm from "@/components/CustomForm";
import {inputConfig} from "./inputOptions";

export default async function LoginPage() {
  return (
    <CustomForm
      inputOptions={inputConfig}
      buttonText="Login"
      formType="login"
      redirect={"/"}
    />
  );
}
