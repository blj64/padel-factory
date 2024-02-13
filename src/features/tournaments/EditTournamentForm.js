import { useState, useEffect } from "react";
import {useDeleteTournamentMutation, useUpdateTournamentMutation} from "../tournaments/tournamentApiSlice";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSave, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import {useDeleteUserMutation} from "../users/usersApiSlice";

const EditTournamentForm = ({ tournament }) => {
    const navigate = useNavigate()

    const [updateTournament , {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useUpdateTournamentMutation()

    const [deleteTournament, {
        isSuccess: isDelSuccess,
        isError: isDelError,
        error: delerror
    }] = useDeleteTournamentMutation()


    const initialName = tournament.name || '';
    const initialDescription = tournament.description || '';
    const initialDate = tournament.date || '';
    const initialPlayer = tournament.player || 16;
    const initialActive = tournament.active || false;

    const [name, setName] = useState(initialName);
    const [description, setDescription] = useState(initialDescription);
    const [date, setDate] = useState(initialDate);
    const [player, setPlayer] = useState(initialPlayer);
    const [active, setActive] = useState(initialActive);


    useEffect(() => {
        console.log(isSuccess)
        if (isSuccess || isDelSuccess) {
            setName('')
            setDescription('')
            setDate('')
            setPlayer(16)
            navigate('/dash/tournaments')
        }
    }, [isSuccess, isDelSuccess, navigate])

    const onNameChanged = e => setName(e.target.value)
    const onDescriptionChanged = e => setDescription(e.target.value)
    const onDateChanged = e => setDate(e.target.value)
    const onPlayerChanged = e => setPlayer(e.target.value)

    const onActiveChanged = () => setActive(prev => !prev)

    const onSaveTournamentClicked = async (e) => {
       await updateTournament({ id: tournament.id, name, description, date, player, active})
    }

    const onDeleteTournamentClicked = async () => {
        await deleteTournament({ id: tournament.id })
    }

    const errClass = isError ? "errmsg" : "offscreen"

    const content = (
        <>
            <p className={errClass}>{error?.data?.message}</p>

            <form className={"form"} onSubmit={e => e.preventDefault()}>

                <div className={"form__title-row"}>
                    <h2>Edit Tournament</h2>
                    <div className="form__action-buttons">
                        <button
                            className="icon-button"
                            title="Save"
                            onClick={onSaveTournamentClicked}

                        >
                            <FontAwesomeIcon icon={faSave} />
                        </button>
                        <button
                            className={'icon-button'}
                            title={"Delete"}
                            onClick={onDeleteTournamentClicked}
                        >
                            <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                    </div>
                </div>

                <label htmlFor="name" className={"form__label"}>
                    Name:
                </label>
                <input
                    className={"form__input"}
                    type="text"
                    id={"name"}
                    name={"name"}
                    autoComplete={"off"}
                    value={name}
                    onChange={onNameChanged}
                />

                <label htmlFor="text" className={"form__label"}>
                    Description:
                </label>
                 <input
                    className={"form__input form__input--text"}
                    type="text"
                    id={"description"}
                    name={"description"}
                    autoComplete={"off"}
                    value={description}
                    onChange={onDescriptionChanged}
                />

                <label htmlFor="date" className={"form__label"}>
                    Date:
                </label>
                <input
                    className={"form__input"}
                    type="text"
                    id={"date"}
                    name={"date"}
                    value={date}
                    onChange={onDateChanged}
                />
                <label htmlFor="player" className={"form__label"}>
                    Nb Player:
                </label>
                <input
                    className={"form__input"}
                    type="number"
                    id={"player"}
                    name={"player"}
                    value={player}
                    onChange={onPlayerChanged}
                />
                <label className="form__label form__checkbox-container" htmlFor="tournament-active">
                    ACTIVE:
                    <input
                        className="form__checkbox"
                        id="tournament-active"
                        name="tournament-active"
                        type="checkbox"
                        checked={active}
                        onChange={onActiveChanged}
                    />
                </label>

            </form>
        </>
    )
    return content
}

export default EditTournamentForm