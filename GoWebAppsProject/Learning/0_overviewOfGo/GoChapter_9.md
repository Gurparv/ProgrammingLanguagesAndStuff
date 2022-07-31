### Channels

- Unique to Go
- Channels are means of sending information from one part of the program to other part of program very easily. We could also pass information using function arguments.
```
package main

import "fmt"

func main(){


	//creating my custom channel(a place to send info which will be received in 1 or more places in my program).And this channel can only hold 'int'
	myIntChannel := make(chan int)


	//Good practice to close things when done.
	//'defer' keyword says that whatever comes after this keyword defer, execute this as soon as the Current function is done. This is crucial because when you open a file in system or make a connection to the database,you dont want to leave those things to stay open forever becoz there is limit to how many files you can open and if you keep them open everytime eventually you will run out of handles . Similar is the case for database connection, you can only limited number of database connection open at a give time.
	//Below we are closing our Channel
	defer close(myIntChannel)

	//start its own go routine. independently. We could remove the go routine too and make it a normal function call. 
	go assignSomeValue(myIntChannel)

	//Listening if myIntChannel got value.
	num:= <- myIntChannel

	fmt.Println(num)
}

//below function accepts argument of 'myIntChannel' which is type 'chan' of 'int'
func assignSomeValue(myIntChannel chan int){
	//passing 40 to channel 'myIntChannel'
	myIntChannel <- 40
}
```
