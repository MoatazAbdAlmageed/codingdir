import {
  ChevronDownIcon,
  ChevronRightIcon,
  CloseIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Collapse,
  Flex,
  Icon,
  IconButton,
  Popover,
  PopoverContent,
  PopoverTrigger,
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

export default function Nav() {
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
                {navItem.label == "Contribute?" ? (
                  <b style={{ color: "#C62828" }}>{navItem.label}</b>
                ) : (
                  navItem.label
                )}
              </Link>
            </PopoverTrigger>
            {/* // TODO:todo */}
            {/* <img src={navItem.img} width="100px" /> */}
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
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {upperCase(label)}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
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
    label: "Pin",
    href: "/tags/pin",
    img:
      "https://e7.pngegg.com/pngimages/93/226/png-clipart-pin-pin-thumbnail.png",
  },
  // {
  //   label: "Lang",
  //   href: "#",
  //   children: [
  //     { label: "Arabic", href: "/عربي" },
  //     {
  //       label: "English",
  //       href: "/english",
  //     },
  //   ],
  // },
  {
    label: "Front-end",
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
    ],
  },
  {
    label: "Back-end",
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
    label: "Database",
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
    label: "Mobile",
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
    label: "Devops",
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
        label: "docker",
        href: "/tags/docker",
      },
      {
        label: "Kubernetes",
        href: "/tags/kubernetes",
      },
    ],
  },

  {
    label: "Podcasts",
    href: "/tags/podcast",
  },
  {
    label: "Islamic",
    href: "/tags/islamic",
  },

  {
    label: "Topics",
    href: "/tags",
  },
  {
    label: "Contribute?",
    href: "/submit-channel",
  },
];
