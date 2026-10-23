function UserCard(props) {
    let address = props.user.address.street + " " +
                  props.user.address.suite + " " +
                  props.user.address.city;

    let company = props.user.company.name;

    return (
        <div style={{ border: "1px solid grey", borderRadius: "5px", padding: "10px" }}>
            {props.user.name} {" - "} {props.user.email} {" - "}
            {props.user.phone} {" - "}
            {address} {" - "}
            {company}
        </div>
    );
}

export default UserCard;