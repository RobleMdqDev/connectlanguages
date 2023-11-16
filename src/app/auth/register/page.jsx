import CustomForm from "@/components/CustomForm";
import {inputConfig} from "./inputOptions";

export default async function RegisterPage() {
  return (
    <CustomForm
      apiRoute={"/api/auth/register"}
      fetchMethod={"POST"}
      inputOptions={inputConfig}
      redirect={"/auth/login"}
      buttonText="Register"
    />
  );
}
