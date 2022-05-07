import { format } from 'date-fns';
const contactsDB = [
  {
    id: 0,
    name: 'Test',
    telNumber: '+380123456789',
    birthday: '2000-12-01',
    isFavourite: false,
  },
  {
    id: -1,
    name: 'Test1',
    telNumber: '+380123456788',
    birthday: format(new Date(), 'Y-MM-dd'),
    isFavourite: true,
  },
];

let serial = 1;

export const createContact = values => {
  contactsDB.push({ ...values, id: serial++ });
  console.log('contactsDB', contactsDB);
  return contactsDB[contactsDB.length - 1];
};
