### Loops and ranging over data.
```
package main

import "fmt"

func main(){

 var names []string	
 names= append(names,"John")
 names= append(names,"Tim")


 //looping
 for i:=0;i<5;i++ {
 	fmt.Println(names)
	}

 animals :=[]string{"god","cat","hen"}

 //ranging.
 for i,animal := range animals {
	fmt.Println(i, animal)
 }

 //ranging but dont need the index value and you just get back the values present in the slice(array)
 for _,animal := range animals {
	fmt.Println(animal)
 }

type user struct{
	name string
	age int
}

var users []user
users=append(users,user{"John",21})
users=append(users,user{"Paul",26})
users=append(users,user{"Fatima",46})

for i,user := range users{
	fmt.Println(i,user)
}

}
```
