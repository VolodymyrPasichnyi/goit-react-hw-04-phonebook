import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { useState } from 'react';
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactsList/ContactList";
import { Filter } from "./Filter/Filter";

const LOCAL_KEY = ('key')


export const App = () => {
  const [contacts, setContact] = useState(
    JSON.parse(localStorage.getItem(LOCAL_KEY)) ||
    [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ])
  const [filter, setFilter] = useState('')

  useEffect(() => {   
    localStorage.setItem(LOCAL_KEY, JSON.stringify(contacts))
  }, [contacts])

  const createUser = (user) => {
    const newUser = {
      ...user,
      id: nanoid()
    }
      if (contacts.find(user => user.name === newUser.name)) {
        return alert(`${newUser.name} is already in contacts`)
      }
    setContact(prevState => [...prevState, newUser])
  }

  const filterChange = (e) => {
    setFilter(e.target.value)
  }

  const filterUser = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase().trim()))
  }

  const deleteUser = (id) => {
    setContact(prevState => prevState.filter(contact => contact.id !== id))
  }


  return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm 
          create={createUser}
        />
        <h2>Contacts</h2>
        <Filter 
          value={filter}
          filter={filterChange}
        />
        <ContactList 
          contacts={filterUser()}
          deleteUser={deleteUser}
        />
    </div>
  )
}



