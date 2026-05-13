import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token");

  if (!token) {
    redirect("/yonetim");
  }

  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: 16,
          right: 16,
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          gap: 12,
          backgroundColor: "#1e293b",
          padding: "8px 16px",
          borderRadius: 8,
          color: "white",
          fontSize: 14,
        }}
      >
        <span>👤 Admin: aykdur</span>
        <form action="/api/admin/logout" method="POST">
          <button
            type="submit"
            style={{
              backgroundColor: "#ef4444",
              color: "white",
              border: "none",
              padding: "4px 12px",
              borderRadius: 6,
              cursor: "pointer",
              fontSize: 13,
            }}
          >
            Çıkış Yap
          </button>
        </form>
      </div>
      {children}
    </div>
  );
}
