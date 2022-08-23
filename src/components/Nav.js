import {
  Box,
  Collapse,
  Flex,
  Icon,
  IconButton,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

import React from "react";
import config from "../../data/SiteConfig";

const _ = require("lodash");

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            <Link href={"/"}>🏠 {config.siteTitle}</Link>
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {`${_.kebabCase(navItem.label)}`}
                {navItem.children && (
                  <Flex
                    transition={"all .3s ease"}
                    transform={"translateX(-10px)"}
                    opacity={0.5}
                    _groupHover={{
                      opacity: "100%",
                      transform: "translateX(0)",
                    }}
                    justify={"flex-end"}
                    align={"center"}
                    flex={1}
                  >
                    <Icon color={"red.400"} w={5} h={5} as={ChevronDownIcon} />
                  </Flex>
                )}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("red.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "red.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Pin 📌",
    href: "/tags/pin",
    img:
      "https://e7.pngegg.com/pngimages/93/226/png-clipart-pin-pin-thumbnail.png",
  },
  {
    label: "Computer science 🏫",
    href: "/tags/cs",
    description:
      "Computer Science is the study of computers and computational systems. Unlike electrical and computer engineers, computer scientists deal mostly with software and software systems; this includes their theory, design, development, and application.",
    children: [
      {
        label: "problem-solving",
        href: "/tags/problem-solving",
      },
      {
        label: "data-structures",
        href: "/tags/data-structures",
      },
      {
        label: "algorithms",
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
