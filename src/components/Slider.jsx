import { Carousel, Typography, Button } from "@material-tailwind/react";
import SampleOne from "../assets/img/sample1.jpg";
import SampleTwo from "../assets/img/sample2.jpg";
import SampleThree from "../assets/img/sample3.jpg";
import { Link } from "react-router-dom";

export function Slider() {
  return (
    <Carousel
      loop={true}
      autoplay={true}
      autoplayDelay={6000}
      transition={{ duration: 2 }}
      className=" h-[30rem] shadow-2xl"
    >
      <div className="relative h-full w-full">
        <img
          src={SampleOne}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/50">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Men / Women clothing
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Elevate your wardrobe with our premium quality fabrics, impeccable
              craftsmanship, and attention to detail. Whether you&apos;re
              seeking sophistication, comfort, or versatility, find your
              signature style with us.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                <Link to="/shop" className="flex items-center">
                  SHOP NOW
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={SampleTwo}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/50">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              All Type T-Shirt
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Introducing our must-have T-shirts: the ultimate blend of comfort
              and style. Crafted from premium fabrics for a soft, luxurious feel
              against your skin, our T-shirts are designed to elevate your
              everyday look.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                <Link to="/shop" className="flex items-center">
                  SHOP NOW
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={SampleThree}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/50">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Discount
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Unlock unbeatable savings with our exclusive discounts! Treat
              yourself to your favorite styles at irresistible prices. From
              trendy apparel to must-have accessories, shop now and enjoy
              incredible discounts on our handpicked selection.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                <Link to="/shop" className="flex items-center">
                  Explore
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
