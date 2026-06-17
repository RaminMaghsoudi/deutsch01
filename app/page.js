import { FetchAll } from "@/actions";
import classess from "./page.module.css";
import Ubens from "@/components/ubens/Ubens";

export default async function Home() {
  const fetchAll = await FetchAll("Laibrary");
  const grouped = Object.values(
    (fetchAll || []).reduce((acc, item) => {
      const key = item.Title?.trim().toLowerCase() || "";
      if (!acc[key]) {
        acc[key] = {
          Title: item.Title,
          EN: item.EN,
          items: [],
        };
      }
      acc[key].items.push(item);
      return acc;
    }, {}),
  );

  return <Ubens grouped={grouped} />;
}
