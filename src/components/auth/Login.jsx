import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <Card className="w-96 max-w-lg mx-auto my-16">
      <CardHeader
        variant="gradient"
        color="gray"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Login
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Input label="Username" size="lg" />
        <Input label="Password" size="lg" />
        <div className="-ml-2.5">
          <Checkbox label="Remember Me" />
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth>
          Login
        </Button>
        <Typography variant="small" className="mt-6 flex justify-center">
          Don&apos;t have an account?
          <Link to="/register" className="px-2 font-semibold text-black">
            Register
          </Link>
        </Typography>
      </CardFooter>
    </Card>
  );
}
