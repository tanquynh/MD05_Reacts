import React, { useState } from 'react'

export default function OrderForm() {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [note, setNote] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !address || !phone) {
            setError("FullName, address, phone are required")
            return;

        }
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
            setError("The phone number is not in the correct format.")
            return;
        }
        
        setSuccess(true);
        setError(null);
    }
  
    return (
        <div>
            {!success ?
             (<form onSubmit={handleSubmit}>
                {error && <div style={{ color: "red" }}>{error}</div>}
                <div>
                    <label >Name</label>
                    <input type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="name">Address</label>
                    <input type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="name">Phone</label>
                    <input type="text"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="name">Note</label>
                    <input type="text"
                        id="name"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                    />
                </div>
                <button type='submit'>Orders</button>
            </form>
            ) : (
            <div style={{ color: "green" }}> Order success</div>
            )}
        </div>
    )
}
