# ng4-http-get-post


Depending on your security settings:

After doing everything right, if you are still getting any response back from the server; it's because of the CROSS "cross-origin resource sharing issue".
When you send a request from your browser to the 3rd party server, your browser needs to set one variable called "access-control-allow-origin" to that server or ** (which means to allow any 3rd party request from any 3rd party server).

For this there are 2 ways to do it:
1. To just adding the chrome extension:
"Access Control allow origin " is the name of the extension. and you're done! :)
2. To intercept; what thid does is it would intercept in the middle and it would insert this property into the header, the "access control allow origin".
that part of the module is present in the ng4-http-get-post folder named as intercepter.module.ts

Hope that helps :)
Happy Coding!!
