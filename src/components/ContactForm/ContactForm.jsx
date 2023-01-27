import PropTypes from 'prop-types';
import { Component } from "react"
import css from '../ContactForm/ContactForm.module.css'



export class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }

    handleChange = ({ target }) => {
        const { name, value } = target;   
        this.setState({
            [name]: value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.create({ ...this.state });
        this.setState({
            name: '',
            number: '',
        });
    }

    render() {
      return (
        <form className={css.form} onSubmit={this.handleSubmit}>
            <label className={css.label}>Name</label>
            <input className={css.input}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={this.handleChange}
                value={this.state.name}
            />
            <label className={css.label}>Number</label>
            <input className={css.input}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={this.handleChange}
                value={this.state.number}
            />
            <button className={css.button} type="submit">Add contact</button>
        </form>
    )
    }
}



ContactForm.propTypes = {
    create: PropTypes.func.isRequired,
}


