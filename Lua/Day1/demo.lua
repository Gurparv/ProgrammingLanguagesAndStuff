
print("hello!")
print("----------")
print(12*12)


score = 100
print(score)
print("Type of variable score: ",type(score))

temparature = -20.7
print(temparature)
print("Type of variable temparature: ",type(temparature))

name = "Tom"
print(name)
print("Type of variable name: ",type(name))

-- Lua has following data types:
-- nil
-- number
-- string
-- function
-- Cfunction (will do later)
-- userdata (will do later)
-- table




-- To join string with variable value, we use (..)
age=14
print("This age is " .. age)

-- If you try to use value of a variable which you havent initialized then by default it would be nil
print(blackhole)


-- Incrementing and decrementing variables.
level = 10
print("old value of level: "..level)
level = level - 1
print("new value of level: "..level)

-- Division of integers results in float but using '//' you can get the int part of the resultant 
avg = (5+5+2)//3
print(avg)
