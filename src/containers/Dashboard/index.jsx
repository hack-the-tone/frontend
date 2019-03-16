import React, { useState } from 'react';
import SimpleModal from '../../components/SimpleModal.jsx';
import AddEntry from './AddEntry.jsx';
import { Fab, Snackbar, Icon } from '@material-ui/core';

import './Dashboard.css'

const projectsList = [
    {
        "id": 1,
        "name": "DA - Digital Attacker"
    },
    {
        "id": 2,
        "name": "CDS - Central Data Services"
    }
];
const activityTypesList = [
    {
        "id": 1,
        "isProjectRelated": true,
        "isAllDayEvent": false,
        "name": "NWH - Normal working hours"
    },
    {
        "id": 2,
        "isProjectRelated": false,
        "isAllDayEvent": true,
        "name": "AL - Annual leave"
    },
    {
        "id": 3,
        "isProjectRelated": true,
        "isAllDayEvent": false,
        "name": "EXTRA - Extra hours"
    },
    {
        "id": 4,
        "isProjectRelated": false,
        "isAllDayEvent": false,
        "name": "O - Other"
    }
];

const Dashboard = () => {
    const [snackbar, setSnackbarValue] = useState(false);
    const [isOpen, toggleModal] = useState(false);

    function handleClose() {
        setSnackbarValue(false);
        console.log('handle close');
    }

    function triggerSnackBar() {
        setSnackbarValue(true);
    }

    return (
        <div className={'eon-page'}>
            <h1>Dashboard</h1>
            <hr />
            <Snackbar
                anchorOrigin={{ 'vertical': 'top', 'horizontal': 'center' }}
                open={snackbar}
                onClose={handleClose}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">Entries Submitted!</span>}
            />
            <SimpleModal modal={{ isOpen, toggleModal }}>
                <AddEntry projectsList={projectsList} activityTypesList={activityTypesList} triggerSnackBar={triggerSnackBar} />
            </SimpleModal>


            <Fab className={'add-button'} color="secondary" aria-label="Add" onClick={() => toggleModal(true)}>
                <Icon>add</Icon>
            </Fab>
        </div>
    )
}

export default Dashboard;
