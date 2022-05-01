import { connect } from 'react-redux';
import { CONTACT_VALIDATION_SCHEMA } from '../../utils/validationSchemas';
import { createContact } from '../../actions/actionCreators';

const { Formik, Form, Field, ErrorMessage } = require('formik');

function ContactForm (props) {
  const { create } = props;

  const initialValues = { name: '', telNumber: '', birthday: '' };

  const handleSubmit = (values, formikBag) => {
    create(values);
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={CONTACT_VALIDATION_SCHEMA}
    >
      {formikProps => (
        <Form>
          <Field name='name' type='text' placeholder='Name' autoFocus />
          <ErrorMessage name='name' />
          <br />
          <Field name='telNumber' type='tel' placeholder='+380123456789' />
          <ErrorMessage name='telNumber' />
          <br />
          <Field name='birthday' type='date' />
          <ErrorMessage name='birthday' />
          <br />
          <button type='submit'>Create</button>
        </Form>
      )}
    </Formik>
  );
}

const mapDispatchToProps = dispatch => ({
  create: values => {
    dispatch(createContact(values));
  },
});

export default connect(null, mapDispatchToProps)(ContactForm);
