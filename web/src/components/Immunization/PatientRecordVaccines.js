import React from 'react';
import { TextField, Typography, Button } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MaterialTable from "material-table";
import BacteriaList from './HealthcarePages/BacteriaList';
import DeleteRecord from './HealthcarePages/DeleteRecord';
import ExpiryDate from './HealthcarePages/ExpiryDate';
import './HealthcarePages/HealthcarePageComponents.css';


class PatientRecordVaccines extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            maxDate: new Date().toISOString().slice(0, 10),
            disableAdministered: false,
            disableOther: false,
            error: false,
            added: false,
            addOtherVaccine: false,
            vaccinesWithoutOther: this.props.vaccines,
            vaccinesWithOther: this.props.vaccines.concat({vaccine: 'Other', bacteria: []})
        }
    }

    componentDidMount = () => {
        // let temp = this.state.vaccinesWithOther;
        // temp.push({vaccine: 'Other', bacteria: []});
        // this.setState({vaccinesWithOther: temp});
    }

    updatedVaccine = {
        dateAdmin: this.props.dateAdmin,
        age: 26,
        brandName: this.props.brandName,
        bacteria: this.props.bacteria || [],
        lot: this.props.lot,
        expiryDate: this.props.expiryDate,
        administeredUnder: this.props.administeredUnder,
        location: this.props.location,
        entryId: this.props.entryId,
        otherVaccine: false

    };

    onCancel = () => {
        this.updatedVaccine = {
            dateAdmin: this.props.dateAdmin,
            brandName: this.props.brandName,
            bacteria: this.props.bacteria || [],
            lot: this.props.lot,
            expiryDate: this.props.expiryDate,
            administeredUnder: this.props.administeredUnder,
            location: this.props.location,
            entryId: this.props.entryId,
            otherVaccine: false

        };

        this.setState({editing: false});
    }

    onChangeEvent = (value, type) => {
        let temp = {...this.updatedVaccine}

        switch (type) {
            case 'dateAdmin':
                if (value === this.state.maxDate) {
                    temp['administeredUnder'] = `Dr. ${this.props.userInfo.lastName}`;
                    temp['dateAdmin'] = value;
                    if (temp['otherVaccine']) {
                        temp['otherVaccine'] = false;
                        temp['brandName'] = this.props.brandName;
                        this.setState({addOtherVaccine: false})
                    }
                    this.setState({disableAdministered: true})
                    this.setState({disableOther: true})
                } else {
                    this.setState({disableAdministered: false})
                    this.setState({disableOther: false})
                    temp['dateAdmin'] = value;
                }
                break;
            case 'brandName':
                if (value === 'Other') { 
                    this.setState({addOtherVaccine: true});
                    temp['bacteria'] = [];  
                    temp['otherVaccine'] = true;
                } else {
                    this.setState({addOtherVaccine: false});
                    temp['brandName'] = value || undefined;
                }
                break;
            case 'otherBrandName':
                temp['brandName'] = value;
                break;
            case 'bacteria':
                temp['bacteria'].push(value);
                break;    
            default: 
                temp[type] = value;   
                break;
        }

        this.updatedVaccine = temp;
        console.log(this.updatedVaccine);
    }

    onSubmitEvent = () => {
        if (!this.validatePayload()) {
            this.setState({editing: false});
            this.setState({added: true});
            this.props.onSubmitEvent(this.updatedVaccine);
        }
    }

    validatePayload = () => {

        let errorCheck = false;

        if (this.updatedVaccine['dateAdmin'] === undefined || this.updatedVaccine['brandName'] === undefined ||
            this.updatedVaccine['lot'] === undefined || this.updatedVaccine['expiryDate'] === undefined ||
            this.updatedVaccine['administeredUnder'] === undefined || this.updatedVaccine['location'] === undefined) {
                errorCheck = true;
            }

        this.setState({error: errorCheck})

        return errorCheck;
    }

    render() {

        let patientRecordDisplay = (
            <div>
                {this.props.displayOnly ? null :
                    <div className={'flex-container'}>
                        <Button className='flex-item' onClick={() => this.setState({editing: true})} disabled={!this.props.editable} >Edit</Button>
                        <DeleteRecord disabled={!this.props.editable} removeEntry={() => this.props.removeEntry(this.props.entryId)} />
                        <Button style={{left: '80%'}}>Sync</Button>
                    </div>
                }
                <TableContainer style={{margin:'5px', width:'98%', justifyContent:'center'}} component={Paper}>
                    <Table aria-label="simple table">
                    {this.props.index === 0 ?
                        <TableHead>
                            <TableRow>
                                <TableCell style={{'width': '220px'}}>Date of Admin</TableCell>
                                <TableCell style={{'width': '120px'}} align="right">Age</TableCell>
                                <TableCell style={{'width': '220px'}} align="right">Vaccine Brand</TableCell>
                                <TableCell style={{'width': '220px'}} align="right">Pathogen(s)</TableCell>
                                <TableCell style={{'width': '220px'}} align="right">Lot#</TableCell>
                                <TableCell style={{'width': '220px'}} align="right">Expiry</TableCell>
                                <TableCell style={{'width': '220px'}} align="right">Administered by</TableCell>
                                <TableCell style={{'width': '220px'}} align="right">Location</TableCell>
                            </TableRow>
                        </TableHead>
                        : null}
                        <TableBody>
                                <TableRow>
                                    <TableCell style={{'width': '220px'}} align="left">{this.updatedVaccine.dateAdmin}</TableCell>
                                    <TableCell style={{'width': '120px'}} align="right">{this.updatedVaccine.age}</TableCell>
                                    <TableCell style={{'width': '220px'}} align="right">{this.updatedVaccine.brandName}</TableCell>
                                    <TableCell style={{'width': '220px'}} align="right">
                                        <BacteriaList vaccine={this.updatedVaccine.brandName} bacteria={this.props.bacteria} vaccineGroups={this.props.vaccines} />
                                    </TableCell>
                                    <TableCell style={{'width': '220px'}} align="right">{this.updatedVaccine.lot}</TableCell>
                                    <TableCell style={{'width': '220px'}} align="right">{this.updatedVaccine.expiryDate}</TableCell>
                                    <TableCell style={{'width': '220px'}} align="right">{this.updatedVaccine.administeredUnder}</TableCell>
                                    <TableCell style={{'width': '220px'}} align="right">{this.updatedVaccine.location}</TableCell>
                                </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

        );

        let patientRecordEdit = (
            <div>
                <Typography hidden={!this.state.error}>Please ensure you have filled all of the information</Typography>
                <Button className={'flex-item'} variant={'outlined'} onClick={() => this.onSubmitEvent()}>Submit</Button>
                {this.state.editing ? <Button variant={'outlined'} onClick={() => this.onCancel()}>Cancel</Button> : this.props.adding ? <Button variant={'outlined'} onClick={() => this.props.onCancel()}>Cancel</Button> : null}

                <TableContainer style={{margin:'5px', justifyContent:'center'}} component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Date of Admin</TableCell>
                                <TableCell align="center">Vaccine Brand</TableCell>
                                <TableCell align="center">Pathogen(s)</TableCell>
                                <TableCell align="center">Lot#</TableCell>
                                <TableCell align="center">Expiry</TableCell>
                                <TableCell align="center">Administered by</TableCell>
                                <TableCell align="center">Location</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell align="left">
                                    <TextField
                                        type="date"
                                        placeholder={this.updatedVaccine.dateAdmin}
                                        InputProps={{
                                            inputProps: {
                                                max: this.state.maxDate
                                            }
                                        }} 
                                        defaultValue={this.updatedVaccine.dateAdmin }
                                        className="flex-item"
                                        style={{width: '150px'}}
                                        onChange={(event) => this.onChangeEvent(event.target.value, 'dateAdmin')} 
                                        />
                                </TableCell>
                                <TableCell align="right">
                                    { this.state.disableOther ?
                                        <Autocomplete 
                                            options={ this.state.vaccinesWithoutOther}
                                            getOptionLabel={(option) => option.vaccine || (this.state.vaccinesWithoutOther.find(vaccine => vaccine.vaccine === option)).vaccine}
                                            renderInput={(params) => <TextField {...params} defaultValue={this.updatedVaccine['brandName'] || this.props.brandName} variant="outlined" />}
                                            getOptionSelected={(option, value) => option.vaccine === value}
                                            defaultValue={this.updatedVaccine['brandName']}
                                            style={{width: '250px'}}
                                            onChange={(event, newValue) => this.onChangeEvent(newValue && newValue.vaccine, 'brandName')}
                                            />
                                        : <><Autocomplete 
                                            options={ this.state.vaccinesWithOther}
                                            getOptionLabel={(option) => option.vaccine || (this.state.vaccinesWithOther.find(vaccine => vaccine.vaccine === option)).vaccine}
                                            renderInput={(params) => <TextField {...params} defaultValue={this.updatedVaccine['brandName'] || this.props.brandName} variant="outlined" />}
                                            style={{width: '250px'}}
                                            getOptionSelected={(option, value) => option.vaccine === value}
                                            defaultValue={this.updatedVaccine['brandName']}
                                            onChange={(event, newValue) => this.onChangeEvent(newValue && newValue.vaccine, 'brandName')}
                                            /></> }
                                            {this.state.addOtherVaccine ? <TextField onChange={(event) => this.onChangeEvent(event.target.value,'otherBrandName')} helperText={'Enter the vaccine vaccine brand'} style={{width: '250px'}}/> : null}
                                </TableCell>
                                <TableCell align="right">
                                    <BacteriaList editing vaccine={this.updatedVaccine.brandName} bacteria={this.updatedVaccine.bacteria} otherVaccine={this.state.addOtherVaccine} onAddBacteria={(this.onChangeEvent)} vaccineGroups={this.props.vaccines} />
                                </TableCell>
                                <TableCell align="right">
                                    <TextField type={'text'} label={'Lot#'} defaultValue={this.updatedVaccine.lot} className="flex-item" onChange={(event) => this.onChangeEvent(event.target.value,'lot')} style={{width: '100px'}}/>
                                </TableCell>
                                <TableCell align="right">
                                    {/* </TableCell><TextField type="date" defaultValue={this.updatedVaccine.expiryDate} className="flex-item" style={{width: '150px'}} onChange={(event) => this.onChangeEvent(event.target.value,'expiryDate')}/> */}
                                    <ExpiryDate defaultValue={this.updatedVaccine.expiryDate} className="flex-item" onChange={this.onChangeEvent} />
                                </TableCell>
                                <TableCell align="right">
                                    <TextField type="text" disabled={this.state.disableAdministered} value={this.updatedVaccine.administeredUnder} className="flex-item" onChange={(event) => this.onChangeEvent(event.target.value, 'administeredUnder')} style={{width: '100px'}}/>
                                </TableCell>
                                <TableCell align="right">
                                    <Autocomplete 
                                        options={this.props.userInfo.workLocations}
                                        getOptionLabel={(option) => `${option.workName}, ${option.workAddress}` }
                                        renderInput={(params) => <TextField {...params} defaultValue={this.props.location} variant="outlined" />}
                                        //defaultValue={this.props.location }
                                        style={{width: '200px'}}
                                        onChange={(event, newValue) => this.onChangeEvent(newValue && `${newValue.workName}, ${newValue.workAddress}`, 'location')}
                                        />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )

        return (
            <div>
                {this.props.adding || this.state.editing ? 
                    patientRecordEdit
                :
                    patientRecordDisplay
                }
            </div>
        )
    }
}

export default PatientRecordVaccines