export const Validation = (email, password) => {

    const isEmailValid = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
    const isPasswordValid = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

    if (!isEmailValid) return "Your email ID is not valid.";
    if (!isPasswordValid) return "Please enter your valid password.";
    

    return null
}

