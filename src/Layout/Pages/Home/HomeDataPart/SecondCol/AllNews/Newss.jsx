/* eslint-disable react/prop-types */
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,

    Tooltip,
} from "@material-tailwind/react";
import { useState } from "react";

const Newss = ({ data }) => {
    const { total_view, author, image_url, title, details } = data;
    const [showMore, setShowMore] = useState(false);

    const truncatedDescription = details?.slice(0, 120);
    const shouldShowEllipsis = details?.length > 120;


    return (
        <div>
            <Card className="max-w-[70%] p-5 m-10 mx-auto overflow-hidden">
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-none"
                >
                    <img
                        src={image_url}
                        alt="ui/ux review check"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h4" color="blue-gray">
                        {title}
                    </Typography>
                    <Typography variant="lead" color="gray" className="mt-3 font-normal">
                        <h4 className="md:text-sm text-xs font-normal leading-normal lg:mt-3 mt-1 text-start">
                            {showMore ? details : truncatedDescription}
                            {shouldShowEllipsis && (
                                <span
                                    className="text-dark pl-1 text-orange-400 cursor-pointer"
                                    onClick={() => setShowMore(!showMore)}
                                >
                                    {showMore ? ' Show Less' : ' Show More...'}
                                </span>
                            )}
                        </h4>


                    </Typography>
                </CardBody>
                <CardFooter className="flex items-center justify-between">
                    <div>
                        <div className="flex items-center -space-x-3">
                            <Tooltip content="Natali Craig">
                                <div className="flex items-center mb-4">
                                    <img className="w-10 h-10 me-4 rounded-full" src={author.img} alt="" />
                                    <div className="font-medium dark:text-white">
                                        <p>Jese Leos <time dateTime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">{author.published_date}</time></p>
                                    </div>
                                </div>

                            </Tooltip>


                        </div>

                    </div>

                    <Typography className="font-normal">View: {total_view}</Typography>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Newss;