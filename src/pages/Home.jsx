import { Link } from "react-router-dom";
import { ItemCard } from "../components/ItemCard";
import { Slider } from "../components/Slider";
import { Typography } from "@material-tailwind/react";
import Sponser from "../components/Sponser";
import { NewLetter } from "../components/NewLetter";

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
        Our New Arrivals
      </Typography>
      <div className="grid grid-flow-row md:grid-cols-2 lg:grid-cols-4 text-center gap-4 my-5 mx-3">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>

      <div className="my-10 flex justify-center items-center">
        <Link
          to="/shop"
          className="bg-black text-white p-3 shadow-lg rounded-lg font-bold up"
        >
          Show more...
        </Link>
      </div>

      <Sponser />

      <NewLetter />
    </div>
  );
}
