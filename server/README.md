# Blog API

A rest api for blog application.


## API Documentation

<br>

### Auth
<br>

> <details>
> <summary> POST /user/auth/register : To register and set a cookie </summary>
> <br>
>
> Parameters : None  
> Request body *(required)* : application/json  
> 
> Example body :   
> ```json
> {
>   "name": "string",
>   "email":"string",
>   "password": "string"
> }
> ```
> 
> Example response :   
> ```json
> {
>   "name": "name-x",
>   "email": "test@gmail.com",
>    "id":"e4235234523" 
> }
> ```
> 
> </details>

<br>



> <details>
> <summary> POST user/auth/login : To login and set a cookie </summary>
> <br>
>
> Parameters : None  
> Request body *(required)* : application/json  
> 
> Example body :   
> ```json
> {
>   "email": "string",
>   "password": "string"
> }
> ```
> 
> Example response :   
> ```json
> {
>   "accessToken": "jwt_token_example" 
> }
> ```
> *Note that refresh token is send as a cookie.* 
> 
> </details>

<br>


> <details>
> <summary>   GET user/auth/get-accessToken : To acquire access token </summary>
> <br>
> Request :
> http only cookie from client with refresh token
> 
> Example response :   
> ```json
> {
>   "accessToken": "jwt_token_example" 
> }
> ```
> 
> </details>



<br>

> <details>
> <summary>   GET /user : To get user details</summary>
> <br>
>
> Parameters : None  
>```
>api --header Authorization Bearer token 
>```
> 
> Example response :   
> ```json
>{
>   "name": "name-x",
>   "email": "test@gmail.com",
>    "id":"e4235234523" 
> }
> ```
> 
> </details>


<br>


> <details>
> <summary>   GET /user/auth/logout : To logout user</summary>
> <br>
>
> Parameters : None  
>```
>api --header Authorization Bearer token 
>```
> 
> Example response :   
> ```json
>{
>   "accessToken": "",
>   "message": "Logged out", 
> }
> ```
> 
> </details>


<br>





























### Blog
<br>



> <details>
> <summary>   GET /blog/all : To get all blog</summary>
> <br>
>
> Parameters : None  
> Request body  : None
> 
> 
> Example response :   
> ```json
> {
>   
>[
> {
>    "_id": "63d55db2136d26caf23c7152",
>    "blogTitle": "Why Growth Requires Struggle",
>   "blogData": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
>    "imageUrl": "http://res.cloudinary.com/65765gdfgfdg/image/upload/v1674927537/eyquduhqe29wdhvhqze8.jpg",
>    "authorId": "63d55d30d541f77d001c097b",
>    "authorName": "June",
>    "createdAt": "2023-01-28T17:38:58.256Z",
>   "updatedAt": "2023-01-28T17:38:58.256Z",
>    "__v": 0
>  },
>  {
 >   "_id": "63d563fbef72a2ba3a4a1178",
 >   "blogTitle": "God is a Woman",
  >  "blogData": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  >  "imageUrl": "http://res.cloudinary.com/fsdfds/image/upload/v1674929146/tpjpfqehefwkqggvigld.jpg",
>   "authorId": "63d55d30d541f77d001c097b",
>  "authorName": "June",
> "createdAt": "2023-01-28T18:05:47.436Z",
>"updatedAt": "2023-01-28T18:05:47.436Z",
>"__v": 0
>}]
> }
> ```
> 
> </details>


<br>



> <details>
> <summary>   POST /blog/create : To create blog</summary>
> <br>
> Parameters : None  
> Request body *(required)* : application/json  
> 
> Example body :   
> ```json
> {
>   "blogTitle": "string",
>   "blogData": "string",
>   "authorId":"x",
>   "authorName":"name-0x",
> }
> ```
>*Note that image should send as file*
>
> ```json 
> api --header Authorization Bearer token 
> ``` 
> Example response :   
> ```json
> {
>    "_id": "63d55db2136d26caf23c7152",
>    "blogTitle": "Why Growth Requires Struggle",
>    "blogData": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
>    "imageUrl": "http://res.cloudinary.com/65765gdfgfdg/image/upload/v1674927537/eyquduhqe29wdhvhqze8.jpg",
>    "authorId": "63d55d30d541f77d001c097b",
>    "authorName": "name-x0",
>    "createdAt": "2023-01-28T17:38:58.256Z",
>   "updatedAt": "2023-01-28T17:38:58.256Z",
>    "__v": 0
>  },
> ```
> 
> </details>



<br>



> <details>
> <summary>   GET /blog/id : To get blog by id</summary>
> <br>
>
> Parameters : None  
> Request body  : None 
> ```json
>api --params id blog id
> ```
> Example response :   
> ```json
> {
>    "_id": "63d55db2136d26caf23c7152",
>    "blogTitle": "Why Growth Requires Struggle",
>   "blogData": "Lorem Ipsum is simply dummy text of the printing and >typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
>    "imageUrl": "http://res.cloudinary.com/65765gdfgfdg/image/upload/v1674927537/eyquduhqe29wdhvhqze8.jpg",
>    "authorId": "63d55d30d541f77d001c097b",
>    "authorName": "name-x0",
>    "createdAt": "2023-01-28T17:38:58.256Z",
>   "updatedAt": "2023-01-28T17:38:58.256Z",
>    "__v": 0
>  },
> ```
> 
> 
> </details>

<br>

> <details>
> <summary>   POST /blog/user-article : To get blog by user id </summary>
> <br>
>
> Parameters : None  
> Request body *(required)* : application/json  
> 
> Example body :   
> ```json
> {
>   "userId":"string"
> }
> ```
> 
>
> ```json 
> api --header Authorization Bearer token 
> ``` 
>
> Example response :   
> ```json
> {
>    "_id": "63d55db2136d26caf23c7152",
>    "blogTitle": "Why Growth Requires Struggle",
>   "blogData": "Lorem Ipsum is simply dummy text of the printing and >typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
>    "imageUrl": "http://res.cloudinary.com/65765gdfgfdg/image/upload/v1674927537/eyquduhqe29wdhvhqze8.jpg",
>    "authorId": "63d55d30d541f77d001c097b",
>    "authorName": "name-x0",
>    "createdAt": "2023-01-28T17:38:58.256Z",
>   "updatedAt": "2023-01-28T17:38:58.256Z",
>    "__v": 0
>  },
> ```
> </details>



<br>

> <details>
> <summary>    PATCH /blog/edit/id : To get edit by id </summary>
> <br>
>
> Parameters : None  
> Request body *(required)* : application/json  
> 
> Example body :   
> ```json
> {
>   "blogTitle": "string",
>   "blogData": "string-x",
>   "authorId":"x",
>   "authorName":"name-0x",
> }
> ```
> ```json
>api --params id blog id
> ```
>
> ```json 
> api --header Authorization Bearer token 
> ``` 
> Example response :   
> ```json
> {
>    "_id":"x",
>   "blogTitle": "string",
>   "blogData": "string-x",
>   "authorId":"x",
>   "authorName":"name-0x",
>   "authorId": "63d55d30d541f77d001c097b",
>   "createdAt": "2023-01-28T18:05:47.436Z",
>   "updatedAt": "2023-01-28T18:05:47.436Z",
> }
> ```
> 
> </details>

<br>

> <details>
> <summary>    DELETE /blog/id : To get edit by id </summary>
> <br>
>
> Parameters : None  
> Request body *(required)* : application/json  
> 
> ```json
>api --params id blog id
> ```
>
> ```json 
> api --header Authorization Bearer token 
> ``` 
> Example response :   
> ```json
> {
>    "_id":"x",
>   "blogTitle": "string",
>   "blogData": "string-x",
>   "authorId":"x",
>   "authorName":"name-0x",
>   "authorId": "63d55d30d541f77d001c097b",
>   "createdAt": "2023-01-28T18:05:47.436Z",
>   "updatedAt": "2023-01-28T18:05:47.436Z",
> }
> ```
> 
> </details>