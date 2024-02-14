import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Public from './components/Public'
import Login from './features/auth/Login';
import DashLayout from './components/DashLayout'
import Welcome from './features/auth/Welcome'
import UsersList from './features/users/UsersList'
import EditUser from './features/users/EditUser'
import NewUserForm from './features/users/NewUserForm'
import Prefetch from './features/auth/Prefetch'
import PersistLogin from './features/auth/PersistLogin'
import RequireAuth from './features/auth/RequireAuth'
import { ROLES } from './config/roles'
import useTitle from "./hooks/useTitle";
import TournamentList from "./features/tournaments/TournamentList";
import NewTournamentForm from "./features/tournaments/NewTournamentForm";
import EditTournament from "./features/tournaments/EditTournament";

function App() {
    useTitle('Padel Factory')
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {/* public routes */}
                <Route index element={<Public />} />
                <Route path="login" element={<Login />} />
                <Route path="new" element={<NewUserForm />} />

                {/* Protected Routes */}
                <Route element={<PersistLogin />}>
                    <Route element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}>
                        <Route element={<Prefetch />}>
                            <Route path="dash" element={<DashLayout />}>

                                <Route index element={<Welcome />} />

                                <Route element={<RequireAuth allowedRoles={[ROLES.Manager, ROLES.Admin]} />}>
                                    <Route path="users">
                                        <Route index element={<UsersList />} />
                                        <Route path=":id" element={<EditUser />} />
                                        <Route path="new" element={<NewUserForm />} />

                                    </Route>
                                </Route>



                                <Route path="tournaments">
                                    <Route index element={<TournamentList />} />
                                    <Route path={":id"} element={<EditTournament />}/>
                                    <Route path={"new"} element={<NewTournamentForm/>}/>
                                </Route>

                            </Route>{/* End Dash */}
                        </Route>
                    </Route>
                </Route>{/* End Protected Routes */}

            </Route>
        </Routes >
    );
}

export default App;