"use client"

const FAQs = [
  {
    question: "Apa itu Master Online dan bagaimana cara mulai nya?",
    answer: <div className="space-y-3">
      <p>Master Online adalah platform omnichannel retail yang membantu toko dalam mengembangkan penjualan dan mengelola stok barang dengan cepat dan tepat di seluruh channel penjualan. Didukung oleh perusahaan ERP di Indonesia yang berdiri sejak tahun 1988, PT Erasoft Teknologi Indonesia, melengkapi Master Online dengan fitur akuntansi terbaik.</p>
      <p>Coba Master Online gratis selama 14 hari. Untuk cara mulai nya, silahkan klik <span className="font-bold">&quot;Daftar&quot;</span> dan isi data toko. Silahkan tunggu sekitar 1 hari kerja untuk approval dari admin. Setelah mendapat email approval, anda sudah bisa login dan mulai menggunakan Master Online.</p>
    </div>
  },
  {
    question: "Berapa biaya Master Online?",
    answer: <span>Master Online menawarkan 3 opsi berlangganan (subscription), dari yang gratis sampai berbayar. Silahkan lihat detail harga di menu <span className="font-bold">&quot;Pricing&quot;</span>.</span>
  },
  {
    question: "Apabila saya membutuhkan bantuan cara pemakaian atau masalah teknis, saya bisa menghubungi siapa?",
    answer: <div className="space-y-3">
      <p>Silahkan menghubungi kami di no <a href="tel:021 6349318" className="font-bold">021 6349318</a> atau klik logo whatsapp di halaman website ini atau dengan email di <a href="mailto:support@masteronline.co.id" className="font-bold">support@masteronline.co.id</a>.</p>
      <p>Anda juga dapat melihat video tutorial kami di youtube channel kami di <a href="https://www.youtube.com/@masteronlineomnichannel" className="font-bold break-all">https://www.youtube.com/@masteronlineomnichannel</a></p>
    </div>
  },
  {
    question: "Bagaimana cara berhenti berlangganan?",
    answer: <span>Silahkan hubungi customer service kami.</span>
  },
  {
    question: "Apakah saya bisa minta perubahan atau penambahan fitur di Master Online?",
    answer: <div className="space-y-3">
      <p>Tidak bisa. Master Online merupakan platform yang dirancang untuk digunakan secara umum, tetapi Master Online menerima dan sangat mengapresiasi masukan dan usulan melalui customer support kami.</p>
      <p>Apabila setelah dilakukan evaluasi, masukan dan usulan dirasa bermanfaat untuk kepentingan umum, kami akan melakukan revisi versi baru.</p>
    </div>
  },
  {
    question: "Apakah saya bisa menjadi bisnis partner Master Online?",
    answer: <div className="space-y-3">
      <p>Bisa. Kami membuka peluang bisnis bagi anda yang ingin ikut menawarkan atau memperkenalkan Master Online kepada kerabat atau saudara anda.</p>
      <p>Silahkan klik <span className="font-bold">&quot;Partner&quot;</span> untuk informasi lebih detailnya.</p>
    </div>
  },
  {
    question: "Bagaimana dengan keamanan data saya?",
    answer: <span>Data anda akan di-encrypt dan disimpan di server cloud terbaik di dunia.</span>
  },
  {
    question: "Tipe bisnis seperti apa yang cocok menggunakan Master Online?",
    answer: <span>Bisnis dari semua skala dan kategori dapat menggunakan Master Online. Bisnis skala mikro, UMKM, besar hingga principal atau pemegang merk sudah menjadi pelanggan Master Online.</span>
  },
]

export default function FAQ() {
  return (
    <div className="bg-white text-black py-12 md:py-24">
      <div className="container px-8 mx-auto">
        <div className="flex gap-4 md:gap-6 lg:gap-8 flex-col md:flex-row">
          <div className="w-full md:w-5/12">
            <div className="text-base md:text-lg lg:text-2xl font-bold pb-1">Dukungan</div>
            <div className="text-3.5xl md:text-5xl lg:text-6xl font-bold font-rubik pb-8">FAQ</div>
            <div className="text-sm md:text-lg lg:text-xl">Pertanyaan seputar Master Online yang perlu anda ketahui sebelum berlangganan Master Online.</div>
          </div>
          <div className="w-full md:w-7/12">
            {FAQs.map(faq => (
              <div key={faq.question} className="collapse collapse-arrow">
                <input type="checkbox" className="peer" />
                <div className="collapse-title flex items-center text-sm md:text-xl lg:text-2xl font-semibold text-gray-500 peer-checked:text-paprika-900 px-0 pr-10 py-2 md:py-4">{faq.question} </div>
                <div className="collapse-content font-medium text-xs md:text-base lg:text-xl p-0 peer-checked:pb-8">{faq.answer}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}