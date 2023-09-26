import { cloneElement } from "react";
import {
  Slide,
  Container,
  useScrollTrigger,
  Toolbar,
  AppBar,
  Stack,
  Box,
  Link,
  Paper,
  InputBase,
  IconButton,
  Switch,
  Hidden,
  Typography,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";

const NavigationLinks = () => {
  const route = useRouter();
  const pages = [
    { page: "Portofolio", href: "/" },
    { page: "Blog", href: "/blog" },
    { page: "Project", href: "/project" },
    { page: "Contact", href: "/contact" },
  ];

  return (
    <Box display="flex" gap={5}>
      {pages.map((page) => (
        <Link
          color={
            `/${route.pathname.split("/")[1]}` === page.href
              ? "#F5FCCD"
              : "#78D6C6"
          }
          key={page.page}
          href={page.href}
          underline="none"
          sx={{
            fontFamily: "poppins",
          }}
        >
          {page.page}
        </Link>
      ))}
    </Box>
  );
};

export default NavigationLinks;
