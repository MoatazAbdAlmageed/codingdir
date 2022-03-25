import { ChevronDownIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Collapse,
  Flex,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Popover,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "gatsby";
import { upperCase } from "lodash";
import React from "react";
import config from "../../data/SiteConfig";

export default function Nav(props) {
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
            <Link
              href="/"
              _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
            >
              {config.siteTitle}
            </Link>
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav zIndex={props.zIndex} />
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav zIndex={props.zIndex} />
      </Collapse>
    </Box>
  );
}

const DesktopNav = (props) => {
  return (
    <Stack direction={"row"} spacing={4} zIndex={props.zIndex}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <Menu size="sm">
              <Link
                target={navItem.label == "Contribute 💁" && "_blank"}
                key={navItem.label}
                py={2}
                href={navItem.href}
                fontSize="14px"
              >
                <MenuButton fontSize="14px">
                  {navItem.label == "Contribute 💁" ? (
                    <MenuItem
                      backgroundColor="orange"
                      color="white"
                      px={4}
                      py={2}
                      size="sm"
                      transition="all 0.2s"
                      borderRadius="md"
                      borderWidth="1px"
                      _hover={{ bg: "gray.400" }}
                      _expanded={{ bg: "blue.400" }}
                      _focus={{ boxShadow: "outline" }}
                      fontSize="14px"
                    >
                      {navItem.label}
                    </MenuItem>
                  ) : (
                    <MenuItem padding={1}>
                      {navItem.label}
                      {navItem.children && (
                        <Icon
                          color="orange"
                          as={ChevronDownIcon}
                          transition={"all .25s ease-in-out"}
                          w={6}
                          h={6}
                        />
                      )}
                    </MenuItem>
                  )}
                </MenuButton>
              </Link>
              {navItem.children && (
                <MenuList fontSize="14px">
                  {navItem.children.map((child) => (
                    <Link size="sm" key={child.label} py={2} href={child.href}>
                      <MenuItem>{upperCase(child.label)}</MenuItem>
                    </Link>
                  ))}
                </MenuList>
              )}
            </Menu>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = (props) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
      zIndex={props.zIndex}
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
            color="orange"
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
                {upperCase(child.label)}
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
    label: "CS 🏫",
    href: "#",
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
    ],
  },
  {
    label: "FrontEnd 🎨",
    href: "#",

    children: [
      {
        label: "HTML",
        subLabel: "HTML description here",
        href: "/tags/html",
      },
      {
        label: "CSS",
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
    href: "#",
    children: [
      {
        label: "nodejs",
        href: "/tags/nodejs",
      },
      {
        label: "php",
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
    href: "#",
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
    href: "#",
    children: [
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
      {
        label: "react-native",
        href: "/tags/react-native",
      },
    ],
  },
  {
    label: "Devops 🖲",
    href: "#",
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
    label: "Contribute 💁",
    href:
      "https://github.com/MoatazAbdAlmageed/YouTube-Channels/blob/main/CONTRIBUTING.md",
  },
];
