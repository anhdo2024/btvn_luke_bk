const UserAccount = {
    username: "Luke",
    password: "12345678",
    role: "User"
}

console.log(`Đang test với tài khoản: ${UserAccount.username} có role là: ${UserAccount.role}`);

UserAccount.role = 'Manager';

console.log(UserAccount);