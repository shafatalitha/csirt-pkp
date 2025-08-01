import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Container from "@/Components/Container";
import Table from "@/Components/Table";
import Button from "@/Components/Button";
import Pagination from "@/Components/Pagination";
import Search from "@/Components/Search";
import { Head, usePage } from "@inertiajs/react";
import hasAnyPermission from "@/Utils/Permissions";

export default function Index({ auth }) {
    const { guides, filters } = usePage().props;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-xl font-semibold text-slate-800">Manajemen Panduan</h2>}
        >
            <Head title="Panduan" />

            <Container>
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-slate-900 mb-1">Daftar Panduan Keamanan</h1>
                    <p className="text-sm text-slate-500">Kelola dokumen panduan, SOP, dan file edukatif terkait keamanan siber.</p>
                </div>

                {/* Action & Search */}
                <div className="mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    {hasAnyPermission(["guides create"]) && (
                        <Button type="add" url={route("guides.create")}>
                            Tambah Panduan
                        </Button>
                    )}
                    <div className="w-full sm:w-1/2">
                        <Search
                            url={route("guides.index")}
                            placeholder="Cari panduan berdasarkan judul..."
                            filter={filters}
                        />
                    </div>
                </div>

                {/* Table */}
                <Table.Card title="Tabel Panduan">
                    <Table>
                        <Table.Thead>
                            <tr>
                                <Table.Th>#</Table.Th>
                                <Table.Th>Judul</Table.Th>
                                <Table.Th>Penulis</Table.Th>
                                <Table.Th>Status</Table.Th>
                                <Table.Th className="text-center">Aksi</Table.Th>
                            </tr>
                        </Table.Thead>
                        <Table.Tbody>
                            {guides.data.length > 0 ? (
                                guides.data.map((guide, index) => (
                                    <tr key={guide.id} className="hover:bg-slate-50">
                                        <Table.Td>{index + 1 + (guides.current_page - 1) * guides.per_page}</Table.Td>
                                        <Table.Td>{guide.title}</Table.Td>
                                        <Table.Td>{guide.author?.name || "-"}</Table.Td>
                                        <Table.Td>
                                            <span className={`px-2 py-1 rounded text-xs font-semibold ${guide.is_active ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-600"}`}>
                                                {guide.is_active ? "Aktif" : "Nonaktif"}
                                            </span>
                                        </Table.Td>
                                        <Table.Td>
                                            <div className="flex justify-center gap-2">
                                                {hasAnyPermission(["guides edit"]) && (
                                                    <Button type="edit" url={route("guides.edit", guide.id)} />
                                                )}
                                                {hasAnyPermission(["guides delete"]) && (
                                                    <Button type="delete" url={route("guides.destroy", guide.id)} />
                                                )}
                                            </div>
                                        </Table.Td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <Table.Td colSpan="5" className="text-center text-slate-500 py-6">
                                        Belum ada data panduan.
                                    </Table.Td>
                                </tr>
                            )}
                        </Table.Tbody>
                    </Table>
                </Table.Card>

                {/* Pagination */}
                {guides.last_page > 1 && (
                    <div className="mt-6 flex justify-center">
                        <Pagination links={guides.links} />
                    </div>
                )}
            </Container>
        </AuthenticatedLayout>
    );
}
