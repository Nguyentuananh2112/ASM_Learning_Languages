"use client";

import dynamic from "next/dynamic";

// Tách dynamic ra khỏi server component!
const App = dynamic(() => import("@/app/admin/app"), { ssr: false });

export default function AdminAppWrapper() {
  return <App />;
}
