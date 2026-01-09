const getThumb = (id: string) => `https://lh3.googleusercontent.com/d/${id}`;

export const COMPANY_INFO = {
    name: "متجر نجوم دلتا للتجارة",
    name_en: "Delta Stars Trading Store",
    slogan: "الجودة والمعايير العالمية.. مباشرة من المزرعة إلى مائدتكم.",
    slogan_en: "Quality and Global Standards.. Straight from the Farm to Your Table.",
    phone: "00966920023204",
    whatsapp: "00966558828009",
    email: "INFO@DELTASTARS-KSA.COM",
    address: "المملكة العربية السعودية، جدة، شارع المنار",
    address_en: "Al Manar Street, Jeddah, Saudi Arabia",
    map_url: "https://maps.app.goo.gl/ED98cFHGW5UJYxjx7",
    website: "https://deltastars-ksa.com/ar/",
    // 1- شعار المتجر
    logo_url: getThumb("1-0qvsPmpVVnWdGJHrlJ4rbtecG-i5n4l"),
    // 2- صورة أحد أقسام المتجر
    category_image: getThumb("1QVbjijPMm_QmQr1PmnVLfEteegEVEREu"),
    // 3- واجهة أعلا شاشة المتجر بشكل عرضي
    wide_banner_url: getThumb("1wK2o57aJXCLzoZtLMzDME7BQbJm4-Z8e"),
    // 4- ضمن صور الواجهات
    interface_image: getThumb("1cMgr_gnxGNtihUybbv37X9yhfXhnpf1p"),
    // 5- صور لشاشة كمبيوتر تظهر منتجات
    computer_display_url: getThumb("1dPm-9vBMqR1Ae9T6VkzlgT2IJf3no-F3"),
    // 6- صورة شركاء النجاح
    partners_url: getThumb("1ZxOTVQCjdFZBBUY0DxSIH_f3hO4v7AiI"),
    
    official_video_id: "1aCZA6ZZn2_EG97MeqqRKmof6MvmISVX5",
    bank: {
        name: "البنك العربي - فرع الرحاب",
        name_en: "Arab Bank - Rehab Branch",
        account_name: "شركة نجوم دلتا للتجارة",
        account_name_en: "Delta Stars Trading Company",
        account_number: "0108095516770029",
        iban: "SA4730400108095516770029"
    }
}

export const PARTNERS_LIST = [
    "Hilton hotel", "Waldorf Astoria", "RoseWood hotel", "Voco Hotel", 
    "Holiday Inn hotel", "Centro Jeddah", "Millennium Jeddah", "Hyatt Regency", 
    "Wirgan", "بنده Panda", "الراية Alraya", "Manuel مانويل", "الدمام Duka", 
    "ابراج هايبر ماركت", "أسواق المزرعة", "الخطوط السعودية للطيران"
];

export const DEFAULT_SHOWROOM_ITEMS = [
    { 
        id: 'partners-grid', 
        title_ar: 'شركاء النجاح الاستراتيجيين', 
        title_en: 'Strategic Success Partners',
        description_ar: 'نعتز بثقة كبرى الفنادق والهايبر ماركت والخطوط الجوية في المملكة العربية السعودية.',
        description_en: 'We take pride in the trust of major hotels, hypermarkets, and airlines in KSA.',
        image: COMPANY_INFO.partners_url,
        section_ar: 'الشركاء',
        section_en: 'Partners'
    },
    { 
        id: 'tech-supply', 
        title_ar: 'أنظمة توريد ذكية ومتكاملة', 
        title_en: 'Smart Supply Systems',
        description_ar: 'نستخدم أحدث التقنيات الرقمية لإدارة الطلبات واللوجستيات لضمان الدقة والسرعة.',
        description_en: 'Using latest digital tech to manage orders and logistics with precision.',
        image: COMPANY_INFO.computer_display_url,
        section_ar: 'التقنية',
        section_en: 'Technology'
    }
];

export const SOCIAL_LINKS = {
    facebook: "https://www.facebook.com/share/1DNx4PiyLU/",
    instagram: "https://www.instagram.com/deltastars7?utm_source=qr&igsh=MWRkZW9qZzZzM3d4dA==",
    snapchat: "https://www.snapchat.com/add/deltastars25?share_id=PN1go6zbu_A&locale=ar-EG",
    tiktok: "https://vm.tiktok.com/ZSH7p6tYpvBof-1se5K/",
    youtube: "https://youtube.com/@deltastars1?si=4oAuDRgASyS4Hu_i",
    telegram: "https://t.me/deltastars1",
    whatsapp_community: "https://chat.whatsapp.com/J1mZCFjYprmFHveSyTjpMw?mode=ems_wa_t",
    linktree: "https://linktr.ee/deltastar6"
}