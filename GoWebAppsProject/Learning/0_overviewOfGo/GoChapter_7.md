### Interfaces.
Receivers in Go are mostly pointer types and the reason for that in documentation is because it makes things faster and is considered as best practices.
```
package main

import "fmt"

type Animal interface{
	Says() string
	NoOfLegs() int
}

type Dog struct{
	Name string
	Breed string
}

type Gorilla struct{
	Name string
	Color string
}

func main(){

	dog := Dog{
		Name: "Pluto",
		Breed: "Mountain Dog",
	}

	gorilla := Gorilla{
		Name:"Timmy",
		Color:"Black",
	}

	PrintInfo(&dog)
	PrintInfo(&gorilla)
}

func PrintInfo(a Animal){
	fmt.Println("This animal says",a.Says(),"and has", a.NoOfLegs(),"legs")
}
//// Dog user-defined datatype satisfies Interface.
func (d *Dog) Says() string{
	return "Woof"
}

func (d *Dog) NoOfLegs() int{
	return 4
}

//// Gorilla user-defined datatype satisfies Interface.

func (g *Gorilla) Says() string{
	return "Gorilla Noises"
}

func (g *Gorilla) NoOfLegs() int{
	return 2
}
```
