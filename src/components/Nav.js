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
import { capitalize } from "lodash";
import { withPrefix } from "gatsby";
import config from "../../data/SiteConfig";

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
        label: "design-patterns",
        href: withPrefix("/tag/design-patterns"),
      },
      {
        label: "oop",
        href: withPrefix("/tag/oop"),
      },
      {
        label: "solid",
        href: withPrefix("/tag/solid"),
      },
      {
        label: "clean-code",
        href: withPrefix("/tag/clean-code"),
      },
    ],
  },
  {
    label: "Frontend",
    href: withPrefix("/tag/frontend"),
    children: [
      {
        label: "html",
        href: withPrefix("/tag/html"),
      },
      {
        label: "css",
        href: withPrefix("/tag/css"),
      },
      {
        label: "js",
        href: withPrefix("/tag/javascript"),
      },
      {
        label: "react",
        href: withPrefix("/tag/react"),
      },
      {
        label: "vue",
        href: withPrefix("/tag/vue"),
      },
      {
        label: "angular",
        href: withPrefix("/tag/angular"),
      },
      {
        label: "nextjs",
        href: withPrefix("/tag/nextjs"),
      },
      {
        label: "gatsby",
        href: withPrefix("/tag/gatsby"),
      },
    ],
  },
  {
    label: "Backend",
    href: withPrefix("/tag/backend"),

    children: [
      {
        label: "nodejs",
        href: withPrefix("/tag/nodejs"),
      },
      {
        label: "php",
        href: withPrefix("/tag/php"),
      },
      {
        label: "laravel",
        href: withPrefix("/tag/laravel"),
      },
      {
        label: "python",
        href: withPrefix("/tag/python"),
      },
      {
        label: "django",
        href: withPrefix("/tag/django"),
      },
      {
        label: "java",
        href: withPrefix("/tag/java"),
      },
      {
        label: "spring",
        href: withPrefix("/tag/spring"),
      },
      {
        label: "golang",
        href: withPrefix("/tag/golang"),
      },
    ],
  },
  {
    label: "Database",
    href: withPrefix("/tag/database"),
    children: [
      {
        label: "mysql",
        href: withPrefix("/tag/mysql"),
      },
      {
        label: "postgresql",
        href: withPrefix("/tag/postgresql"),
      },
      {
        label: "mongodb",
        href: withPrefix("/tag/mongodb"),
      },
      {
        label: "firebase",
        href: withPrefix("/tag/firebase"),
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
        label: "flutter",
        href: withPrefix("/tag/flutter"),
      },
      {
        label: "ios",
        href: withPrefix("/tag/ios"),
      },
      {
        label: "android",
        href: withPrefix("/tag/android"),
      },
    ],
  },
  {
    label: "Devops",
    href: withPrefix("/tag/devops"),

    children: [
      {
        label: "docker",
        href: withPrefix("/tag/docker"),
      },
      {
        label: "kubernetes",
        href: withPrefix("/tag/kubernetes"),
      },
      {
        label: "aws",
        href: withPrefix("/tag/aws"),
      },
      {
        label: "git",
        href: withPrefix("/tag/git"),
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

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={"surface.base"}
        color={"text.primary"}
        minH={"64px"}
        py={{ base: 2 }}
        px={{ base: 6 }}
        borderBottom={2}
        borderStyle={"solid"}
        borderColor={"brand.container"}
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
            <Link href={withPrefix("/")} _hover={{ opacity: 0.8 }}>
              <Text 
                fontFamily="mono" 
                fontWeight="900" 
                fontSize="xl" 
                color="brand.primary" 
                letterSpacing="-0.1em"
              >
                {config.siteTitle.toUpperCase().replace(/\s/g, "_")}
              </Text>
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
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem?.children?.length ? "#" : navItem.href}
                fontSize={"11px"}
                fontFamily={"mono"}
                fontWeight="700"
                color={"text.primary"}
                textTransform="uppercase"
                letterSpacing="0.1em"
                _hover={{
                  textDecoration: "none",
                  color: "brand.primary",
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
                bg={"surface.high"}
                p={4}
                borderRadius={"0px"}
                minW={"sm"}
                borderLeft={"4px solid"}
                borderColor={"brand.accent"}
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
      p={3}
      borderRadius={"0px"}
      _hover={{ bg: "surface.low" }}
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


