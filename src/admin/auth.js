// src/admin/auth.js

const users = [
    { email: 'admin@example.com', password: 'password123' } // Example user
];

export const login = (email, password) => {
    const user = users.find(user => user.email == email && user.password == password);
    if (user) {
        console.log("User Logged In")
        localStorage.setItem('isAuthenticated', 'true');
        return true;
    }
    else{
    return false;
    }
};

export const isAuthenticated = () => {
    return localStorage.getItem('isAuthenticated') == 'true';
};

export const logout = () => {
    localStorage.removeItem('isAuthenticated');
};
