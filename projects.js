const html =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg";
const css =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg";
const react =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg";
const bootstrap =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg";
const sass =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg";
const git =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg";
const firebase =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg";
const nodejs =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg";
const photoshop =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg";
const illustrator =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-line.svg";
const visualstudio =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg";
const figma =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg";
const netlify =
  "https://res.cloudinary.com/diruiumfk/image/upload/v1693541812/netlify_idabbe.png";
const vercel =
  "https://res.cloudinary.com/diruiumfk/image/upload/v1693541717/vercel_f7ffde.png";

const projects = [
  {
    name: "TODOTECH",
    information:
      "My first project in Web Development, the idea started from the creation of an e-commerce. At first it was just the layout (HTML and CSS), but later I added vanilla JavaScript to add e-commerce, dark mode and login functionalities. It still has the original design that I did in its day but probably at some point of boredom I will make a second version updating everything with my knowledge of the moment.",
    tools: [
      [html, "HTML5"],
      [css, "CSS3"],
      [bootstrap, "Bootstrap"],
      [sass, "SASS"],
      [git, "git"],
      [nodejs, "NodeJS"],
      [photoshop, "Photoshop"],
      [illustrator, "Illustrator"],
      [visualstudio, "Visual Studio Code"],
      [netlify, "Netlify"],
    ],
    img: "https://res.cloudinary.com/diruiumfk/image/upload/v1693254750/todotech_yk7ask.png",
    logo: "https://res.cloudinary.com/diruiumfk/image/upload/v1692741440/todotech-logo_dwbnel.png",
    url: "https://todotech.netlify.app/",
    repository: "https://github.com/juanigarciadev/proyecto-TODOTECH",
    badge: false,
  },
  {
    name: "zolution",
    information:
      "Own business in creation. It is a project that seeks to unite a team of designers and developers from around the world through which competent web pages and applications are created that can enter the market quickly, professionally and with a competitive price accompanying the customer from start to finish.",
    tools: [
      [html, "HTML5"],
      [css, "CSS3"],
      [react, "ReactJS"],
      [sass, "SASS"],
      [git, "git"],
      [nodejs, "NodeJS"],
      [photoshop, "Photoshop"],
      [illustrator, "Illustrator"],
      [visualstudio, "Visual Studio Code"],
      [figma, "Figma"],
      [vercel, "Vercel"],
    ],
    img: "https://res.cloudinary.com/diruiumfk/image/upload/v1693254749/zolution_dhcyxw.png",
    logo: "https://res.cloudinary.com/diruiumfk/image/upload/v1684452439/zolution-logo_uekblv.svg",
    url: "https://zolution.vercel.app/",
    repository: "https://github.com/juanigarciadev/zolution",
    badge: "Working in...",
  },
  {
    name: "BEYOND IMAGINATION",
    information:
      "My first application applying ReactJS as a framework. It is an online learning academy based on an e-commerce hosted on Firebase, with an interactive catalog and purchase number. Soon the platform of the academy will be added in which you can register a new account or log in to an already created one, view the courses purchased and their contents.",
    tools: [
      [html, "HTML5"],
      [css, "CSS3"],
      [react, "ReactJS"],
      [sass, "SASS"],
      [git, "git"],
      [nodejs, "NodeJS"],
      [firebase, "Firebase"],
      [photoshop, "Photoshop"],
      [illustrator, "Illustrator"],
      [visualstudio, "Visual Studio Code"],
      [vercel, "Vercel"],
    ],
    img: "https://res.cloudinary.com/diruiumfk/image/upload/v1693254750/beyond-imagination_p25riu.png",
    logo: "https://res.cloudinary.com/diruiumfk/image/upload/v1680216082/beyond-imagination-full_jxvtga.png",
    url: "https://beyond-imagination.vercel.app/",
    repository: "https://github.com/juanigarciadev/first-react-app",
    badge: false,
  },
];

export default projects;
