import React, { useState } from 'react';
import SimpleModal from '../../components/SimpleModal.jsx';
import AddEntry from './AddEntry.jsx';

import './Dashboard.css'

const Dashboard = () => {
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
