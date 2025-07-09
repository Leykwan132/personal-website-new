import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Kwan",
  initials: "LK",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer based in Kuala Lumpur, Malaysia. \n Previously @Storehub, now at Ryt Bank.",
  summary:
    "I interned at two companies — [FootfallCam](https://www.footfallcam.com/en/) (ML-focused) and [Fusionex](https://www.linkedin.com/company/fusionex-group/) (Frontend). I initially planned to continue in Frontend, but after graduating, I joined [StoreHub](https://www.storehub.com/my/) as a Backend Engineer (Very surprised lol). There, I gained solid backend experience and engineering practices, which I’m now bringing into my next role as a Backend Engineer at [Ryt Bank](https://www.rytbank.my/). Alongside that, I also co-founded a side project called [TaxMe](https://www.taxme-app.com/), with two partners, to improve how Malaysians manage and file their taxes.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Java",
    "Postgres",
    "MongoDB",
    "Redis",
    "Docker",
    "Kubernetes",
    "AWS",
    "Jenkins",
    "Jest",
    "KibanaSearch",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+60129499394",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Leykwan132",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ley-kwan-c-129678228/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Ryt Bank",
      href: "https://www.rytbank.my/",
      badges: [],
      location: "Remote",
      title: "Backend Engineer",
      logoUrl: "/ryt.svg",
      start: "Sept 2025",
      end: "",
      description: "Incoming Sept 2025",
    },
    {
      company: "Storehub",
      badges: [],
      href: "https://www.storehub.com/my/",
      location: "Remote",
      title: "Backend Engineer",
      logoUrl: "/sh.jpeg",
      start: "July 2024",
      end: "Aug 2025",
      description:
        "Led the design and development of Beep and membership features using AWS (SQS, SNS), Bull, Redis, and MongoDB for asynchronous workflows. Developed and optimized a membership customer migration feature to handle over 200,000 records efficiently with zero downtime. Maintained GraphQL and BFF servers (ExpressJS) within a DDD microservice architecture using gRPC. Supported CI/CD pipelines with Jenkins and Kubernetes, wrote unit tests with Jest, and participated in on-call rotations using Opsgenie, KibanaSearch, NewRelic, and JaegerUI for debugging.",
    },

    {
      company: "Footfallcam",
      href: "https://www.footfallcam.com/en/",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Engineer Intern",
      logoUrl: "/ffc.webp",
      start: "May 2023",
      end: "Aug 2023",
      description:
        "Researched and deployed segmentation and depth anomaly detection APIs using FastAPI, OpenCV, and CREStereo. Contributed to data labeling with Label Studio and supported business proposals through Figma-based web design.",
    },
    {
      company: "Fusionex",
      href: "https://www.linkedin.com/company/fusionex-group/",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer Intern",
      logoUrl: "/fsx.jpeg",
      start: "May 2022",
      end: "Aug 2022",
      description:
        "Contributed to the design, development, and deployment of in-house software using Vue.js, with a focus on reusable components and Agile sprint practices.",
    },
  ],
  education: [
    {
      school: "University of Wisconsin-Madison",
      href: "https://www.wisc.edu/",
      degree: "Bachelor's Degree of Data Science, Cert in Computer Science",
      logoUrl: "/badgers.png",
      start: "Aug 2020",
      end: "May 2024",
    },
  ],
  projects: [
    {
      title: "TaxMe",
      href: "https://www.taxme-app.com/",
      dates: "April 2025 - Present",
      active: true,
      description:
        "TaxMe is a platform that allows users to file their taxes online. It is a great way to file your taxes and get your refund faster.",
      technologies: [],
      links: [
        {
          type: "Website",
          href: "https://www.taxme-app.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/taxme.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Alibaba Cloud Malaysia AI Hackathon 2025",
      dates: "May 17th - 18th, 2025",
      location: "Kuala Lumpur, Malaysia",
      description: "Tree structure LLM that utilized react nodes.",
      icon: "public",
      image: "/alibaba.png",
      links: [
        {
          type: "Website",
          href: "https://www.taxme-app.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "Deriv AI Hackathon",
      dates: "Feb 8th - 9th, 2025",
      location: "Cyberjaya, Malaysia",
      description:
        "AI Agent that utilized LLM to handle sophisticated fraud detection in conversations.",
      image: "/deriv.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Setel Hackathon (Winner)",
      dates: "Dec 6th - 7th, 2024",
      location: "Kuala Lumpur, Malaysia",
      description:
        "A vision-only traffic light system that cna detect speed, object detection accurately.",
      image: "/setel.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          type: "Website",
          href: "https://www.taxme-app.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "Pay Hack 2024 Hackathon (Top 32)",
      dates: "November 23rd - Dec 1st, 2024",
      location: "Kuala Lumpur, Malaysia",
      description:
        "A financial mobile app made for children that emphasized on animation and storytelling.",
      image: "/paynet.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
