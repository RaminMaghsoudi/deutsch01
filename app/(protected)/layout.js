"use client";

import { useEffect } from "react";
import { useContexts } from "../Context";
import Loadings from "@/components/loadings/Loadings";

export default function ProtectedLayout({ children }) {
  const { Loading, setLoading } = useContexts();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, [setLoading]);

  return Loading ? <Loadings /> : children;
}
