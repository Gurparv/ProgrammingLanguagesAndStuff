### Basic Usage -  URL 
```
https google.com
http httpie.io/hello
```

Getting help
http --help

### Http method 
The name of the HTTP method comes right before the URL argument:
```
http DELETE pie.dev/delete
http POST pie.dev/post hello=world
```
### Querystring parameters
If you find yourself manually constructing URLs with querystring parameters on the terminal, you may appreciate the param==value syntax for appending URL parameters.

With that, you don’t have to worry about escaping the & separators for your shell. Additionally, any special characters in the parameter name or value get automatically URL-escaped (as opposed to the parameters specified in the full URL, which HTTPie doesn’t modify).

```
http https://api.github.com/search/repositories q==httpie per_page==1
==>
GET /search/repositories?q=httpie&per_page=1 HTTP/1.1
```
