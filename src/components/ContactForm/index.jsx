import { connect } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { CONTACT_VALIDATION_SCHEMA } from '../../utils/validationSchemas';
import { createContactAction } from '../../actions/actionCreators';

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
    dispatch(createContactAction(values));
  },
});

export default connect(null, mapDispatchToProps)(ContactForm);
