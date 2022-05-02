import ContactForm from '../../components/ContactForm';
import ContactsList from '../../components/ContactsList/index';
import ContactsListControls from '../../components/ContactsListControls';

function ContactsPage () {
  return (
    <>
      <ContactForm />
      <ContactsListControls />
      <ContactsList />
    </>
  );
}

export default ContactsPage;
