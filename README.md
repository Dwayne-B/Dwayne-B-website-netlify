# Check out my website here ->[Dwayne-B-Website](https://www.dwaynebynum.com/)
## Description
This is my portfolio website built with react. I Really wanted to add a 3D element for this iteration of my portfolio.
I was inspired by a video showcasing 3d elements. As seen below I sacraficed performance for this flashy little element. However I am looking for solutions to bring that number back up. Any ideas appreciated! 

##Google Lighthouse
###Metrics Before adding 3d element
![alt text](https://i.ibb.co/nj5nPCL/b4-3-D-website.png
)
###Metrics After adding 3d element
![alt text](https://i.ibb.co/RhhWDZ3/after-3d-website.png)


##Installation
git clone -> npm install -> npm run dev

In the project directory, you can run:

## npm dev
Runs the app in the development mode on localhost.
The page will reload when you make changes.
## npm run build
Builds the app for production to the dist folder.
It correctly bundles React in production mode 
and optimizes the build for the best performance.

The build is minified, imaged are webp format, compressed and components are lazy loading/ code-split.

##Components
[Describe the main components of the app and what they do]
I split the components into 2 main groups.
###Sections
- About : about me section describing me and what I do.
- Contact : container/ parent component of contactForm 
- Footer : Contains sub-nav and social links 
- Hero : Hero with social links and social links
- Projects : List Projects that can be filtered 
- Skills : 3D balls with a tech logo illustrating experience working the associated technology.

  
###Components *"/comp"*
- Ball : The actual elment that will be rendered in the BallCanvas
- BallCanvas : Canvas the 3d ball will be rendered to 
- ContactForm : Contact form built using formik and formspree to handle the messages.
- Nav : sticky nav with animated hamburger menu
- ProjectCard : The actual details of the project

Credits
[List any third-party libraries or resources used in the app]
[3D balls inspiration](https://www.youtube.com/watch?v=0fYi8SGA20k&t=6274s)
Formspree
react-three/fiber
hamburger-react



