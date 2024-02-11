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
                    <th scope="col" className="table__th note__status">Username</th>
                    <th scope="col" className="table__th note__created">Created</th>
                    <th scope="col" className="table__th note__updated">Updated</th>
                    <th scope="col" className="table__th note__title">Title</th>
                    <th scope="col" className="table__th note__username">Owner</th>
                    <th scope="col" className="table__th note__edit">Edit</th>
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