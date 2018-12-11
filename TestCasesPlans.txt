User Acceptance Testing Plans

Log-In  Functionality
	Test Cases:
Will the users username and password allow them to access the site.
If in the event of incorrect information, will the user be greeted with a “Incorrect Username or Password” message or steps to recover either their username or password.
Once the user is logged in can they log out?

Signup Module Functionality
	Test Cases:
Does entering username and password into the sign-up part of the login page record information and allow the user to then log into the page.
Once the user has entered their credentials, are they greeted with a message that tells them that their information has been recorded.	

Meme Button Functionality
	Test Cases:
Upon clicking the central meme generate button, will the user see the meme on the screen.
Can the user click on the meme generate button over and over again and see new memes each time. 
Will the images displayed on the screen be of desired size and resolution.

Automated Test Cases

For this we are using Travis CI and the karma node.js test library. Everytime our github repository is pushed to Travis will run the test cases described above on our app and email me the results. So far we have not gotten a pass on our tests as our app is currently under heavy development and a lot of features are broken as of now. 

Link to Travis dashboard: https://travis-ci.org/mformanek/SDPApp


