# single-page-app

##Single Page Application in Bootstrap and JQuery

We see a number of relatively new javascript frameworks like angular, backbone and react that introduce new ways of building SPAs. 
There is quite a steep learning curve associated with each of the frameworks, accompanying tools, concepts and paradigms.

So can we build a single page web application without using angular, backbone or react and how difficult and time consuming is the process ?.

The rest of the post will present some ideas around SPA and sample code that can be used to build your own SPA.

The technologies used are the well established and mature

1. Bootstrap
2. JQuery

http://getbootstrap.com/

https://jquery.com/

###Design

The design looks at a few simple aspects, patterns and builds on them.

1. Layout
The layout is broken up into left nav, top nav and the main body.

2. Navigation Links
Navigation links are relative and of the form "#linkName" for example "#settings". 
Clicking on each link takes the SPA from one "state" to the next and the content of the "main section" changes with each click.
So the SPA can be thought of as a state machine that transitions from one state to the next based on user interacting 
with the SPA (clicking on navs, back, forward buttons).

3. State Machine - User clicks are captured and SPA transitioned from one state/"page" to the next.   

Capturing the above in a sample implementation, the SPA has

###Layout 

A bootstrap template provides the layout including the top nav, left nav and the main section. The navs and the main 
section are encapsulated in html "div" tags. Each "div" has a id associated with it for targeting via javascript. 
So the contents of the "div" can be changed based on the state of the SPA.

###Convention

Each nav link has a javascript with the same name. The script  has an onload function and is invoked on state transition 
in the SPA. For example the nav link "#settings" has a settings.js file with an "onload" function. 

###State transitions

The SPA is transitioned from one state to the next by user actions, like clicking on nav links or pressing 
the back and forward buttons.  When a user clicks on a nav link, the event is captured and the script corresponding to the nav is triggered. 
For example when the nav link "#settings" is clicked index.js captures the event and invokes the "onload" function in settings.js.    

Although this is not  a comprehensive framework, it provides ideas and sample code that you can leverage to build your SPA.

### Usage

Download and click on index.html