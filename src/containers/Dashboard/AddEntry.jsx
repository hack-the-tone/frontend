import 'date-fns';
import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { MuiPickersUtilsProvider, DatePicker, TimePicker } from 'material-ui-pickers';


function AddEntry(props) {
    const {projectsList, activityTypesList} = props;

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

    const [projectId, setProject] = useState(20);

    const handleProjectChange = (event) => {
        setProject(event.target.value);
    }

    const [activityId, setActivity] = useState(20);

    const handleActivityChange = (event) => {
        setActivity(event.target.value);
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
                        <option value="" />
                        <option value={10}>DA</option>
                        <option value={20}>HEMS</option>
                        <option value={30}>BEMS</option>
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
                        <option value="" />
                        <option value={10}>NWH</option>
                        <option value={20}>Annual Leave</option>
                        <option value={30}>Extra</option>
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

                <Button color="primary" onClick={() => { console.log('button clicked')}}>Submit</Button>
            </div>
        </MuiPickersUtilsProvider>
    );
}

export default AddEntry;