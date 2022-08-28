import { ChevronDownIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Collapse,
  Flex,
  Icon,
  IconButton,
  Image,
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

import { capitalize } from "lodash";
import React from "react";
import config from "../../data/SiteConfig";

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
            <Link href={"/"}>
              <Image
                src="/logos/main.png"
                alt={config.siteTitle}
                height="auto"
                width="250px"
              />
            </Link>
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
                href={navItem?.children?.length ? "#" : navItem.href}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {capitalize(navItem.label)}
                {navItem.children && (
                  <Icon color={"#e72c33"} w={5} h={5} as={ChevronDownIcon} />
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
            _groupHover={{ color: "#e72c33" }}
            fontWeight={500}
          >
            {capitalize(label)}
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
        href={children?.length ? "#" : href}
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
                {capitalize(child.label)}
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
    href: "/tag/pin",
    img:
      "https://e7.pngegg.com/pngimages/93/226/png-clipart-pin-pin-thumbnail.png",
  },
  {
    label: "Topics",
    href: "/tags",
  },

  {
    label: "Computer science",
    href: "/tag/cs",
    description:
      "Computer Science is the study of computers and computational systems. Unlike electrical and computer engineers, computer scientists deal mostly with software and software systems; this includes their theory, design, development, and application.",
    children: [
      {
        label: "problem-solving",
        href: "/tag/problem-solving",
      },
      {
        label: "data-structures",
        href: "/tag/data-structures",
      },
      {
        label: "algorithms",
        href: "/tag/algorithms",
      },
      {
        label: "operating System",
        href: "/tag/operating-system",
      },
      {
        label: "networking",
        href: "/tag/networking",
      },
      {
        label: "computer-programming",
        href: "/tag/computer-programming",
      },
      {
        label: "system-design",
        href: "/tag/system-design",
      },
      {
        label: "system-analysis",
        href: "/tag/system-analysis",
      },
      {
        label: "computer-architecture",
        href: "/tag/computer-architecture",
      },
      {
        label: "software-engineering",
        href: "/tag/software-engineering",
      },
      {
        label: "software-architecture",
        href: "/tag/software-architecture",
      },
      {
        label: "software-development",
        href: "/tag/software-development",
      },
      {
        label: "software-systems",
        href: "/tag/software-systems",
      },
      {
        label: "microservice",
        href: "/tag/microservices",
      },
      {
        label: "design patterns",
        href: "/tag/design-patterns",
      },
      {
        label: "solid",
        href: "/tag/solid",
      },
    ],
  },
  {
    label: "FrontEnd",
    href: "/tag/frontend",

    children: [
      {
        label: "HTML",
        href: "/tag/html",
      },
      {
        label: "css",
        href: "/tag/css",
      },
      {
        label: "JS",
        href: "/tag/js",
      },
      {
        label: "react",
        href: "/tag/react",
      },
      {
        label: "angular",
        href: "/tag/angular",
      },
      {
        label: "vuejs",
        href: "/tag/vuejs",
      },
      {
        label: "ui-ux",
        href: "/tag/ui-ux",
      },
      {
        label: "xd",
        href: "/tag/xd",
      },
      {
        label: "figma",
        href: "/tag/figma",
      },
    ],
  },

  {
    label: "BackEnd",
    href: "/tag/backend",
    children: [
      {
        label: "nodejs",
        href: "/tag/nodejs",
      },
      {
        label: "PHP",
        href: "/tag/php",
      },
      {
        label: "Laravel",
        href: "/tag/laravel",
      },
      {
        label: "Wordpress",
        href: "/tag/wordpress",
      },
      {
        label: "c",
        href: "/tag/c",
      },
      {
        label: "c++",
        href: "/tag/cplusplus",
      },
      {
        label: "CSharp",
        href: "/tag/c-sharp",
      },
      {
        label: "python",
        href: "/tag/python",
      },
      {
        label: "GOLANG",
        href: "/tag/golang",
      },
      {
        label: "java",
        href: "/tag/java",
      },
      {
        label: "Ruby",
        href: "/tag/ruby",
      },
    ],
  },
  {
    label: "Database",
    href: "/tag/database",
    children: [
      {
        label: "sql",
        href: "/tag/sql",
      },
      {
        label: "mysql",
        href: "/tag/mysql",
      },
      {
        label: "mongodb",
        href: "/tag/mongodb",
      },
      {
        label: "sqlite",
        href: "/tag/sqlite",
      },
      {
        label: "firebase",
        href: "/tag/firebase",
      },
      {
        label: "oracel",
        href: "/tag/oracel",
      },
    ],
  },
  {
    label: "Mobile",
    href: "/tag/mobile",
    children: [
      {
        label: "react-native",
        href: "/tag/react-native",
      },
      {
        label: "android",
        href: "/tag/android",
      },
      {
        label: "flutter",
        href: "/tag/flutter",
      },
      {
        label: "Kotlin",
        href: "/tag/kotlin",
      },
      {
        label: "Swift",
        href: "/tag/swift",
      },
    ],
  },
  {
    label: "Devops",
    href: "/tag/devops",
    children: [
      {
        label: "git",
        href: "/tag/git",
      },
      {
        label: "linux",
        href: "/tag/linux",
      },
      {
        label: "Jenkins",
        href: "/tag/jenkins",
      },
      {
        label: "containerization",
        href: "/tag/containerization",
      },
      {
        label: "docker",
        href: "/tag/docker",
      },
      {
        label: "Kubernetes",
        href: "/tag/kubernetes",
      },
      {
        label: "cloud",
        href: "/tag/cloud",
      },
      {
        label: "aws",
        href: "/tag/aws",
      },
      {
        label: "azure",
        href: "/tag/azure",
      },
    ],
  },

  {
    label: "Podcasts",
    href: "/tag/podcast",
  },
  {
    label: "Islamic",
    href: "/tag/islamic",
  },
  {
    label: "English",
    href: "/tag/english",
  },

  {
    label: "Websites",
    href: "/tag/website",
  },
  {
    label: "Submit",
    href: "/submit",
  },
];
