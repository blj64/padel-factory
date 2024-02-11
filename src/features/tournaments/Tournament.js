import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectNoteById } from './tournamentApiSlice'

const Tournament = ({ tournamentId }) => {

    const tournament = useSelector(state => selectNoteById(state, tournamentId))

    const navigate = useNavigate()

    if (tournament) {
        const created = new Date(tournament.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long' })

        const updated = new Date(tournament.updatedAt).toLocaleString('en-US', { day: 'numeric', month: 'long' })

        const handleEdit = () => navigate(`/dash/tournament/${tournamentId}`)

        return (
            <tr className="table__row">
                <td className="table__cell note__status">
                    {tournament.completed
                        ? <span className="note__status--completed">Completed</span>
                        : <span className="note__status--open">Open</span>
                    }
                </td>
                <td className="table__cell note__created">{created}</td>
                <td className="table__cell note__updated">{updated}</td>
                <td className="table__cell note__title">{tournament.title}</td>
                <td className="table__cell note__username">{tournament.username}</td>

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