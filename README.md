##Connect

[Live](https://connectfbclone.herokuapp.com/#/)
[Design Documentation](https://github.com/Meenakshi-Anand/Facebook-Clone/wiki)


Connect is a Facebook-inspired full-stack web application built upon a Rails framework, using PostgreSQL database and React for the rendering of frontend components, with Redux being used for state management.

##Features And Implementation

## New Users And Logging In

Users with account,can easily log in on navigation bar.You can always create a new account using the sign up form. The users account information are protected by Auth pattern. Only the valid user can log-in and see all the features.

![Log In / Sign Up](https://raw.githubusercontent.com/Meenakshi-Anand/Facebook-Clone/master/design_docs/Login%20Page.png)



## Search


The header searchbar listens for change events and performs searches as the user inputs their query. Searches are case-insensitive and conducted using ActiveRecord queries and regular expressions.

![Live](https://raw.githubusercontent.com/Meenakshi-Anand/Facebook-Clone/master/design_docs/Search.png)

## Friend Request

Users are notified of friend requests in the header pane and can accept or reject the requests without leaving the page the user is currently browsing.

![Live](https://raw.githubusercontent.com/Meenakshi-Anand/Facebook-Clone/master/design_docs/Friend_Request.png)

## Photo Upload

Photo upload uses the paperclip gem to manage attachments. Uploaded pictures are stored in an Amazon AWS S3 server.Attachments can be associated with both users (cover photo, profile picture) and posts (post attachment).

![Live](https://raw.githubusercontent.com/Meenakshi-Anand/Facebook-Clone/master/design_docs/Cover_photo.png)

## Posts And Comments

Users can post on their own wall and also their friends wall.
Commentscan be added and removed from posts with a single click.

## Features to be implemented in future
* Likes and Notifications
* Messaging
