import React, { Component } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { TextField, Accordion, AccordionSummary, AccordionDetails, Checkbox, Typography } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { bacteriaGroups, vaccineGroups } from 'helper-functions/constantGroups'

class BacteriaList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bacteria: '',
        }
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onAddBacteria(this.state.bacteria, 'bacteria');
        this.setState({bacteria: ''});
    }

    onChange = (event) => {
        console.log(event.target.value);
        this.setState({bacteria: event.target.value})
    }
    
    render() {
        return (
            <div>
            { this.props.otherVaccine ?
            // adding
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <form onSubmit={(event) => this.onSubmit(event)}>
                <Autocomplete 
                        options={bacteriaGroups}
                        value={this.state.bacteria}
                        getOptionLabel={(option) => option }
                        style={{ width: 300 }}
                        freeSolo
                        renderInput={(params) => <TextField {...params} defaultValue={this.props.brandName} variant="outlined" />}
                        onChange={(event, newValue) => this.setState({bacteria: newValue})}
                        />
                </form>
                </AccordionSummary>
                <AccordionDetails>
                    <ul>
                    { this.props.bacteria.map((bacteria) => {
                        return <li>{bacteria}</li>
                    })}
                    </ul>
                </AccordionDetails>
             </Accordion>
             : this.props.editing ?
                // editing
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <Typography >Pathogen(s)</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ul>
                    {this.props.vaccineGroups && this.props.vaccineGroups.find(x => x.vaccine === this.props.vaccine) && this.props.vaccineGroups.find(x => x.vaccine === this.props.vaccine).bacteria.map((bacteria) => {
                        return <li>{bacteria}</li>
                    })}
                    </ul>
                </AccordionDetails>
            </Accordion> :
             // display
            <ul style={{display: 'inline-block'}}>
                {this.props.vaccineGroups && this.props.vaccineGroups.find(x => x.vaccine === this.props.vaccine) && this.props.vaccineGroups.find(x => x.vaccine === this.props.vaccine).bacteria.map((bacteria) => {
                        return <li>{bacteria}</li>
                    })}
            </ul> 
            }
            </div>)
    }
}

export default BacteriaList