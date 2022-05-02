import { connect } from 'react-redux';
import ContactsListItem from './ContactsListItem';

function ContactsList (props) {
  const { contacts, isFetching, error, filter } = props;

  const mapContact = (c, index, arr) => (
    <ContactsListItem key={c.id} contact={c} />
  );

  const filterContacts = contacts => {
    const { isFavourite } = filter;

    // В реальности данные уже будут приходить с сервера отфильтрованные.
    // Если фильтр не пустой, то применить, иначе показать всех:
    return contacts.filter(c =>
      isFavourite !== '' ? c.isFavourite === isFavourite : true
    );
  };

  return (
    <>
      {isFetching && <div>Loading. Please, wait...</div>}
      {error && <div>ERROR!!!!</div>}
      {!isFetching && !error && (
        <ul>{filterContacts(contacts).map(mapContact)}</ul>
      )}
    </>
  );
}

const mapStateToProps = ({ contactsData }) => contactsData;

export default connect(mapStateToProps)(ContactsList);
