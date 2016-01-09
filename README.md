# Redacted

One of your clients have contacted you with a problem. Their Users have figured out that their chat messages aren't filtered and they can say anything that they want. The CEO dislikes the slang terms being used on the internet and wants to implement a system which will remove certain words and replace them.

## Goal
Your task is to build middleware for [Express](http://expressjs.com/4x/api.html) which will search through a message's contents and replace certain words with ones that are more, family-friendly. You have been given a set of words to which have been blacklisted.

You will build a small project which will test your middleware.

### Blacklisted words and acceptable replacements
- Selfie : self-portrait
- yummers : delicious
- outchea : are out here
- bruh : wow
- doge : pug
- cilantro : soap
- bae : loved one
- swag : style
- yolo : carpe diem

**Example input #1**:
> I took a selfie with my bae next to a tardis. yolo!

**Filtered output**:
> I tool a self-portrait with my loved one next to a tardis. carpe diem!

**Example inout #2**:
> we outchea! saw a doge, #bruh!

**Filtered output**:
> we are out here! saw a pug, #wow!

## Requirements (minimal)
- **ExpressJs**
	- body-parser
	- jade
	- custom middlware for filtering text
	
- **Client-side**
	- form
		1. input field
		2. submit button

### Server

#### Middleware
Built a filtering middleware to find and replace blacklisted words.

#### `'/'` (required)
**Method:** GET

This route will render your form. This form has one input and a submit button.

**Method:** POST

This is the endpoint for your form. You will respond with the data stored at req.body


## References
[Express Routes](http://expressjs.com/guide/routing.html#express-router)

[Express Middleware](http://expressjs.com/guide/using-middleware.html)

[Express Templating](http://expressjs.com/guide/using-template-engines.html)

[Jade Template Engine](http://jade-lang.com/)



