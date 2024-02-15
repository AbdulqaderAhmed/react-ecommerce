import SpOne from "../assets/img/Sponsor-1.png";
import SpTwo from "../assets/img/Sponser2.jpg";
import SpThree from "../assets/img/Sponser3.jpg";
import SpFour from "../assets/img/Sponsor-4.png";
import SpFive from "../assets/img/Sponser-5.png";
import { Typography } from "@material-tailwind/react";
import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Sponser() {
  const imgs = [SpOne, SpTwo, SpThree, SpFour, SpFive];
  return (
    <div className="flex flex-col gap-5">
      <Typography
        variant="h3"
        color="gray"
        fontWeight="regular"
        className="text-center mt-10"
      >
        Our Partners
      </Typography>

      <div className="my-10">
        <ReactOwlCarousel
          items={5}
          center
          loop
          autoplay
          autoplaySpeed={4500}
          mouseDrag
          touchDrag
          lazyLoad
        >
          {imgs.map((item, index) => {
            return (
              <div
                className="item flex items-center justify-center w-2/6 h-2/6 "
                key={index}
              >
                <img src={item} alt="" />;
              </div>
            );
          })}
        </ReactOwlCarousel>
      </div>
    </div>
  );
}
