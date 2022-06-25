import { h } from "preact";
import {
  createStyles,
  Container,
  Title,
  Text,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";
import { Illustration } from "./Illustration";

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
  },

  inner: {
    position: "relative",
  },

  image: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    zIndex: 0,
    opacity: 0.75,
  },

  content: {
    paddingTop: 220,
    position: "relative",
    zIndex: 1,

    [theme.fn.smallerThan("sm")]: {
      paddingTop: 120,
    },
  },

  title: {
    color: "#FC4754",
    fontFamily: theme.fontFamily?.toString(),
    textAlign: "center",
    fontWeight: 900,
    fontSize: 38,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: 540,
    margin: "auto",
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5,
  },
  center: {
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
}));

export function ErrorPage() {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  return (
    <div className={classes.center}>
      <Container className={classes.root}>
        <div className={classes.inner}>
          <Illustration className={classes.image} />
          <div className={classes.content}>
            <Title
              style={{ color: theme.colors.dark[0] }}
              className={classes.title}
            >
              Nothing to see here
            </Title>
            <Text
              color="dimmed"
              size="lg"
              align="center"
              className={classes.description}
            >
              Page you are trying to open does not exist. You may have mistyped
              the address, or the page has been moved to another URL. If you
              think this is an error contact support.
            </Text>
            <Group position="center">
              <Button onClick={() => {window.location.href = "/app"}} color={"gray"} size="lg">
                APP PAGE
              </Button>
            </Group>
          </div>
        </div>
      </Container>
    </div>
  );
}
