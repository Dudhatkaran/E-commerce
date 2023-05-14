const CheckUser = () => {
    if (localStorage.getItem("USER_ID")) {
        return true;
    } else {
        return false;
    }
};

export default CheckUser;
