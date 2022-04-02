//retrieve all products

let products = [
    {
        id: 1,
        name: "laptop 1",
        imagePath: "https://www.dell.com/en-my/shop/pcs-desktop-computers/optiplex-3090-micro-desktop-build-your-own/spd/optiplex-3090-micro/ao3090mffgcto_vi",
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
        name: "laptop 2",
        imagePath: "https://www.dell.com/en-my/shop/pcs-desktop-computers/optiplex-3090-micro-desktop-build-your-own/spd/optiplex-3090-micro/ao3090mffgcto_vi",
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
        name: "laptop 3",
        imagePath: "https://www.dell.com/en-my/shop/pcs-desktop-computers/optiplex-3090-micro-desktop-build-your-own/spd/optiplex-3090-micro/ao3090mffgcto_vi",
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

export default function handler(_, res) {
    res.status(200).json(products);
}
