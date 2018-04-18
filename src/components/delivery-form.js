import React from 'react';
import {reduxForm, Field, focus} from 'redux-form';
import {required, nonEmpty, numLength, isANumber} from '../validators';
import Input from './input';
import {tracking} from '../actions/index'

export class DeliveryForm extends React.Component {


    render() {
			if (this.props.submitSucceeded) {
				return <div>Report submitted successfully</div>
		}
        return (
					
            <form onSubmit={this.props.handleSubmit(values =>
							this.props.dispatch(tracking(values))
					)}>

            <label htmlFor="trackingumber">Tracking Number</label>
						<Field
							name="trackingNumber"
							id="tracking-number"
							type="text"
							component={Input}
							validate={[required, nonEmpty, numLength, isANumber]}
						/>
						
						<label htmlFor="issue">What is your issue?</label>
						<Field
							name="issue"
							id="issue"
							type="text"
							element="select"
							component={Input}
							validate={[required, nonEmpty]}>
								<option value="not-arrived">My delivery hasn't arrived</option>
								<option value="not-delivered">The wrong item was delivered</option>
								<option value="missing-part">Part of my order is missing</option>
								<option value="damaged">Some of my order arrived damaged</option>
								<option value="other">Other (give details below)</option>
						</Field>
						
						<label htmlFor="details">Give more details (option)</label>
						<Field
							name="details"
							id="details"
							type="text"
							component={Input}
						/>
						
						<button type="submit">Submit</button>
            </form>
        );
    }
}

export default reduxForm({
	form: 'delivery',
	onSubmitFail: (errors, dispatch) => 
		dispatch(focus('contact'), Object.keys(errors)[0])
})(DeliveryForm);