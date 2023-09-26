import { Stack, Container, Typography, Divider, Link } from "@mui/material";
import { RichText } from "@graphcms/rich-text-react-renderer";

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
        sx={{ backgroundColor: "#419197", borderRadius: 3, color: "white" }}
      >
        <Typography variant="h3" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h6">{subtitle}</Typography>
        <RichText
          content={content.raw}
          renderers={{
            p: ({ children }) => (
              <Typography variant="subtitle1" sx={{ mt: 0 }}>
                {children}
              </Typography>
            ),
          }}
        />
      </Stack>
      <LatestPost {...props} />
    </Container>
  );
}

const LatestPost = (props) => {
  const { posts, slug } = props;
  return (
    <Stack marginTop={3} gap={2}>
      <Typography variant="h5">Latest Posts</Typography>
      <Divider />
      {posts &&
        posts.map((post) => (
          <Stack
            key={post.id}
            sx={{
              backgroundColor: "gray",
              minHeight: "180px",
              padding: 2,
              borderRadius: 3,
            }}
          >
            <Typography variant="h6">{post.title}</Typography>
            <Typography variant="subtitle1">{post.excerpt}</Typography>
            <Link
              color={"#FFFFFF"}
              sx={{
                textDecoration: "none",
                fontSize: 17,
                fontWeight: 500,
                fontFamily: "poppins",
              }}
              href={`/blog/${slug}/${post.slug}`}
            >
              Read more
            </Link>
          </Stack>
        ))}
    </Stack>
  );
};

export async function getStaticPaths() {
  const res = await allPages();
  const pages = res.data.pages;
  return {
    paths: pages.map((page) => ({
      params: { category: page.slug, post: "test" },
    })),
    fallback: true, // false or "blocking"
  };
}

export async function getStaticProps(arg) {
  const param = arg.params.category;
  const page = await allPostsByCategory(param);
  return { props: page?.data?.page };
}

const allPagesQuery = `
query AllPages {
  pages {
    slug
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
      query: allPagesQuery,
    }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return data;
}

const PageByCategory = `
query AllPages($slug: String!) {
  page(where: {slug: $slug}) {
    id
    title
    subtitle
    slug
    content {
      raw
    }
    posts {
      id
      title
      slug
      excerpt
      author {
        name
        title
        biography
      }
    }
  }
}`;

async function allPostsByCategory(param) {
  const data = await fetch(process.env.HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Authorization: "Bearer " + process.env.HYGRAPH_TOKEN,
    },
    body: JSON.stringify({
      query: PageByCategory,
      variables: {
        slug: param,
      },
    }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return data;
}
