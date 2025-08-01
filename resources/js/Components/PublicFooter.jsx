import React from "react";

export default function PublicFooter() {
    return (
        <footer className="bg-neutral-800 text-white py-8">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Kolom Pertama: Logo dan Informasi Kontak */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <img
                        src="/logo-pkp2.png"
                        alt="Logo Kementerian Perumahan dan Kawasan Permukiman"
                        className="h-14 mb-3"
                    />
                    <p className="text-base font-semibold mb-1">
                        CSIRT KEMENTERIAN PERUMAHAN DAN KAWASAN PERMUKIMAN
                    </p>
                    <p className="text-sm mb-1">
                        Pusat Data dan Informasi Kementerian PKP
                    </p>
                    <p className="text-sm mb-1">
                        Jl. Wijaya I No.57-59, RT.9/RW.5, Petogogan, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12170
                    </p>
                    <p className="text-sm">
                        Alamat Surel: <a href="mailto:pkpcsirt@pkp.go.id" className="hover:underline">pkpcsirt@pkp.go.id</a>
                    </p>
                </div>

                {/* Kolom Kedua: Menu Navigasi Footer */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h3 className="font-bold text-lg mb-3">Navigasi</h3>
                    <ul className="space-y-1 text-base">
                        <li><a href="#" className="hover:underline">Peta Situs</a></li>
                        <li><a href="#" className="hover:underline">Hubungi Kami</a></li>
                        <li><a href="#" className="hover:underline">FAQ</a></li>
                    </ul>
                </div>

                {/* Kolom Baru: Dokumen Keamanan Khusus */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h3 className="font-bold text-lg mb-3">Dokumen Keamanan Khusus</h3>
                    <ul className="space-y-1 text-base">
                        <li>
                            <a href="/storage/rfc2350.pdf" download="RFC2350_Informasi_Tim_CSIRT.pdf" className="text-white hover:underline">
                                RFC 2350 - Informasi Tim CSIRT
                            </a>
                        </li>
                        <li>
                            <a href="/storage/public-key.asc" download="public-key-pgp.asc" className="text-white hover:underline">
                                Unduh Public Key PGP
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Kolom Keempat: Ikuti Kami (Media Sosial) */}
                <div className="flex flex-col items-center md:items-end text-center md:text-right">
                    <h3 className="font-bold text-lg mb-3">Ikuti Kami</h3>
                    <div className="flex space-x-3">
                        <a href="https://pkp.go.id/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-globe" viewBox="0 0 16 16">
                                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5zm2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
                            </svg>
                        </a>
                        <a href="https://www.youtube.com/@KementerianPKP" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/kementerianpkp/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-center text-sm mt-6">
                <p>© {new Date().getFullYear()} CSIRT Kementerian Perumahan dan Kawasan Permukiman</p>
                <p className="mt-1 text-red-400 italic">Merah Putih • Aman • Responsif</p>
            </div>
        </footer>
    );
}