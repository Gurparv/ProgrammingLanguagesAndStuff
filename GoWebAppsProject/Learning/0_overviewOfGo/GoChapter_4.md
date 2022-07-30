### Other Data Structures - Maps and Slices.

Just a note: Maps are immutable in GO
```
package main

import "log"

func main(){

	myMap := make(map[string]string)

	myMap["dog"] = "Pluto"
	myMap["otherDog"] = "Buzzo"

	log.Println(myMap["dog"])
	log.Println(myMap["otherDog"])
}
```
----
```
package main

import "log"

type user struct{
	name string
	age int
	}

func main(){

	
	me:= user{
		name: "Tim"	,
		age: 25,
	}

	myMap := make(map[string]user)

	myMap["me"]= me

	log.Println(myMap["me"])


}
```

#### Slices
```
package main

import "fmt"

func main(){

	var groceryList []string

	groceryList = append(groceryList,"Oats")
	groceryList = append(groceryList,"Milk")

	fmt.Println(groceryList)

	numbers:=[]int{6,3,6,1,2}
	fmt.Println(numbers)

	fmt.Println(numbers[0:2])
}
```

