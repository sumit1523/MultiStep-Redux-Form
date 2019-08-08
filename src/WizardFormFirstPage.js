import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';

const WizardFormFirstPage = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="firstName"
        type="text"
        component={renderField}
        label="First Name"
      />
      <Field
        name="lastName"
        type="text"
        component={renderField}
        label="Last Name"
      />
      <div>
        <label htmlFor="employed1">Employe - 1</label>
        <div>
          <Field name="employed1" id="employed1" component={renderField} type="checkbox" />
        </div>
      </div>
      <div>
        <label htmlFor="employed2">Employe - 2</label>
        <div>
          <Field name="employed2" id="employed2" component={renderField} type="checkbox" />
        </div>
      </div>
      <div>
        <label htmlFor="employed3">Employe - 3</label>
        <div>
          <Field name="employed3" id="employed3" component={renderField} type="checkbox" />
        </div>
      </div>
      <div>
        <button type="submit" className="next">Next</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormFirstPage);
