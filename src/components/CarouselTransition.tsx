import { Carousel, Typography, Button } from "@material-tailwind/react";

const CarouselTransition = () => {
  return (
    <>
        <Carousel transition={{ duration: 1 }}>
            <div className="bg-[url('../eclipse.jpg')] bg-no-repeat lg:bg-contain bg-cover bg-right bg-linear-to-r from-cyan-500 to-blue-500">
                <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-bold mb-2"
                >
                    Upcoming Events
                </Typography>
                <Typography variant="h3" color="blue-gray">
                    Tech Summit: Shaping Tomorrow
                </Typography>
                <Typography
                    className="mt-2 mb-6 !text-base font-normal text-gray-500"
                >
                    Prepare to be part of dynamic conversations that will redefine the
                    boundaries.
                </Typography>
                <Button variant="outlined" className="flex-shrink-0">
                    join now
                </Button>
            </div>
            <div>
                <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-bold mb-2"
                >
                    Upcoming Events
                </Typography>
                <Typography variant="h3" color="blue-gray">
                    Tech Summit: Shaping Tomorrow
                </Typography>
                <Typography
                    className="mt-2 mb-6 !text-base font-normal text-gray-500"
                >
                    Prepare to be part of dynamic conversations that will redefine the
                    boundaries.
                </Typography>
                <Button variant="outlined" className="flex-shrink-0">
                    join now
                </Button>
            </div>
            <div>
                <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-bold mb-2"
                >
                    Upcoming Events
                </Typography>
                <Typography variant="h3" color="blue-gray">
                    Tech Summit: Shaping Tomorrow
                </Typography>
                <Typography
                    className="mt-2 mb-6 !text-base font-normal text-gray-500"
                >
                    Prepare to be part of dynamic conversations that will redefine the
                    boundaries.
                </Typography>
                <Button variant="outlined" className="flex-shrink-0">
                    join now
                </Button>
            </div>
        </Carousel>
    </>
  )
}

export default CarouselTransition
