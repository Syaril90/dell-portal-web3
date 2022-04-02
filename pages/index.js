import ProductCard from "../components/ProductCard"

let products = [
  {
    id: 1,
    name: "OptiPlex 3090 Small Form Factor Desktop - Build Your Own",
    imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxctBMy1rexNv_Adne8qdqa4F-cVnK6a014TFXrBm_l73d27YzpJfG6NDUFJ3JYlJv_V8&usqp=CAU",
    ratingStar: 5,
    ratingNumber: 333,
    normalPrice: 2222,
    actualPrice: 1111,
    cpu: "Acceleration Use Only Intel® Core™ i3-10105T",
    ram: "8 GB, 1 x 8 GB, DDR4",
    disk: "2.5 inch 500GB 7200 RPM Hard Disk Drive, 128 MB cache",
    windows: "Windows 11 Home Single Language (Dell Technologies recommends Windows 11 Pro for business)",
    description: "Essential commercial micro form factor desktop that delivers best-in-class security and performance. Built secure with TPM 2.0, standard security lock slot, padlock loop, intrusion switch, and SED hard drive."
  },
  {
    id: 2,
    name: "OptiPlex 3090 Small Form Factor Desktop - Build Your Own",
    imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxctBMy1rexNv_Adne8qdqa4F-cVnK6a014TFXrBm_l73d27YzpJfG6NDUFJ3JYlJv_V8&usqp=CAU",
    ratingStar: 5,
    ratingNumber: 333,
    normalPrice: 2222,
    actualPrice: 1111,
    cpu: "Acceleration Use Only Intel® Core™ i3-10105T",
    ram: "8 GB, 1 x 8 GB, DDR4",
    disk: "2.5 inch 500GB 7200 RPM Hard Disk Drive, 128 MB cache",
    windows: "Windows 11 Home Single Language (Dell Technologies recommends Windows 11 Pro for business)",
    description: "Essential commercial micro form factor desktop that delivers best-in-class security and performance. Built secure with TPM 2.0, standard security lock slot, padlock loop, intrusion switch, and SED hard drive."
  },
  {
    id: 3,
    name: "OptiPlex 3090 Small Form Factor Desktop - Build Your Own",
    imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxctBMy1rexNv_Adne8qdqa4F-cVnK6a014TFXrBm_l73d27YzpJfG6NDUFJ3JYlJv_V8&usqp=CAU",
    ratingStar: 5,
    ratingNumber: 333,
    normalPrice: 2222,
    actualPrice: 1111,
    cpu: "Acceleration Use Only Intel® Core™ i3-10105T",
    ram: "8 GB, 1 x 8 GB, DDR4",
    disk: "2.5 inch 500GB 7200 RPM Hard Disk Drive, 128 MB cache",
    windows: "Windows 11 Home Single Language (Dell Technologies recommends Windows 11 Pro for business)",
    description: "Essential commercial micro form factor desktop that delivers best-in-class security and performance. Built secure with TPM 2.0, standard security lock slot, padlock loop, intrusion switch, and SED hard drive."
  }, {
    id: 4,
    name: "OptiPlex 3090 Small Form Factor Desktop - Build Your Own",
    imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxctBMy1rexNv_Adne8qdqa4F-cVnK6a014TFXrBm_l73d27YzpJfG6NDUFJ3JYlJv_V8&usqp=CAU",
    ratingStar: 5,
    ratingNumber: 333,
    normalPrice: 2222,
    actualPrice: 1111,
    cpu: "Acceleration Use Only Intel® Core™ i3-10105T",
    ram: "8 GB, 1 x 8 GB, DDR4",
    disk: "2.5 inch 500GB 7200 RPM Hard Disk Drive, 128 MB cache",
    windows: "Windows 11 Home Single Language (Dell Technologies recommends Windows 11 Pro for business)",
    description: "Essential commercial micro form factor desktop that delivers best-in-class security and performance. Built secure with TPM 2.0, standard security lock slot, padlock loop, intrusion switch, and SED hard drive."
  }, {
    id: 5,
    name: "OptiPlex 3090 Small Form Factor Desktop - Build Your Own",
    imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxctBMy1rexNv_Adne8qdqa4F-cVnK6a014TFXrBm_l73d27YzpJfG6NDUFJ3JYlJv_V8&usqp=CAU",
    ratingStar: 5,
    ratingNumber: 333,
    normalPrice: 2222,
    actualPrice: 1111,
    cpu: "Acceleration Use Only Intel® Core™ i3-10105T",
    ram: "8 GB, 1 x 8 GB, DDR4",
    disk: "2.5 inch 500GB 7200 RPM Hard Disk Drive, 128 MB cache",
    windows: "Windows 11 Home Single Language (Dell Technologies recommends Windows 11 Pro for business)",
    description: "Essential commercial micro form factor desktop that delivers best-in-class security and performance. Built secure with TPM 2.0, standard security lock slot, padlock loop, intrusion switch, and SED hard drive."
  }, {
    id: 6,
    name: "OptiPlex 3090 Small Form Factor Desktop - Build Your Own",
    imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxctBMy1rexNv_Adne8qdqa4F-cVnK6a014TFXrBm_l73d27YzpJfG6NDUFJ3JYlJv_V8&usqp=CAU",
    ratingStar: 5,
    ratingNumber: 333,
    normalPrice: 2222,
    actualPrice: 1111,
    cpu: "Acceleration Use Only Intel® Core™ i3-10105T",
    ram: "8 GB, 1 x 8 GB, DDR4",
    disk: "2.5 inch 500GB 7200 RPM Hard Disk Drive, 128 MB cache",
    windows: "Windows 11 Home Single Language (Dell Technologies recommends Windows 11 Pro for business)",
    description: "Essential commercial micro form factor desktop that delivers best-in-class security and performance. Built secure with TPM 2.0, standard security lock slot, padlock loop, intrusion switch, and SED hard drive."
  }, {
    id: 7,
    name: "OptiPlex 3090 Small Form Factor Desktop - Build Your Own",
    imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxctBMy1rexNv_Adne8qdqa4F-cVnK6a014TFXrBm_l73d27YzpJfG6NDUFJ3JYlJv_V8&usqp=CAU",
    ratingStar: 5,
    ratingNumber: 333,
    normalPrice: 2222,
    actualPrice: 1111,
    cpu: "Acceleration Use Only Intel® Core™ i3-10105T",
    ram: "8 GB, 1 x 8 GB, DDR4",
    disk: "2.5 inch 500GB 7200 RPM Hard Disk Drive, 128 MB cache",
    windows: "Windows 11 Home Single Language (Dell Technologies recommends Windows 11 Pro for business)",
    description: "Essential commercial micro form factor desktop that delivers best-in-class security and performance. Built secure with TPM 2.0, standard security lock slot, padlock loop, intrusion switch, and SED hard drive."
  }
]


export default function Home() {
  return (
    <div className="h-screen w-full overflow-hidden overflow-y-scroll">
      <div className="p-5 flex flex-wrap space-x-3">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  )
}
