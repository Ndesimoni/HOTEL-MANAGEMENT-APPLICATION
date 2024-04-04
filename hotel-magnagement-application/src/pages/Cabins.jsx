import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import getCabinApi from "../services/apiCabins";

function Cabins() {
  useEffect(() => {
    const data = getCabinApi().catch((data) => console.log(data));
    return data;
  }, []);

  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
    </Row>
  );
}

export default Cabins;
