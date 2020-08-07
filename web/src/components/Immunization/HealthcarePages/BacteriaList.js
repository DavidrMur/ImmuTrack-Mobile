import React, { Component } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { TextField, Accordion, AccordionSummary, AccordionDetails, Checkbox, Typography} from '@material-ui/core';
//import { vaccineGroups } from 'helper-functions/constantGroups'

class BacteriaList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bacteria: ''
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
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <form onSubmit={(event) => this.onSubmit(event)}>
                <TextField value={this.state.bacteria} onChange={(event) => this.onChange(event)}/>
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
            (<Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography >Bacteria</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <ul>
                {this.props.vaccineGroups && this.props.vaccineGroups[this.props.vaccine].bacteria.map((bacteria) => {
                        return <li>{bacteria}</li>
                    })}
                    </ul>
                </AccordionDetails>
            </Accordion>) 
            : <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography >Bacteria</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ul>
                    {this.props.vaccineGroups && this.props.vaccineGroups.find(x => x.vaccineBrand === this.props.vaccine) && this.props.vaccineGroups.find(x => x.vaccineBrand === this.props.vaccine).bacteria.map((bacteria) => {
                        return <li>{bacteria}</li>
                    })}
                    </ul>
                </AccordionDetails>
             </Accordion> }
            </div>)
    }
}

export default BacteriaList