import { Outlet } from "react-router-dom";
import DashHeader from "./DashHeader";
import DashFooter from "./DashFooter";
const DashLayout = () => {
    return(
        <>
            <DashHeader />
            <div className={'bg-red-padel flex-1 mx-4 md:mx-12 lg:mx-24 mt-8 sm:mt-16'}>
                <Outlet />
            </div>
            <DashFooter />
        </>
    )
}

export default DashLayout