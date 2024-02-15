import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";
import { useState } from "react";

export function NewLetter() {
  const [email, setEmail] = useState("");
  const onChange = ({ target }) => setEmail(target.value);
  return (
    <Card className="w-full max-w-[48rem] flex-row mx-auto bg-gray-900 text-white my-5">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="white" className="mb-4 uppercase">
          newsletter
        </Typography>
        <Typography variant="h5" color="white" className="mb-2">
          Welcome to Shemach Newsletter: Your Gateway to Seamless Shopping!
        </Typography>
        <Typography color="white" className="mb-8 font-normal">
          Dive into a world of unparalleled convenience and endless
          possibilities with our latest newsletter. We are thrilled to bring you
          the hottest trends, exclusive deals, and exciting updates right to
          your inbox.
        </Typography>
        <div className="relative flex w-full max-w-[24rem]">
          <Input
            type="email"
            label="Email Address"
            value={email}
            onChange={onChange}
            className="pr-20 text-white border-white"
            containerProps={{
              className: "min-w-0",
            }}
          />
          <Button
            size="sm"
            color={email ? "gray" : "blue-gray"}
            disabled={!email}
            className="!absolute right-1 top-1 rounded"
          >
            Join
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
