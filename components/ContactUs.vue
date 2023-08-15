<template>
    <div class="contact-us">
        <div class="bg container p-md-5 p-lg-5 p-sm-5 mb-2">
            <div class="title mb-5">
                Program Reseller & Dropshiper
            </div>
            <div class="description mx-5 text-center">
                <p class="bg-pink p-4 text-white rounded d-block">120+ Reseller Terdaftar</p>
                Kami membuka kesempatan besar untuk Anda yang ingin menjadi Reseller dengan mempromosikan product Kami, Anda
                akan mendapatkan diskon dan harga spesial.
                <div class="button p-3 w-100">
                    <button class="btn btn-custom mx-auto d-block" type="button" data-bs-toggle="modal"
                        data-bs-target="#exampleModal" data-bs-whatever="@mdo">Daftar Sekarang</button>
                </div>
            </div>
        </div>
        <div class="row row-cols-1 row-cols-md-3 mb-3 text-center container mx-auto">
            <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm">
                    <div class="card-header py-3">
                        <h4 class="my-0 fw-normal">Member</h4>
                    </div>
                    <div class="card-body">
                        <h1 class="card-title pricing-card-title">GRATIS<small class="text-muted fw-light"></small></h1>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li>Harga Kompetitif</li>
                            <li>Group Whatsapp</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm">
                    <div class="card-header py-3">
                        <h4 class="my-0 fw-normal">Dropshiper</h4>
                    </div>
                    <div class="card-body">
                        <h1 class="card-title pricing-card-title">Rp 75.000,00<small class="text-muted fw-light">/6 Bulan</small></h1>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li>Harga Kompetitif</li>
                            <li>Terima Katalog Bentuk Excel</li>
                            <li>Group Whatsapp</li>
                            <li>Pelatihan Iklan (FB Ads/Google Ads)</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm border-pink">
                    <div class="card-header py-3 text-white bg-pink border-pink">
                        <h4 class="my-0 fw-normal">Reseller</h4>
                    </div>
                    <div class="card-body">
                        <h1 class="card-title pricing-card-title">SYARAT<small class="text-muted fw-light"></small></h1>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li>Minimal Belanja 5 Pcs</li>
                            <li>Harga Kompetitif</li>
                            <li>Terima Katalog Bentuk Excel</li>
                            <li>Terima Katalog Bentuk Fisik</li>
                            <li>Group Whatsapp</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Daftar Member / Reseller</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">Recipient:</label>
                                <input type="text" class="form-control" id="recipient-name">
                            </div>
                            <div class="mb-3">
                                <label for="message-text" class="col-form-label">Message:</label>
                                <textarea class="form-control" id="message-text"></textarea>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Send message</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.contact-us {
    background-image: url('~/assets/image/background-2.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}

.contact-us .description {
    font-size: 20px;
}
</style>