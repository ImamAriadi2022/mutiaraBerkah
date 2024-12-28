-- Create Users table
CREATE TABLE Users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert data into Users table
INSERT INTO Users (username, email, password) VALUES
('john_doe', 'john@example.com', 'password123'),
('jane_smith', 'jane@example.com', 'password456');

-- Create Jobs table
CREATE TABLE Jobs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    salary FLOAT NOT NULL,
    location VARCHAR(100) NOT NULL,
    company VARCHAR(100) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert data into Jobs table
INSERT INTO Jobs (title, description, salary, location, company) VALUES
('Software Engineer', 'Develop and maintain software applications.', 60000, 'New York', 'Tech Corp'),
('Data Analyst', 'Analyze and interpret complex data sets.', 50000, 'San Francisco', 'Data Inc');

-- Create JobRegistrations table
CREATE TABLE JobRegistrations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    personalData TEXT NOT NULL,
    marketingWords TEXT NOT NULL,
    jobId INT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (jobId) REFERENCES Jobs(id)
);

-- Insert data into JobRegistrations table
INSERT INTO JobRegistrations (personalData, marketingWords, jobId) VALUES
('John Doe, john@example.com, 123-456-7890', 'I am passionate about software development.', 1),
('Jane Smith, jane@example.com, 987-654-3210', 'I have a strong background in data analysis.', 2);

-- Create Certifications table
CREATE TABLE Certifications (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    issueDate DATE NOT NULL,
    certificateUrl VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert data into Certifications table
INSERT INTO Certifications (title, description, issueDate, certificateUrl) VALUES
('AWS Certified Solutions Architect', 'Certification for AWS Solutions Architect.', '2022-01-15', 'http://example.com/aws-cert'),
('Google Data Engineer', 'Certification for Google Data Engineer.', '2022-02-20', 'http://example.com/google-cert');

-- Create Portfolios table
CREATE TABLE Portfolios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    videoUrl VARCHAR(255) NOT NULL,
    createdBy VARCHAR(100) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert data into Portfolios table
INSERT INTO Portfolios (title, description, videoUrl, createdBy) VALUES
('Project A', 'Description of Project A.', 'http://example.com/video-a', 'john_doe'),
('Project B', 'Description of Project B.', 'http://example.com/video-b', 'jane_smith');

-- Create Articles table
CREATE TABLE Articles (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    content TEXT NOT NULL,
    author VARCHAR(100) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert data into Articles table
INSERT INTO Articles (title, content, author) VALUES
('How to Learn JavaScript', 'Content of the article about learning JavaScript.', 'john_doe'),
('Data Analysis Techniques', 'Content of the article about data analysis techniques.', 'jane_smith');

-- Create AboutUs table
CREATE TABLE AboutUs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    content TEXT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert data into AboutUs table
INSERT INTO AboutUs (title, content) VALUES
('Our Mission', 'Content about our mission.'),
('Our Vision', 'Content about our vision.');