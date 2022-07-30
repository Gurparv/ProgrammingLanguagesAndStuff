### Receivers: structs and functionus

This is mainly done to tie a function to a Struct. And this is done
by creating a receiver of that struct for that function

```
package main

import ("log"
		"fmt")
		

type person struct {

	firstName string
	lastName string
}

func (m *person) getPersonName() string { // created a function with receiver of type 'person' so that both the type 'person' and this function are related.
	return m.firstName
}

func main(){

	var human person
	human.firstName = "Tom"	
	human.lastName = "Folly"	

	human2:=person{
		firstName:"Lucy",
		lastName: "Hale",
	}
	
	log.Println(human.firstName)
	fmt.Println(human.lastName)

	log.Println(human2.firstName)
	fmt.Println(human2.lastName)

	//Output is interesting.. logs are printed before fmt.
	log.Println("Calling struct function --> ",human.getPersonName(),human2.getPersonName())
}

```

