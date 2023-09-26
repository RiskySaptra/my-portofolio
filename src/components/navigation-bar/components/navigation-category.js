import { Container, Stack, Box, Link } from "@mui/material";
import { useRouter } from "next/router";

const CategoryNavigation = (props) => {
  const category = [
    {
      page: "Technology",
      href: "/technology",
    },
    // {
    //   page: "News",
    //   href: "/news",
    // },
    // {
    //   page: "Automotive",
    //   href: "/automotive",
    // },
    // {
    //   page: "Design",
    //   href: "/design",
    // },
    // {
    //   page: "Photography",
    //   href: "/photography",
    // },
    // {
    //   page: "Music",
    //   href: "/music",
    // },
    {
      page: "Food",
      href: "/food",
    },
    // {
    //   page: "Politics",
    //   href: "/politics",
    // },
    // {
    //   page: "Review",
    //   href: "/review",
    // },
  ];
  const route = useRouter();
  return (
    <Box position="relative" display="flex" py={1} backgroundColor="#419197">
      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center" spacing={3}>
          {category.map((cat, idx) => {
            return (
              <Link
                key={idx}
                color={
                  `/${route.query.category}` === cat.href
                    ? "#F5FCCD"
                    : "#FFFFFF"
                }
                sx={{
                  textDecoration: "none",
                  fontSize: 17,
                  fontWeight: 500,
                  fontFamily: "poppins",
                }}
                href={"/blog" + cat.href}
              >
                {cat.page}
              </Link>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
};

export default CategoryNavigation;
