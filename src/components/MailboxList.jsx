import React from "react";
import { Link } from "react-router-dom";

const MailboxList = ({mailboxes}) => {
    return (
        <div>
            <h2>Mailbox List</h2>
            <ul>
                {mailboxes.map((mailbox) => (
                    <li key={mailbox._id}>
                        <Link to={`/mailboxes/${mailbox._id}`}>{mailbox._id} </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MailboxList;