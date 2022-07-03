package main

import "fmt"


//declaring a type deck which is a slice of string.
type deck []string

//declaring a receiver func of deck as the receiver
func (d deck) printDeck(){
		fmt.Println(d)
	}

func main(){

	//initializing empty array of string
	deck:=deck {}

	var card1 string = "Ace of spades"
	var card2 string = "Ace of king"

	deck = append(deck,card1)
	deck = append(deck,card2)

	//calling receiver function with appropiate type
	deck.printDeck()
}


