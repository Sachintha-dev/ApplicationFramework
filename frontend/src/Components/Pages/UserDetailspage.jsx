import { Grid, GridItem } from "@chakra-ui/react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import Sidenav from "../SideNav/SideNav";
import UserDetails from "../USerDetails/UserDetailsComonents";

function UserDetailspage() {
  return (
    <Grid
      templateAreas={`"nav nav""aside main""footer footer"`}
      templateColumns={"240px 1fr"}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <GridItem area={"aside"}>
        <Sidenav />
      </GridItem>
      <GridItem area={"main"}>
        <UserDetails data={data} />
      </GridItem>
      <GridItem area={"footer"}>
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default UserDetailspage;
