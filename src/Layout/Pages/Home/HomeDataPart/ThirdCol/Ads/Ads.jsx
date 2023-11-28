import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";



const Ads = () => {
    return (
        <Card
            shadow={false}
            className="relative grid h-[30rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
        >
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-[100vh] w-full rounded-none bg-[url('https://i.ibb.co/0cfS6XG/bg1.png')] bg-cover bg-center"
            >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                <CardBody className="relative py-10 px-6 md:px-12">
                    <Typography
                        variant="h2"
                        color="white"
                        className="mb-6 font-medium leading-[1.5]"
                    >
                        Create an Amazing Newspaper
                    </Typography>
                    <Typography variant="h5" className="mb-4 text-gray-400">
                        Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
                    </Typography>
                    <Typography variant="h5" className="mb-4 text-gray-400">
                        <Link><Button className=" px-10 bg-[#D72050]">Latest</Button></Link>
                    </Typography>

                </CardBody>
            </CardHeader>

        </Card>
    );
};

export default Ads;