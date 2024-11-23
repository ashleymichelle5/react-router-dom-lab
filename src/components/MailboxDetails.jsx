import React from "react";
import { useParams } from "react-router-dom";

const MailboxDetails = ({mailboxes}) => {
    const { mailboxId } = useParams();
    const selectedBox = mailboxes.find(
        (mailbox) => mailbox._id === Number(mailboxId)
    );
    return (
        <div>
            <h1>Mailbox{selectedBox?._id}</h1>
            <h3>Details</h3>
            <h4>Boxholder:{selectedBox?.boxholder}</h4>
            <h4>Box Size:{selectedBox?.boxSize}</h4>
        </div>
    )
}

export default MailboxDetails;