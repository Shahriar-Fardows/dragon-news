/* eslint-disable react/jsx-no-undef */
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import LoginUI from "./LoginUI";
import RegesterUi from "./regesterUi";

const Login = () => {
    const data = [
        {
            label: "Login",
            value: "html",
            desc: <LoginUI/>,
        },
        {
            label: "Registration",
            value: "react",
            desc: <RegesterUi/>,
        },

    ];
    return (
        <div className="grid justify-center        ">
            <Tabs value="html" className="max-w-[40rem]">
                <TabsHeader
                    className="bg-transparent"
                    indicatorProps={{
                        className: "bg-gray-900/10 shadow-none !text-gray-900",
                    }}
                >
                    {data.map(({ label, value }) => (
                        <Tab key={value} value={value}>
                            {label}
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody>
                    {data.map(({ value, desc }) => (
                        <TabPanel key={value} value={value}>
                            {desc}
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        </div>

    );
};

export default Login;