## JWT Signup page
Sign up to get your JWT in the URL - [Sign up](https://product-domain.auth.eu-north-1.amazoncognito.com/signup?client_id=4h4sikgbuiasmft2ch7iv2u6tt&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=https%3A%2F%2Flocalhost%3A3000)
When you log in, the JWT can be found in the URL.
Use ```location.href.split("=")[1].split("&")[0]``` to extract the JWT token
Use the JWT token in he Headers as Authorization 

## API Routes
### Add Product
Endpoint
``` 
https://vh4jwq7vx9.execute-api.eu-north-1.amazonaws.com/api/product/new
```
Body
```
{
  "title": "WOOOOOOOOOO",
  "price": 1337
}
```
___   
### Get All Products
Endpoint
``` 
https://vh4jwq7vx9.execute-api.eu-north-1.amazonaws.com/api/products
```
(google.se)
___
### Get Product 
Endpoint
```
https://vh4jwq7vx9.execute-api.eu-north-1.amazonaws.com/api/product/{id}
```
Available id 
```
dmza9ioqFAUGQyIU_B7AV
```
___
### Update Product
Endpoint
```
https://vh4jwq7vx9.execute-api.eu-north-1.amazonaws.com/api/product/{id}
```
Available id 
```
dmza9ioqFAUGQyIU_B7AV
```
___
### Delete Product
Endpoint
```
https://vh4jwq7vx9.execute-api.eu-north-1.amazonaws.com/api/product/{id}
```
Available id 
```
dmza9ioqFAUGQyIU_B7AV
```
