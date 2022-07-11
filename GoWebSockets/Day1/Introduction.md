
### Introduction to WebSockets 

- Web Sockets are means to communicate between 2 programs and sockets are used in programming since forever.
- Web Sockets allows us to build really interactive and responsive web apps.

##### Advantages of Web Sockets
- Support both ways communication that is from a webclient -> webserver and vice versa. It can do it really quickly and without user interaction
	Eg : Your account in whatsapp received a message and immediately notification is sent to your device or browser.
- WebSockets listen on standard ports which is imp becoz we dont require a lot of configuration to make them useful.
- When a connection is made to web-socket it is actually 'upgraded' to Web-socket connection.

##### WebSockets Libraries
- Built into standard library
- Gorilla websockets etc

##### What we'll use
- Start with Gorilla (and build a chat application)
- Move on to Pusher Library (and build a fully robust and functional Web Monitoring application that allow to monitor remote host like Web Servers and SSL certificate and things like that and to notify users in real time when status of what we're monitoring changes)
