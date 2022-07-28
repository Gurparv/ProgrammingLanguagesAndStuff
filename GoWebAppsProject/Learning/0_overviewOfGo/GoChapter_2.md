### Pointers
```main.go

package main

import "fmt"
import "log"

func main(){

	oldColor := "Blue"
	log.Println("Color before change", oldColor)

	usingPointer(&oldColor) //Sending address of string 'oldColor' in argument

	fmt.Println("Color after the change",oldColor)
	}

func usingPointer(newColor *string){  //newColor is a pointer to an address location which should store a string value
	log.Println(newColor) //Logs hexadecial memory address of argument in RAM; In our case physical address of 'oldColor' in RAM
	*newColor = "Red"	//Changing the value of where argument was pointing to.

}
```

---

### Types and Struct
And Variable shadowing 
Here in the below example, local variable (which has smaller scope shadows variable with bigger scope)
```
package main

import "log"

/*Global vairables which are declared outside the function. All functions can access them*/
var s string
var s1 string = "Yo"
var s2 = 7  //<--- here go compiler is smart enought to pick type from the mentioned value and assign it to s2.
// s3 := 5.5	//gives error

func main(){

	//s5:=49	//works
	log.Println("hello")

	
	log.Println(anotherFunction(s1))
}

func anotherFunction(s string)(string){ //local variable 's' with same name as global variable.
	return s
}
```

Similarly i can declare another variable inside function 's' and assign it some value and it will work. Coz inside that function it will always use variable value with smaller scope.

---
Structs
```
package main

import (
	"time"
	"log")

type Person struct{
	FirstName string //Public field(or variable)
	LastName string
	Phone string
	Age int
	BirthDate time.Time 
	panNumber string	//as name starts with small character hence private field(variable)
}

var special string	//Name starts with small letter hence private Global variable; private means not visible outside this package
var Special1 string	//Name starts with capital letter hence public Global variable; visible outside this package

func main(){

	tim:=Person{
		FirstName:  "Tim",
		LastName: "Monty",
		Phone: "1234567890",

	}

	log.Println(tim.FirstName,tim.Age, tim.LastName, tim.BirthDate)
	
}

```
