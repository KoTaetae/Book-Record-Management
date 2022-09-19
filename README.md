Book-Record-Management
This is a book record management API Backend for the management of books and records.

Routes and EndPoints
/users
POST: Create a new user ✅ GET: Get the list of all users ✅

/users/{id}
GET: Get a user by id ✅ PUT: Update a User by id ✅ DELETE: Delete a User by id(check if he/she has an issued book)(is there any fine to be paid!) ✅

/users/subscription-details/{id}
GET: Get user subscription details ✅

Date of subscription
Valid Till
Fine if any
/books
GET: get all books ✅ POST: post a new book ✅

/books/{id}
GET: get a book by its id ✅ PUT: update a particular book with its id ✅

/books/issued/
GET: get a list of all issued books ✅

/books/issued/withFine
GET: get all issued books with fine

Subscription Types ✅
date format:-
mm/dd/yyyy
Basic (3 months) Standard (6 months) Premium (12 months)

If the subscription date is 1/08/22 and if its type is standard then the valid date will be till 1/02/23

if he has an issued book it must be returned on 1/1/23 and if misses it then he gets the fine of Rs. 100

If he has an issued book and the issued book is to return on 1/1/23 if he misses the date of return & his subscription also expires, then he will get a fine of Rs. 500.
