## Curl Basics ##

### Fetch files/content from a url 

```
curl <url>

eg:
curl https://www.google.com
```
---
#### Fetch files/content from a url to a file.
```
curl -o <file-path> <url>

eg:
curl -o ~/user/desktop/google.html https://www.goole.com  // Put output in file location 
curl -o ./google.html https://www.goole.com		//Put output in current directory's file.
```
---
#### Download files using curl.
```
curl -o <download-input-file> <download-url>  //download files from url and save it as provided download file-name.
curl -O <download-url>	// download files and keep the same name as mentoned on website.
```
---
#### Handling redirects
```
curl -L <url>
```
---
#### Analyze Response setters sent by servers.
```
curl -I https://www.google.com
```
---
### View Request headers and the connection details like TLS handshake etc.
```
curl -v https://www.google.com
```
---
