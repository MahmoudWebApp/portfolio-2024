export interface IWorksProps {
  id: number
  title: string
  description: string
  link: string
  technoUsed: { id: string | number, techno: string }[]
  images: { id: string | number, srcImg: string }[]
}

export const myWorks: IWorksProps[] = [
  {
    id: 1,
    title: "Words Academy",
    description: "The website is an educational platform dedicated to providing non-Arabic speakers with a deep understanding of Arabic. The website is designed with general pages for user navigation, complemented by a comprehensive management system that includes aspects such as school management, teacher monitoring, and overall administrative supervision.",
    link: "https://wordsacademy.online",
    technoUsed: [
      {
        id: "tech-1",
        techno: "React"
      },
      {
        id: "tech-2",
        techno: "RTK Query"
      },
      {
        id: "tech-3",
        techno: "React DnD"
      },
      {
        id: "tech-4",
        techno: "AntDesign"
      },
      {
        id: "tech-5",
        techno: "Tailwind"
      },
    ],
    images: [
      {
        id: "img1",
        srcImg: "assets/projects/wordsacademy/wordsacademy-1.png"
      },
      {
        id: "img2",
        srcImg: "assets/projects/wordsacademy/wordsacademy-2.png"
      },
      {
        id: "img3",
        srcImg: "assets/projects/wordsacademy/wordsacademy-3.png"
      },
      {
        id: "img4",
        srcImg: "assets/projects/wordsacademy/wordsacademy-4.png"
      },
      {
        id: "img5",
        srcImg: "assets/projects/wordsacademy/wordsacademy-5.png"
      },
      {
        id: "img6",
        srcImg: "assets/projects/wordsacademy/wordsacademy-6.png"
      },

    ]
  },
  {
    id: 2,
    title: "Soby",
    description: "A personal website in addition to an admin dashboard",
    link: "https://asksoby.com/",
    technoUsed: [
      {
        id: "tech-1",
        techno: "React"
      },
      {
        id: "tech-2",
        techno: "RTK Query"
      },
      {
        id: "tech-3",
        techno: "AntDesign"
      },
      {
        id: "tech-4",
        techno: "Tailwind"
      },
    ],
    images: [
      {
        id: "img1",
        srcImg: "assets/projects/soby/soby-1.png"
      },
      {
        id: "img2",
        srcImg: "assets/projects/soby/soby-2.png"
      },
      {
        id: "img3",
        srcImg: "assets/projects/soby/soby-3.png"
      },
      {
        id: "img4",
        srcImg: "assets/projects/soby/soby-4.png"
      },
      {
        id: "img5",
        srcImg: "assets/projects/soby/soby-5.png"
      },
      {
        id: "img6",
        srcImg: "assets/projects/soby/soby-6.png"
      },

    ]
  },
  {
    id: 3,
    title: "Qnbn",
    description: "Qatar National Broadband Network Company website, defining the services provided by the company, and its latest news",
    link: "https://qnbn.qa/",
    technoUsed: [
      {
        id: "tech-1",
        techno: "WordPress"
      },
      {
        id: "tech-2",
        techno: "PHP"
      },
      {
        id: "tech-3",
        techno: "SQL"
      },
   
    ],
    images: [
      {
        id: "img1",
        srcImg: "assets/projects/qnbn/qnbn-1.png"
      },
      {
        id: "img2",
        srcImg: "assets/projects/qnbn/qnbn-2.png"
      },
      {
        id: "img3",
        srcImg: "assets/projects/qnbn/qnbn-3.png"
      },
      {
        id: "img4",
        srcImg: "assets/projects/qnbn/qnbn-4.png"
      },
      {
        id: "img5",
        srcImg: "assets/projects/qnbn/qnbn-5.png"
      },
      {
        id: "img6",
        srcImg: "assets/projects/qnbn/qnbn-6.png"
      },

    ]
  },
  {
    id: 4,
    title: "Nasca Tech",
    description: "Nasca Tech Company website, defining the services provided by the company, and its latest news",
    link: "https://qnbn.qa/",
    technoUsed: [
      {
        id: "tech-1",
        techno: "WordPress"
      },
      {
        id: "tech-2",
        techno: "PHP"
      },
      {
        id: "tech-3",
        techno: "SQL"
      },
   
    ],
    images: [
      {
        id: "img1",
        srcImg: "assets/projects/nasca/nasca-1.png"
      },
      {
        id: "img2",
        srcImg: "assets/projects/nasca/nasca-2.png"
      },
      {
        id: "img3",
        srcImg: "assets/projects/nasca/nasca-3.png"
      },
      {
        id: "img4",
        srcImg: "assets/projects/nasca/nasca-4.png"
      },
      {
        id: "img5",
        srcImg: "assets/projects/nasca/nasca-5.png"
      },
      {
        id: "img6",
        srcImg: "assets/projects/nasca/nasca-6.png"
      },

    ]
  },
  {
    id: 5,
    title: "Convello Dashboard",
    description: "Dashboard for managing the Convello application",
    link: "https://admin.convello.net/",
    technoUsed: [
      {
        id: "tech-1",
        techno: "React"
      },
      {
        id: "tech-2",
        techno: "Redux toolkit"
      },
      {
        id: "tech-3",
        techno: "RTK Query"
      },
      {
        id: "tech-3",
        techno: "AntDesign"
      },
  
     
   
    ],
    images: [
      {
        id: "img1",
        srcImg: "assets/projects/con-admin/con-admin-1.png"
      },
      {
        id: "img2",
        srcImg: "assets/projects/con-admin/con-admin-2.png"
      },
      {
        id: "img3",
        srcImg: "assets/projects/con-admin/con-admin-3.png"
      },
      {
        id: "img4",
        srcImg: "assets/projects/con-admin/con-admin-4.png"
      },
      {
        id: "img5",
        srcImg: "assets/projects/con-admin/con-admin-5.png"
      },
      {
        id: "img6",
        srcImg: "assets/projects/con-admin/con-admin-6.png"
      },

    ]
  },
  {
    id: 5,
    title: "Asup.de",
    description: "A consulting and project analysis website that contains a complete project management system",
    link: "",
    technoUsed: [
      {
        id: "tech-1",
        techno: "React"
      },
      {
        id: "tech-2",
        techno: "Redux Saga"
      },
      {
        id: "tech-3",
        techno: "Sass"
      },
      {
        id: "tech-3",
        techno: "AntDesign"
      },
  
     
   
    ],
    images: [
      {
        id: "img1",
        srcImg: "assets/projects/asup/asup-1.png"
      },
      {
        id: "img2",
        srcImg: "assets/projects/asup/asup-2.png"
      },
      {
        id: "img3",
        srcImg: "assets/projects/asup/asup-3.png"
      },
      {
        id: "img4",
        srcImg: "assets/projects/asup/asup-4.png"
      },
      {
        id: "img5",
        srcImg: "assets/projects/asup/asup-5.png"
      },
      {
        id: "img6",
        srcImg: "assets/projects/asup/asup-6.png"
      },

    ]
  },
]