import { useGetTournamentQuery } from "./tournamentApiSlice"
import Tournament from "./Tournament";

const TournamentList = () => {
    const {
        data: tournament,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetTournamentQuery()

    let content

    if (isLoading) content = <p>Loading...</p>

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {
        const { ids } = tournament

        const tableContent = ids?.length
            ? ids.map(tournamentId => <Tournament key={tournamentId} tournamentId={tournamentId} />)
            : null

        content = (
            <table className="table table--notes">
                <thead className="table__thead">
                <tr>
                    <th scope="col" className="table__th note__status">Name</th>
                    <th scope="col" className="table__th note__created">Description</th>
                    <th scope="col" className="table__th note__updated">Date</th>
                    <th scope="col" className="table__th note__title">nbrPlayers</th>
                    <th scope="col" className="table__th note__username">Active</th>
                    <th scope="col" className="table__th note__username">Editer</th>
                </tr>
                </thead>
                <tbody>
                {tableContent}
                </tbody>
            </table>
        )
    }

    return content
}
export default TournamentList