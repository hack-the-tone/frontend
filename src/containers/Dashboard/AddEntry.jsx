import 'date-fns';
import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { MuiPickersUtilsProvider, DatePicker, TimePicker } from 'material-ui-pickers';


function AddEntry(props) {
    const { projectsList, activityTypesList } = props;

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handleDateChange = (setFn) => (event) => {
        setFn(event);
    }

    const [startHour, setStartHour] = useState(new Date());
    const [endHour, setEndHour] = useState(new Date());

    const handleTimeChange = (setFn) => (event) => {
        setFn(event);
    }

    const [projectId, setProject] = useState(2);

    const handleProjectChange = (event) => {
        setProject(event.target.value);
    }

    const [activityId, setActivity] = useState(20);

    const handleActivityChange = (event) => {
        setActivity(event.target.value);
    }

    function submitEntry() {
        const data = {
            startDate,
            endDate,
            'entries': [
                {
                    projectId,
                    activityId,
                    'startTime': startHour,
                    'endTime': endHour
                }
            ]
        };

        console.log(data);

        if (props.closeModal) {
            props.closeModal();
        }
    }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>

            <div className="container">
                <p>Select dates</p>
                <div className="row">
                    <DatePicker
                        name="startDate"
                        margin="normal"
                        label="Start Date"
                        value={startDate}
                        onChange={handleDateChange(setStartDate)}
                    />
                    <DatePicker
                        name="endDate"
                        margin="normal"
                        label="End Date"
                        value={endDate}
                        onChange={handleDateChange(setEndDate)}
                    />
                </div>
                <p>Select Project</p>
                <div className="row">
                    <Select
                        native
                        value={projectId}
                        onChange={handleProjectChange}
                        input={<Input name="project" id="project" />}
                    >
                        {projectsList.map(project => <option value={project.id} key={project.id}>{project.name}</option>)}
                    </Select>
                </div>
                <p>Select Activity Type</p>
                <div className="row">
                    <Select
                        native
                        value={activityId}
                        onChange={handleActivityChange}
                        input={<Input name="activity" id="activity" />}
                    >
                        {activityTypesList.map(activity => <option value={activity.id} key={activity.id}>{activity.name}</option>)}
                    </Select>
                </div>

                <div className="row">
                    <TimePicker
                        name="startTime"
                        margin="normal"
                        label="Start Hour"
                        value={startHour}
                        onChange={handleTimeChange(setStartHour)}
                    />
                    <TimePicker
                        name="endTime"
                        margin="normal"
                        label="End Hour"
                        value={endHour}
                        onChange={handleTimeChange(setEndHour)}
                    />
                </div>

                <Button color="primary" onClick={submitEntry}>Submit</Button>
            </div>
        </MuiPickersUtilsProvider>
    );
}

export default AddEntry;