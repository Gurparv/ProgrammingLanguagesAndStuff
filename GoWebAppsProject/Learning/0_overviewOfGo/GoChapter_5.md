### Decision Structures 
```
package main

import "fmt"

func main(){

	myCat:= "cat"
	var isBlack bool
	isBlack = true

	if(myCat=="cat" && isBlack){
		fmt.Println("My cat is black.")
	}else if (isBlack){
		fmt.Println("Animal is black but not cat")
	}else{
		fmt.Println("Who are u")
	}
	
}
```

### Switch
```
package main

import "fmt"

func main(){

	myVar := "cat"

 switch myVar {

	case "cat":
		fmt.Println("Yes")
	case "dog":
		fmt.Println("No")
	default:
		fmt.Println("Run! its an alien")

	 }
}
```

