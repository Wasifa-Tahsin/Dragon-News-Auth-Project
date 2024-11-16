import { FaGoogle ,FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-semibold mb-6">Login With</h2>
            <div className="*:w-full space-y-3">
                <button className="btn"><FaGoogle></FaGoogle> Login with Google</button>
                <button className="btn"> <FaGithub></FaGithub>Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;