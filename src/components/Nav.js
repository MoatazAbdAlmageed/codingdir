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
import { ChevronDownIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

import React from "react";
import { capitalize } from "lodash";
import { withPrefix } from "gatsby";
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
            <Link href={withPrefix("/")}>
              <Image
                src={withPrefix("/logos/main.png")}
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
    label: "CS",
    href: withPrefix("/tag/cs"),
    description:
      "Computer Science is the study of computers and computational systems. Unlike electrical and computer engineers, computer scientists deal mostly with software and software systems; this includes their theory, design, development, and application.",
    children: [
      {
        label: "problem-solving",
        href: withPrefix("/tag/problem-solving"),
      },
      {
        label: "data-structures",
        href: withPrefix("/tag/data-structures"),
      },
      {
        label: "algorithms",
        href: withPrefix("/tag/algorithms"),
      },
      {
        label: "operating System",
        href: withPrefix("/tag/operating-system"),
      },
      {
        label: "networking",
        href: withPrefix("/tag/networking"),
      },
      {
        label: "computer-programming",
        href: withPrefix("/tag/computer-programming"),
      },
      {
        label: "system-design",
        href: withPrefix("/tag/system-design"),
      },
      {
        label: "system-analysis",
        href: withPrefix("/tag/system-analysis"),
      },
      {
        label: "computer-architecture",
        href: withPrefix("/tag/computer-architecture"),
      },
      {
        label: "software-engineering",
        href: withPrefix("/tag/software-engineering"),
      },
      {
        label: "software-architecture",
        href: withPrefix("/tag/software-architecture"),
      },
      {
        label: "software-development",
        href: withPrefix("/tag/software-development"),
      },
      {
        label: "software-systems",
        href: withPrefix("/tag/software-systems"),
      },
      {
        label: "microservice",
        href: withPrefix("/tag/microservices"),
      },
      {
        label: "design patterns",
        href: withPrefix("/tag/design-patterns"),
      },
      {
        label: "solid",
        href: withPrefix("/tag/solid"),
      },
    ],
  },
  {
    label: "FrontEnd",
    href: withPrefix("/tag/frontend"),

    children: [
      {
        label: "HTML",
        href: withPrefix("/tag/html"),
      },
      {
        label: "css",
        href: withPrefix("/tag/css"),
      },
      {
        label: "javascript",
        href: withPrefix("/tag/javascript"),
      },
      {
        label: "react",
        href: withPrefix("/tag/react"),
      },
      {
        label: "angular",
        href: withPrefix("/tag/angular"),
      },
      {
        label: "vuejs",
        href: withPrefix("/tag/vuejs"),
      },
      {
        label: "ui-ux",
        href: withPrefix("/tag/ui-ux"),
      },
      {
        label: "xd",
        href: withPrefix("/tag/xd"),
      },
      {
        label: "figma",
        href: withPrefix("/tag/figma"),
      },
    ],
  },

  {
    label: "BackEnd",
    href: withPrefix("/tag/backend"),
    children: [
      {
        label: "nodejs",
        href: withPrefix("/tag/nodejs"),
      },
      {
        label: "PHP",
        href: withPrefix("/tag/php"),
      },
      {
        label: "Laravel",
        href: withPrefix("/tag/laravel"),
      },
      {
        label: "Wordpress",
        href: withPrefix("/tag/wordpress"),
      },
      {
        label: "c",
        href: withPrefix("/tag/c"),
      },
      {
        label: "c++",
        href: withPrefix("/tag/cplusplus"),
      },
      {
        label: "CSharp",
        href: withPrefix("/tag/c-sharp"),
      },
      {
        label: "python",
        href: withPrefix("/tag/python"),
      },
      {
        label: "GOLANG",
        href: withPrefix("/tag/golang"),
      },
      {
        label: "java",
        href: withPrefix("/tag/java"),
      },
      {
        label: "Ruby",
        href: withPrefix("/tag/ruby"),
      },
    ],
  },
  {
    label: "Database",
    href: withPrefix("/tag/database"),
    children: [
      {
        label: "sql",
        href: withPrefix("/tag/sql"),
      },
      {
        label: "mysql",
        href: withPrefix("/tag/mysql"),
      },
      {
        label: "mongodb",
        href: withPrefix("/tag/mongodb"),
      },
      {
        label: "sqlite",
        href: withPrefix("/tag/sqlite"),
      },
      {
        label: "firebase",
        href: withPrefix("/tag/firebase"),
      },
      {
        label: "oracel",
        href: withPrefix("/tag/oracel"),
      },
    ],
  },
  {
    label: "Mobile",
    href: withPrefix("/tag/mobile"),
    children: [
      {
        label: "react-native",
        href: withPrefix("/tag/react-native"),
      },
      {
        label: "android",
        href: withPrefix("/tag/android"),
      },
      {
        label: "flutter",
        href: withPrefix("/tag/flutter"),
      },
      {
        label: "Kotlin",
        href: withPrefix("/tag/kotlin"),
      },
      {
        label: "Swift",
        href: withPrefix("/tag/swift"),
      },
    ],
  },
  {
    label: "Devops",
    href: withPrefix("/tag/devops"),
    children: [
      {
        label: "git",
        href: withPrefix("/tag/git"),
      },
      {
        label: "linux",
        href: withPrefix("/tag/linux"),
      },
      {
        label: "Jenkins",
        href: withPrefix("/tag/jenkins"),
      },
      {
        label: "containerization",
        href: withPrefix("/tag/containerization"),
      },
      {
        label: "docker",
        href: withPrefix("/tag/docker"),
      },
      {
        label: "Kubernetes",
        href: withPrefix("/tag/kubernetes"),
      },
      {
        label: "cloud",
        href: withPrefix("/tag/cloud"),
      },
      {
        label: "aws",
        href: withPrefix("/tag/aws"),
      },
      {
        label: "azure",
        href: withPrefix("/tag/azure"),
      },
    ],
  },

  {
    label: "Podcasts",
    href: withPrefix("/tag/podcast"),
  },
  {
    label: "Islamic",
    href: withPrefix("/tag/islamic"),
  },
  {
    label: "English",
    href: withPrefix("/tag/english"),
  },

  {
    label: "Websites",
    href: withPrefix("/tag/website"),
  },
  {
    label: "Submit",
    href: withPrefix("/submit"),
  },
];
