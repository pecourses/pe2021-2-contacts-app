import { connect } from 'react-redux';
import { updateFilter } from '../../actions/actionCreators';

function ContactsListControls (props) {
  const { isFavourite, update } = props;

  const handleChange = ({ target: { value } }) => {
    const values = { isFavourite: value === '' ? '' : value === 'true' };

    update(values);
  };

  return (
    <>
      <span>Filter by favourite:</span>
      <select name='isFavourite' value={isFavourite} onChange={handleChange}>
        <option value=''>All</option>
        <option value='true'>Favourites</option>
        <option value='false'>Usual</option>
      </select>
    </>
  );
}

const mapStateToProps = ({ contactsData: { filter } }) => filter;

const mapDispatchToProps = dispatch => ({
  update: value => dispatch(updateFilter(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactsListControls);
