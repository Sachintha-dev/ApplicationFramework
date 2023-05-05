import { Grid, GridItem } from "@chakra-ui/react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import Sidebar from "../SideNav/SideNav";

function AlluserAdminLayout() {
  return (
    <Grid templateAreas={`"nav nav""aside main""footer footer"`}>
      <GridItem area={"nav"} bg={"tomato"}>
        <NavBar />
      </GridItem>
      <GridItem area={"aside"} bg={"papayawhip"}>
        <Sidebar />
      </GridItem>
      <GridItem area={"main"} bg={"dodgerblue"}>
        main
      </GridItem>
      <GridItem area={"footer"} bg={"dodgerblue"}>
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default AlluserAdminLayout;
