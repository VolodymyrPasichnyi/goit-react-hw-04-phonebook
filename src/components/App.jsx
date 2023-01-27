import { Component } from "react";
import { nanoid } from 'nanoid';
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactsList/ContactList";
import { Filter } from "./Filter/Filter";

const LOCAL_KEY = ('key')


export class App extends Component {
  state = {
    contacts: [  
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  componentDidMount() {
    const localData = localStorage.getItem(LOCAL_KEY)
    if  (localData) {
          this.setState({ contacts: JSON.parse(localData) })
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem(LOCAL_KEY, JSON.stringify(this.state.contacts))
    }
  }

  createUser = (user) => {
    const newUser = {
      ...user,
      id: nanoid()
    } 
      if (this.state.contacts.find(user => {
            return user.name === newUser.name
          })
        ) {
          return alert(`${newUser.name} is already in contacts`)
        }

      this.setState((prev) => ({
        contacts: [...prev.contacts, newUser] 
        }))
  } 
 
  filterChange = (e) => {
    this.setState({ filter: e.target.value })
  }

  filterUser = () => {
    const { contacts, filter } = this.state
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())) 
  }

  deleteUser = (id) => {
    this.setState(prev => ({ contacts: [...prev.contacts.filter(contact => contact.id !== id)] }))
  }

    render() {
      return (
        <div>
          <h2>Phonebook</h2>
          <ContactForm 
            create={this.createUser}
          />
          <h2>Contacts</h2>
          <Filter 
            value={this.state.filter}
            filter={this.filterChange}
          />
          <ContactList 
            contacts={this.filterUser()}
            deleteUser={this.deleteUser}
          />
        </div>
      )
    }
};
