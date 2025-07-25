import {Header} from "../../shared/ui/header.tsx";
import {Outlet} from "@tanstack/react-router";

export const RootLayout = () => (
    <>
        <div className="max-w-[1200px] mx-auto px-4">
            <Header renderAccountBar={() => <div>Account</div>}/>
            <Outlet />
        </div>
    </>
)