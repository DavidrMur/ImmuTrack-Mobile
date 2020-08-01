import React, { Component } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { TextField, Accordion, AccordionSummary, AccordionDetails, Checkbox, Typography} from '@material-ui/core';

class BacteriaList extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        console.log(this.props);
        
        return (
            <div> 
            { this.props.editing ? 
            (<Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography >Bacteria</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Checkbox />
                <Checkbox />
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
                    {this.props.bacteria && this.props.bacteria.map((bacteria) => {
                        return <li>{bacteria}</li>
                    })}
                    </ul>
                </AccordionDetails>
             </Accordion> }
            </div>)
    }
}

export default BacteriaList