import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Input,
} from "@material-tailwind/react";

const Login = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen min-w-screen">
        <Card className="w-96">
            <CardBody>
                <div class="grid grid-cols-1 grid-rows">

                </div>
                <Typography variant="h4" color="blue-gray" className="mb-2 text-center">
                Login
                </Typography>
                <Input label="Username"/>
                <Input label="Password"/>
            </CardBody>
            <CardFooter className="pt-0">
                <Button>Read More</Button>
            </CardFooter>
        </Card>
      </div>
    </>
  )
}

export default Login
