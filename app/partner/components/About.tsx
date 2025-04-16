import {
  LocalOfferOutlined,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";

const PARTNERS = [
  {
    id: "sp",
    title: "Sales Partner (SP)",
    icon: LocalOfferOutlined,
    benefits: [
      "Anda akan mendapatkan website replica MasterOnline dgn ID Anda sendiri, yg dapat anda promosikan lewat sosmed dan setiap Customer yg mendaftar akan otomatis menjadi Customer Anda juga.",
      "Mendapatkan Komisi Penjualan dari MO.",
    ],
  },
  {
    id: "csp",
    title: "Certified Sales Partner (CSP)",
    icon: WorkspacePremiumOutlined,
    benefits: [
      "Anda otomatis mendapatkan semua fasilitas sebagai Sales Partner.",
      "Mendapatkan Training khusus dan SERTIFIKASI dari MO.",
      "Anda akan melakukan SERVICE KUNJUNGAN kepada Customer MO dalam hal, Training, customer Support, dsb.",
      "Mendapatkan PENGHASILAN dari service yang Anda lakukan.",
    ],
  },
];

type PartnerProps = {
  partner: any;
};

function Partner({ partner }: PartnerProps) {
  const Icon = partner.icon;
  return (
    <div className="flex-1 space-y-4">
      <div className="flex gap-4 items-center">
        <div className="flex-none p-4 aspect-square bg-white border-2 border-paprika-900 shadow-xl shadow-paprika-900 rounded">
          <Icon className="text-paprika-900 text-2xl" />
        </div>
        <div className="flex-1 font-black text-2xl">{partner.title}</div>
      </div>
      <div className="space-y-2">
        <div className="font-bold">Benefit menjadi {partner.title}</div>
        <div className="space-y-4">
          {partner.benefits.map((c: any, i: number) => (
            <div className="border-l-4 border-paprika-900 pl-4" key={i}>
              {c}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="bg-white text-black">
      <div className="container mx-auto px-8 py-32 space-y-16">
        <div>
          <div className="font-bold leading-loose">Pendaftaran Partner</div>
          <div className="font-black text-6.5xl">
            Bergabunglah Bersama Kami Dan Raih Kesuksesan Bersama
          </div>
        </div>
        <div className="space-y-8">
          <div>
            Master Online memberikan kesempatan kepada Anda untuk menjadi BISNIS
            PARTNER, dengan 2 jenis Bisnis Partner yg dapat anda pilih:
          </div>
          <div className="flex">
            {PARTNERS.map((c) => (
              <Partner key={c.id} partner={c} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
