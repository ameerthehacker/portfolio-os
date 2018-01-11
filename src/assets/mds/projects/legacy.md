# Legacy CMS #

A website built with laravel to manage events, workshops organized by a college

![screenshot](https://firebasestorage.googleapis.com/v0/b/portfolio-os-187bc.appspot.com/o/projects%2Flegacy%2Fevents.png?alt=media&token=e17525d0-417b-4954-8daa-52477f0205b2)

# Demo #

See the live running app [here](http://www.mepcoeng.ac.in/legacy17/public/)

## Test User credential ##

```
email: zyx@gmail.com
password: test
```

## Admin User credential ##

```
email: root@legacy.com
password: test
```


# Github  #

Feel free to fork my git repo [here](https://github.com/ameerthehacker/legacy17)

# Technology Stack

1. Laravel
2. JQuery
3. Materialize CSS
4. MySQL

# Features #

## Parallel event registration prevention ##

Users won't be allowed to register for parallel events

## Full fledged dashboard ##

The registering user will be provided with a feature packed dashboard, they can add events to dashboard, remove them, do payment etc

![screenshot](https://firebasestorage.googleapis.com/v0/b/portfolio-os-187bc.appspot.com/o/projects%2Flegacy%2Fdashboard.png?alt=media&token=49461b2a-5a26-48ed-8040-40067b00edbc)

## Support for team creation and management ##

It has support for creation of teams by the registered users for team events with support for validations of

* Max and Min team members
* Allow/Disallow Inter gender pariticipation
* Autocomplete users from the same college

## Ticket Download ##

Users will be provided with a ticket in pdf format with all details on the events and workshops they are pariticpating

## Accomodation Request ##

Users can request accomodations directly from the site

## Online Payment ##

Users can pay the amount through the PayUbiz payment gateway seamlessly

![screenshot](https://firebasestorage.googleapis.com/v0/b/portfolio-os-187bc.appspot.com/o/projects%2Flegacy%2Fpayment.png?alt=media&token=ae85ef05-0696-4324-b9dd-8f939075befe)

## Full fledged Admin dashboard ##

The admin portal has features to

* Create/Update events and workshops
* Accept/Reject a user registration
* Accpet/Reject accomodation request
* Add new registration on the spot
* Modify the user's teams and event registrations if needed
* Update prize winners for an event

![screenshot](https://firebasestorage.googleapis.com/v0/b/portfolio-os-187bc.appspot.com/o/projects%2Flegacy%2Fadmin_portal.png?alt=media&token=8175b177-0f32-43a4-943c-c1698d42b8a7)

## ACL with Roles ##

Each admin can have the following roles with specific permissions

* Root: Root user and has all rights
* Organizer: He/She can see user registration details of events he/she is organizing
* Hospitality: Accept/Reject accomodation request
* Developer: He/She will be integrated terminal
* Registration: He/She can modify team and event registrations of a user

## Report Generation ##

The admin can view/download reports of their need in excel format without a sweat

![screenshot](https://firebasestorage.googleapis.com/v0/b/portfolio-os-187bc.appspot.com/o/projects%2Flegacy%2Freport.png?alt=media&token=0d8e7d05-3cba-45e1-90b0-86a41e38ce65)

## Installation ##

1. Install PHP, MySQL

2. Install Composer

3. Install the laravl framework using the guide [here](https://laravel.com/docs/5.5#installation)

4. In the project folder run

```
composer install
```

5. Create __.env__ file in the project folder with contents from __.env.example__ file in the project folder

6. Update the database name, username and password in the .env file

```
DB_DATABASE=YOUR_DB_NAME
DB_USERNAME=YOUR_USERNAME
DB_PASSWORD=YOUR_PASSWORD
```

7. Run the migration by using the command

```
php artisan migrate
```

8. Seed the database with few default values using the command

```
php artisan db:seed
```

9. Spin up the website using the command

```
php artisan serve
```

10. Browse the URL __localhost:8000__ in the browser


