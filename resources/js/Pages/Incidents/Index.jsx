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
    const { incidents, filters } = usePage().props;

    const renderStatus = (status) => {
        const base = "inline-block px-2 py-1 text-xs rounded font-medium";
        switch (status) {
            case "open":
                return <span className={`${base} bg-yellow-100 text-yellow-700`}>Open</span>;
            case "in_progress":
                return <span className={`${base} bg-blue-100 text-blue-700`}>Diproses</span>;
            case "resolved":
                return <span className={`${base} bg-green-100 text-green-700`}>Selesai</span>;
            default:
                return <span className={`${base} bg-gray-100 text-gray-600`}>{status}</span>;
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-xl font-semibold text-slate-800">Manajemen Insiden</h2>}
        >
            <Head title="Manajemen Insiden" />

            <Container>
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-slate-900 mb-1">Daftar Insiden</h1>
                    <p className="text-sm text-slate-500">
                        Lihat dan tindak lanjuti laporan insiden keamanan siber dari publik.
                    </p>
                </div>

                {/* Search */}
                <div className="mb-4 flex justify-between items-center">
                    <div className="w-full sm:w-1/2">
                        <Search
                            url={route("incidents.index")}
                            placeholder="Cari berdasarkan judul atau tiket..."
                            filter={filters}
                        />
                    </div>
                </div>

                {/* Table */}
                <Table.Card title="Tabel Insiden">
                    <Table>
                        <Table.Thead>
                            <tr>
                                <Table.Th>#</Table.Th>
                                <Table.Th>Judul</Table.Th>
                                <Table.Th>Tiket</Table.Th>
                                <Table.Th>Status</Table.Th>
                                <Table.Th className="text-center">Aksi</Table.Th>
                            </tr>
                        </Table.Thead>
                        <Table.Tbody>
                            {incidents.data.map((incident, i) => (
                                <tr key={incident.id} className="hover:bg-slate-50">
                                    <Table.Td>{++i + (incidents.current_page - 1) * incidents.per_page}</Table.Td>
                                    <Table.Td>{incident.title}</Table.Td>
                                    <Table.Td className="font-mono text-sm">{incident.ticket_number}</Table.Td>
                                    <Table.Td>{renderStatus(incident.status)}</Table.Td>
                                    <Table.Td>
                                        <div className="flex justify-center gap-2">
                                            <Button
                                                type="info"
                                                url={route("incidents.show", incident.id)}
                                            />
                                            {hasAnyPermission(["incidents delete"]) && (
                                                <Button
                                                    type="delete"
                                                    url={route("incidents.destroy", incident.id)}
                                                />
                                            )}
                                        </div>
                                    </Table.Td>
                                </tr>
                            ))}
                        </Table.Tbody>
                    </Table>
                </Table.Card>

                {/* Pagination */}
                {incidents.last_page > 1 && (
                    <div className="mt-6 flex justify-center">
                        <Pagination links={incidents.links} />
                    </div>
                )}
            </Container>
        </AuthenticatedLayout>
    );
}
