import React from 'react';
import './css/Products.css';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Products() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };



  const folderData = [
    {
      folderName: 'aa_charcoal',
      images: [
        '/product_images/aa_charcoal/image1.jpg',
        '/product_images/aa_charcoal/image2.jpg',
        '/product_images/aa_charcoal/image3.jpg',
        '/product_images/aa_charcoal/image4.jpg',
      ],
    },
    {
      folderName: 'ab_calypso wall highlighter',
      images: [
        '/product_images/ab_calypso wall highlighter/image1.jpg',
        '/product_images/ab_calypso wall highlighter/image2.jpg',
        '/product_images/ab_calypso wall highlighter/image3.jpg',
        '/product_images/ab_calypso wall highlighter/image4.jpg',
      ],
    },
    {
      folderName: 'ac_spc flooring',
      images: [
        '/product_images/ac_spc flooring/image1.jpg',
        '/product_images/ac_spc flooring/image2.jpg',
        '/product_images/ac_spc flooring/image3.jpg',
        '/product_images/ac_spc flooring/image4.jpg',
      ],
    },
    /*{
      folderName: 'ad_natural rattan cane webbing',
      images: [
        '/product_images/ad_natural rattan cane webbing/image1.jpg',
        '/product_images/ad_natural rattan cane webbing/image2.jpg',
        '/product_images/ad_natural rattan cane webbing/image3.jpg',
      ],
    },*/
    {
      folderName: 'ae_corian temple and misc',
      images: [
        '/product_images/ae_corian temple and misc/image1.jpg',
        '/product_images/ae_corian temple and misc/image2.jpg',
        '/product_images/ae_corian temple and misc/image3.jpg',
        '/product_images/ae_corian temple and misc/image4.jpg',
      ],
    },
    {
      folderName: 'af_corian designs',
      images: [
        '/product_images/af_corian designs/image1.jpg',
        '/product_images/af_corian designs/image2.jpg',
        '/product_images/af_corian designs/image3.jpg',
        '/product_images/af_corian designs/image4.jpg',
      ],
    },
    {
      folderName: 'ag_natural v garden',
      images: [
        '/product_images/ag_natural v garden/image1.jpg',
        '/product_images/ag_natural v garden/image2.jpg',
        '/product_images/ag_natural v garden/image3.jpg',
        '/product_images/ag_natural v garden/image4.jpg',
      ],
    },
    {
      folderName: 'ah_landscaping',
      images: [
        '/product_images/ah_landscaping/image1.jpg',
        '/product_images/ah_landscaping/image2.jpg',
        '/product_images/ah_landscaping/image3.jpg',
        '/product_images/ah_landscaping/image4.jpg',
      ],
    },
    {
      folderName: 'ai_automation',
      images: [
        '/product_images/ai_automation/image1.jpg',
        '/product_images/ai_automation/image2.jpg',
        '/product_images/ai_automation/image3.jpg',
        '/product_images/ai_automation/image4.jpg',
      ],
    },
    {
      folderName: 'aj_digital locks',
      images: [
        '/product_images/aj_digital locks/image1.jpg',
        '/product_images/aj_digital locks/image2.jpg',
        '/product_images/aj_digital locks/image3.jpg',
        '/product_images/aj_digital locks/image4.jpg',
      ],
    },
    {
      folderName: 'ak_jali',
      images: [
        '/product_images/ak_jali/image1.jpg',
        '/product_images/ak_jali/image2.jpg',
        '/product_images/ak_jali/image3.jpg',
        '/product_images/ak_jali/image4.jpg',
      ],
    },
    {
      folderName: 'al_grace highlighter',
      images: [
        '/product_images/al_grace highlighter/image1.jpg',
        '/product_images/al_grace highlighter/image2.jpg',
        '/product_images/al_grace highlighter/image3.jpg',
        '/product_images/al_grace highlighter/image4.jpg',
      ],
    },
    {
      folderName: 'am_fluted panel',
      images: [
        '/product_images/am_fluted panel/image1.jpg',
        '/product_images/am_fluted panel/image2.jpg',
        '/product_images/am_fluted panel/image3.jpg',
        '/product_images/am_fluted panel/image4.jpg',
      ],
    },
    {
      folderName: 'an_mirraco',
      images: [
        '/product_images/an_mirraco/image1.jpg',
        '/product_images/an_mirraco/image2.jpg',
        '/product_images/an_mirraco/image3.jpg',
        '/product_images/an_mirraco/image4.jpg',
      ],
    },
    {
      folderName: 'ao_1x1 highlighter',
      images: [
        '/product_images/ao_1x1 highlighter/image1.jpg',
        '/product_images/ao_1x1 highlighter/image2.jpg',
        '/product_images/ao_1x1 highlighter/image3.jpg',
        '/product_images/ao_1x1 highlighter/image4.jpg',
      ],
    },
    {
      folderName: 'ap_door skin',
      images: [
        '/product_images/ap_door skin/image1.jpg',
        '/product_images/ap_door skin/image2.jpg',
        '/product_images/ap_door skin/image3.jpg',
        '/product_images/ap_door skin/image4.jpg',
      ],
    },
    {
      folderName: 'aq_terra blocks',
      images: [
        '/product_images/aq_terra blocks/image1.jpg',
        '/product_images/aq_terra blocks/image2.jpg',
        '/product_images/aq_terra blocks/image3.jpg',
        '/product_images/aq_terra blocks/image4.jpg',
      ],
    },
    {
      folderName: 'ar_bed padding',
      images: [
        '/product_images/ar_bed padding/image1.jpg',
        '/product_images/ar_bed padding/image2.jpg',
        '/product_images/ar_bed padding/image3.jpg',
        '/product_images/ar_bed padding/image4.jpg',
      ],
    },
    {
      folderName: 'as_tata lockers',
      images: [
        '/product_images/as_tata lockers/image1.jpg',
        '/product_images/as_tata lockers/image2.jpg',
        '/product_images/as_tata lockers/image3.jpg',
        '/product_images/as_tata lockers/image4.jpg',
      ],
    },
    {
      folderName: 'at_louvers',
      images: [
        '/product_images/at_louvers/image1.jpg',
        '/product_images/at_louvers/image2.jpg',
        '/product_images/at_louvers/image3.jpg',
        '/product_images/at_louvers/image4.jpg',
      ],
    },
    {
      folderName: 'au_century doors',
      images: [
        '/product_images/au_century doors/image1.jpg',
        '/product_images/au_century doors/image2.jpg',
        '/product_images/au_century doors/image3.jpg',
        '/product_images/au_century doors/image4.jpg',
      ],
    },
    {
      folderName: 'av_acrylic veneer laminates',
      images: [
        '/product_images/av_acrylic veneer laminates/image1.jpg',
        '/product_images/av_acrylic veneer laminates/image2.jpg',
        '/product_images/av_acrylic veneer laminates/image3.jpg',
        '/product_images/av_acrylic veneer laminates/image4.jpg',
      ],
    },
    {
      folderName: 'aw_hettich fitting and basket',
      images: [
        '/product_images/aw_hettich fitting and basket/image1.jpg',
        '/product_images/aw_hettich fitting and basket/image2.jpg',
        '/product_images/aw_hettich fitting and basket/image3.jpg',
        '/product_images/aw_hettich fitting and basket/image4.jpg',
      ],
    },
    {
      folderName: 'ax_acrylic glass laminate',
      images: [
        '/product_images/ax_acrylic glass laminate/image1.jpg',
        '/product_images/ax_acrylic glass laminate/image2.jpg',
        '/product_images/ax_acrylic glass laminate/image3.jpg',
        '/product_images/ax_acrylic glass laminate/image4.jpg',
      ],
    },
    {
      folderName: 'ay_century ply',
      images: [
        '/product_images/ay_century ply/image1.jpg',
        '/product_images/ay_century ply/image2.jpg',
        '/product_images/ay_century ply/image3.jpg',
        '/product_images/ay_century ply/image4.jpg',
      ],
    },
    {
      folderName: 'az_vanm ply',
      images: [
        '/product_images/az_vanm ply/image1.jpg',
        '/product_images/az_vanm ply/image2.jpg',
        '/product_images/az_vanm ply/image3.jpg',
        '/product_images/az_vanm ply/image4.jpg',
      ],
    },
    {
      folderName: 'ba_ultima gold ply',
      images: [
        '/product_images/ba_ultima gold ply/image1.jpg',
        '/product_images/ba_ultima gold ply/image2.jpg',
        '/product_images/ba_ultima gold ply/image3.jpg',
        '/product_images/ba_ultima gold ply/image4.jpg',
      ],
    },
    {
      folderName: 'bb_royale touche laminate',
      images: [
        '/product_images/bb_royale touche laminate/image1.jpg',
        '/product_images/bb_royale touche laminate/image2.jpg',
        '/product_images/bb_royale touche laminate/image3.jpg',
        '/product_images/bb_royale touche laminate/image4.jpg',
      ],
    },
    {
      folderName: 'bc_european beat',
      images: [
        '/product_images/bc_european beat/image1.jpg',
        '/product_images/bc_european beat/image2.jpg',
        '/product_images/bc_european beat/image3.jpg',
        '/product_images/bc_european beat/image4.jpg',
      ],
    },
    {
      folderName: 'bd_highlighter',
      images: [
        '/product_images/bd_highlighter/image1.jpg',
        '/product_images/bd_highlighter/image2.jpg',
        '/product_images/bd_highlighter/image3.jpg',
        '/product_images/bd_highlighter/image4.jpg',
      ],
    },
    {
      folderName: 'be_membrane door',
      images: [
        '/product_images/be_membrane door/image1.jpg',
        '/product_images/be_membrane door/image2.jpg',
        '/product_images/be_membrane door/image3.jpg',
        '/product_images/be_membrane door/image4.jpg',
      ],
    },
    {
      folderName: 'bf_pvc panel 2x2',
      images: [
        '/product_images/bf_pvc panel 2x2/image1.jpg',
        '/product_images/bf_pvc panel 2x2/image2.jpg',
        '/product_images/bf_pvc panel 2x2/image3.jpg',
        '/product_images/bf_pvc panel 2x2/image4.jpg',
      ],
    },
    {
      folderName: 'bg_upvc window and door',
      images: [
        '/product_images/bg_upvc window and door/image1.jpg',
        '/product_images/bg_upvc window and door/image2.jpg',
        '/product_images/bg_upvc window and door/image3.jpg',
        '/product_images/bg_upvc window and door/image4.jpg',
      ],
    },
    {
      folderName: 'bh_laminates',
      images: [
        '/product_images/bh_laminates/image1.jpg',
        '/product_images/bh_laminates/image2.jpg',
        '/product_images/bh_laminates/image3.jpg',
        '/product_images/bh_laminates/image4.jpg',
      ],
    },
    {
      folderName: 'bi_pvc laminates',
      images: [
        '/product_images/bi_pvc laminates/image1.jpg',
        '/product_images/bi_pvc laminates/image2.jpg',
        '/product_images/bi_pvc laminates/image3.jpg',
        '/product_images/bi_pvc laminates/image4.jpg',
      ],
    },
    {
      folderName: 'bj_exterior wall cladding',
      images: [
        '/product_images/bj_exterior wall cladding/image1.jpg',
        '/product_images/bj_exterior wall cladding/image2.jpg',
        '/product_images/bj_exterior wall cladding/image3.jpg',
        '/product_images/bj_exterior wall cladding/image4.jpg',
      ],
    },
    {
      folderName: 'bk_carpet and rugs',
      images: [
        '/product_images/bk_carpet and rugs/image1.jpg',
        '/product_images/bk_carpet and rugs/image2.jpg',
        '/product_images/bk_carpet and rugs/image3.jpg',
        '/product_images/bk_carpet and rugs/image4.jpg',
      ],
    },
    {
      folderName: 'bl_home furnishing',
      images: [
        '/product_images/bl_home furnishing/image1.jpg',
        '/product_images/bl_home furnishing/image2.jpg',
        '/product_images/bl_home furnishing/image3.jpg',
        '/product_images/bl_home furnishing/image4.jpg',
      ],
    },
    {
      folderName: 'bm_vertical garden',
      images: [
        '/product_images/bm_vertical garden/image1.jpg',
        '/product_images/bm_vertical garden/image2.jpg',
        '/product_images/bm_vertical garden/image3.jpg',
        '/product_images/bm_vertical garden/image4.jpg',
      ],
    },
    {
      folderName: 'bn_glass film',
      images: [
        '/product_images/bn_glass film/image1.jpg',
        '/product_images/bn_glass film/image2.jpg',
        '/product_images/bn_glass film/image3.jpg',
        '/product_images/bn_glass film/image4.jpg',
      ],
    },
    {
      folderName: 'bo_timber tube pvc',
      images: [
        '/product_images/bo_timber tube pvc/image1.jpg',
        '/product_images/bo_timber tube pvc/image2.jpg',
        '/product_images/bo_timber tube pvc/image3.jpg',
        '/product_images/bo_timber tube pvc/image4.jpg',
      ],
    },
    {
      folderName: 'bp_interior services',
      images: [
        '/product_images/bp_interior services/image1.jpg',
        '/product_images/bp_interior services/image2.jpg',
        '/product_images/bp_interior services/image3.jpg',
        '/product_images/bp_interior services/image4.jpg',
      ],
    },
    {
      folderName: 'bq_false ceiling',
      images: [
        '/product_images/bq_false ceiling/image1.jpg',
        '/product_images/bq_false ceiling/image2.jpg',
        '/product_images/bq_false ceiling/image3.jpg',
        '/product_images/bq_false ceiling/image4.jpg',
      ],
    },
    {
      folderName: 'br_blinds',
      images: [
        '/product_images/br_blinds/image1.jpg',
        '/product_images/br_blinds/image2.jpg',
        '/product_images/br_blinds/image3.jpg',
        '/product_images/br_blinds/image4.jpg',
      ],
    },
    {
      folderName: 'bs_hardware items',
      images: [
        '/product_images/bs_hardware items/image1.jpg',
        '/product_images/bs_hardware items/image2.jpg',
        '/product_images/bs_hardware items/image3.jpg',
        '/product_images/bs_hardware items/image4.jpg',
      ],
    },
    {
      folderName: 'bt_turf or artificial grass',
      images: [
        '/product_images/bt_turf or artificial grass/image1.jpg',
        '/product_images/bt_turf or artificial grass/image2.jpg',
        '/product_images/bt_turf or artificial grass/image3.jpg',
        '/product_images/bt_turf or artificial grass/image4.jpg',
      ],
    },
    {
      folderName: 'bu_grill pvc and mdf',
      images: [
        '/product_images/bu_grill pvc and mdf/image1.jpg',
        '/product_images/bu_grill pvc and mdf/image2.jpg',
        '/product_images/bu_grill pvc and mdf/image3.jpg',
        '/product_images/bu_grill pvc and mdf/image4.jpg',
      ],
    },
    {
      folderName: 'bv_epoxy',
      images: [
        '/product_images/bv_epoxy/image1.jpg',
        '/product_images/bv_epoxy/image2.jpg',
        '/product_images/bv_epoxy/image3.jpg',
        '/product_images/bv_epoxy/image4.jpg',
      ],
    },
    {
      folderName: 'bw_wallpaper',
      images: [
        '/product_images/bw_wallpaper/image1.jpg',
        '/product_images/bw_wallpaper/image2.jpg',
        '/product_images/bw_wallpaper/image3.jpg',
        '/product_images/bw_wallpaper/image4.jpg',
      ],
    },
    {
      folderName: 'bx_deck flooring',
      images: [
        '/product_images/bx_deck flooring/image1.jpg',
        '/product_images/bx_deck flooring/image2.jpg',
        '/product_images/bx_deck flooring/image3.jpg',
        '/product_images/bx_deck flooring/image4.jpg',
      ],
    },
    {
      folderName: 'by_external cladding',
      images: [
        '/product_images/by_external cladding/image1.jpg',
        '/product_images/by_external cladding/image2.jpg',
        '/product_images/by_external cladding/image3.jpg',
        '/product_images/by_external cladding/image4.jpg',
      ],
    },
    {
      folderName: 'bz_kitchen basket',
      images: [
        '/product_images/bz_kitchen basket/image1.jpg',
        '/product_images/bz_kitchen basket/image2.jpg',
        '/product_images/bz_kitchen basket/image3.jpg',
        '/product_images/bz_kitchen basket/image4.jpg',
      ],
    },
    {
      folderName: 'ca_t and u ss profile',
      images: [
        '/product_images/ca_t and u ss profile/image1.jpg',
        '/product_images/ca_t and u ss profile/image2.jpg',
        '/product_images/ca_t and u ss profile/image3.jpg',
        '/product_images/ca_t and u ss profile/image4.jpg',
      ],
    },
    {
      folderName: 'cb_fabrics',
      images: [
        '/product_images/cb_fabrics/image1.jpg',
        '/product_images/cb_fabrics/image2.jpg',
        '/product_images/cb_fabrics/image3.jpg',
        '/product_images/cb_fabrics/image4.jpg',
      ],
    },
    {
      folderName: 'cc_abstract laminate',
      images: [
        '/product_images/cc_abstract laminate/image1.jpg',
        '/product_images/cc_abstract laminate/image2.jpg',
        '/product_images/cc_abstract laminate/image3.jpg',
        '/product_images/cc_abstract laminate/image4.jpg',
      ],
    },
    {
      folderName: 'cd_pvc and wooden flooring',
      images: [
        '/product_images/cd_pvc and wooden flooring/image1.jpg',
        '/product_images/cd_pvc and wooden flooring/image2.jpg',
        '/product_images/cd_pvc and wooden flooring/image3.jpg',
        '/product_images/cd_pvc and wooden flooring/image4.jpg',
      ],
    },
    {
      folderName: 'ce_leather laminates',
      images: [
        '/product_images/ce_leather laminates/image1.jpg',
        '/product_images/ce_leather laminates/image2.jpg',
        '/product_images/ce_leather laminates/image3.jpg',
        '/product_images/ce_leather laminates/image4.jpg',
      ],
    },
    {
      folderName: 'cf_charcoal and plush panel',
      images: [
        '/product_images/cf_charcoal and plush panel/image1.jpg',
        '/product_images/cf_charcoal and plush panel/image2.jpg',
        '/product_images/cf_charcoal and plush panel/image3.jpg',
        '/product_images/cf_charcoal and plush panel/image4.jpg',
      ],
    },
    {
      folderName: 'cg_stone veneer',
      images: [
        '/product_images/cg_stone veneer/image1.jpg',
        '/product_images/cg_stone veneer/image2.jpg',
        '/product_images/cg_stone veneer/image3.jpg',
        '/product_images/cg_stone veneer/image4.jpg',
      ],
    },
    {
      folderName: 'ch_veneer laminates',
      images: [
        '/product_images/ch_veneer laminates/image1.jpg',
        '/product_images/ch_veneer laminates/image2.jpg',
        '/product_images/ch_veneer laminates/image3.jpg',
        '/product_images/ch_veneer laminates/image4.jpg',
      ],
    },
    {
      folderName: 'ci_natural veneer',
      images: [
        '/product_images/ci_natural veneer/image1.jpg',
        '/product_images/ci_natural veneer/image2.jpg',
        '/product_images/ci_natural veneer/image3.jpg',
        '/product_images/ci_natural veneer/image4.jpg',
      ],
    },
    {
      folderName: 'cj_albaster light passing sheet',
      images: [
        '/product_images/cj_albaster light passing sheet/image1.jpg',
        '/product_images/cj_albaster light passing sheet/image2.jpg',
        '/product_images/cj_albaster light passing sheet/image3.jpg',
        '/product_images/cj_albaster light passing sheet/image4.jpg',
      ],
    },
    // Add more folder data objects as needed
  ];


  return (
    <>
      <Navbar />
      <div className="heading" style={{ marginTop: '190px', marginBottom: '1rem' }}>
        <h2>Our Products</h2>
      </div>
      <div className="cards">
        {folderData.map((folder, index) => (

          <div className="ecard" style={{ cursor: 'pointer' }} onClick={() => { window.location.href = 'https://wa.me/c/919933332263' }}>
            <div className="image_cont">
              <Slider {...sliderSettings}>
                {folder.images.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt={`Image ${index}`} />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="container">
              <h3>{folder.folderName.substring(3)}</h3>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  )
}
export default Products;
