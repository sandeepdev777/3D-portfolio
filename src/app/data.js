/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [
  {
    id: 1,
    name: "Social-Pixel",
    description: `Social-Pixel is a social media application designed for seamless image and text sharing. Built with React.js, Express.js,
     Node.js, MongoDB, Material UI, and JSON Web Tokens (JWT),
     Social-Pixel provides an engaging platform for users to connect with friends through dynamic visual and textual content.`,
    date: "2023-02-07",
    demoLink: "https://social-pixel.vercel.app/",
  },
  {
    id: 2,
    name: "Imaginify",
    description: `Imaginify is a cutting-edge SaaS application for image editing, developed using a robust 
    tech stack that includes Next.js 14, TypeScript, Tailwind CSS, ShadCN, MongoDB, Clerk, and Stripe.`,

    date: "2023-04-12",
    demoLink: "https://imaginify-two-weld.vercel.app/",
  },
 {
    id: 3,
    name: "MovieVerse",
    description: `MovieVerse is a video streaming platform that serves as a clone of popular OTT services like Netflix. 
    Developed with Next.js 14, TypeScript, NextAuth, Tailwind CSS, ShadCN, Prisma, PostgreSQL, and Neon DB,
    MovieVerse offers a seamless streaming experience with a rich library of movies across various genres.`,
    date: "2023-06-10",
    demoLink: "https://movie-verse-three.vercel.app/",
  },
  {
    id: 4,
    name: "Fuzzie",
    description: `Fuzzie is an advanced automation platform that integrates a range of applications—including 
    Discord, Slack, Notion, and others—with Google Drive, enabling seamless data sharing and synchronization across these platforms.`,
    date: "2023-07-25",
    demoLink: "https://github.com/sandeepdev777/Fuzzie.git",
  }
];

export const educationData = [
  {
    id: 1,
    name: "Army Public School, New Cantt, Allahabad",
    description: `High School(CGPA: 10/10)`,
    date: "2017-07-01",
    demoLink: "https://armypublicschoolalld.org/",
  },
  {
    id: 2,
    name:"Army Public School, New Cantt, Allahabad",
    description: `Intermediate-Subjects: Physics, Chemistry, Mathematics, Biotechnology, English
   (Percentage: 81.6 %)`,
    date: "2019-07-01",
    demoLink: "https://armypublicschoolalld.org/",
  },
  {
    id: 3,
    name: "Ewing Christian College, Prayagraj",
    description: "Undergraduate-Bachelor of Science in Mathematics (Percentage: 71.8 %)",
    date: "2023-07-01",
    demoLink: "https://ecc.ac.in/",
  },
  {
    id: 4,
    name: "Harcourt Butler Technical University, Kanpur",
    description: "Postgraduate-Master of computer application(MCA)",
    date: "2023-08-15",
    demoLink: "https://hbtu.ac.in/",
  }
];

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://github.com/sandeepdev777",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/sandeep-kumar-584132289/",
    icon: "linkedin",
    newTab: true,
  },
  { label: "Education", link: "/education", icon: "GraduationCap", newTab: false },
  {
    label: "Resume",
    link: "/resume.pdf",
    icon: "resume",
    newTab: true,
  },
];


