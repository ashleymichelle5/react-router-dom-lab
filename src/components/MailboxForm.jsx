import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MailboxForm = ({addBox}) => {
    const [formData, setFormData] = useState({
        boxSize: ' ',
        boxholder: ' ',
    });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        addBox(formData);
        setFormData({
            boxSize:' ',
            boxholder: ' ',
        });
        navigate('/mailboxes');
    };

    const handleChange = (e) => 
        setFormData ({...formData, [e.target.id]: e.target.value,

        });

    return (
        <div>
            <h1>New Mailbox</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxholder">Enter a Boxholder:</label>
                <input type="text" id="boxholder" name="boxholder" onChange={handleChange} value={formData.boxholder} />

                <label htmlFor="boxSize">Select a Box Size:</label>
                <select
                id="boxSize"
                name="boxSize"
                onChange={handleChange}
                value={formData.boxSize}
                >
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
                
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default MailboxForm;