const api = {
  produk_utama: [
    {
      id: 1,
      nama: "Sepatu Lari",
      deskripsi: "Nyaman dan cocok untuk pelari pemula maupun profesional.",
      gambar:
        "https://tse3.mm.bing.net/th/id/OIP.0a9hSlx4FXzRBiu4ZebqlwHaHa?pid=Api&P=0&h=180",
      link: "sepatu-lari.html",
    },
    {
      id: 2,
      nama: "Sepatu Gunung",
      deskripsi: "Desain grip kuat untuk medan berat dan lintasan pegunungan.",
      gambar:
        "https://ds393qgzrxwzn.cloudfront.net/resize/m720x480/cat1/img/images/0/BGtTIXqO1G.jpg",
      link: "sepatu-gunung.html",
    },
  ],
  sepatu_lari: [
    {
      id: 11,
      nama: "Sepatu Adizero Adios Pro 4",
      gambar:
        "https://www.adidas.co.id/media/catalog/product/j/r/jr1267_2_footwear_photography_side20lateral20view_grey.jpg",
      ukuran: [38, 39, 40, 41, 42],
      deskripsi: "Ringan dan fleksibel.",
      thumbnail: [
        "https://www.adidas.co.id/media/catalog/product/j/r/jr1267_2_footwear_photography_side20lateral20view_grey.jpg",
        "https://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/j/r/jr1267_6_footwear_photography_front20lateral20top20view_grey.jpg",
        "https://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/j/r/jr1267_9_footwear_photography_detail20view202_grey.jpg",
        "https://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/j/r/jr1267_7_footwear_photography_back20lateral20top20view_grey.jpg",
      ],
      harga: "Rp. 4.000.000",
    },
    {
      id: 12,
      nama: "Sepatu Galaxy 6",
      gambar:
        "https://www.adidas.co.id/media/catalog/product/g/w/gw4131_2_footwear_photography_side20lateral20view_grey.jpg",
      ukuran: [38, 39, 40, 41, 42],
      deskripsi: "Ringan dan fleksibel.",
      thumbnail: [
        "https://www.adidas.co.id/media/catalog/product/g/w/gw4131_2_footwear_photography_side20lateral20view_grey.jpg",
        "https://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/g/w/gw4131_9_footwear_photography_detail_view_2_grey.jpg",
        "https://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/g/w/gw4131_5_footwear_photography_side_medial_center_view_grey.jpg",
        "https://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/g/w/gw4131_7_footwear_photography_back_lateral_top_view_grey.jpg",
      ],
      harga: "Rp. 595.000",
    },
    {
      id: 13,
      nama: "Supernova Running Comfortgli",
      gambar:
        "https://www.adidas.co.id/media/catalog/product/j/q/jq1760_2_footwear_photography_side20lateral20view_grey.jpg",
      ukuran: [38, 39, 40, 41, 42],
      deskripsi: "Ringan dan fleksibel.",
      thumbnail: [
        "https://www.adidas.co.id/media/catalog/product/j/q/jq1760_2_footwear_photography_side20lateral20view_grey.jpg",
        "https://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/j/q/jq1760_9_footwear_photography_detail20view202_grey.jpg",
        "https://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/j/q/jq1760_8_footwear_photography_detail20view201_grey.jpg",
        "https://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/j/q/jq1760_7_footwear_photography_back20lateral20top20view_grey.jpg",
      ],
      harga: "Rp. 1.900.000",
    },
    {
      id: 14,
      nama: "Sepatu Questar",
      gambar:
        "https://www.adidas.co.id/media/catalog/product/g/y/gy2261_sl_ecom.jpg",
      ukuran: [38, 39, 40, 41, 42],
      deskripsi: "Ringan dan fleksibel.",
      thumbnail: [
        "https://www.adidas.co.id/media/catalog/product/g/y/gy2261_sl_ecom.jpg",
        "https://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/g/y/gy2261_7_footwear_photography_back20lateral20top20view_grey.jpg",
        "https://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/g/y/gy2261_5_footwear_photography_side20medial20center20view_grey.jpg",
        "https://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/g/y/gy2261_mp_ecom.jpg",
      ],
      harga: "Rp. 780.000",
    },
    {
      id: 15,
      nama: "Sepatu Racer TR21",
      gambar:
        "https://www.adidas.co.id/media/catalog/product/g/z/gz8183_2_footwear_photography_side20lateral20view_grey.jpg",
      ukuran: [38, 39, 40, 41, 42],
      deskripsi: "Ringan dan fleksibel.",
      thumbnail: [
        "https://www.adidas.co.id/media/catalog/product/g/z/gz8183_2_footwear_photography_side20lateral20view_grey.jpg",
        "https://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/g/z/gz8183_8_footwear_photography_detail20view201_grey.jpg",
        "https://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/g/z/gz8183_6_footwear_photography_front20lateral20top20view_grey.jpg",
        "https://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/g/z/gz8183_5_footwear_photography_side20medial20center20view_grey.jpg",
      ],
      harga: "Rp. 660.000",
    },
    {
      id: 16,
      nama: "Sepatu Duramo SL 2.0",
      gambar:
        "https://www.adidas.co.id/media/catalog/product/h/p/hp2383_2_footwear_photography_side20lateral20view_grey.jpg",
      ukuran: [38, 39, 40, 41, 42],
      deskripsi: "Ringan dan fleksibel.",
      thumbnail: [
        "https://www.adidas.co.id/media/catalog/product/h/p/hp2383_2_footwear_photography_side20lateral20view_grey.jpg",
        "https://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/h/p/hp2383_7_footwear_photography_back20lateral20top20view_grey.jpg",
        "https://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/h/p/hp2383_6_footwear_photography_front20lateral20top20view_grey.jpg",
        "https://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/h/p/hp2383_5_footwear_photography_side20medial20center20view_grey.jpg",
      ],
      harga: "Rp. 630.000",
    },
    {
      id: 17,
      nama: "Sepatu Codechaos 22 BOA Spikeless",
      gambar:
        "https://www.adidas.co.id/media/catalog/product/i/f/if1043_2_footwear_photography_side_lateral_view_grey.jpg",
      ukuran: [38, 39, 40, 41, 42],
      deskripsi: "Ringan dan fleksibel.",
      thumbnail: [
        "https://www.adidas.co.id/media/catalog/product/i/f/if1043_2_footwear_photography_side_lateral_view_grey.jpg",
        "https://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/i/f/if1043_7_footwear_photography_back_lateral_top_view_grey.jpg",
        "ihttps://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/i/f/if1043_6_footwear_photography_front_lateral_top_view_grey.jpg",
        "https://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/i/f/if1043_1_footwear_photography_side_lateral_center_view_grey.jpg",
      ],
      harga: "Rp. 2.170.000",
    },
    {
      id: 18,
      nama: "Sepatu running Adizero Prime X3 STRUNG",
      gambar:
        "https://www.adidas.co.id/media/catalog/product/j/r/jr2598_2_footwear_photography_side20lateral20view_grey.jpg",
      ukuran: [38, 39, 40, 41, 42],
      deskripsi: "Ringan dan fleksibel.",
      thumbnail: [
        "https://www.adidas.co.id/media/catalog/product/j/r/jr2598_2_footwear_photography_side20lateral20view_grey.jpg",
        "ihttps://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/j/r/jr2598_6_footwear_photography_front20lateral20top20view_grey.jpg",
        "https://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/j/r/jr2598_1_footwear_photography_side20lateral20center20view_grey.jpg",
        "https://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/j/r/jr2598_8_footwear_photography_detail20view201_grey.jpg",
      ],
      harga: "Rp. 4.300.000",
    },
    {
      id: 19,
      nama: "Sepatu running Adizero Prime X3 STRUNG",
      gambar:
        "https://www.adidas.co.id/media/catalog/product/j/r/jr2597_2_footwear_photography_side20lateral20view_grey.jpg",
      ukuran: [38, 39, 40, 41, 42],
      deskripsi: "Ringan dan fleksibel.",
      thumbnail: [
        "https://www.adidas.co.id/media/catalog/product/j/r/jr2597_2_footwear_photography_side20lateral20view_grey.jpg",
        "ihttps://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/j/r/jr2597_7_footwear_photography_back20lateral20top20view_grey.jpg",
        "https://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/j/r/jr2597_6_footwear_photography_front20lateral20top20view_grey.jpg",
        "https://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/j/r/jr2597_5_footwear_photography_side20medial20center20view_grey.jpg",
      ],
      harga: "Rp. 4.300.000",
    },
    {
      id: 20,
      nama: "Sepatu Running Supernova Rise 2",
      gambar:
        "https://www.adidas.co.id/media/catalog/product/j/q/jq7692_2_footwear_photography_side20lateral20view_grey.jpg",
      ukuran: [38, 39, 40, 41, 42],
      deskripsi: "Ringan dan fleksibel.",
      thumbnail: [
        "https://www.adidas.co.id/media/catalog/product/j/q/jq7692_2_footwear_photography_side20lateral20view_grey.jpg",
        "https://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/j/q/jq7692_7_footwear_photography_back20lateral20top20view_grey.jpg",
        "https://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/j/q/jq7692_5_footwear_photography_side20medial20center20view_grey.jpg",
        "https://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/j/q/jq7692_8_footwear_photography_detail20view201_grey.jpg",
      ],
      harga: "Rp. 2.200.000",
    },
    {
      id: 21,
      nama: "Sepatu adidas Adizero Takumi Sen 10",
      gambar:
        "https://www.adidas.co.id/media/catalog/product/j/h/jh5223_2_footwear_photography_side20lateral20view_grey.jpg",
      ukuran: [38, 39, 40, 41, 42],
      deskripsi: "Ringan dan fleksibel.",
      thumbnail: [
        "https://www.adidas.co.id/media/catalog/product/j/h/jh5223_2_footwear_photography_side20lateral20view_grey.jpg",
        "https://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/j/h/jh5223_7_footwear_photography_back20lateral20top20view_grey.jpg",
        "https://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/j/h/jh5223_6_footwear_photography_front20lateral20top20view_grey.jpg",
        "https://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/j/h/jh5223_5_footwear_photography_side20medial20center20view_grey.jpg",
      ],
      harga: "Rp. 3.200.000",
    },
    {
      id: 22,
      nama: "Sepatu Hiking Terrex Anylander",
      gambar:
        "https://www.adidas.co.id/media/catalog/product/j/q/jq9956_2_footwear_photography_side20lateral20view_grey.jpg",
      ukuran: [38, 39, 40, 41, 42],
      deskripsi: "Ringan dan fleksibel.",
      thumbnail: [
        "https://www.adidas.co.id/media/catalog/product/j/q/jq9956_2_footwear_photography_side20lateral20view_grey.jpg",
        "https://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/j/q/jq9956_6_footwear_photography_front20lateral20top20view_grey.jpg",
        "https://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/j/q/jq9956_5_footwear_photography_side20medial20center20view_grey.jpg",
        "https://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/j/q/jq9956_6_footwear_photography_front20lateral20top20view_grey.jpg",
      ],
      harga: "Rp. 1.100.000",
    },
    {
      id: 23,
      nama: "Sepatu Hiking Terrex Anylander",
      gambar:
        "https://www.adidas.co.id/media/catalog/product/j/q/jq9956_2_footwear_photography_side20lateral20view_grey.jpg",
      ukuran: [38, 39, 40, 41, 42],
      deskripsi: "Ringan dan fleksibel.",
      thumbnail: [
        "https://www.adidas.co.id/media/catalog/product/j/q/jq9956_2_footwear_photography_side20lateral20view_grey.jpg",
        "https://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/j/q/jq2903_1_footwear_photography_side20lateral20center20view_grey.jpg",
        "https://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/j/q/jq2903_6_footwear_photography_front20lateral20top20view_grey.jpg",
        "https://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/j/q/jq2903_7_footwear_photography_back20lateral20top20view_grey.jpg",
      ],
      harga: "Rp. 1.700.000",
    },
    {
      id: 24,
      nama: "Sepatu Hiking Terrex Anylander",
      gambar:
        "https://www.adidas.co.id/media/catalog/product/j/q/jq9956_2_footwear_photography_side20lateral20view_grey.jpg",
      ukuran: [38, 39, 40, 41, 42],
      deskripsi: "Ringan dan fleksibel.",
      thumbnail: [
        "https://www.adidas.co.id/media/catalog/product/j/q/jq9956_2_footwear_photography_side20lateral20view_grey.jpg",
        "https://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/i/g/ig8200_6_footwear_photography_front20lateral20top20view_grey.jpg",
        "https://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/i/g/ig8200_8_footwear_photography_detail20view201_grey.jpg",
        "https://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/i/g/ig8200_1_footwear_photography_side20lateral20center20view_grey.jpg",
      ],
      harga: "Rp. 1.600.000",
    },
    {
      id: 25,
      nama: "Sepatu Hiking Terrex Anylander",
      gambar:
        "https://www.adidas.co.id/media/catalog/product/j/q/jq9956_2_footwear_photography_side20lateral20view_grey.jpg",
      ukuran: [38, 39, 40, 41, 42],
      deskripsi: "Ringan dan fleksibel.",
      thumbnail: [
        "https://www.adidas.co.id/media/catalog/product/j/q/jq9956_2_footwear_photography_side20lateral20view_grey.jpg",
        "https://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/j/i/ji1458_8_footwear_photography_detail20view201_grey.jpg",
        "https://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/j/i/ji1458_6_footwear_photography_front20lateral20top20view_grey.jpg",
        "https://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/j/i/ji1458_5_footwear_photography_side20medial20center20view_grey.jpg",
      ],
      harga: "Rp. 1.440.000",
    },
    {
      id: 26,
      nama: "Sepatu Hiking Terrex Anylander",
      gambar:
        "https://www.adidas.co.id/media/catalog/product/j/q/jq9956_2_footwear_photography_side20lateral20view_grey.jpg",
      ukuran: [38, 39, 40, 41, 42],
      deskripsi: "Ringan dan fleksibel.",
      thumbnail: [
        "https://www.adidas.co.id/media/catalog/product/j/q/jq9956_2_footwear_photography_side20lateral20view_grey.jpg",
        "https://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/i/e/ie0741_8_footwear_photography_detail20view201_grey.jpg",
        "https://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/i/e/ie0741_9_footwear_photography_detail20view202_grey.jpg",
        "https://www.adidas.co.id/media/catalog/product/cache/7a7ef722f8a7f34081aeb51645c01e48/i/e/ie0741_7_footwear_photography_back20lateral20top20view_grey.jpg",
      ],
      harga: "Rp. 510.000",
    },
  ],
  sepatu_gunung: [
    {
      id: 21,
      nama: "SERVAL MID WOMEN",
      gambar:
        "https://d1yutv2xslo29o.cloudfront.net/product/variant/media/web/f8a09385-025a-4419-8eda-a56042ccb9f6.webp",
      ukuran: [38, 39, 40, 41, 42],
      deskripsi: "Grip kuat, cocok untuk pendakian berat.",
      thumbnail: [
        "https://d1yutv2xslo29o.cloudfront.net/product/variant/media/web/f8a09385-025a-4419-8eda-a56042ccb9f6.webp",
        "https://d1yutv2xslo29o.cloudfront.net/product/variant/media/web/f7145afc-827b-4f1f-924c-46a13e23b1b3.webp",
        "https://d1yutv2xslo29o.cloudfront.net/product/variant/media/web/6d1845b9-bcb3-4967-94d8-2601d0f2feb9.webp",
        "https://d1yutv2xslo29o.cloudfront.net/product/variant/media/web/9af16719-1319-4dda-8936-b39c591b0c54.webp",
      ],
      harga: "Rp 1.199.000",
    },
    {
      id: 22,
      nama: "TIGER CLAW 2.0",
      gambar:
        "https://d1yutv2xslo29o.cloudfront.net/product/variant/media/web/910004795_BROWN_1_41b4.webp",
      ukuran: [38, 39, 40, 41, 42],
      deskripsi: "Sol anti selip dan tahan air.",
      thumbnail: [
        "https://d1yutv2xslo29o.cloudfront.net/product/variant/media/web/910004795_BROWN_1_41b4.webp",
        "https://d1yutv2xslo29o.cloudfront.net/product/variant/media/web/910004795_BROWN_2_9a06.webp",
        "https://d1yutv2xslo29o.cloudfront.net/product/variant/media/web/910004795_BROWN_3_a250.webp",
        "https://d1yutv2xslo29o.cloudfront.net/product/variant/media/web/910004795_BROWN_4_ba7d.webp",
      ],
      harga: "Rp 829.000",
    },
    {
      id: 23,
      nama: "Sepatu Gunung Wanita MH100 Waterproof - Biru Ungu",
      gambar:
        "https://contents.mediadecathlon.com/p1790683/k$cd8faa856cc511a4ef7291030827d753/sepatu-gunung-wanita-mh100-waterproof-biru-ungu-quechua-8595692.jpg?f=768x0&format=auto",
      ukuran: [38, 39, 40, 41, 42],
      deskripsi: "Sol anti selip dan tahan air.",
      thumbnail: [
        "https://contents.mediadecathlon.com/p1790683/k$cd8faa856cc511a4ef7291030827d753/sepatu-gunung-wanita-mh100-waterproof-biru-ungu-quechua-8595692.jpg?f=768x0&format=auto",
        "https://contents.mediadecathlon.com/p1790590/k$2bf6640a7a7f7a8182d5999ccc214a15/sepatu-gunung-wanita-mh100-waterproof-biru-ungu-quechua-8595692.jpg?f=768x0&format=auto",
        "https://contents.mediadecathlon.com/p1790638/k$f9d0d4c688b22400b5bbc2dd6dcc56e1/sepatu-gunung-wanita-mh100-waterproof-biru-ungu-quechua-8595692.jpg?f=768x0&format=auto",
        "https://contents.mediadecathlon.com/p1790684/k$ab0645e326b80cb248193a2283c7a018/sepatu-gunung-wanita-mh100-waterproof-biru-ungu-quechua-8595692.jpg?f=768x0&format=auto",
      ],
      harga: "Rp1.299.000",
    },
    {
      id: 24,
      nama: "Sepatu Gunung Wanita MH100 - Abu-abu/Hijau",
      gambar:
        "https://contents.mediadecathlon.com/p1920506/k$afbfb686abf785b2039aae33bd08826b/sepatu-gunung-wanita-mh100-abu-abu-hijau-quechua-8612193.jpg?f=768x0&format=auto",
      ukuran: [38, 39, 40, 41, 42],
      deskripsi: "Sol anti selip dan tahan air.",
      thumbnail: [
        "https://contents.mediadecathlon.com/p1920506/k$afbfb686abf785b2039aae33bd08826b/sepatu-gunung-wanita-mh100-abu-abu-hijau-quechua-8612193.jpg?f=768x0&format=auto",
        "https://contents.mediadecathlon.com/p1920419/k$8369d91e21db057d8d54893aea37e858/sepatu-gunung-wanita-mh100-abu-abu-hijau-quechua-8612193.jpg?f=768x0&format=auto",
        "https://contents.mediadecathlon.com/p1920394/k$682099f49413899e9f381780a931d0ce/sepatu-gunung-wanita-mh100-abu-abu-hijau-quechua-8612193.jpg?f=768x0&format=auto",
        "https://contents.mediadecathlon.com/p1920365/k$99273b1b053437ec2766500e5367cb0b/sepatu-gunung-wanita-mh100-abu-abu-hijau-quechua-8612193.jpg?f=768x0&format=auto",
      ],
      harga: "Rp1.299.000",
    },
    {
      id: 25,
      nama: "Sepatu Bot Trekking Tekstil Kedap Air W - contact® - MT100 TEX",
      gambar:
        "https://contents.mediadecathlon.com/p2020033/k$a5f3fa90e93d18db650fa9e30291f682/sepatu-bot-trekking-tekstil-kedap-air-w-contact-mt100-tex-simond-8615843.jpg?f=768x0&format=auto",
      ukuran: [38, 39, 40, 41, 42],
      deskripsi: "Sol anti selip dan tahan air.",
      thumbnail: [
        "https://contents.mediadecathlon.com/p2020033/k$a5f3fa90e93d18db650fa9e30291f682/sepatu-bot-trekking-tekstil-kedap-air-w-contact-mt100-tex-simond-8615843.jpg?f=768x0&format=auto",
        "https://contents.mediadecathlon.com/p2020042/k$d20e75bd7ccecba3647c0597d7a6e9bc/sepatu-bot-trekking-tekstil-kedap-air-w-contact-mt100-tex-simond-8615843.jpg?f=768x0&format=auto",
        "https://contents.mediadecathlon.com/p2020030/k$8395aca430fb8cc613ab8151ad7be73b/sepatu-bot-trekking-tekstil-kedap-air-w-contact-mt100-tex-simond-8615843.jpg?f=768x0&format=auto",
        "https://contents.mediadecathlon.com/p2020035/k$c1bfe545df77cce4865687af4226d567/sepatu-bot-trekking-tekstil-kedap-air-w-contact-mt100-tex-simond-8615843.jpg?f=768x0&format=auto",
      ],
      harga: "Rp1.299.000",
    },
    {
      id: 26,
      nama: "Sepatu Gunung Wanita Waterproof MH500 - Abu-Abu",
      gambar:
        "https://contents.mediadecathlon.com/p2611345/k$644e53b07c602b1ab63cdc9923ec9dc5/sepatu-gunung-wanita-waterproof-mh500-mid-beige-quechua-8664395.jpg?f=768x0&format=auto",
      ukuran: [38, 39, 40, 41, 42],
      deskripsi: "Sol anti selip dan tahan air.",
      thumbnail: [
        "https://contents.mediadecathlon.com/p2611345/k$644e53b07c602b1ab63cdc9923ec9dc5/sepatu-gunung-wanita-waterproof-mh500-mid-beige-quechua-8664395.jpg?f=768x0&format=auto",
        "https://contents.mediadecathlon.com/p2153562/k$e3b46800f7b8aaecb01160a6acf68ca2/sepatu-gunung-wanita-waterproof-mh500-mid-beige-quechua-8664395.jpg?f=768x0&format=auto",
        "https://contents.mediadecathlon.com/p2153559/k$44193d1c3f1f88d512aa141846092a27/sepatu-gunung-wanita-waterproof-mh500-mid-beige-quechua-8664395.jpg?f=768x0&format=auto",
        "https://contents.mediadecathlon.com/p2153561/k$998202d04e5aa0631fd54bfee648a7cc/sepatu-gunung-wanita-waterproof-mh500-mid-beige-quechua-8664395.jpg?f=768x0&format=auto",
      ],
      harga: "Rp1.799.000",
    },
    {
      id: 27,
      nama: "Sepatu Gunung Wanita Waterproof MH500 - Abu-Abu",
      gambar:
        "https://contents.mediadecathlon.com/p2617709/k$47c8adb7063b157229bb972d249d6997/sepatu-gunung-wanita-waterproof-mh500-abu-abu-quechua-8851134.jpg?f=768x0&format=auto",
      ukuran: [38, 39, 40, 41, 42],
      deskripsi: "Sol anti selip dan tahan air.",
      thumbnail: [
        "https://contents.mediadecathlon.com/p2617709/k$47c8adb7063b157229bb972d249d6997/sepatu-gunung-wanita-waterproof-mh500-abu-abu-quechua-8851134.jpg?f=768x0&format=auto",
        "https://contents.mediadecathlon.com/p2617707/k$299c27cfce7a2995e9461a5ea23ae1d6/sepatu-gunung-wanita-waterproof-mh500-abu-abu-quechua-8851134.jpg?f=768x0&format=auto",
        "https://contents.mediadecathlon.com/p2617709/k$47c8adb7063b157229bb972d249d6997/sepatu-gunung-wanita-waterproof-mh500-abu-abu-quechua-8851134.jpg?f=768x0&format=auto",
        "https://contents.mediadecathlon.com/p2617707/k$299c27cfce7a2995e9461a5ea23ae1d6/sepatu-gunung-wanita-waterproof-mh500-abu-abu-quechua-8851134.jpg?f=768x0&format=auto",
      ],
      harga: "Rp1.799.000",
    },
    {
      id: 28,
      nama: "Sepatu Gunung Wanita Anti Air MH 100 Mid - Khaki",
      gambar:
        "https://contents.mediadecathlon.com/p1790578/k$f5294a84cdecabc5f8655028b773563a/sepatu-gunung-wanita-anti-air-mh-100-mid-khaki-quechua-8595693.jpg?f=768x0&format=auto",
      ukuran: [38, 39, 40, 41, 42],
      deskripsi: "Sol anti selip dan tahan air.",
      thumbnail: [
        "https://contents.mediadecathlon.com/p1790578/k$f5294a84cdecabc5f8655028b773563a/sepatu-gunung-wanita-anti-air-mh-100-mid-khaki-quechua-8595693.jpg?f=768x0&format=auto",
        "https://contents.mediadecathlon.com/p1790653/k$de335e550814c04179295c166355f2b6/sepatu-gunung-wanita-anti-air-mh-100-mid-khaki-quechua-8595693.jpg?f=768x0&format=auto",
        "https://contents.mediadecathlon.com/p1790616/k$5813ce59cc04a7827341e5e5535e1794/sepatu-gunung-wanita-anti-air-mh-100-mid-khaki-quechua-8595693.jpg?f=768x0&format=auto",
        "https://contents.mediadecathlon.com/p2579122/k$cf0eaed8409eb3cf19a3ff6b7e3885dc/sepatu-gunung-wanita-anti-air-mh-100-mid-khaki-quechua-8595693.jpg?f=768x0&format=auto",
      ],
      harga: "Rp1.799.000",
    },
    {
      id: 29,
      nama: "Sepatu Gunung Hiking Outdor Lavio",
      gambar:
        "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/347d59a0351a43c09cdf97dead9707e0~tplv-o3syd03w52-resize-webp:800:800.webp?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=my2&from=1826719393",
      ukuran: [38, 39, 40, 41, 42],
      deskripsi: "Sol anti selip dan tahan air.",
      thumbnail: [
        "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/347d59a0351a43c09cdf97dead9707e0~tplv-o3syd03w52-resize-webp:800:800.webp?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=my2&from=1826719393",
        "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/b16de445286d4ac386001a983eef1202~tplv-o3syd03w52-resize-webp:800:800.webp?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=my2&from=1826719393",
        "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/7fce68b4879b4431920d67028e11ada7~tplv-o3syd03w52-resize-webp:800:800.webp?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=my2&from=1826719393",
      ],
      harga: "Rp.275.000",
    },
    {
      id: 30,
      nama: "Lavio E95 Black",
      gambar:
        "https://brdsg.com/img/200/bi9wvnllbi0zqvbsk7/fKRfmVguKtm7C5WfKuwRdFTBQId5rTOlpV5iIUFmrA.webp",
      ukuran: [38, 39, 40, 41, 42],
      deskripsi: "Sol anti selip dan tahan air.",
      thumbnail: [
        "https://brdsg.com/img/200/bi9wvnllbi0zqvbsk7/fKRfmVguKtm7C5WfKuwRdFTBQId5rTOlpV5iIUFmrA.webp",
        "https://brdsg.com/img/200/bi9wvnllbi0zqvbsk7/fKRMdP548T4nfCCfKuwRo42X9jSjxQCCZXKI7QCeA.webp",
        "https://brdsg.com/img/200/bi9wvnllbi0zqvbsk7/fKRf3uwbwz6tsb6fKuwRwFn71AxUhQKKmhpMbHq4ZLg.webp",
        "https://brdsg.com/img/200/bi9wvnllbi0zqvbsk7/fKd8SrP52BUakufKuwR6V2hy36LeSTGGuhrClEoTLw.webp",
      ],
      harga: "Rp. 198.000",
    },
    {
      id: 31,
      nama: "Lavio Armo Coklat",
      gambar:
        "https://brdsg.com/img/200/bi9wvnllbi0zqvbsk7/fIsrF9s1BozN0CAfIKsMhk5yvugfQvaMn6wNTjUB9g.webp",
      ukuran: [38, 39, 40, 41, 42],
      deskripsi: "Sol anti selip dan tahan air.",
      thumbnail: [
        "https://brdsg.com/img/200/bi9wvnllbi0zqvbsk7/fIsrF9s1BozN0CAfIKsMhk5yvugfQvaMn6wNTjUB9g.webp",
        "https://brdsg.com/img/200/bi9wvnllbi0zqvbsk7/fIsr2WPtlWCjLbXfIKsMBfjKpwpl7dSXSYpQ1lrEIJCA.webp",
        "https://brdsg.com/img/200/bi9wvnllbi0zqvbsk7/fIsr2rYedraQhqBfIKsMJZczBnRbjQz6ywYsEcJvL4Q.webp",
        "https://brdsg.com/img/200/bi9wvnllbi0zqvbsk7/fIsrFddEbZMhCbnfIKsQ08pSFJYnRnCUk252wy4jLQ.webp",
      ],
      harga: "Rp 205.000",
    },
    {
      id: 32,
      nama: "Lavio A86 Cream",
      gambar:
        "https://brdsg.com/img/200/bi9wvnllbi0zqvbsk7/CjL8M3vUfd5fHfiCjLkIaW27rzYKBgRiKWuIP8A5UIQA.webp",
      ukuran: [38, 39, 40, 41, 42],
      deskripsi: "Sol anti selip dan tahan air.",
      thumbnail: [
        "https://brdsg.com/img/200/bi9wvnllbi0zqvbsk7/CjL8M3vUfd5fHfiCjLkIaW27rzYKBgRiKWuIP8A5UIQA.webp",
        "https://brdsg.com/img/200/bi9wvnllbi0zqvbsk7/CjL0YXXw752WhkWCjLkIcyAgGdQCJQWyjz2cNOwyQ.webp",
        "https://brdsg.com/img/200/bi9wvnllbi0zqvbsk7/CjL0rVjt1YiIie3CjLkO0EzFbXNecISxSBbOrVDFkdLg.webp",
        "https://brdsg.com/img/200/bi9wvnllbi0zqvbsk7/CjLfuynMnC5kLIZCjLkOCJjaS1y3L4SfO1GAoWsnbJw.webp",
      ],
      harga: "Rp. 198.000",
    },
  ],
};

module.exports = { api };