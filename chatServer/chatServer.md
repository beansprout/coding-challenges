Explain how you would design a chat server. 

In particular, provide details about the various backend components, classes, and methods. 

What would be the hardest problems to solve?

## Chat server

backend components:

* express.js - server
* authentication : jwt, b-crypt, passport 
* caching component (client-side)?
* router component
* mongoDB - database
* mongoose 
    - to interact with database
    Schemas/ Models:
        - groups collection
        - users collection
            - profile 
                - nickname
                - password
                - real name
                - 
                - chat history
                - friends - relationship
                    - status
        
*   Methods:
        - add friend
        - remove friend
        - add user
        - add/ edit details in profile
        - change password
        - add new status update
        - signup
        - login/ out
        - search all users
        - search friends
        - search groups
        - privacy methods (individual) 
        - prune db
        - update view
        - force update view
        

* Hardest problems to solve:
    Relationships - efficiently accessing 
    Fast/ Efficient updating
    Security - keeping up with/ maintaining
    De-bloating database/ pruning 
    Interconnecting collections 




