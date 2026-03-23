import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      primary: "#ffb3af",
      accent: "#ff0033",
      container: "#ff5357",
      onPrimary: "#68000e",
      onContainer: "#5c000b",
      outline: "#b08784",
    },
    surface: {
      base: "#131316",
      low: "#1b1b1e",
      high: "#2a2a2d",
      highest: "#353438",
      lowest: "#0e0e11",
      bright: "#39393c",
    },
    text: {
      primary: "#e4e1e6",
      secondary: "#e9bcb9",
      muted: "#718096",
      dim: "#303033",
    },
    accent: {
      cyan: "#6ed4f1",
      cyanContainer: "#2b9db9",
    }
  },
  fonts: {
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
    mono: "'JetBrains Mono', monospace",
  },
  radii: {
    none: "0px",
    xs: "0px",
    sm: "0px",
    base: "0px",
    md: "0px",
    lg: "0px",
    xl: "0px",
    "2xl": "0px",
    "3xl": "0px",
    full: "0px",
  },
  shadows: {
    outline: "0 0 0 1px #ffb3af",
    subtle: "0 4px 12px rgba(0, 0, 0, 0.05)",
    crimson: "0 0 10px rgba(255, 0, 51, 0.04)",
  },
  styles: {
    global: (props) => ({
      body: {
        bg: "surface.base",
        color: "text.primary",
        fontSize: "sm",
        fontWeight: "400",
      },
      "::selection": {
        bg: "brand.container",
        color: "brand.onContainer",
      },
      "*:focus": {
        boxShadow: "0 0 0 1px #ffb3af !important",
      },
      "*": {
        borderColor: "surface.highest",
      }
    }),
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "0px",
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        transition: "all 0.2s ease-in-out",
      },
      variants: {
        solid: {
          bg: "brand.container",
          color: "brand.onContainer",
          _hover: {
            bg: "brand.primary",
            color: "brand.onPrimary",
          },
        },
        ghost: {
          borderLeft: "0px solid transparent",
          _hover: {
            borderLeft: "4px solid #ffb3af",
            bg: "surface.low",
            color: "brand.primary",
          },
        },
        outline: {
          borderColor: "brand.outline",
          color: "brand.outline",
          _hover: {
            bg: "surface.low",
            borderColor: "brand.primary",
            color: "brand.primary",
          }
        }
      },
    },
    Link: {
      baseStyle: {
        transition: "all 0.2s ease-in-out",
        _hover: {
          textDecoration: "none",
          color: "brand.primary",
        },
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: "heading",
        letterSpacing: "-0.04em",
        fontWeight: "900",
        textTransform: "uppercase",
      },
    },
    Text: {
      variants: {
        mono: {
          fontFamily: "mono",
          fontSize: "xs",
          letterSpacing: "0.1em",
        }
      }
    }
  },
});

export default theme;
