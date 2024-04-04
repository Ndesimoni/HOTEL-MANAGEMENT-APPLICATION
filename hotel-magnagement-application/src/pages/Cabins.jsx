import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import supabase from "../services/supabase";

function Cabins() {
  useEffect(() => {
    async function apirequest() {
      const response = supabase().then((data) => console.log(data));
      return response;
    }
    apirequest();
  }, []);

  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
    </Row>
  );
}

export default Cabins;
