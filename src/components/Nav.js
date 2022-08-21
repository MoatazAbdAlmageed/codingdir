import { ArrowForwardIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Grid,
  GridItem,
  IconButton,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup
} from "@chakra-ui/react";

import { Link } from "gatsby";
import React from "react";

export default function Nav() {

  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={4} p={4}>
      <GridItem colSpan={2} h="10">
        <Link href={"/"}>
          <img src="/logos/main.png" />
        </Link>
      </GridItem>
      <GridItem colStart={6} colEnd={6} h="10">
        <Menu closeOnSelect={false}>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            {NAV_ITEMS.map((navItem) => (
              <Link key={navItem.label} href={navItem.href}>
                <MenuOptionGroup
                  defaultValue="asc"
                  title={
                    navItem.label.charAt(0).toUpperCase() +
                    navItem.label.slice(1)
                  }
                  type="radio"
                  color="#f00"
                >
                  {navItem?.children?.map((navChildItem) => (
                    <Link key={navChildItem.label} href={navChildItem.href}>
                      <MenuItemOption value="asc">
                        <ArrowForwardIcon />{" "}
                        {navChildItem.label.charAt(0).toUpperCase() +
                          navChildItem.label.slice(1)}
                      </MenuItemOption>
                    </Link>
                  ))}
                </MenuOptionGroup>
              </Link>
            ))}
          </MenuList>
        </Menu>
      </GridItem>
    </Grid>
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
    description:
      "Computer Science is the study of computers and computational systems. Unlike electrical and computer engineers, computer scientists deal mostly with software and software systems; this includes their theory, design, development, and application.",
    children: [
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
        label: "nodejs",
        href: "/tags/nodejs",
      },
      {
        label: "PHP",
        href: "/tags/php",
      },
      {
        label: "Laravel",
        href: "/tags/laravel",
      },
      {
        label: "Wordpress",
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
