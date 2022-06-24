import { Center, Paper, Popper, PopperProps } from "@mantine/core";
import { h } from "preact";
interface TooltipProps extends PopperProps<HTMLDivElement> {}
export const Tooltip = (props: TooltipProps) => {
  return (
      <Popper
        arrowStyle={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
        {...props}
      >
        <Paper
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        >
          <Center
            style={{ height: 40, paddingLeft: "10px", paddingRight: "10px" }}
          >
            {props.children}
          </Center>
        </Paper>
      </Popper>
  );
};
