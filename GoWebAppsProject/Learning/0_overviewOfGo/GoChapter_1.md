# Overview of Go

### 1.
Go files needs '.go' file extension.
Pro-tip : And its convention to call the main entry point in your program as 'main.go' file

--- 
The first thing that happends in every go file is a 'package declaration'
```main.go

package main   // package declaration. And naming the package as 'main' here is also convention. It always good to follow convention, and to write what is called 'idiomatic go'


```

--- 

And every go program has to have atleast one function named main.
```main.go

package main

func main(){
	

	}
```
this above code is a fully functional program.It doesnt do anything though lol.

---
To Run a Go file.
```
go run <filename>

//eg
go run main.go
```

To build a Go file. --> it creates an executable binary file.
```
go build <filename>

//eg
go build main.go
```

---
Declaring variable in go file;
Using/Importing a package in your code.
```main.go
package main
import "fmt"

func main(){

	var myName string
	myName = "Tom Tucker"
	fmt.Println(myName)
	var age int
	age = 15
	fmt.Println("age is",age)
	}

```
---
Creating another function ; 
And a shortcut way to set type and value to a variable

```main.go

package main

import "fmt"

func main(){

	var nextWord string = saySomething()
	fmt.Println("the function returned",nextWord)
	
	nextWord2 := saySomething()
	fmt.Println(nextWord2)

}

func saySomething() string{
	return "A-Z"	
}

```
---
Declaring a package-level variable.
```
package main

import "fmt"

var myName string   // <--- here

func main(){

	var nextWord string = saySomething()
	fmt.Println("the function returned",nextWord)
	
	nextWord2 := saySomething()
	fmt.Println(nextWord2)

}

func saySomething() string{
	return "A-Z"	
}
```
---
CrazyNice Go feature:  To return multiple things
```
package main

import "fmt"

var myName string

func main(){

	nextWord2 , nextNum:= saySomething()
	fmt.Println("Things we got back",nextWord2,nextNum)

}

func saySomething() (string,int){  // <--- here
	return "A-Z",35	
}

```
