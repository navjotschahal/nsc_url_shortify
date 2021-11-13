# nsc_url_shortify
A quest to build and learn URL shortner fundamentals using NodeJS, MongoDB atlas cloud DB etc.

First Use execute   [npm i]
To start the server execute  npm run start  or npm run start:server
or configure your own script in package.json :)

[NOTE! the current source code is configured to use PORT 3000  in absence of process.env.port property.]  
eg http://localhost:{port}/apipath http://localhost:3000/apipath

Routes:

1. api-signature: {baseUrl}/api/shortify/
   request-method: POST
    request-body: {
    "originalURL": "https://www.BigURL.com/SomeBigVeryBigURLsonandsoonsoonnnnnnnnnnnnnnnnnnBig"
    }
    SampleRespnse:
    {
      "_id": "618faf6396bfd0b4a632d6d0",
      "uid": "ZvrCjc2TO",
      "originalURL": "https://www.amazon.com/b?node=16225007011&pf_rd_r=KM23D62PY5G6AJKKR8DX&pf_rd_p=e5b0c85f-569c-4c90-a58f-0c0a260e45a0&pd_rd_r=0bd81bd4-4f5d-4bb7-             b9ba-020a5ccd9b30&pd_rd_w=gayay&pd_rd_wg=GSUrr&ref_=pd_gw_unk",
      "shortURL": "http://localhost:3000/ZvrCjc2TO",
      "date": "2021-11-13T12:28:19.937Z",
      "__v": 0
    }
    in the above response business usable data keys are: 
      a. uid -> serves as the short url unique identifier implemented using shortID npm package.
      b. originalURL -> Some very big url to shortify.
      c. shortURL -> The new encoded short url to use on your SOCIAL-WEBSITE for example or anywhere.  SCHEME """ {nsc-URL-Shortify-app-baseURL}/{uid}
      other keys are Mongo DB collection object data.
     
     Screen-shot-reference-Postman: ![image](https://user-images.githubusercontent.com/55528510/141645410-2de15d2e-d939-4a39-ab41-d516b73d6d2b.png)

      
2. api-signature: {baseUrl}/api/redirect/
    request-method: GET
    Request-Query-Parameter: KEY =uid,
                              EG uid = "some unique key string e.g. ZvrCjc2TO"
    Sucess-Response:
      A redirection to the Original big URL web-page/app/site/data.
    Not-found uid response:
     "URL Not found! "
     
     
     Example of request : http://localhost:3000/api/redirect/?uid=ZvrCjc2TO
     
     ![image](https://user-images.githubusercontent.com/55528510/141645400-e7378cb1-c888-4855-aa67-7850699bfed5.png)

