// 1️⃣ Initialize Appwrite client
const client = new Appwrite.Client();
client
    .setEndpoint('https://sgp.cloud.appwrite.io/v1')  // <-- your Appwrite endpoint
    .setProject('69b55e4a0031dc4a3e66');               // <-- your Project ID

const account = new Appwrite.Account(client);

// 2️⃣ Signup
document.getElementById('signup-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    try {
        const user = await account.create('unique()', email, password);
        alert('Signup successful!');
        console.log(user);
    } catch (err) {
        alert(err.message);
    }
});

// 3️⃣ Login
document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    try {
        const session = await account.createSession(email, password);
        alert('Login successful!');
        console.log(session);
    } catch (err) {
        alert(err.message);
    }
});
