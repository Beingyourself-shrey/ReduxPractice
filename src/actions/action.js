// can be present in action.js file
export const debitAction = (amt) => ({
    type: 'DEBIT',
    amount: amt
});
export const creditAction = (amt) => ({
    type: 'CREDIT',
    amount: amt
});
export const loginAction = (user) => ({
    type: 'USER_LOGIN',
    userName : user.userName,
    password :user.password
});