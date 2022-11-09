import React from 'react'
import Sidebar from '../components/Sidebar'
import Timeline from '../components/Timeline'
import Header from '../components/Header'

import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import UserContext from '../context/user'
import firebaseContext from '../context/firebase'
import *  as ROUTES from '../constants/routes'

function Dashboard() {

    const history = useNavigate();

    const { firebase } = useContext(firebaseContext);
    const { user } = useContext(UserContext);


    return (
        
        <div>
            { user?
            <div className="row my-3">
                <div className="col-2 colbod">
                    <Header></Header>
                </div>
                <div className="col colbod">
                    2 of 3 (wider)
                </div>
                <div className="col-4 colbod">
                    <Sidebar></Sidebar>
                </div>
            </div>

            :

            <div>
                You need to login to continue ,<Link to={ROUTES.LOGIN}> click here</Link>
            </div>
            }

        </div>

       

    )
}

export default Dashboard
