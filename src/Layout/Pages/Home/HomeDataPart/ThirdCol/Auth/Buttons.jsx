import { Button } from "@material-tailwind/react";
import { useContext } from "react";
import { Context } from "../../../../../../Context/ShareContext";

const Buttons = () => {

    const { google, gitHub } = useContext(Context)

    const Google = () => {
        google()
            .then((result) => {
                window.location.href = "/";
                const user = result.user;
                console.log(user)
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)

            });
    }

    const GitHub = () => {
        gitHub()
            .then((result) => {
                window.location.href = "/";
                const user = result.user;
                console.log(user)
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)

            });
    }

    return (
        <div className="flex flex-col items-center gap-4">
            <Button
                onClick={Google}
                size="lg"
                variant="outlined"
                color="blue-gray"
                className="flex items-center gap-3"
            >
                <img src="https://docs.material-tailwind.com/icons/google.svg" alt="metamask" className="h-6 w-6" />
                Continue with Google
            </Button>
            <Button
                onClick={GitHub}
                size="lg"
                variant="outlined"
                color="blue-gray"
                className="flex items-center gap-3"
            >
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg" alt="metamask" className="h-6 w-6" />
                Continue with Git Hub
            </Button>

        </div>
    );
};

export default Buttons;