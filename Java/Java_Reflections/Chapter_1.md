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


##### Reflection API Gateway & Wildcards
The Gateway to use Reflection.
Learned 3 ways to obtain the Class object for any type
	- *getClass()* method to any existing object
	- Append *.class* to any class or primitive data type
	- *Class.forName(..)*
Java Wildcards

```
import java.util.HashMap;
import java.util.Map;

public class Main{

	public static void main(String[] args) throws ClassNotFoundException{
		Class<String> stringClass = String.class;
		Map<String,Integer> mapObject = new HashMap<>();

		Class<?> hashMapClass = mapObject.getClass();
		Class<?> squareClass = Class.forName("Main$Square");

		printClassInfo(stringClass,hashMapClass,squareClass);
	}

	public static void printClassInfo(Class<?> ... classes){

		for(Class<?> claz : classes){

			System.out.println(String.format("class name: %s, class package name : %s",
							claz.getSimpleName(),
							claz.getPackageName() 
							)
						);

			Class<?> []implementedInterfaces = claz.getInterfaces();
						
			for(Class<?> implementedInterface : implementedInterfaces){
			System.out.println(String.format("class %s implements : %s",
							claz.getSimpleName(),
							implementedInterface.getPackageName() 
							)
						);

			}

			System.out.println();
			System.out.println();


		}

	}

	public static interface Drawable{
		int getNumberOfCorners();

	}

	public static class Square implements Drawable{

		@Override
		public int getNumberOfCorners(){
			return 4;
		}
	}

	private enum Color{
		RED,
		BLUE,
		GREEN
	}

}
```

```Output

class name: String, class package name : java.lang
class String implements : Serializable
class String implements : Comparable
class String implements : CharSequence
class String implements : Constable
class String implements : ConstantDesc


Is array : false
Is primitive : false
Is enum : false
Is Interface : false
Is Anonymous class : false
class name: HashMap, class package name : java.util
class HashMap implements : Map
class HashMap implements : Cloneable
class HashMap implements : Serializable


Is array : false
Is primitive : false
Is enum : false
Is Interface : false
Is Anonymous class : false
class name: Square, class package name : 
class Square implements : Drawable


Is array : false
Is primitive : false
Is enum : false
Is Interface : false
Is Anonymous class : false
class name: Collection, class package name : java.util
class Collection implements : Iterable


Is array : false
Is primitive : false
Is enum : false
Is Interface : true
Is Anonymous class : false
class name: boolean, class package name : java.lang


Is array : false
Is primitive : true
Is enum : false
Is Interface : false
Is Anonymous class : false
class name: int[][], class package name : java.lang
class int[][] implements : Cloneable
class int[][] implements : Serializable


Is array : true
Is primitive : false
Is enum : false
Is Interface : false
Is Anonymous class : false
class name: Color, class package name : 


Is array : false
Is primitive : false
Is enum : true
Is Interface : false
Is Anonymous class : false
class name: , class package name : 
class  implements : Drawable


Is array : false
Is primitive : false
Is enum : false
Is Interface : false
Is Anonymous class : true
```


