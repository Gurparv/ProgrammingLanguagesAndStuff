# RPC

### Data-Serialization
> Basically its a mechanism to transform the *program's internal data* structure into a form that could be sent to a remote machine over a network.
> Data-Serialization is performed by the sending machine.
<br>
> Data-DeSerialization means coverting serialized data into internal data structure.
> Data-DeSerialization os performed by the receiving process.
<br>
> Both Data-Serialization and Data-DeSerialization helps in making data exchange between process running on heterogeneous machines independent of  underlying OS,Compiler,Programming Language, Hardware etc.

---

### Why do we need Data-Serialization and Data-DeSerialization?
	1. Two machines who want to exachange information over the network may vary from each other.
		a.*Hardware Architecture*
			- 32 bit address space, 64 bit address space.
		b.*Software Versions or different compiler.*
			-sizeof int is 32 bit on one machine,could be 64 bit on another machine.
		c.*Endiannes*
			- The way machine stores the the data in memory
	2. There is a need that two machines need to communicate with each other in a agreed format in a agreed format
		a.Sending machine needs to encode the data in the standard pre-defined format
		b.Receiving machine should decode the data as per the same standard format.
		c.For eg,  if the standard format says that int should be encoded as 32 bit values then even the 64 bit machines on which sizeOf(int) is 8 bytes, must encode the integer data in 32 bit.


---

