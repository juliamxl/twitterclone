import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";
import { useCallback, useState } from "react";
import RegisterModal from "./RegisterModal";
import Input from "../layout/Input";
import Modal from "../Modal";

const LoginModal = () => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    const onToggle = useCallback(() => {
        if(isLoading){
            return;
        }
        
        loginModal.onClose()
        registerModal.onOpen()
    }, [isLoading, registerModal, loginModal])

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);

            loginModal.onClose();
        }
        catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false)
        }

    }, [loginModal]);

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={isLoading}
            />
            <Input
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                disabled={isLoading}
            />
        </div>
    )

    const footerContent =  (
        <div className=" text-neutral-400 text-center mt-4">
            <p>First time using Twitter?</p>
            <span onClick={onToggle} className=" text-white cursor-pointer hover:underline">
                Create an account
            </span>
        </div>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={loginModal.isOpen}
            tittle="Login"
            actionLabel="Sign in"
            onClose={loginModal.onClose}
            onSubmit={onSubmit}
            body={bodyContent}
            footer={footerContent}
        />
    );
}
export default LoginModal;