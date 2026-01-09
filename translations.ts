
export type Translation = { [key: string]: any };

export const translations: { [key: string]: Translation } = {
  ar: {
    common: {
      currency: "ر.س",
      loading: "جاري التحميل...",
      error: "حدث خطأ ما، يرجى المحاولة لاحقاً",
      save: "حفظ التغييرات",
      cancel: "إلغاء",
      delete: "حذف",
      confirm: "تأكيد",
      back: "عودة",
      search: "بحث عن منتج...",
      id: "المعرف",
      status: "الحالة",
      date: "التاريخ",
      amount: "المبلغ",
      actions: "الإجراءات",
      view: "عرض",
      edit: "تعديل",
      all: "الكل",
      ok: "موافق"
    },
    header: {
      storeName: "متجر نجوم دلتا للتجارة",
      storeTitle: "متجر نجوم دلتا للتجارة | الجودة من المزرعة للمائدة",
      navLinks: {
        home: "الرئيسية",
        products: "سوق المنتجات",
        showroom: "صالة العرض",
        wishlist: "المفضلة",
        dashboard: "الإدارة المركزية",
        vipPortal: "بوابة الشركات (VIP)"
      }
    },
    home: {
      hero: {
        title: "متجر نجوم دلتا للتجارة",
        subtitle: "المورد الأول للفنادق والشركات الكبرى في المملكة العربية السعودية.",
        button: "تسوق الآن",
        vipButton: "بوابة الشركات (VIP)"
      },
      categories: {
        title: "أقسام المتجر المتخصصة",
        subtitle: "اختر القسم المطلوب للوصول المباشر للمنتجات والأسعار الخاصة"
      },
      featured: {
        title: "وصل حديثاً",
        subtitle: "أفضل المنتجات المختارة بعناية اليوم",
        seeAll: "عرض الكل"
      },
      promotions: {
        explore: "اكتشف العرض",
        joinVip: "بوابة الشركات (VIP)"
      }
    },
    showroom: {
      title: "صالة العرض الرقمية",
      subtitle: "استكشف جودة عملياتنا ومنتجاتنا من خلال عدسة نجوم دلتا",
      watchVideo: "شاهد الفيديو التعريفي",
      exploreWorld: "استكشف عالم نجوم دلتا"
    },
    dashboard: {
      welcome: "أهلاً بك في لوحة تحكم نجوم دلتا المركزية، <span class='text-primary'>{{email}}</span>",
      sections: {
        accounts: { title: "الإدارة المالية", desc: "الفواتير، الميزانية، والتحصيلات" },
        operations: { title: "العمليات واللوجستيات", desc: "إدارة الأسطول، المناديب، وتتبع GPS" },
        showroom_mgr: { title: "إدارة الوسائط", desc: "التحكم في صالة العرض، الفيديوهات والإعلانات" },
        developer: { title: "إدارة المخزون", desc: "التحكم في المنتجات، الأقسام، والأسعار" },
        "gm.portal": { title: "بوابة المدير العام", desc: "التقارير الاستراتيجية واتخاذ القرار" }
      }
    },
    categories: {
      fruits: "فواكه طازجة",
      vegetables: "خضروات",
      herbs: "ورقيات طازجة",
      qassim: "منتجات القصيم",
      dates: "تمور فاخرة",
      packages: "البكجات والتغليف",
      seasonal: "أصناف موسمية",
      nuts: "مكسرات",
      flowers: "ورود وهدايا"
    }
  },
  en: {
    common: {
      currency: "SAR",
      loading: "Loading...",
      error: "An error occurred, please try again",
      save: "Save Changes",
      cancel: "Cancel",
      delete: "Delete",
      confirm: "Confirm",
      back: "Back",
      search: "Search product...",
      id: "ID",
      status: "Status",
      date: "Date",
      amount: "Amount",
      actions: "Actions",
      view: "View",
      edit: "Edit",
      all: "All",
      ok: "OK"
    },
    header: {
      storeName: "Delta Stars Trading Store",
      storeTitle: "Delta Stars Trading Store | Quality from Farm to Table",
      navLinks: {
        home: "Home",
        products: "Market",
        showroom: "Showroom",
        wishlist: "Wishlist",
        dashboard: "Central Admin",
        vipPortal: "VIP Portal"
      }
    },
    home: {
      hero: {
        title: "Delta Stars Trading Store",
        subtitle: "Supplying top-tier hotels and corporations across the Kingdom.",
        button: "Shop Now",
        vipButton: "VIP Portal"
      },
      categories: {
        title: "Specialized Categories",
        subtitle: "Select a category to quickly access our premium selections"
      },
      featured: {
        title: "Newly Arrived",
        subtitle: "Today's hand-picked selections",
        seeAll: "See All"
      },
      promotions: {
        explore: "Explore Offer",
        joinVip: "VIP Portal"
      }
    },
    showroom: {
      title: "Digital Showroom",
      subtitle: "Explore our operations and products quality through Delta Stars lens",
      watchVideo: "Watch Intro Video",
      exploreWorld: "Explore Delta Stars World"
    },
    dashboard: {
      welcome: "Welcome to Delta Central Dashboard, <span class='text-primary'>{{email}}</span>",
      sections: {
        accounts: { title: "Finance Dept", desc: "Invoices, budgeting, and collections" },
        operations: { title: "Logistics Hub", desc: "Fleet, agents, and GPS tracking" },
        showroom_mgr: { title: "Media Manager", desc: "Control showroom, videos and ads" },
        developer: { title: "Inventory Manager", desc: "Control products, categories, and prices" },
        "gm.portal": { title: "GM Strategic Portal", desc: "Reports and decision making" }
      }
    },
    categories: {
      fruits: "Fresh Fruits",
      vegetables: "Vegetables",
      herbs: "Fresh Herbs",
      qassim: "Qassim Products",
      dates: "Premium Dates",
      packages: "Packaging & Bundles",
      seasonal: "Seasonal items",
      nuts: "Nuts",
      flowers: "Flowers & Gifts"
    }
  }
};
