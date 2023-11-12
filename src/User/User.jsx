
const User = () => {
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const myUser = {
            name,
            email,
            password
        }
        console.log(myUser);
    }
    return (
        <div>
            <h1>Total User</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Enter your name" id="" /> <br />
                <input type="email" placeholder="Email" name="email" id="" /> <br />
                <input type="password" name="password" placeholder="password" id="" /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default User;