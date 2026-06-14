import { FetchAll } from "@/actions";
import classess from "./page.module.css";
import Ubens from "@/components/ubens/Ubens";

export default async function Home() {
  const fetchAll = await FetchAll("Laibrary");
  return <Ubens fetchAll={fetchAll} />;
}
