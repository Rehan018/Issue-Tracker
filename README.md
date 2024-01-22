### Project Title: Issue Tracker [Link to Demo](http://13.48.43.237:3000/issueTracker)

#### Introduction

The Issue Tracker is a Node.js and EJS-based web application designed to help teams manage and track issues/bugs for their projects efficiently. Inspired by platforms like GitHub, this project provides a user-friendly interface to create projects, manage issues, and streamline collaboration within a development team.

#### Features

1. **Neat UI:**
   - Styled interface for a pleasant user experience.
   - UI inspired by popular issue tracking platforms.

2. **Home Page:**
   - Displays a list of existing projects.
   - Allows users to create new projects that dynamically update the project list.

3. **Create Project Page:**
   - Accepts input fields for project creation: Name, Description, Author.
   - Validates and stores project information in a MongoDB database.

4. **Project Detail Page:**
   - Displays bugs/issues related to a selected project.
   - Allows users to:
     - Filter issues by multiple labels.
     - Filter by author.
     - Search by title and description.
     - Create new issues.

5. **Create Issue Page:**
   - Enables users to create issues for a specific project.
   - Accepts fields: Title, Description, Labels, Author.
   - Provides a dropdown for selecting existing labels dynamically as the user types.

#### How to Build

1. **Setup:**
   - Initialize the Node.js project using `npm init`.
   - Install required packages: `express`, `ejs`, `mongoose`, `body-parser`, etc.

2. **Express App:**
   - Set up the main `app.js` file to configure Express.
   - Connect to MongoDB using Mongoose for data storage.

3. **Define Models:**
   - Create `Project.js` and `Issue.js` models to define MongoDB schemas.

4. **Controllers:**
   - Implement controllers (`projectsController.js` and `issuesController.js`) to handle CRUD operations.

5. **Routes:**
   - Define routes (`index.js`, `projects.js`, `issues.js`) to handle different parts of the application.

6. **Views:**
   - Design EJS views (`home.ejs`, `create-project.ejs`, `project-detail.ejs`, `create-issue.ejs`) for each page.

7. **Functionality:**
   - Implement CRUD operations, form handling, and filtering/search logic.
   - Style the application using CSS.

8. **Testing:**
   - Ensure the application works as expected by testing CRUD operations and search/filter functionalities.

9. **Video Walkthrough:**
   - Record a video (up to 5 minutes) showcasing the project's functionalities.

10. **Contribution:**
    - Encourage other developers to contribute to the project by adding extra features, improving UI, or fixing bugs.
    - Provide contribution guidelines in the `CONTRIBUTING.md` file.

### How to Contribute

We welcome contributions from the community! If you'd like to contribute to the Issue Tracker project, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Implement your changes.
4. Test your changes thoroughly.
5. Submit a pull request with a detailed description of your changes.

### License

This project is licensed under the [CN License](LICENSE).
