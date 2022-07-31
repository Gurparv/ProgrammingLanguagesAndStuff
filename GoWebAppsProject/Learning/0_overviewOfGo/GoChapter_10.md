### Reading and Writing Json.
Basically, Json is a way with which we transfer data from one place to another in a structured format.
Used heavily in Web APi, when we make a call to an API we receive data in this structured format only.

It is recommended to read in-build json package documentation 
<br>
```
package main

import (
	"encoding/json"
	"fmt"
	"log"
)

type dayStatus struct {
	CurrentDay  string `json:"day"`
	Will_i_work bool   `json:"will_work"`
}

func main() {

	//just a json string
	myJson := `
[
	{
		"day":"Monday",
		"will_work":true	
	},
	{
		"day":"Wednesday",
		"will_work":true	
	},
	{
		"day":"Sunday",
		"will_work":false	
	}
]`

	//Writing from Json to struct.

	var unmarshalled []dayStatus

	err := json.Unmarshal([]byte(myJson), &unmarshalled)

	if(err!=nil){
		log.Println("Error unmarshalling json", err)
	}

	log.Printf("unmarshalled json is %v",unmarshalled)


	//Writing from structs to Json.
	var mySlice []dayStatus
	var marshalling1 dayStatus 
	marshalling1.CurrentDay = "Saturday"
	marshalling1.Will_i_work = false

	mySlice = append(mySlice, marshalling1)

	var m2 dayStatus 
	m2.CurrentDay = "Friday"
	m2.Will_i_work = true

	mySlice = append(mySlice, m2)

	newJson,err := json.MarshalIndent(mySlice,"","   ")
	if err!=nil {
		log.Println("Error marshalling json", err)
	}

	fmt.Println(string(newJson))
}
```

