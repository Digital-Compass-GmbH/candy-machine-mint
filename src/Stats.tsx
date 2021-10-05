import { Container, Grid } from "@material-ui/core";
import styled from "styled-components";
import LinearProgressWithLabel from "./LinearProgressWithLabel";

const StatsContainer = styled(Container)`
margin-top: 40px;
margin-bottom: 40px;
text-align: center;
`;

export interface StatsProps {
  walletAdress: string;
  balance: string;
  currentBalance: number;
  mintPrice: number;
  total: number;
  remaining: number;
  redeemed: number;
}

const Stats = (props: StatsProps) => {

  return (
    <StatsContainer>
      <h3>Stats:</h3>
      <Grid container spacing={3}>
        <Grid item sm={4}>
          <p>Total Available: {props.total}</p>
        </Grid>
        <Grid item sm={4}>
          <p>Minted: {props.redeemed}</p>
        </Grid>
        <Grid item sm={4}>
          <p>Remaining: {props.remaining}</p>
        </Grid>
      </Grid>
      <LinearProgressWithLabel value={props.redeemed / props.total * 100} color="secondary" />
    </StatsContainer>
  );
};

export default Stats;
