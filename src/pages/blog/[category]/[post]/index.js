import { Stack, Container, Typography, Divider, Link } from "@mui/material";
import { RichText } from "@graphcms/rich-text-react-renderer";
import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Blog(props = {}) {
  const { title, subtitle, content } = props;

  if (!props.title)
    return (
      <Container fixed>
        <Stack marginTop={5} paddingY={2}>
          <Typography variant="h2">Empty</Typography>;
        </Stack>
      </Container>
    );

  return (
    <Container fixed>
      <Stack
        marginTop={10}
        padding={2}
        // sx={{ backgroundColor: "#419197", borderRadius: 3, color: "white" }}
      >
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h6">{subtitle}</Typography>
        <RichText
          content={content.raw}
          renderers={{
            // *********
            // * Links *
            // *********
            a: ({ href, title, children }) => (
              <Link href={href} underline={"always"}>
                {children}
              </Link>
            ),

            // ********
            // * Text *
            // ********
            p: ({ children }) => (
              <Typography sx={{ mt: 1 }}>{children}</Typography>
            ),
            del: ({ children }) => (
              <Typography sx={{ mt: 1, textDecoration: "line-through" }}>
                {children}
              </Typography>
            ),
            em: ({ children }) => (
              <Typography sx={{ mt: 1, fontStyle: "italic" }}>
                {children}
              </Typography>
            ),
            strong: ({ children }) => (
              <Typography sx={{ mt: 1, fontWeight: "bold" }}>
                {children}
              </Typography>
            ),
            b: ({ children }) => (
              <Typography sx={{ mt: 1, fontWeight: "bold" }}>
                {children}
              </Typography>
            ),
            h1: ({ children }) => (
              <Typography gutterBottom sx={{ mt: 2 }} variant={"h1"}>
                {children}
              </Typography>
            ),
            h2: ({ children }) => (
              <Typography gutterBottom sx={{ mt: 2 }} variant={"h2"}>
                {children}
              </Typography>
            ),
            h3: ({ children }) => (
              <Typography gutterBottom sx={{ mt: 2 }} variant={"h3"}>
                {children}
              </Typography>
            ),
            h4: ({ children }) => (
              <Typography gutterBottom sx={{ mt: 2 }} variant={"h4"}>
                {children}
              </Typography>
            ),
            h5: ({ children }) => (
              <Typography gutterBottom sx={{ mt: 2 }} variant={"h5"}>
                {children}
              </Typography>
            ),
            h6: ({ children }) => (
              <Typography gutterBottom sx={{ mt: 2 }} variant={"h6"}>
                {children}
              </Typography>
            ),

            // **********
            // * Tables *
            // **********
            // table: ({ children }) => (
            //   <TableContainer component={Paper} sx={{ mt: 2 }}>
            //     <Table size="small">{children}</Table>
            //   </TableContainer>
            // ),
            // tbody: ({ children }) => <TableBody>{children}</TableBody>,
            // // th: ({ children }) => (<TableHead>{children}</TableHead>),
            // tr: ({ children }) => <TableRow>{children}</TableRow>,
            // td: ({ children }) => (
            //   <TableCell>
            //     <Typography>{children}</Typography>
            //   </TableCell>
            // ),

            // // *********
            // // * Lists *
            // // *********
            // ol: ({ children }) => (
            //   <List
            //     sx={{
            //       listStyleType: "decimal",
            //       mt: 2,
            //       pl: 2,
            //       "& .MuiListItem-root": {
            //         display: "list-item",
            //       },
            //     }}
            //   >
            //     {children}
            //   </List>
            // ),
            // ul: ({ children }) => (
            //   <List
            //     sx={{
            //       listStyleType: "disc",
            //       mt: 2,
            //       pl: 2,
            //       "& .MuiListItem-root": {
            //         display: "list-item",
            //       },
            //     }}
            //   >
            //     {children}
            //   </List>
            // ),
            // li: ({ children, ...props }) => (
            //   <ListItem sx={{ m: 0, p: 0, ml: 2 }} disableGutters>
            //     <ListItemText sx={{ pl: 0.25 }}>{children}</ListItemText>
            //   </ListItem>
            // ),

            // ********
            // * Code *
            // ********
            code_block: ({ children }) => {
              // console.log(children, "test");
              // console.log(children.props.parent.children[0].text, "test");
              // return (
              //   <pre className="line-numbers language-none">
              //     {/* <SyntaxHighlighter language="javascript">
              //       {children}
              //     </SyntaxHighlighter> */}
              //     <code>{children}</code>
              //   </pre>
              // );
              return (
                <SyntaxHighlighter language="javascript">
                  {children.props.parent.children[0].text}
                </SyntaxHighlighter>
              );
              // const match = /language-(\w+)/.exec(className || "");
              // return (
              //   <>
              //     <GlobalStyles
              //       styles={{
              //         code: { color: "inherit", background: "transparent" },
              //       }}
              //     />
              //     <SyntaxHighlighter
              //       style={
              //         theme.palette.mode === "light"
              //           ? lightHighlightStyle
              //           : darkHighlightStyle
              //       }
              //       language={match ? match[1] : undefined}
              //       PreTag="div"
              //     >
              //       {String(children).replace(/\n$/, "")}
              //     </SyntaxHighlighter>
              //   </>
              // );
            },
          }}
        />
      </Stack>
    </Container>
  );
}

export async function getStaticPaths(arg) {
  const res = await allPages();

  //   const pages = res.data.pages;
  return {
    paths: res.data.posts.map((post) => ({
      params: {
        category: post.page.slug,
        post: post.slug,
      },
    })),
    fallback: true, // false or "blocking"
  };
}

export async function getStaticProps(arg) {
  const param = arg.params.post;
  const post = await pagePost(param);
  return { props: post?.data?.post };
}

const allPagesPostQuery = `
query AllPagesPost {
  posts {
    slug
    page {
      slug
    }
  }
}`;

async function allPages(arg) {
  const data = await fetch(process.env.HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Authorization: "Bearer " + process.env.HYGRAPH_TOKEN,
    },
    body: JSON.stringify({
      query: allPagesPostQuery,
    }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return data;
}

const pagePostQuery = `
query PagesPost($slug: String) {
  post(where: {slug: $slug}) {
    title
    tag
    slug
    author {
      name
      biography
      title
    }
    content {
      raw
    }
  }
}`;

async function pagePost(param) {
  const data = await fetch(process.env.HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Authorization: "Bearer " + process.env.HYGRAPH_TOKEN,
    },
    body: JSON.stringify({
      query: pagePostQuery,
      variables: {
        slug: param,
      },
    }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return data;
}
