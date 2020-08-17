import React from 'react';
import { Button, Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText, TextField } from '@material-ui/core'
import './HealthcarePageComponents.css';

class DeleteRecord extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    onClose = () => {
        this.setState({open: false});
    }

    onChange = (value) => {
        let today = new Date().toISOString().slice(0, 10);
        if (value < today) this.setState({open: true});
        this.props.onChange(value, 'expiryDate')
    }

    render() {
        return (
            <div>
            {this.state.open ? 
                <Dialog open={this.state.open} onClose={this.onCancel}> 
                    <DialogTitle >{"Expired Vaccine"}</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        Warning. You have selected an expiry date that has already passed. Please ensure this is accurate.
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={this.onClose} color="primary">
                        Ok
                    </Button>
                    </DialogActions>
                </Dialog> 
                : 
                null
            }
            <TextField type="date" defaultValue={this.props.defaultValue} style={{width: '150px'}} onChange={(event) => this.onChange(event.target.value)}/>
            </div>
        )
    }
}

export default DeleteRecord;