import React, { useState } from 'react';
import SimpleModal from '../../components/SimpleModal.jsx';
import AddEntry from './AddEntry.jsx';

import './Dashboard.css'

const Dashboard = () => {
    const projectsList = [10, 20, 30];
    const activityTypesList = [1, 2, 3];
    return (
        <div>
            <h1>Dashboard</h1>
            <hr />
            <SimpleModal>
                <AddEntry projectsList={projectsList} activityTypesList={activityTypesList} />
            </SimpleModal>
        </div>
    )
}

export default Dashboard;
