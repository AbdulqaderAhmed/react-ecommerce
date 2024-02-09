import { Link } from "react-router-dom";
import { ItemCard } from "../components/ItemCard";
import { Slider } from "../components/Slider";
import { Typography } from "@material-tailwind/react";

export default function Home() {
  return (
    <div>
      <Slider />

      <Typography
        variant="h3"
        color="gray"
        fontWeight="regular"
        className="text-center mt-10"
      >
        Browse our collection
      </Typography>
      <div className="grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 text-center gap-4 lg:gap-y-10 my-5 mx-3">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>

      <div className="my-10 flex justify-center items-center">
        <Link className="bg-black text-white p-3 shadow-lg rounded-lg font-bold up">
          Show more...
        </Link>
      </div>
    </div>
  );
}
