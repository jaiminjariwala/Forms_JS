## Purpose to build this...

### Talking about forms,
1. let's assume there's a form app
2. there's a create button
3. you are directed to the form creation and editing page.
4. you decides to go back to home page and delete the forms
5. and suddenly you clicks on "go-back" button of browser.
6. 404 error will be thrown, as that form page you created, doesn't exists.
7. so to deal with it, either you can redirect to homepage and throw message "form has already been deleted"
8. or to not use a backend server, use Hash Routing!

### Hash Routing: It allows you to manage routes on client side using URL Fragment (that is... the part after `#` ). <br>The browser won't attempt to load a new page when Navigating via Hash. <br>Here, routing is simulated! Server isn't involved when navigating between sections of app.
