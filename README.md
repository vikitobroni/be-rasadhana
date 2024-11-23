## Instalasi

Jalankan perintah berikut untuk menginstal dependensi:

```bash
npm install
# or
npm i
```

## Penggunaan

Untuk menjalankan aplikasi, gunakan perintah berikut:

```bash
npm start
```

## On Development.

ROUTE POST REGISTER:
http://localhost:33000/auth/register

request:
{
  "name": "",
  "email": "",
  "password": ""
}

response:
{
  "status": "Success",
  "data": "User telah didaftarkan"
}

ROUTE LOGIN USER (POST):
http://localhost:33000/auth/login-user

request:
{
  "email": "",
  "password": ""
}

response:
{
  "message": "Login success",
  "data": ""
}

ROUTE GET USER DATA (POST):
http://localhost:33000/auth/userdata

request:
{
  "token" : ""
}

response:
{
  "status": "ok",
  "data": {
      "\_id": "6741b6fc61ae0a167581214e",
      "name": "Julio",
      "email": "juliosp2107@gmail.com",
      "password": "$2b$10$1e53JamkTVau7fAfQwhi9.SyBNloHjR1pqjI7kOV0Z9ioVDV4tvfG",
      "\_\_v": 0,
      "resetToken": "24938"
    }
}

ROUTE FORGOT PASSWORD (POST):
http://localhost:33000/auth/forgot-password

request:
{
  "email" :
}

response:
{
  "status": true,
  "message": "email sent",
  "token": "24938"
}

ROUTE RESET PASSWORD (POST):
http://localhost:33000/auth/reset-password

request:
{
  "token" : ,
  "newPassword" : ""
}

response:
{
  "success": true,
  "message": "Password berhasil direset"
}

ROUTE UPDATE USER BYID (POST):
http://localhost:33000/auth/update/:userId

request:
{
  "nama" : "",
  "email" : ""
}
