import useTitle from "../../hooks/useTitle";
import {useParams} from "react-router-dom";
import {useGetTournamentQuery} from "./tournamentApiSlice";
import useAuth from '../../hooks/useAuth'
import PulseLoader from "react-spinners/PulseLoader";
import EditTournamentForm from "./EditTournamentForm";


const EditTournament = () => {
    useTitle('PadelFactory: Edit Tournament')

    const { id } = useParams()
    const { username, isManager, isAdmin } = useAuth()
    const { tournament } = useGetTournamentQuery("tournamentsList", {
        selectFromResult: ({ data }) => ({
            tournament: data?.entities[id]
        })
    })

    if (!tournament) return <PulseLoader color={"#FFF"} />

    const content = <EditTournamentForm tournament={tournament}/>

    return content
}

export default EditTournament