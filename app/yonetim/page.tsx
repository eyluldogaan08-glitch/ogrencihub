"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function YonetimPage() {
  const [creds, setCreds] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      body: JSON.stringify(creds),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      router.push("/admin"); // giriş başarılı → panele yönlendir
    } else {
      setError("Kullanıcı adı veya şifre hatalı!");
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.title}>Yönetim Girişi</h2>

        <input
          style={styles.input}
          placeholder="Kullanıcı adı"
          onChange={(e) =>
            setCreds((p) => ({ ...p, username: e.target.value }))
          }
        />
        <input
          style={styles.input}
          type="password"
          placeholder="Şifre"
          onChange={(e) =>
            setCreds((p) => ({ ...p, password: e.target.value }))
          }
        />

        {error && <p style={styles.error}>{error}</p>}

        <button style={styles.button} onClick={handleLogin} disabled={loading}>
          {loading ? "Giriş yapılıyor..." : "Giriş Yap"}
        </button>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f1f5f9",
  },
  box: {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    width: "320px",
  },
  title: {
    textAlign: "center",
    marginBottom: "8px",
    color: "#1e293b",
  },
  input: {
    padding: "10px 14px",
    borderRadius: "8px",
    border: "1px solid #cbd5e1",
    fontSize: "14px",
    outline: "none",
  },
  button: {
    padding: "12px",
    backgroundColor: "#3b82f6",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "15px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "13px",
    textAlign: "center",
  },
};
