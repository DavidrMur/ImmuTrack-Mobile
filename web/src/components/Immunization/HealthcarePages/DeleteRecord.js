import React from 'react';
import { Button, Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText } from '@material-ui/core'

class DeleteRecord extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    onCancel = () => {
        this.setState({open: false});
    }

    onRemove = () => {
        this.setState({open: false});
        this.props.removeEntry()
    }

    render() {
        return (
            <div>
            {this.state.open ? 
                <Dialog open={this.state.open} onClose={this.onCancel}> 
                    <DialogTitle >{"Are you sure you want to remove this record?"}</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        By clicking "Yes" you will permanently remove this record. This action cannot be undone.
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={this.onCancel} color="primary">
                        Disagree
                    </Button>
                    <Button onClick={this.onRemove} color="primary" autoFocus>
                        Agree
                    </Button>
                    </DialogActions>
                </Dialog> 
                : 
                null
            }
            <Button variant="contained" onClick={() => this.setState({open: true})}>Remove</Button>
            </div>
        )
    }
}

export default DeleteRecord;