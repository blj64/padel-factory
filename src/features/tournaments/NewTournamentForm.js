import { useState, useEffect } from "react";
import { useAddNewUserMutation} from "../users/usersApiSlice";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faSave} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";



const NewTournamentForm = () => {
    const navigate = useNavigate()

    const [addNewTournament, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useAddNewUserMutation()

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('0000-00-00T00:00:00Z')
    const [player, setPlayer] = useState(16)

    useEffect(() => {
        if (isSuccess) {
            setName('')
            setDescription('')
            setDate('')
            setPlayer(16)
        }
    }, [isSuccess])

    const onNameChanged = e => setName(e.target.value)
    const onDescriptionChanged = e => setDescription(e.target.value)
    const onDateChanged = e => setDate(e.target.value)
    const onPlayerChanged = e => setPlayer(e.target.value)

    const onSaveTournamentClicked = async (e) => {
        e.preventDefault()
        await addNewTournament({name, description, date, player})
        navigate("/dash/tournaments")
    }
    const errClass = isError ? "errmsg" : "offscreen"

    const content = (
        <>
            <p className={errClass}>{error?.data?.message}</p>

            <form className={"form"} onSubmit={onSaveTournamentClicked}>

                <div className={"form__title-row"}>
                    <h2>New Tournament</h2>
                    <div className="form__action-buttons">
                        <button
                            className="icon-button"
                            title="Save"
                        >
                            <FontAwesomeIcon icon={faSave} />
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
                <label htmlFor="ayer" className={"form__label"}>
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

            </form>
        </>
    )
    return content
}

export default NewTournamentForm