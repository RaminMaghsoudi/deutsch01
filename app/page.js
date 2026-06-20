import classess from "./page.module.css";
import { Box } from "@mui/material";
import { FetchAll } from "@/actions";

export default async function Home() {
  const fetchAll = await FetchAll("Laibrary");
  const grouped = Object.values(
    (fetchAll || []).reduce((acc, item) => {
      const key = item.Title?.trim().toLowerCase() || "";
      // if (!acc[key]) {
      //   acc[key] = {
      //     Title: item.Title,
      //     EN: item.EN,
      //     items: [],
      //   };
      // }
      acc[key].push(item);
      return acc;
    }, {}),
  );

  return <Box className={classess.Home}></Box>;
}
