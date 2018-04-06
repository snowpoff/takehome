#takehome assignment 

wmdd4999 takehome assignment
melissa chiam

code: https://github.com/snowpoff/takehome

tested in postman

```
endpoints:
  GET - https://996xapbgmf.execute-api.us-east-1.amazonaws.com/test/functions/{id}
  GET - https://996xapbgmf.execute-api.us-east-1.amazonaws.com/test/functions
  POST - https://996xapbgmf.execute-api.us-east-1.amazonaws.com/test/functions
  PUT - https://996xapbgmf.execute-api.us-east-1.amazonaws.com/test/functions
functions:
  upload: takehome-test-upload
  get: takehome-test-get
  list: takehome-test-list
  create: takehome-test-create
  update: takehome-test-update
```

just as in assignment 3 and 4, upload a file by running `upload.js <file path> `

this uploads a file to an s3 bucket while also writing the entry to a dynamodb table. table content can be checked by sending a GET request to the aforementioned endpoint.

- send a GET request to the endpoint to retrieve a full list of database entries (each music file, in this case)

- send a GET request to the endpoint with the filename (eg, file1.mp3) to retrieve the database entry for that particular filename

- send a POST request with JSON in the format of
```
{

	"playlistName": "playlistName",
	"track": "file1.mp3"

}
```
this creates a playlist containing the specified track.

- to add a track to a playlist (same playlist name), send a PUT request in the same format as the aforementioned POST request 



