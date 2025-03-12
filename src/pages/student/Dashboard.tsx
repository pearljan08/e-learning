import React from 'react'
import SideNav from '../../components/SideNav'
import { Button, Card, CardBody, Typography } from '@material-tailwind/react'
import CarouselTransition from '../../components/CarouselTransition'


const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-6">
        <div>
          <SideNav />
        </div>
        <div className="col-span-5">
          <div className="grid grid-cols-3 gap-1">
            <div className="col-span-2">
              <section className="m-10">
                <div className="p-10 rounded-l-xl border border-blue-gray-100 rounded-xl">
                    <CarouselTransition/>{/* <Typography
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
                    </Button> */}
                </div>
              </section>
            </div>
            <div className="m-10">
              <Card>Hi</Card>
            </div>
          </div>
        </div>
      </div>
        
    </>
  )
}

export default Dashboard
