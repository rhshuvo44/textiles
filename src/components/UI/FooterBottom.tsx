"use client";

import { useEffect, useState } from "react";

const FooterBottom = () => {
  const [timestamp, setTimestamp] = useState<number | null>(null);

  useEffect(() => {
    setTimestamp(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer bg-neutral text-neutral-content border-t-2 border-t-slate-600 items-center justify-center px-10 py-4">
      <p>Copyright ©{timestamp}- Designed By Ripon.</p>
    </footer>
  );
};

export default FooterBottom;
