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

export function Register() {
  return (
    <Card className="w-96 max-w-lg mx-auto my-16">
      <CardHeader
        variant="gradient"
        color="gray"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Register
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Input type="text" label="Username" size="lg" />
        <Input type="email" label="Email" size="lg" />
        <Input type="password" label="Password" size="lg" />
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth>
          Register
        </Button>
        <Typography variant="small" className="mt-6 flex justify-center">
          Have an account?
          <Link to="/login" className="px-2 font-semibold text-black">
            Login
          </Link>
        </Typography>
      </CardFooter>
    </Card>
  );
}
