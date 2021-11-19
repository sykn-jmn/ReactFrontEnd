const ContactsList = () => {

    const contacts = [
        {firstname:"Andy"},
        {firstname:"Jane"},
        {firstname:"Wendy"}
    ]
    return (
        <div>
            <ul>Contacts List
                {contacts.map(contact=>{
                    return <li>{contact.firstname}</li>
                })}
            </ul>
        </div>
    )
}

export default ContactsList;