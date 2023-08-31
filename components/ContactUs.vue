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
        <div class="container ">
          <div class="card mx-auto pb-4" style="width: fit-content;">
            <!-- <img src="..." class="card-img-top" alt="..."> -->
            <div class="card-body ">
              <h5 class="card-title title">Program Reseller & Dropshiper</h5>
              <p class="card-text" style="width: fit-content;">
                Persyaratan mengikuti program ini cukup mudah, yaitu:
                <ol>
                  <li>Mempromosikan product kami secara online (Dropshiper)</li>
                  <li>Mempromosikan product kami secara online & offline (Dropshiper)</li>
                  <li>Membuat toko online sendiri dimarketplace (Dropshiper & Reseller)</li>
                  <li>Membeli product kami minimal 10 pcs dengan harga termurah (Reseller)</li>
                  <li>Memiliki toko offline / online (Reseller)</li>
                </ol>
              </p>
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
<style lang="scss" scoped>
.contact-us {
    background-image: url('~/assets/image/background-2.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}

.contact-us .description {
    font-size: 20px;
}
.contact-us .col>.card{
    min-height: 350px;
}
</style>
