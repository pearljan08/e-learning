export const isAuthenticated = () => {
    return sessionStorage.getItem("userToken") !== null; // Check if token exists
};