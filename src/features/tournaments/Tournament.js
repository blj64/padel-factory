import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from 'react-router-dom'

import { selectTournamentById } from './tournamentApiSlice'
import {useGetTournamentQuery} from "../tournaments/tournamentApiSlice";
import {useSelector} from "react-redux";

const Tournament = ({ tournamentId }) => {
    const tournament = useSelector(state => selectTournamentById(state, tournamentId))

    const navigate = useNavigate()

    if (tournament) {

        const handleEdit = () => navigate(`/dash/tournament/${tournamentId}`)

        return (
            <tr className="table__row">

                <td className="table__cell note__created">{tournament.name}</td>
                <td className="table__cell note__updated">{tournament.description}</td>
                <td className="table__cell note__title">{tournament.date}</td>
                <td className="table__cell note__username">{tournament.player}</td>
                <td className="table__cell note__username">{tournament.active?"ACTIVE":"PAS ACTIVE"}</td>


                <td className="table__cell">
                    <button
                        className="icon-button table__button"
                        onClick={handleEdit}
                    >
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                </td>
            </tr>
        )

    } else return null
}
export default Tournament