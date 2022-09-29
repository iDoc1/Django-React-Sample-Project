Sample Project using a Django backend and React frontend

## Directory Structure
The React UI files are stored in the frontend/ directory. The Django server files are in
the backend/ directory.

There are two ways to run this project. You can start the React development server and
the Django server in separate shells. In this case, the React server will send all
API requests to the specified proxy server in the package.json file. The other method is
to create an optimized React build, which creates a build/ directory, then serve those
files directly from the Django server. Both of these approaches are described below.

## Installing Dependencies
- First, create a Python virtual environment by running `python -m venv .venv` from root
project directory. This ensures python dependencies are installed locally.
- From the root directory run `pip install -r requirements.txt` to install Django 
dependencies
- cd into the frontend directory and run `npm install` to install node modules

## Running From Separate Servers (method 1)
- Open a terminal then run `python manage.py migrate` from the backend/ directory 
to create the sqlite database tables
- In the same terminal run `python manage.py runserver` to run the Django server
- Open another terminal then run `npm start` from the frontend/ directory
- This method works because localhost:8000 (Django) is specified as the proxy server in the 
package.json file, and localhost:3000 (React) is whitelisted in the Django settings.py file

## Running From Single Django Server (method 2)
- cd into the frontend/ directory and run `npm run build` to create the build/ directory
- cd into the backend/ directory and run `python manage.py runserver`
- Now, Django is serving the React files all from a single server

## Additional Notes
- A WSGI server, such as gunicorn must be used for productoon deployment
- To create a Django admin user run `python manage.py createsuperuser` from
backend/ directory. You can then navigate to the /admin endpoint to manipulate and view
the database tables.

