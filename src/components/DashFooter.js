import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
const DashFooter = () => {

    const { username, status } = useAuth()

    const navigate = useNavigate()
    const { pathname } = useLocation()

    const onGoHomeClicked = () => navigate('/dash')

    let goHomeButton = null

    if (pathname !== '/dash') {
        goHomeButton = (
            <button className={"dash-footer__button"} title={"home"} onClick={onGoHomeClicked} >
                <FontAwesomeIcon icon={faHouse} />
            </button>
        )
    }

    const content = (
        <footer className={"w-full text-center p-4 text-xs text-gray-400"}>
            {goHomeButton}
            <p>Current User:{username}</p>
            <p>Status: {status}</p>
        </footer>
    )
    return content
}

export default DashFooter