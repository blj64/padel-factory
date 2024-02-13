import { Link } from 'react-router-dom'
import useAuth from "../../hooks/useAuth";
const Welcome = () => {
    const { username, isManager, isAdmin } = useAuth()
    const date = new Date()
    const today = new Intl.DateTimeFormat('fr-FR', { dateStyle: 'full', timeStyle: 'long' }).format(date)

    const content = (
        <section className="welcome">

            <p>{today}</p>

            <h1>Welcome {username}</h1>


            {(isManager || isAdmin) && <p><Link to="/dash/users">View User Settings</Link></p>
            }
            <p><Link to="/dash/tournaments">View Tournaments Settings</Link></p>

            <p><Link to="/dash/tournaments/new">Add New Tournaments</Link></p>



            {(isManager || isAdmin) && <p><Link to={"/dash/users/new"}>Add New Users</Link></p>
            }


        </section>
    )

    return content
}
export default Welcome