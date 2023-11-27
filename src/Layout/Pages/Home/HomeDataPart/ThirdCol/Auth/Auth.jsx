import { Button } from "@material-tailwind/react";

const Auth = () => {
    return (
        <div className="p-5 border">
            <h1 className="font-bold text-lg mx-5" >Login With</h1><br />
            <div className="flex flex-col items-center gap-4">
                <Button
                    size="lg"
                    variant="outlined"
                    color="blue-gray"
                    className="flex items-center gap-3"
                >
                    <img src="https://docs.material-tailwind.com/icons/google.svg" alt="metamask" className="h-6 w-6" />
                    Continue with Google
                </Button>
                <Button
                    size="lg"
                    variant="outlined"
                    color="blue-gray"
                    className="flex items-center gap-3"
                >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg" alt="metamask" className="h-6 w-6" />
                    Continue with Git Hub
                </Button>

            </div>
        </div>
    );
};

export default Auth;