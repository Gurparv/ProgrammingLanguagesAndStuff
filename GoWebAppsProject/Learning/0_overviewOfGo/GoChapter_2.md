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
