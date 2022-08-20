import {
  Button,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from "gatsby";
import React from "react";
import config from "../../data/SiteConfig";

export default function Nav() {
  return (
    <>
      <Heading>{config.siteTitle}</Heading>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Topics
        </MenuButton>
        <MenuList>
          {NAV_ITEMS.map((navItem) => (
            <Link key={navItem.label} href={navItem.href}>
              <MenuItem>{navItem.label}</MenuItem>
            </Link>
          ))}
        </MenuList>
      </Menu>
    </>
  );
}

const NAV_ITEMS = [
  {
    label: "Pin 📌",
    href: "/tags/pin",
    img:
      "https://e7.pngegg.com/pngimages/93/226/png-clipart-pin-pin-thumbnail.png",
  },
  {
    label: "CS 🏫",
    href: "/tags/cs",
    children: [
      {
        label: "CS",
        subLabel: "CS description here",
        href: "/tags/cs",
      },
      {
        label: "problem-solving",
        subLabel: "problem-solving description here",
        href: "/tags/problem-solving",
      },
      {
        label: "data-structures",
        subLabel: "data-structures description here",
        href: "/tags/data-structures",
      },
      {
        label: "algorithms",
        subLabel: "algorithms description here",
        href: "/tags/algorithms",
      },
      {
        label: "operating System",
        href: "/tags/operating-system",
      },
      {
        label: "networking",
        href: "/tags/networking",
      },
      {
        label: "computer-programming",
        href: "/tags/computer-programming",
      },
      {
        label: "system-design",
        href: "/tags/system-design",
      },
      {
        label: "system-analysis",
        href: "/tags/system-analysis",
      },
      {
        label: "computer-architecture",
        href: "/tags/computer-architecture",
      },
      {
        label: "software-engineering",
        href: "/tags/software-engineering",
      },
      {
        label: "software-architecture",
        href: "/tags/software-architecture",
      },
      {
        label: "software-development",
        href: "/tags/software-development",
      },
      {
        label: "software-systems",
        href: "/tags/software-systems",
      },
      {
        label: "microservice",
        href: "/tags/microservices",
      },
    ],
  },
  {
    label: "FrontEnd 🎨",
    href: "/tags/frontend",

    children: [
      {
        label: "FrontEnd",
        subLabel: "FrontEnd description here",
        href: "/tags/frontend",
      },
      {
        label: "HTML",
        subLabel: "HTML description here",
        href: "/tags/html",
      },
      {
        label: "css",
        href: "/tags/css",
      },
      {
        label: "JS",
        href: "/tags/js",
      },
      {
        label: "react",
        href: "/tags/react",
      },
      {
        label: "angular",
        href: "/tags/angular",
      },
      {
        label: "vuejs",
        href: "/tags/vuejs",
      },
      {
        label: "ui-ux",
        href: "/tags/ui-ux",
      },
      {
        label: "xd",
        href: "/tags/xd",
      },
      {
        label: "figma",
        href: "/tags/figma",
      },
    ],
  },

  {
    label: "BackEnd ⚙",
    href: "/tags/backend",
    children: [
      {
        label: "BackEnd",
        subLabel: "BackEnd description here",
        href: "/tags/backend",
      },
      {
        label: "nodejs",
        href: "/tags/nodejs",
      },
      {
        label: "PHP",
        href: "/tags/php",
      },
      {
        label: "::Laravel",
        href: "/tags/laravel",
      },
      {
        label: "::wordpress",
        href: "/tags/wordpress",
      },
      {
        label: "c#",
        href: "/tags/c#",
      },
      {
        label: "python",
        href: "/tags/python",
      },
      {
        label: "GOLANG",
        href: "/tags/golang",
      },
      {
        label: "java",
        href: "/tags/java",
      },
      {
        label: "Ruby",
        href: "/tags/ruby",
      },
    ],
  },
  {
    label: "Database 🗃️",
    href: "/tags/database",
    children: [
      {
        label: "Database",
        subLabel: "Database description here",
        href: "/tags/database",
      },
      {
        label: "sql",
        href: "/tags/sql",
      },
      {
        label: "mysql",
        href: "/tags/mysql",
      },
      {
        label: "mongodb",
        href: "/tags/mongodb",
      },
      {
        label: "sqlite",
        href: "/tags/sqlite",
      },
      {
        label: "firebase",
        href: "/tags/firebase",
      },
      {
        label: "oracel",
        href: "/tags/oracel",
      },
    ],
  },
  {
    label: "Mobile 📱",
    href: "/tags/mobile",
    children: [
      {
        label: "Mobile",
        subLabel: "Mobile description here",
        href: "/tags/mobile",
      },
      {
        label: "react-native",
        href: "/tags/react-native",
      },
      {
        label: "android",
        href: "/tags/android",
      },
      {
        label: "flutter",
        href: "/tags/flutter",
      },
      {
        label: "Kotlin",
        href: "/tags/kotlin",
      },
      {
        label: "Swift",
        href: "/tags/swift",
      },
    ],
  },
  {
    label: "Devops 🖲",
    href: "/tags/devops",
    children: [
      {
        label: "Devops",
        subLabel: "Devops description here",
        href: "/tags/devops",
      },
      {
        label: "git",
        href: "/tags/git",
      },
      {
        label: "linux",
        href: "/tags/linux",
      },
      {
        label: "Jenkins",
        href: "/tags/jenkins",
      },
      {
        label: "containerization",
        href: "/tags/containerization",
      },
      {
        label: "docker",
        href: "/tags/docker",
      },
      {
        label: "Kubernetes",
        href: "/tags/kubernetes",
      },
      {
        label: "cloud",
        href: "/tags/cloud",
      },
    ],
  },

  {
    label: "Podcasts 🔉",
    href: "/tags/podcast",
  },
  {
    label: "Islamic 🕌",
    href: "/tags/islamic",
  },
  {
    label: "English 🗣️",
    href: "/tags/english",
  },

  {
    label: "Topics 🏷️",
    href: "/tags",
  },
  {
    label: "Websites 🕸️",
    href: "/tags/website",
  },
  {
    label: "Submit 💁",
    href: "/submit",
  },
];
