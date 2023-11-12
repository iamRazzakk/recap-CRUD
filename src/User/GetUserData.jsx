import { useLoaderData } from "react-router-dom";

const GetUserData = () => {
    const user = useLoaderData()
    return (
        <div>
            <h1>user:{user.length}</h1>
        </div>
    );
};

export default GetUserData;