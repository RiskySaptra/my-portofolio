import { Stack, Box, Container } from "@mui/material";
export default function Blog(props) {
  // console.log(props);
  return (
    <Container fixed>
      <Stack marginTop={10}>
        <Box
          sx={{
            width: "full",
            height: "35rem",
            background: "gray",
            borderRadius: "12px",
          }}
        >
          blog by category
        </Box>
      </Stack>
    </Container>
  );
}

export async function getStaticProps() {
  const res = await allCategory();
  const category = res.data.__type.enumValues;
  return { props: { category } };
}

const enumList = `
query enumList($name: String!){
  __type(name: $name) {
    enumValues {
      name
      description
    }
  }
}`;

async function allCategory() {
  const data = await fetch(process.env.HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Authorization: "Bearer " + process.env.HYGRAPH_TOKEN,
    },
    body: JSON.stringify({
      query: enumList,
      variables: {
        name: "Tag",
      },
    }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return data;
}
