**Blog App**


**Overview**
The Blog App is a web application built using React.js, Tailwind CSS, Redux-Toolkit, React-Hook-Form, React-Router, TinyMCE Editor, html-react-parser, and appwrite as the Backend-as-a-Service (BAAS) solution.     It allows users to sign up, log in, create, edit, and delete their blog posts. Users can only view posts created by others but cannot edit or delete them.


**Features**

**Authentication:** Users can sign up and log in to access the blog features. Only logged-in users can view, create, edit, and delete posts.

**User Authorization:** Users can only edit or delete the posts they have created. They cannot modify posts created by other users.

**Blog Post Management:** Users can create new posts with a title, feature image, and content. The slug is automatically generated based on the title. Users can edit or delete their posts.

**Post Visibility:** Users can set the status of their posts as active or inactive. Inactive posts will not be displayed on the homepage.

**Responsive Design:** The application is designed to be responsive and accessible across various devices and screen sizes.


**Technologies Used**

React.js

Tailwind CSS

Redux-Toolkit

React-Hook-Form

React-Router

TinyMCE Editor

html-react-parser

appwrite (Backend-as-a-Service)


**Installation**

Clone the repository: git clone <repository-url>

Navigate to the project directory: cd blog-app

Install dependencies: npm install

Create a .env file in the root directory and add the necessary environment variables.

Start the development server: npm start


**Usage**

Sign up or log in to access the blog features.

Create new blog posts by providing a title, feature image, and content.

Edit or delete your existing posts from the dashboard.

Set the status of your posts as active or inactive.

View posts created by other users on the homepage.


**Deployment**

The application can be deployed to various hosting platforms like Netlify, Vercel, or Firebase. Configure the deployment settings according to the chosen platform and deploy the application.


**Contributing**
Contributions are welcome! Feel free to open issues or pull requests for any improvements or new features.

