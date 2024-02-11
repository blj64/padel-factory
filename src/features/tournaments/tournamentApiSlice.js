import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice"

const tournamentAdapter = createEntityAdapter({
    sortComparer: (a, b) => (a.completed === b.completed) ? 0 : a.completed ? 1 : -1
})

const initialState = tournamentAdapter.getInitialState()

export const tournamentApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getTournament: builder.query({
            query: () => '/tournament',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            keepUnusedDataFor: 5,
            transformResponse: responseData => {
                const loadedTournament = responseData.map(note => {
                    note.id = note._id
                    return note
                });
                return tournamentAdapter.setAll(initialState, loadedTournament)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Note', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'Note', id }))
                    ]
                } else return [{ type: 'Note', id: 'LIST' }]
            }
        }),
    }),
})

export const {
    useGetTournamentQuery,
} = tournamentApiSlice

// returns the query result object
export const selectTournamentResult = tournamentApiSlice.endpoints.getTournament.select()

// creates memoized selector
const selectTournamentData = createSelector(
    selectTournamentResult,
    tournamentResult => tournamentResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllTournament,
    selectById: selectNoteById,
    selectIds: selectNoteIds
    // Pass in a selector that returns the tournament slice of state
} = tournamentAdapter.getSelectors(state => selectTournamentData(state) ?? initialState)