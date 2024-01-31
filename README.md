## DATABASE MIGRATION AND SEEDING
**All database and seeding info is found in server/database.sql**

*I will link it at the bottom  of readme is the raw text of database creation and seeding info. copy/paste into postgres*


## PROJECT SETUP

*In new terminal - clone project*

git clone https://github.com/w3kasper/autoblogs.git

### Server Setup

cd autoblogs

cd server

npm i

nodemon index

*this will go into the server folder and install all dependancies, then start nodemon/server on port 5000*

### Client Setup

*Open new terminal*

cd autoblogs

cd client

npm i

npm start

*this will go into the server folder and install all dependancies, then start a react application on port 3000*

## IMAGES

![Main Page + Search](https://i.imgur.com/IvZEGF1.png) | ![Single Page](https://i.imgur.com/GamFt27.png) | ![Create Blog](https://i.imgur.com/9axICVr.png)

## DATABASE RAW TEXT

*to be copy/pasted into your postgres sql db

`CREATE DATABASE BlogSite;`

`CREATE TABLE Blogs (
    blog_id SERIAL PRIMARY KEY,
    blog_title VARCHAR(255) NOT NULL,
    blog_slug VARCHAR(255) UNIQUE NOT NULL,
    blog_content TEXT NOT NULL,
    blog_image VARCHAR(255),
    published_at TIMESTAMP NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL
);`

`INSERT INTO blogs (blog_id, blog_title, blog_slug, blog_content, blog_image, published_at, created_at, updated_at, deleted_at) VALUES
(61, 'Red Mitsubishi', 'red-mitsubishi', '<h2>Red Mitsubishis are Underrated</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>', 'https://i.imgur.com/SwAV6wD.jpeg', '2024-01-30 23:24:36.33', '2024-01-30 16:24:36.392896', '2024-01-30 16:24:36.392896', NULL),
(62, 'Ol'' Blue', 'ol-blue', '<h2>Blue as the Sky</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>', 'https://i.imgur.com/8WjcthU.jpeg', '2024-01-30 23:25:19.222', '2024-01-30 16:25:19.289969', '2024-01-30 16:25:19.289969', NULL),
(63, 'Red GT-S', 'red-gt-s', '<h2>Classic Beauty</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>', 'https://i.imgur.com/Wbu4xw8.jpeg', NULL, '2024-01-30 16:26:59.09811', '2024-01-30 16:26:59.09811', NULL),
(64, 'Barnyard BMW', 'barnyard-bmw', '<h2>You Will Never Know What You Will Find</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>', 'https://i.imgur.com/waiKwoR.jpeg', NULL, '2024-01-30 16:26:59.09811', '2024-01-30 16:26:59.09811', NULL),
(65, 'Corolla is a Vibe', 'corolla-is-a-vibe', '<h2>Corollas are the Best</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>', 'https://i.imgur.com/lqBCh8f.jpeg', NULL, '2024-01-30 16:28:01.909069', '2024-01-30 16:28:01.909069', '2024-01-30 16:28:05.451546'),
(66, 'Red Beauty', 'red-beauty', '<h2>What Muscle!</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>', 'https://i.imgur.com/nQykmVM.jpeg', '2024-01-30 23:28:45.285', '2024-01-30 16:28:45.486772', '2024-01-30 16:28:45.486772', NULL),
(67, 'Old and Busted', 'old-and-busted', '<h2>My New Awesome Car</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>', 'https://i.imgur.com/jPMlasI.jpeg', '2024-01-30 23:29:15.606', '2024-01-30 16:29:15.675376', '2024-01-30 16:29:15.675376', '2024-01-30 16:29:22.929802');`
