import PropTypes from 'prop-types';
import { useState } from 'react';
import css from '../ContactForm/ContactForm.module.css'



export const ContactForm = ({ create }) => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const handleChange = ({target}) => {
        const { name, value } = target
        if (name === 'name') {
            return setName(value)
        }
        else {
            return setNumber(value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        create({ name, number})
        setName('')
        setNumber('')
    } 

    return (
            <form className={css.form} onSubmit={handleSubmit}>
                <label className={css.label}>Name</label>
                <input className={css.input}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={handleChange}
                    value={name}
                />
                <label className={css.label}>Number</label>
                <input className={css.input}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={handleChange}
                    value={number}
                />
                <button className={css.button} type="submit">Add contact</button>
            </form>
    )
}

ContactForm.propTypes = {
    create: PropTypes.func.isRequired,
}


