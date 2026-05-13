import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import AdminDuzenleClient from "./AdminDuzenleClient";

export default async function AdminDuzenlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const proje = await prisma.prj_projeler.findUnique({
    where: { id: Number(id) },
  });

  if (!proje) notFound();

  return <AdminDuzenleClient proje={proje} />;
}