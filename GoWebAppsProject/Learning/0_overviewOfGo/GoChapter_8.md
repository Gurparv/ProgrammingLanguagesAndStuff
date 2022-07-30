### Packages

```Terminal Code

go mod init <your_package_name>

eg shows best practice here below.
go mod init github.com/gurparv/myPackage


```
The above command will create a 'go.mod' file in the present working directory
<br>
Now create a directory and create your .go files in this directory.
Go will automatically put line 'package \<name\_of\_your\_directory\>'
and then you can write your code in these .go files.

Now if you use the user-defined of this directory then GO will automatically import the files

