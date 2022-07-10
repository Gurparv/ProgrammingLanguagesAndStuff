
-- Conditionals in Lua (IF)

age = 25
isEntry = false
if age>21 then   			-- if (age>21) then     // also ok syntax
	print("Entry to pub allowed")
	print("Have fun!")
	isEntry = true
end

print("Value of 'isEntry' after age check:",isEntry)
print("Value of 'isEntry' after age check:"..tostring(isEntry))


-- Conditionals in Lua (IF ELSE)
if age>60 then
	print("You are senior citizen")
else
	print("You are NOT a senior citizen")
end


-- Conditionals in Lua (ELSE IF)

player1 = 20
player2 = 8
player3 = 12

if (player1 == player2 == player3) then
	print("All are of same age")
elseif (player1 ~= player2 ~=player3) then 
	print("None are same")
else 
	print("Else is executed")
end
