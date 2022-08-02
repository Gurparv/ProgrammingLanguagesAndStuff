### Theory

###### Java Reflection is:
	Java language and JVM feature that gives us Runtime access to information about our application's classes and object.
	Those features are available to us through the Reflection API
<br>
###### What can we do with Java Reflection
Using Reflection API we can write flexible code that
	1.Links different software components together that at runtime
	2.Creates new program flow without any source code modifications 
Reflection help us write dynamic programs that change behaviour based on types of classes and objects


###### Program without Reflection
		Input									   Output
DATA -----------> PROGRAM (without Reflection)  ----------->  Output DATA


###### Program with Reflection

		Input									   Output
DATA -----------> PROGRAM (without Reflection)  ----------->  Output DATA
					|				 ^
					|----------------|
				(application code as Input)

#### Which popular libraries use java Reflection
1. Junit - with just annotation like @Before,@Test it knows to run the method etc without we needing to specify creating object and then calling methods using method names
2. Dependency Injections
3. Json Serialization/Deserialization libraries (eg Jackson, Gson)





