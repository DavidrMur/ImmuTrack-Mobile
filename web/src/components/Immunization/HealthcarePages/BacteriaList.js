import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { TextField, Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { bacteriaGroups } from 'helper-functions/constantGroups'

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
            <div style={{'text-align': 'center'}}>
                <form onSubmit={(event) => this.onSubmit(event)}>
                <TextField value={this.state.bacteria} variant="outlined" onChange={(event) => this.setState({bacteria: event.target.value})}/>
                </form>
                <ul style={{display: 'inline-block'}}>
                { this.props.bacteria.map((bacteria) => {
                        return <li>{bacteria}</li>
                    })}
                    </ul>
                    </div>
             : this.props.editing ?
                // editing
                <ul style={{display: 'inline-block', 'text-align': 'left'}}>
                {this.props.vaccineGroups && this.props.vaccineGroups.find(x => x.vaccine === this.props.vaccine) && this.props.vaccineGroups.find(x => x.vaccine === this.props.vaccine).bacteria.map((bacteria) => {
                        return <li>{bacteria}</li>
                    })}
            </ul>  :
             // display
            <ul style={{display: 'inline-block', 'text-align': 'left'}}>
                {this.props.vaccineGroups && this.props.vaccineGroups.find(x => x.vaccine === this.props.vaccine) && this.props.vaccineGroups.find(x => x.vaccine === this.props.vaccine).bacteria.map((bacteria) => {
                        return <li>{bacteria}</li>
                    })}
            </ul> 
            }
            </div>)
    }
}

export default BacteriaList