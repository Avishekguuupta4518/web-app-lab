# Django Registration Lab

This is a **Django web application** that allows users to register by submitting their information through a form. The user data is stored in a database and displayed dynamically on a web page.  

---

## **Features**

- Registration form collecting:  
  - Name  
  - Username  
  - Password  
  - Age  
  - Gender  
  - Email  
- Password input is hidden in the form  
- Data stored in SQLite database  
- Admin panel support to manage users  
- Display all registered users in a clean table  
- Navigation between registration form and users list  

---

## **Project Structure**

```
registration_project/
├── users/
│ ├── migrations/
│ ├── templates/
│ │ └── users/
│ │ ├── register.html
│ │ └── users_list.html
│ ├── admin.py
│ ├── apps.py
│ ├── forms.py
│ ├── models.py
│ ├── urls.py
│ └── views.py
├── registration_project/
│ ├── settings.py
│ ├── urls.py
│ └── wsgi.py
├── db.sqlite3
├── manage.py
└── README.md

```
---

## **Setup Instructions**

Follow these steps to run the project locally:

### **1. Clone the Repository**

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```
```
2. Create Virtual Environment
python -m venv venv
# Activate it:
# Windows
venv\Scripts\activate
# Mac/Linux
source venv/bin/activate
```
```
3. Install Dependencies
pip install django
```
```
4. Apply Migrations
python manage.py makemigrations
python manage.py migrate
```
```
5. Create Superuser (Optional for Admin)
python manage.py createsuperuser
Enter a username, email, and password
This allows you to manage users via http://127.0.0.1:8000/admin/
```
```
6. Run the Server
python manage.py runserver
Open browser and visit: http://127.0.0.1:8000/ → Registration form
Visit http://127.0.0.1:8000/list/ → List of all registered users
```
# Usage
Fill out the registration form and click Register.
Your data will be saved in the database.
Click View All Users to see all registered users.
Admin can also add/edit/delete users at http://127.0.0.1:8000/admin/.


# Technologies Used
Python 3.x
Django 6.x
SQLite (default database)
HTML/CSS for templates