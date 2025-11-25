
export type Translation = { [key: string]: string | Translation };

export const translations: { [key: string]: Translation } = {
  ar: {
    languageCode: 'ar',
    company: {
        slogan: "شريكك الأول للفواكه والخضروات عالية الجودة في المملكة العربية السعودية.",
    },
    geminiError: "حدث خطأ أثناء الاتصال بخدمات الذكاء الاصطناعي. يرجى التحقق من اتصالك بالإنترنت والمحاولة مرة أخرى.",
    pagination: {
      previous: 'السابق',
      next: 'التالي',
    },
    errors: {
      fetchProductsError: 'فشل تحميل المنتجات. يتم عرض البيانات المحلية.',
      networkError: 'فشل الاتصال بالشبكة. يرجى التحقق من اتصالك بالإنترنت.',
      unknownApiError: 'حدث خطأ غير متوقع في الخادم.',
      offlineData: 'فشل الاتصال بالخادم. يتم عرض البيانات المحفوظة محلياً.',
      unauthorized: 'يرجى تسجيل الدخول للمتابعة.',
      forbidden: 'ليس لديك صلاحية للقيام بهذا الإجراء.',
    },
    shipping: {
        policyTitle: 'سياسة الشحن والتوصيل',
        deliveryTimeJeddah: 'وقت التوصيل داخل جدة: 1-2 أيام عمل.',
        deliveryTimeOther: 'وقت التوصيل للمدن الرئيسية الأخرى (الرياض، الدمام): 2-4 أيام عمل.',
        cost: 'تكلفة الشحن ثابتة: 25 ريال سعودي.',
        freeShippingThreshold: 'الشحن مجاني للطلبات التي تزيد قيمتها عن 200 ريال سعودي.',
    },
    header: {
        storeTitle: 'متجر نجوم دلتا للتجارة',
        storeName: 'نجوم دلتا',
        home: 'الرئيسية',
        products: 'المنتجات',
        showroom: 'صالة العرض',
        wishlist: 'قائمة الرغبات',
        dashboard: 'لوحة التحكم',
        navLinks: {
            home: 'الرئيسية',
            products: 'المنتجات',
            showroom: 'صالة العرض',
            wishlist: 'قائمة الرغبات',
            dashboard: 'لوحة التحكم',
        },
        login: 'تسجيل الدخول',
        logout: 'تسجيل الخروج',
        selectCurrency: 'اختر العملة',
    },
    footer: {
        about: 'عن الشركة',
        contact: 'معلومات التواصل',
        phone: 'هاتف',
        whatsapp: 'واتساب',
        email: 'بريد',
        address: 'العنوان',
        quickLinks: 'روابط سريعة',
        privacy: 'سياسة الخصوصية',
        terms: 'الشروط والأحكام',
        location: 'موقعنا',
        copyright: 'شركة نجوم دلتا للتجارة. جميع الحقوق محفوظة.',
        commercialRegistry: 'السجل التجاري',
        taxId: 'الرقم الضريبي',
        callUs: "اتصل بنا",
        whatsappUs: "تواصل معنا عبر واتساب",
        emailUs: "راسلنا عبر البريد الإلكتروني",
    },
    home: {
        hero: {
            title: 'متجر نجوم دلتا للتجارة',
            subtitle: 'الجودة والطعم الطازج.. مباشرة من المزرعة إلى مائدتكم',
            button: 'تصفح المنتجات',
        },
        categories: {
            title: 'تسوق حسب الفئة',
        },
        featured: {
            title: 'منتجات مميزة',
            seeAll: 'عرض الكل ←',
        },
        newArrivals: {
            title: 'وصل حديثًا',
        },
        specialOffers: {
            title: 'عروض خاصة',
        },
        gallery: {
            title: 'متجرنا في صور',
            subtitle: 'لمحة عن جودتنا وعملياتنا.',
            alt: {
                fruitsWarehouse: 'مستودعات الفواكه المبردة لشركة نجوم دلتا',
                datesWarehouse: 'مستودعات التمور المبردة لشركة نجوم دلتا',
                mobileApp: 'تسوق منتجاتنا الطازجة عبر تطبيقنا',
            }
        },
        quality: {
            title: 'ضمان الجودة',
            description: 'نلتزم بأعلى معايير الجودة في اختيار وتوريد منتجاتنا لضمان رضاكم.',
        },
        delivery: {
            title: 'توصيل سريع',
            description: 'خدمة توصيل سريعة وموثوقة لجميع أنحاء المملكة لضمان وصول طلباتكم طازجة.',
        },
        support: {
            title: 'دعم العملاء',
            description: 'فريق دعم عملاء جاهز للرد على استفساراتكم ومساعدتكم في أي وقت.',
        },
        location: {
            title: 'موقعنا',
            subtitle: 'تفضل بزيارتنا أو تواصل معنا مباشرة. نحن هنا لخدمتك.',
            getDirections: 'احصل على الاتجاهات',
        },
        vip: {
            title: 'بوابة عملاء VIP',
            description: 'هل أنت من عملائنا التجاريين (مطاعم، فنادق، أسواق)؟ سجل الدخول لإدارة طلبياتك وحسابك بكل سهولة.',
            button: 'الدخول لبوابة VIP',
        },
        clients: {
            title: 'شركاء النجاح',
            subtitle: 'نفخر بخدمة نخبة من أكبر الشركات والمؤسسات في المملكة، ونسعى دائمًا لبناء علاقات متينة ومستدامة.',
        },
    },
    products: {
        title: 'جميع المنتجات',
        subtitle: 'تصفح مجموعتنا الكاملة من المنتجات الطازجة',
        searchPlaceholder: 'ابحث عن منتج...',
        allCategories: 'الكل',
        noResults: 'لا توجد منتجات تطابق بحثك.',
        sortBy: 'فرز حسب',
        sort: {
            default: 'افتراضي',
            priceAsc: 'السعر: من الأقل للأعلى',
            priceDesc: 'السعر: من الأعلى للأقل',
            nameAsc: 'الاسم: أ-ي',
            nameDesc: 'الاسم: ي-أ',
            ratingDesc: 'التقييم: من الأعلى للأقل',
        },
    },
    product: {
        discount: 'خصم',
        addToCart: 'إضافة إلى السلة',
        addToWishlist: 'إضافة إلى قائمة الرغبات',
        removeFromWishlist: 'إزالة من قائمة الرغبات',
    },
    productDetail: {
      title: 'تفاصيل المنتج',
      backToProducts: 'العودة للمنتجات',
      description: 'الوصف',
    },
    reviews: {
        title: 'تقييمات العملاء',
        leaveReview: 'أضف تقييمك',
        yourName: 'اسمك',
        rating: 'التقييم',
        comment: 'تعليقك',
        submit: 'إرسال التقييم',
        noReviews: 'لا توجد تقييمات لهذا المنتج بعد. كن أول من يضيف تقييم!',
        averageRating: 'متوسط التقييم',
        reviewsCount: '({{count}} تقييمات)',
        review: 'تقييم',
        view: 'عرض التقييمات',
        formSuccess: 'شكرًا لك! تم إرسال تقييمك بنجاح.',
        formError: 'الرجاء إدخال اسم وتقييم.',
    },
    categories: {
        fruits: 'فواكه',
        vegetables: 'خضروات',
        herbs: 'أعشاب',
        dates: 'تمور',
        eggs: 'بيض',
        organic: 'عضوي',
        seasonal: 'موسمي',
    },
    cart: {
        title: 'سلة التسوق',
        empty: 'سلة التسوق فارغة.',
        total: 'الإجمالي',
        clear: 'إفراغ السلة',
        checkoutButton: 'إتمام الطلب',
        continueShopping: 'متابعة التسوق',
        checkout: {
            title: 'إتمام الطلب',
            successTitle: 'شكرًا لطلبك!',
            successSubtitle: 'لقد تم استلام طلبك مبدئيًا. سيقوم فريقنا بالتواصل معك عبر الواتساب لتأكيد الطلب وترتيب التوصيل. لإتمام عملية الشراء، يرجى استخدام أحد الخيارات التالية:',
            codTitle: '1. الدفع عند الاستلام',
            codDesc: 'سيقوم مندوب التوصيل بتحصيل المبلغ عند تسليم الطلب.',
            transferTitle: '2. التحويل البنكي',
            transferDesc1: 'يرجى تحويل المبلغ الإجمالي',
            transferDesc2: 'إلى حسابنا البنكي:',
            bankName: 'اسم البنك',
            beneficiary: 'اسم المستفيد',
            orderId: 'رقم الطلب',
            whatsappConfirmation: 'لتأكيد طلبك بشكل أسرع، انقر هنا لإرسال تفاصيل الطلب عبر واتساب.',
            whatsappConfirmationMessage: 'مرحبًا نجوم دلتا، أود تأكيد طلبي رقم {{orderId}} بقيمة إجمالية {{formattedTotal}}. سأقوم بإرسال إيصال التحويل قريبًا.',
            accountNumber: 'رقم الحساب',
            iban: 'رقم الآيبان',
            note: 'ملاحظة هامة: بعد التحويل، يرجى إرسال صورة من الإيصال إلى رقم الواتساب',
            note2: 'لتأكيد طلبك.',
            backToStore: 'العودة للمتجر',
        }
    },
    wishlist: {
        title: 'قائمة رغباتي',
        empty: 'قائمة رغباتك فارغة.',
        moveToCart: 'نقل إلى السلة',
        remove: 'إزالة',
    },
    showroom: {
        title: 'صالة العرض',
        subtitle: 'اكتشف آخر العروض، المنتجات المميزة، والفعاليات الحصرية من نجوم دلتا.',
        noItems: 'لا توجد عروض أو فعاليات متاحة حالياً. تابعنا للمزيد!',
        generalSection: 'عروض عامة',
        inquireNow: 'اطلب العرض الآن',
        inquiryMessage: 'مرحباً، أنا مهتم بالعرض: {{title}}',
    },
    aiAssistant: {
      title: "مساعد دلتا الذكي",
      placeholder: "اسأل عن منتجاتنا، عروضنا، أو أي شيء آخر...",
      welcomeMessage: "مرحباً! أنا 'نبراس'، مساعدك الذكي في متجر نجوم دلتا. كيف يمكنني خدمتك اليوم؟",
      open: "افتح المساعد الذكي",
      send: "إرسال",
      error: "عذراً، أواجه مشكلة فنية في الوقت الحالي. يرجى المحاولة مرة أخرى لاحقاً.",
      thinking: "أفكر..."
    },
    login: {
        title: 'تسجيل الدخول للوحة التحكم',
        email: 'البريد الإلكتروني',
        password: 'كلمة المرور',
        error: 'البريد الإلكتروني أو كلمة المرور غير صحيحة.',
        loginButton: 'تسجيل الدخول',
        backToStore: 'العودة إلى المتجر →',
        forgotPassword: 'هل نسيت كلمة المرور؟',
    },
    auth: {
        logoutConfirmation: "هل أنت متأكد من أنك تريد تسجيل الخروج؟",
        passwordLengthError: 'يجب أن تكون كلمة المرور 6 أحرف على الأقل.',
        changePasswordTitle: 'تغيير كلمة المرور',
        newPassword: 'كلمة المرور الجديدة',
        confirmPassword: 'تأكيد كلمة المرور الجديدة',
        passwordMismatch: 'كلمتا المرور غير متطابقتين.',
        passwordChangedSuccess: 'تم تغيير كلمة المرور بنجاح.',
        ok: 'موافق',
        cancel: 'إلغاء',
        changePasswordButton: 'تغيير كلمة المرور',
        createAccount: 'إنشاء الحساب',
        createNewPassword: 'إنشاء كلمة مرور جديدة',
        showPassword: 'إظهار كلمة المرور',
        hidePassword: 'إخفاء كلمة المرور',
        otp: {
            title: 'التحقق من الرمز',
            sentToEmail: 'تم إرسال رمز التحقق إلى {{email}}. <br/><small>(للعرض التجريبي: تحقق من وحدة تحكم المتصفح)</small>',
            sentToPhone: 'تم إرسال رمز التحقق إلى رقم الهاتف {{phone}}. <br/><small>(للعرض التجريبي: تحقق من وحدة تحكم المتصفح)</small>',
            placeholder: 'أدخل الرمز هنا',
            verify: 'تحقق',
            invalidCode: 'الرمز الذي أدخلته غير صحيح.',
            passwordLengthError: 'يجب أن تكون كلمة المرور 6 أحرف على الأقل.',
            successTitle: 'تم بنجاح!',
            successSubtitle: 'تم تحديث كلمة مرورك. يمكنك الآن تسجيل الدخول.',
            generatingCode: "جاري إنشاء رمز آمن...",
            fallbackTitle: "رسالة تحقق قياسية",
            fallbackInstruction: "تعذر الاتصال بالخدمة. الرجاء استخدام الرمز القياسي أدناه للمتابعة.",
        },
    },
    passwordGuide: {
        title: "دليل كلمات المرور الافتراضية",
        intro: "فيما يلي بيانات الاعتماد الافتراضية لأقسام التطبيق المختلفة. سيُطلب منك تغييرها عند تسجيل الدخول لأول مرة.",
        admin: {
            title: "لوحة تحكم المدير",
            email: "البريد الإلكتروني",
            password: "كلمة المرور"
        },
        vip: {
            title: "حساب العميل (تجريبي)",
            phone: "رقم الهاتف",
            password: "كلمة المرور"
        },
        sections: {
            title: "الأقسام الداخلية",
            desc: "كلمة المرور الافتراضية لأقسام (المطور، المدير العام، الحسابات) هي:",
            password: "كلمة المرور"
        }
    },
    dashboard: {
        title: 'لوحة تحكم المدير العام',
        welcome: 'مرحباً بك، <span dir="ltr">{{email}}</span>. من هنا يمكنك إدارة جميع جوانب المتجر.',
        manage: 'إدارة',
        back: 'العودة للقائمة',
        passwordGuide: 'دليل كلمات المرور',
        quickActions: 'روابط سريعة',
        notifications: 'إشعارات',
        systemStatus: 'حالة النظام',
        online: 'متصل',
        cloudSync: 'مزامنة سحابية',
        lastBackup: 'آخر نسخ احتياطي',
        metrics: {
            revenue: 'إجمالي الإيرادات',
            pendingInvoices: 'فواتير معلقة',
            lowStock: 'تنبيهات المخزون',
            vipClients: 'عملاء VIP',
        },
        unauthorized: {
            title: 'غير مصرح لك بالدخول',
            subtitle: 'الرجاء تسجيل الدخول لعرض هذه الصفحة.',
        },
        sections: {
            'gm.portal': {
                title: 'بوابة المدير العام',
                desc: 'الوصول الكامل للأدوات الإدارية والمالية والإشرافية على عمليات المتجر.',
            },
            products: {
                title: 'إدارة المنتجات',
                desc: 'إضافة وتعديل وحذف المنتجات، إدارة العروض والأسعار، واستقبال ومتابعة طلبات العملاء.',
            },
            operations: {
                title: 'العمليات والمخزون',
                desc: 'متابعة الشحنات، إدارة المخزون والفروع، فحص الجودة، ومعالجة حركة المنتجات.',
            },
            accounts: {
                title: 'الحسابات والفواتير',
                desc: 'إدارة الفواتير والمدفوعات، كشوفات الحساب للعملاء والموردين، والسجلات المالية.',
            },
            security: {
                title: 'الأمان',
                desc: 'تغيير كلمة المرور الخاصة بك وإدارة إعدادات الأمان لحسابك.'
            },
            developer: {
                title: 'قسم المطور',
                desc: 'تحديثات تقنية، إدارة الواجهات، وربط الخدمات. قسم حصري للفريق التقني.',
                tabs: {
                    general: 'الإعدادات العامة',
                    media: 'الوسائط والمظهر',
                    social: 'التواصل الاجتماعي',
                    ai: 'أدوات الذكاء الاصطناعي',
                    seo: 'التسويق و SEO'
                }
            },
            offers: {
                title: 'إدارة العروض',
                desc: 'إنشاء وتعديل العروض الخاصة والخصومات الموسمية لجذب العملاء.',
            },
            reports: {
                title: 'التقارير والمبيعات',
                desc: 'تحليل أداء المبيعات، أفضل المنتجات، والإحصائيات المتقدمة.',
            },
        },
        security: {
            title: 'إدارة الأمان',
            currentPassword: 'كلمة المرور الحالية',
            changePasswordButton: 'تغيير كلمة المرور',
            changeSuccess: 'تم تغيير كلمة المرور بنجاح!',
            changeError: 'كلمة المرور الحالية غير صحيحة.',
        },
        operations: {
            tabs: {
                inventory: 'المخزون',
                suppliers: 'الموردين',
                quality: 'الجودة'
            },
            suppliersRecord: 'سجل الموردين',
            addSupplier: 'إضافة مورد',
            qualityCheck: 'فحص الجودة',
            startCheck: 'بدء فحص جديد',
            lowStockAlert: 'تنبيه: يوجد {{count}} منتجات أوشكت على النفاذ.',
            updateStock: 'تحديث'
        },
        reports: {
            title: 'تقارير المبيعات المتقدمة',
            salesOverTime: 'المبيعات عبر الزمن',
            topSellingProducts: 'المنتجات الأكثر مبيعاً',
            salesByCategory: 'المبيعات حسب الفئة',
            totalSales: 'إجمالي المبيعات',
            productsSold: 'المنتجات المباعة',
            revenue: 'الإيرادات',
            category: 'الفئة',
        },
        products: {
            title: 'إدارة المنتجات',
            addNew: 'إضافة منتج جديد',
            addTitle: 'إضافة منتج جديد',
            editTitle: 'تعديل المنتج',
            delete: 'حذف',
            cancel: 'إلغاء',
            save: 'حفظ',
            addSuccess: 'تمت إضافة المنتج بنجاح.',
            addError: 'حدث خطأ أثناء إضافة المنتج.',
            updateSuccess: 'تم تحديث المنتج بنجاح.',
            updateError: 'حدث خطأ أثناء تحديث المنتج.',
            deleteSuccess: 'تم حذف المنتج بنجاح.',
            deleteError: 'حدث خطأ أثناء حذف المنتج.',
            confirmDelete: 'هل أنت متأكد من أنك تريد حذف هذا المنتج؟',
            usingMockDataNotice: {
                title: 'تنبيه: أنت تستخدم بيانات تجريبية',
                body: 'لم يتم العثور على منتجات في قاعدة البيانات. لتهيئة قاعدة البيانات بالمنتجات الأولية (91 منتجًا)، انقر على الزر أدناه.'
            },
            seedDatabaseButton: 'تهيئة قاعدة البيانات بالمنتجات',
            confirmSeed: 'هل أنت متأكد؟ ستقوم هذه العملية بإضافة 91 منتجاً إلى قاعدة بياناتك. لا تقم بهذه العملية إذا كانت لديك منتجات بالفعل.',
            seedSuccess: 'تمت تعبئة قاعدة البيانات بنجاح!',
            seedError: 'حدث خطأ أثناء تعبئة قاعدة البيانات: {{message}}',
            noProducts: 'لا توجد منتجات لعرضها. قد تحتاج إلى تعبئة قاعدة البيانات أو إضافة منتجات يدويًا.',
            generateWithAi: {
                button: 'توليد بالذكاء الاصطناعي',
                loading: 'جاري التوليد...',
                keywords: 'كلمات مفتاحية',
                keywordsPlaceholder: 'مثال: طازج، حلو، عضوي',
                helpText: 'اكتب كلمات تساعد الذكاء الاصطناعي على توليد أسماء إبداعية للمنتج.',
            },
            lowStock: {
                title: 'تنبيه انخفاض المخزون',
                thresholdLabel: 'حد التنبيه (أقل من)',
                setButton: 'حفظ',
                toggleLabel: 'عرض المنتجات منخفضة المخزون فقط',
                badge: 'مخزون منخفض',
                thresholdSet: 'تم تعيين حد المخزون المنخفض إلى {{count}}.',
                filterActive: 'يتم عرض {{count}} منتجًا منخفض المخزون.',
                clearFilter: 'إظهار الكل'
            },
        },
        accounts: {
            title: 'إدارة الحسابات والفواتير',
            menu: 'قائمة الحسابات',
            summary: 'ملخص الحسابات',
            totalSales: 'إجمالي المبيعات',
            totalPaid: 'إجمالي المدفوعات',
            totalDue: 'المبالغ المستحقة',
            topClient: 'أفضل عميل',
            invoices: {
                title: 'الفواتير',
                invoice: 'فاتورة',
                id: 'رقم الفاتورة',
                client: 'العميل',
                date: 'تاريخ الإصدار',
                dueDate: 'تاريخ الاستحاق',
                total: 'الإجمالي',
                status: 'الحالة',
                actions: 'إجراءات',
                billTo: 'إصدار فاتورة إلى',
                item: 'الصنف',
                qty: 'الكمية',
                price: 'السعر',
                subtotal: 'المجموع الفرعي',
                shipping: 'الشحن',
                tax: 'الضريبة',
                paymentInstructions: 'تعليمات الدفع'
            },
            payments: {
                title: 'المدفوعات',
                recordNew: 'تسجيل دفعة',
                recordTitle: 'تسجيل دفعة جديدة',
                invoiceId: 'رقم الفاتورة',
                selectInvoice: 'اختر فاتورة...',
                paymentDate: 'تاريخ الدفع',
                amount: 'المبلغ',
                method: 'طريقة الدفع',
                methods: {
                  'Bank Transfer': 'تحويل بنكي',
                  'Cash': 'نقدًا',
                  'Card': 'بطاقة',
                  'Unknown': 'غير معروف'
                },
                confirm: 'تأكيد الدفع',
                success: 'تم تسجيل الدفعة بنجاح.',
                table: {
                    id: 'معرف الدفع',
                    invoiceId: 'رقم الفاتورة',
                    client: 'العميل',
                    date: 'التاريخ',
                    amount: 'المبلغ',
                    method: 'الطريقة'
                }
            },
            clients: {
                title: 'إدارة العملاء (VIP)',
                addNew: 'إضافة عميل جديد',
                editTitle: 'تعديل بيانات العميل',
                addTitle: 'إضافة عميل جديد',
                confirmDelete: 'هل أنت متأكد من حذف هذا العميل؟',
                addSuccess: 'تمت إضافة العميل بنجاح.',
                updateSuccess: 'تم تحديث بيانات العميل بنجاح.',
                deleteSuccess: 'تم حذف العميل بنجاح.',
                searchPlaceholder: 'ابحث بالاسم أو رقم الهاتف...',
                noResults: 'لم يتم العثور على عملاء يطابقون بحثك.',
                noTransactions: 'لا توجد معاملات لهذا العميل.',
                transactionsTitle: 'كشف حساب العميل',
                viewTransactions: 'عرض كشف الحساب',
                deleteClient: 'حذف العميل',
                form: {
                    companyName: 'اسم الشركة',
                    phone: 'رقم الهاتف',
                    contactPerson: 'مسؤول التواصل',
                    shippingAddress: 'عنوان الشحن',
                    addressRequired: 'عنوان الشحن مطلوب.',
                    addressMinLength: 'يجب أن يكون عنوان الشحن 10 أحرف على الأقل.',
                    addressInvalidChars: 'يحتوي العنوان على أحرف غير صالحة.'
                },
                table: {
                    companyName: 'اسم الشركة',
                    phone: 'رقم الهاتف',
                    contactPerson: 'مسؤول التواصل',
                    shippingAddress: 'عنوان الشحن',
                    actions: 'إجراءات'
                }
            },
            reports: {
                title: 'التقارير المالية'
            },
            auth: {
                title: 'الوصول مطلوب',
                subtitle: 'هذا القسم محمي بكلمة مرور.',
                password: 'كلمة المرور',
                passwordError: 'كلمة المرور غير صحيحة.',
                loginButton: 'دخول',
                forgotPassword: 'هل نسيت كلمة المرور؟',
                recoveryTitle: 'استعادة كلمة المرور',
                recoverySubtitle: 'سيتم إرسال رابط لإعادة التعيين إلى البريد الإلكتروني المسجل.',
                emailLabel: 'بريد إلكتروني',
                sendLinkButton: 'إرسال رابط الاستعادة',
                backToLogin: 'العودة لتسجيل الدخول',
                recoverySent: 'تم إرسال تعليمات استعادة كلمة المرور إلى {{email}}.'
            }
        },
        developer: {
            title: 'قسم المطور',
            desc: 'تحديثات تقنية، إدارة الواجهات، وربط الخدمات. قسم حصري للفريق التقني.',
            theme: {
                title: 'تخصيص المظهر',
                primaryColor: 'اللون الأساسي',
                heroImage: 'رابط صورة الهيرو',
                apply: 'تطبيق التغييرات',
                applySuccess: 'تم تطبيق المظهر الجديد بنجاح!',
                reset: 'إعادة للوضع الافتراضي',
                generateImageTitle: 'توليد صورة الهيرو بالذكاء الاصطناعي',
                promptPlaceholder: 'مثال: سلة فواكه طازجة في حقل مشمس',
                generateButton: 'توليد الصورة',
                generating: 'جاري التوليد...',
                generationError: 'فشل توليد الصورة. حاول مرة أخرى.',
                generationSuccess: 'تم توليد الصورة الجديدة بنجاح!',
                promptRequired: 'الرجاء إدخال وصف للصورة.'
            },
            extraTools: 'أدوات إضافية',
            downloadDeploymentGuide: 'تحميل دليل النشر الكامل',
            downloadManual: 'تحميل دليل النظام المحاسبي',
            showroom: {
                manageTitle: 'إدارة صالة العرض',
                addNew: 'إضافة عنصر جديد',
                editTitle: 'تعديل عنصر',
                addTitle: 'إضافة عنصر جديد',
                confirmDelete: 'هل أنت متأكد من حذف هذا العنصر؟',
                table: {
                    image: 'صورة',
                    title: 'العنوان',
                    actions: 'إجراءات'
                },
                form: {
                    title_ar: 'العنوان (عربي)',
                    title_en: 'العنوان (إنجليزي)',
                    description_ar: 'الوصف (عربي)',
                    description_en: 'الوصف (إنجليزي)',
                    image: 'رابط الصورة',
                    videoUrl: 'رابط الفيديو (اختياري)',
                    section_ar: 'القسم (عربي، اختياري)',
                    section_en: 'القسم (إنجليزي، اختياري)',
                    link: 'رابط خارجي (اختياري)',
                    linkText_ar: 'نص الرابط (عربي، اختياري)',
                    linkText_en: 'نص الرابط (إنجليزي، اختياري)'
                }
            },
            auth: {
                title: 'الوصول مطلوب',
                subtitle: 'هذا القسم محمي بكلمة مرور.',
                password: 'كلمة المرور',
                passwordError: 'كلمة المرور غير صحيحة.',
                loginButton: 'دخول',
                forgotPassword: 'هل نسيت كلمة المرور؟',
                recoveryTitle: 'استعادة كلمة المرور',
                recoverySubtitle: 'سيتم إرسال رابط لإعادة التعيين إلى البريد الإلكتروني المسجل.',
                emailLabel: 'البريد الإلكتروني',
                sendLinkButton: 'إرسال رابط الاستعادة',
                backToLogin: 'العودة لتسجيل الدخول',
                recoverySent: 'تم إرسال تعليمات استعادة كلمة المرور إلى {{email}}.'
            }
        },
        gm: {
          auth: {
              title: 'بوابة المدير العام',
              subtitle: 'الرجاء إدخال كلمة المرور للوصول.',
              password: 'كلمة المرور',
              passwordError: 'كلمة المرور غير صحيحة.',
              loginButton: 'دخول',
              forgotPassword: 'هل نسيت كلمة المرور؟',
              recoveryTitle: 'استعادة كلمة المرور',
              recoverySubtitle: 'سيتم إرسال رابط لإعادة التعيين إلى البريد الإلكتروني المسجل.',
              emailLabel: 'البريد الإلكتروني',
              sendLinkButton: 'إرسال رابط الاستعادة',
              backToLogin: 'العودة لتسجيل الدخول',
              recoverySent: 'تم إرسال تعليمات استعادة كلمة المرور إلى {{email}}.'
          }
        },
        offersManager: {
            title: 'إدارة العروض والخصومات',
            addNew: 'إضافة عرض جديد',
            addTitle: 'إنشاء عرض جديد',
            editTitle: 'تعديل العرض',
            confirmDelete: 'هل أنت متأكد من حذف هذا العرض؟',
            table: {
                title: 'العنوان',
                type: 'النوع',
                value: 'القيمة',
                status: 'الحالة',
                actions: 'إجراءات'
            },
            form: {
                title_ar: 'العنوان (عربي)',
                title_en: 'العنوان (إنجليزي)',
                description_ar: 'الوصف (عربي)',
                description_en: 'الوصف (إنجليزي)',
                value: 'القيمة (رقم)'
            },
            types: {
                percentage: 'نسبة مئوية (%)',
                fixed: 'مبلغ ثابت (ر.س)'
            },
            statuses: {
                active: 'نشط',
                inactive: 'غير نشط'
            }
        }
    },
    vip: {
        login: {
            title: 'بوابة عملاء VIP',
            subtitle: 'أهلاً بك في بوابتك الحصرية لإدارة الطلبات والحسابات.',
            phone: 'رقم الجوال (مع رمز الدولة)',
            password: {
                current: 'كلمة المرور الحالية',
                minLengthError: 'يجب أن تكون كلمة المرور 6 أحرف على الأقل.',
                resetTitle: 'إعادة تعيين كلمة المرور',
                resetSubtitle: 'أدخل رقم جوالك المسجل وسنرسل لك رمز تحقق.',
                sendCode: 'إرسال الرمز'
            },
            loginButton: 'تسجيل الدخول',
            registerButton: 'إنشاء حساب جديد',
            forgotPassword: 'هل نسيت كلمة المرور؟',
            rememberMe: 'تذكرني',
            error: 'رقم الجوال أو كلمة المرور غير صحيحة.',
            backToMainStore: 'العودة للمتجر الرئيسي',
            noAccount: "ليس لديك حساب؟",
            haveAccount: 'هل لديك حساب بالفعل؟',
            backToLogin: 'العودة لتسجيل الدخول',
            registration: {
                title: 'إنشاء حساب عميل VIP جديد',
                subtitle: 'انضم إلى شبكة عملائنا المميزين.',
                companyName: 'اسم الشركة',
                phoneExists: 'رقم الجوال هذا مسجل بالفعل.',
                phoneInvalid: 'الرجاء إدخال رقم جوال صحيح.',
                registerSuccess: 'تم إنشاء حسابك بنجاح! يمكنك الآن تسجيل الدخول.',
            },
        },
        dashboard: {
            title: 'لوحة تحكم VIP',
            welcome: 'أهلاً بك، {{name}}!',
            logout: 'تسجيل الخروج',
            view: 'عرض',
            print: 'طباعة',
            share: 'مشاركة',
            orders: {
                title: 'طلباتي السابقة',
                desc: 'تتبع وأدر جميع طلباتك والفواتير المرتبطة بها.',
                id: 'رقم الطلب',
                date: 'التاريخ',
                status: 'الحالة',
                total: 'الإجمالي',
                items: 'الأصناف',
                detailsTitle: 'تفاصيل الطلب'
            },
            financials: {
                title: 'كشف الحساب المالي',
                desc: 'اطلع على سجل معاملاتك ورصيدك الحالي.',
                date: 'التاريخ',
                description: 'الوصف',
                debit: 'مدين',
                credit: 'دائن',
                balance: 'الرصيد',
                totalDebit: 'إجمالي المدين',
                totalCredit: 'إجمالي الدائن',
                currentBalance: 'الرصيد الحالي'
            },
            account: {
                title: 'إعدادات الحساب',
                desc: 'حدث معلومات الاتصال والشحن الخاصة بشركتك.',
                companyInfo: 'معلومات الشركة',
                companyName: 'اسم الشركة',
                editInfo: 'تعديل المعلومات',
                contactPerson: 'مسؤول التواصل',
                address: 'عنوان الشحن',
                saveSuccess: 'تم حفظ التغييرات بنجاح.'
            },
            security: {
                title: 'الأمان وكلمة المرور',
                desc: 'تغيير كلمة المرور وتأمين حسابك.'
            },
            offers: {
                title: 'عروض حصرية',
                desc: 'استفد من العروض والأسعار الخاصة المصممة لعملاء VIP فقط.'
            },
            'quick-order': {
                title: 'طلب سريع',
                desc: 'أعد طلب الأصناف التي تشتريها بشكل متكرر ببضع نقرات فقط.',
                quantity: 'الكمية',
                submitButton: 'إرسال الطلب',
                submitSuccess: 'تم إرسال طلبك السريع بنجاح.'
            },
            trackOrder: {
                title: 'تتبع الطلب المباشر',
                desc: 'شاهد الموقع المباشر لطلبك الحالي على الخريطة.',
                loading: 'جاري تحديد موقع السائق...',
                inProgress: 'السائق في طريقه إليك الآن.',
                delivered: 'تم توصيل طلبك بنجاح!',
                error: 'تعذر الحصول على الموقع الحالي.',
                permissionDenied: 'الرجاء السماح بالوصول إلى الموقع لتتبع طلبك.',
                unavailable: 'تتبع الموقع غير متاح في متصفحك.'
            }
        }
    },
    legal: {
      privacyPolicy: {
        title: "سياسة الخصوصية",
        lastUpdated: "آخر تحديث: 24 مايو 2024",
        intro: "تلتزم شركة نجوم دلتا للتجارة بحماية خصوصية عملائنا الكرام. توضح هذه السياسة كيفية جمعنا واستخدامنا وحمايتنا لبياناتكم الشخصية وفقًا للأنظمة المعمول بها في المملكة العربية السعودية، بما في ذلك قانون التجارة الإلكترونية.",
        collection: {
          title: "جمع البيانات",
          content: "نقوم بجمع المعلومات التي تقدمونها عند التسجيل أو إتمام الطلب، وتشمل الاسم، رقم الهاتف، البريد الإلكتروني، وعنوان التوصيل. كما قد نجمع بيانات فنية حول جهازكم واستخدامكم للموقع لتحسين تجربة المستخدم."
        },
        use: {
          title: "استخدام البيانات",
          content: "تستخدم بياناتكم للأغراض التالية: معالجة وتوصيل الطلبات، التواصل معكم بخصوص حالة الطلب، تحسين خدماتنا، والامتثال للمتطلبات القانونية."
        },
        sharing: {
          title: "مشاركة البيانات",
          content: "لا نقوم ببيع بياناتكم لأي طرف ثالث. قد نشارك بيانات التوصيل (الاسم، العنوان، الهاتف) مع شركائنا في الخدمات اللوجستية لضمان وصول طلباتكم. قد نفصح عن البيانات إذا طلب منا ذلك بموجب القانون."
        },
        security: {
          title: "أمن المعلومات",
          content: "نطبق تدابير أمنية تقنية وتنظيمية مناسبة لحماية بياناتكم من الوصول غير المصرح به أو التغيير أو الإفشاء أو الإتلاف."
        },
        rights: {
          title: "حقوقكم",
          content: "لكم الحق في الوصول إلى بياناتكم الشخصية، وتصحيحها، أو طلب حذفها. للتواصل بخصوص الخصوصية، يرجى مراسلتنا عبر البريد الإلكتروني الرسمي."
        }
      },
      termsConditions: {
        title: "الشروط والأحكام",
        lastUpdated: "آخر تحديث: 24 مايو 2024",
        intro: "مرحبًا بكم في متجر نجوم دلتا. تحكم هذه الشروط والأحكام استخدامكم لمتجرنا وخدماتنا. بطلبكم لأي منتج، فإنكم توافقون على هذه الشروط بالكامل.",
        entity: {
          title: "الكيان القانوني",
          content: "يتم تشغيل هذا المتجر بواسطة شركة نجوم دلتا للتجارة، المسجلة في المملكة العربية السعودية (سجل تجاري: 4030457293)، ومقرها جدة."
        },
        pricing: {
          title: "الأسعار والضريبة",
          content: "جميع الأسعار المعروضة تشمل ضريبة القيمة المضافة (15%) وفقًا للأنظمة السعودية، ما لم يتم ذكر خلاف ذلك صراحة (خاصة لعملاء الجملة و B2B). تخضع الأسعار للتغيير دون إشعار مسبق."
        },
        orders: {
          title: "الطلبات والدفع",
          content: "تخضع جميع الطلبات للقبول وتوفر المنتج. نقبل الدفع عبر التحويل البنكي لحسابات الشركة الرسمية، أو الدفع عند الاستلام. نحتفظ بالحق في إلغاء أي طلب لأي سبب، بما في ذلك أخطاء التسعير."
        },
        delivery: {
          title: "التوصيل",
          content: "نقوم بالتوصيل داخل المدن المحددة في المملكة. يتم توضيح رسوم التوصيل عند إتمام الطلب. الشركة غير مسؤولة عن التأخير الناتج عن ظروف خارجة عن إرادتها."
        },
        returns: {
          title: "الاسترجاع والاستبدال",
          content: "نظرًا لطبيعة المنتجات (خضروات وفواكه طازجة)، يجب فحص المنتجات عند الاستلام فورًا. في حال وجود تلف أو عدم مطابقة، يجب إبلاغ المندوب فورًا أو التواصل معنا خلال 12 ساعة من الاستلام. لا يمكن استرجاع المنتجات الطازجة بعد قبولها إلا في حالات العيوب الخفية التي تظهر خلال فترة الصلاحية المتوقعة."
        },
        law: {
          title: "القانون الواجب التطبيق",
          content: "تخضع هذه الشروط لأنظمة المملكة العربية السعودية، وتختص محاكم المملكة بالنظر في أي نزاع ينشأ عنها."
        }
      }
    }
  },
  en: {
    languageCode: 'en',
    company: {
        slogan: "Your first partner for high-quality fruits and vegetables in Saudi Arabia.",
    },
    geminiError: "An error occurred while contacting AI services. Please check your internet connection and try again.",
    pagination: {
      previous: 'Previous',
      next: 'Next',
    },
    errors: {
      fetchProductsError: 'Failed to load products. Displaying offline data.',
      networkError: 'Network connection failed. Please check your internet connection.',
      unknownApiError: 'An unexpected server error occurred.',
      offlineData: 'Failed to connect to the server. Displaying locally cached data.',
      unauthorized: 'Please log in to continue.',
      forbidden: 'You do not have permission to perform this action.',
    },
    shipping: {
        policyTitle: 'Shipping & Delivery Policy',
        deliveryTimeJeddah: 'Delivery time within Jeddah: 1-2 business days.',
        deliveryTimeOther: 'Delivery time to other major cities (Riyadh, Dammam): 2-4 business days.',
        cost: 'Standard shipping cost: 25 SAR.',
        freeShippingThreshold: 'Free shipping for orders over 200 SAR.',
    },
    header: {
        storeTitle: 'Delta Stars Trading Store',
        storeName: 'Delta Stars',
        home: 'Home',
        products: 'Products',
        showroom: 'Showroom',
        wishlist: 'Wishlist',
        dashboard: 'Dashboard',
        navLinks: {
            home: 'Home',
            products: 'Products',
            showroom: 'Showroom',
            wishlist: 'Wishlist',
            dashboard: 'Dashboard',
        },
        login: 'Login',
        logout: 'Logout',
        selectCurrency: 'Select Currency',
    },
    footer: {
        about: 'About Us',
        contact: 'Contact Info',
        phone: 'Phone',
        whatsapp: 'WhatsApp',
        email: 'Email',
        address: 'Address',
        quickLinks: 'Quick Links',
        privacy: 'Privacy Policy',
        terms: 'Terms & Conditions',
        location: 'Our Location',
        copyright: 'Delta Stars Trading Co. All rights reserved.',
        commercialRegistry: 'Commercial Registry',
        taxId: 'Tax ID',
        callUs: "Call Us",
        whatsappUs: "Contact us on WhatsApp",
        emailUs: "Email Us",
    },
    home: {
        hero: {
            title: 'Delta Stars Trading Store',
            subtitle: 'Quality and fresh taste... directly from the farm to your table.',
            button: 'Browse Products',
        },
        categories: {
            title: 'Shop by Category',
        },
        featured: {
            title: 'Featured Products',
            seeAll: 'See All →',
        },
        newArrivals: {
            title: 'New Arrivals',
        },
        specialOffers: {
            title: 'Special Offers',
        },
        gallery: {
            title: 'Our Store in Pictures',
            subtitle: 'A glimpse into our quality and operations.',
            alt: {
                fruitsWarehouse: 'Refrigerated fruit warehouses of Delta Stars Company',
                datesWarehouse: 'Refrigerated date warehouses of Delta Stars Company',
                mobileApp: 'Shop our fresh products via our app',
            }
        },
        quality: {
            title: 'Quality Assurance',
            description: 'We adhere to the highest quality standards in selecting and supplying our products to ensure your satisfaction.',
        },
        delivery: {
            title: 'Fast Delivery',
            description: 'Fast and reliable delivery service throughout the Kingdom to ensure your orders arrive fresh.',
        },
        support: {
            title: 'Customer Support',
            description: 'A dedicated customer support team ready to answer your inquiries and assist you at any time.',
        },
        location: {
            title: 'Our Location',
            subtitle: 'Feel free to visit us or contact us directly. We are here to serve you.',
            getDirections: 'Get Directions',
        },
        vip: {
            title: 'VIP Client Portal',
            description: 'Are you one of our business clients (restaurants, hotels, markets)? Log in to easily manage your orders and account.',
            button: 'Enter VIP Portal',
        },
        clients: {
            title: 'Partners in Success',
            subtitle: 'We are proud to serve a selection of the largest companies and institutions in the Kingdom, always striving to build strong and lasting relationships.',
        },
    },
    products: {
        title: 'All Products',
        subtitle: 'Browse our complete collection of fresh products',
        searchPlaceholder: 'Search for a product...',
        allCategories: 'All Categories',
        noResults: 'No products match your search.',
        sortBy: 'Sort by',
        sort: {
            default: 'Default',
            priceAsc: 'Price: Low to High',
            priceDesc: 'Price: High to Low',
            nameAsc: 'Name: A-Z',
            nameDesc: 'Name: Z-A',
            ratingDesc: 'Rating: High to Low',
        },
    },
    product: {
        discount: 'SALE',
        addToCart: 'Add to Cart',
        addToWishlist: 'Add to Wishlist',
        removeFromWishlist: 'Remove from Wishlist',
    },
     productDetail: {
      title: 'Product Details',
      backToProducts: 'Back to Products',
      description: 'Description',
    },
    reviews: {
        title: 'Customer Reviews',
        leaveReview: 'Leave a Review',
        yourName: 'Your Name',
        rating: 'Rating',
        comment: 'Your Comment',
        submit: 'Submit Review',
        noReviews: 'There are no reviews for this product yet. Be the first to add one!',
        averageRating: 'Average Rating',
        reviewsCount: '({{count}} reviews)',
        review: 'review',
        view: 'View reviews',
        formSuccess: 'Thank you! Your review has been submitted successfully.',
        formError: 'Please enter a name and rating.',
    },
    categories: {
        fruits: 'Fruits',
        vegetables: 'Vegetables',
        herbs: 'Herbs',
        dates: 'Dates',
        eggs: 'Eggs',
        organic: 'Organic',
        seasonal: 'Seasonal',
    },
    cart: {
        title: 'Shopping Cart',
        empty: 'Your shopping cart is empty.',
        total: 'Total',
        clear: 'Clear Cart',
        checkoutButton: 'Proceed to Checkout',
        continueShopping: 'Continue Shopping',
        checkout: {
            title: 'Checkout',
            successTitle: 'Thank You for Your Order!',
            successSubtitle: 'Your order has been provisionally received. Our team will contact you via WhatsApp to confirm the order and arrange delivery. To complete the purchase, please use one of the following options:',
            codTitle: '1. Cash on Delivery (COD)',
            codDesc: 'The delivery representative will collect the amount upon delivery of the order.',
            transferTitle: '2. Bank Transfer',
            transferDesc1: 'Please transfer the total amount of',
            transferDesc2: 'to our bank account:',
            bankName: 'Bank Name',
            beneficiary: 'Beneficiary Name',
            orderId: 'Order ID',
            whatsappConfirmation: 'To confirm your order faster, click here to send order details via WhatsApp.',
            whatsappConfirmationMessage: 'Hello Delta Stars, I would like to confirm my order #{{orderId}} with a total of {{formattedTotal}}. I will send the transfer receipt shortly.',
            accountNumber: 'Account Number',
            iban: 'IBAN',
            note: 'Important Note: After transferring, please send a picture of the receipt to our WhatsApp number',
            note2: 'to confirm your order.',
            backToStore: 'Back to Store',
        }
    },
    wishlist: {
        title: 'My Wishlist',
        empty: 'Your wishlist is empty.',
        moveToCart: 'Move to Cart',
        remove: 'Remove',
    },
    showroom: {
        title: 'Showroom',
        subtitle: 'Discover the latest offers, featured products, and exclusive events from Delta Stars.',
        noItems: 'No offers or events are currently available. Follow us for more!',
        generalSection: 'General Offers',
        inquireNow: 'Inquire Now',
        inquiryMessage: 'Hello, I am interested in the offer: {{title}}',
    },
    aiAssistant: {
      title: "Delta AI Assistant",
      placeholder: "Ask about our products, offers, or anything else...",
      welcomeMessage: "Hi! I'm 'Nibras', your smart assistant at Delta Stars Store. How can I help you today?",
      open: "Open AI Assistant",
      send: "Send",
      error: "Sorry, I'm having technical difficulties right now. Please try again later.",
      thinking: "Thinking..."
    },
    login: {
        title: 'Admin Dashboard Login',
        email: 'Email Address',
        password: 'Password',
        error: 'Incorrect email or password.',
        loginButton: 'Sign In',
        backToStore: '← Back to Store',
        forgotPassword: 'Forgot your password?',
    },
    auth: {
        logoutConfirmation: "Are you sure you want to log out?",
        passwordLengthError: 'Password must be at least 6 characters.',
        changePasswordTitle: 'Change Password',
        newPassword: 'New Password',
        confirmPassword: 'Confirm New Password',
        passwordMismatch: 'The two passwords do not match.',
        passwordChangedSuccess: 'Password changed successfully.',
        ok: 'OK',
        cancel: 'Cancel',
        changePasswordButton: 'Change Password',
        createAccount: 'Create Account',
        createNewPassword: 'Create a New Password',
        showPassword: 'Show password',
        hidePassword: 'Hide password',
        otp: {
            title: 'Verify Code',
            sentToEmail: 'A verification code has been sent to {{email}}. <br/><small>(For demo: check browser console)</small>',
            sentToPhone: 'A verification code has been sent to phone number {{phone}}. <br/><small>(For demo: check browser console)</small>',
            placeholder: 'Enter code here',
            verify: 'Verify',
            invalidCode: 'The code you entered is incorrect.',
            passwordLengthError: 'Password must be at least 6 characters long.',
            successTitle: 'Success!',
            successSubtitle: 'Your password has been updated. You can now log in.',
            generatingCode: "Generating secure code...",
            fallbackTitle: "Standard Verification Message",
            fallbackInstruction: "Could not connect to the service. Please use the standard code below to proceed.",
        },
    },
     passwordGuide: {
        title: "Default Passwords Guide",
        intro: "Below are the default credentials for different parts of the application. You will be prompted to change them on your first login.",
        admin: {
            title: "Admin Dashboard",
            email: "Email",
            password: "Password"
        },
        vip: {
            title: "Client Account (Demo)",
            phone: "Phone Number",
            password: "Password"
        },
        sections: {
            title: "Internal Sections",
            desc: "The default password for the (Developer, GM, Accounts) sections is:",
            password: "Password"
        }
    },
    dashboard: {
        title: 'General Manager Dashboard',
        welcome: 'Welcome, <span dir="ltr">{{email}}</span>. From here you can manage all aspects of the store.',
        manage: 'Manage',
        back: 'Back to Menu',
        passwordGuide: 'Passwords Guide',
        quickActions: 'Quick Actions',
        notifications: 'Notifications',
        systemStatus: 'System Status',
        online: 'Online',
        cloudSync: 'Cloud Sync',
        lastBackup: 'Last Backup',
        metrics: {
            revenue: 'Total Revenue',
            pendingInvoices: 'Pending Invoices',
            lowStock: 'Low Stock Alerts',
            vipClients: 'VIP Clients',
        },
        unauthorized: {
            title: 'Unauthorized Access',
            subtitle: 'Please log in to view this page.',
        },
        sections: {
            'gm.portal': {
                title: 'General Manager Portal',
                desc: 'Full access to administrative, financial, and supervisory tools for store operations.',
            },
            products: {
                title: 'Product Management',
                desc: 'Add, edit, and delete products, manage offers and prices, and handle customer orders.',
            },
            operations: {
                title: 'Operations & Inventory',
                desc: 'Track shipments, manage inventory and branches, conduct quality checks, and process product movements.',
            },
            accounts: {
                title: 'Accounts & Invoices',
                desc: 'Manage invoices and payments, view account statements for customers and suppliers, and maintain financial records.',
            },
            security: {
                title: 'Security',
                desc: 'Change your password and manage security settings for your account.'
            },
            developer: {
                title: 'Developer Section',
                desc: 'Technical updates, UI management, and service integration. Exclusive for the tech team.',
                tabs: {
                    general: 'General Settings',
                    media: 'Media & Appearance',
                    social: 'Social Media',
                    ai: 'AI Tools',
                    seo: 'Marketing & SEO'
                }
            },
            offers: {
                title: 'Offer Management',
                desc: 'Create and edit special offers and seasonal discounts to attract customers.',
            },
            reports: {
                title: 'Reports & Sales',
                desc: 'Analyze sales performance, top products, and advanced statistics.',
            },
        },
        security: {
            title: 'Security Management',
            currentPassword: 'Current Password',
            changePasswordButton: 'Change Password',
            changeSuccess: 'Password changed successfully!',
            changeError: 'Incorrect current password.',
        },
        operations: {
            tabs: {
                inventory: 'Inventory',
                suppliers: 'Suppliers',
                quality: 'Quality'
            },
            suppliersRecord: 'Suppliers Record',
            addSupplier: 'Add Supplier',
            qualityCheck: 'Quality Check',
            startCheck: 'Start New Check',
            lowStockAlert: 'Alert: There are {{count}} products running low on stock.',
            updateStock: 'Update'
        },
        reports: {
            title: 'Advanced Sales Reports',
            salesOverTime: 'Sales Over Time',
            topSellingProducts: 'Top Selling Products',
            salesByCategory: 'Sales by Category',
            totalSales: 'Total Sales',
            productsSold: 'Products Sold',
            revenue: 'Revenue',
            category: 'Category',
        },
        products: {
            title: 'Manage Products',
            addNew: 'Add New Product',
            addTitle: 'Add New Product',
            editTitle: 'Edit Product',
            delete: 'Delete',
            cancel: 'Cancel',
            save: 'Save',
            addSuccess: 'Product added successfully.',
            addError: 'Error adding product.',
            updateSuccess: 'Product updated successfully.',
            updateError: 'Error updating product.',
            deleteSuccess: 'Product deleted successfully.',
            deleteError: 'Error deleting product.',
            confirmDelete: 'Are you sure you want to delete this product?',
            usingMockDataNotice: {
                title: 'Notice: You are using mock data',
                body: 'No products were found in the database. To seed the database with initial products (91 items), click the button below.'
            },
            seedDatabaseButton: 'Seed Database with Products',
            confirmSeed: 'Are you sure? This will add 91 products to your database. Do not perform this action if you already have products.',
            seedSuccess: 'Database seeded successfully!',
            seedError: 'Error seeding database: {{message}}',
            noProducts: 'No products to display. You may need to seed the database or add products manually.',
            generateWithAi: {
                button: 'Generate with AI',
                loading: 'Generating...',
                keywords: 'Keywords',
                keywordsPlaceholder: 'e.g., fresh, sweet, organic',
                helpText: 'Provide keywords to help the AI generate creative product names.',
            },
            lowStock: {
                title: "Low Stock Alert",
                thresholdLabel: "Alert Threshold (less than)",
                setButton: "Set",
                toggleLabel: "Show only low stock products",
                badge: "Low Stock",
                thresholdSet: "Low stock threshold set to {{count}}.",
                filterActive: "Showing {{count}} low-stock products.",
                clearFilter: "Show All"
            },
        },
        accounts: {
            title: 'Manage Accounts & Invoices',
            menu: 'Accounts Menu',
            summary: 'Accounts Summary',
            totalSales: 'Total Sales',
            totalPaid: 'Total Paid',
            totalDue: 'Total Due',
            topClient: 'Top Client',
            invoices: {
                title: 'Invoices',
                invoice: 'Invoice',
                id: 'Invoice ID',
                client: 'Client',
                date: 'Issue Date',
                dueDate: 'Due Date',
                total: 'Total',
                status: 'Status',
                actions: 'Actions',
                billTo: 'Bill To',
                item: 'Item',
                qty: 'Qty',
                price: 'Price',
                subtotal: 'Subtotal',
                shipping: 'Shipping',
                tax: 'Tax',
                paymentInstructions: 'Payment Instructions'
            },
            payments: {
                title: 'Payments',
                recordNew: 'Record Payment',
                recordTitle: 'Record a New Payment',
                invoiceId: 'Invoice ID',
                selectInvoice: 'Select an invoice...',
                paymentDate: 'Payment Date',
                amount: 'Amount',
                method: 'Payment Method',
                methods: {
                  'Bank Transfer': 'Bank Transfer',
                  'Cash': 'Cash',
                  'Card': 'Card',
                  'Unknown': 'Unknown'
                },
                confirm: 'Confirm Payment',
                success: 'Payment recorded successfully.',
                table: {
                    id: 'Payment ID',
                    invoiceId: 'Invoice ID',
                    client: 'Client',
                    date: 'Date',
                    amount: 'Amount',
                    method: 'Method'
                }
            },
            clients: {
                title: 'Manage Clients (VIP)',
                addNew: 'Add New Client',
                editTitle: 'Edit Client Information',
                addTitle: 'Add New Client',
                confirmDelete: 'Are you sure you want to delete this client?',
                addSuccess: 'Client added successfully.',
                updateSuccess: 'Client information updated successfully.',
                deleteSuccess: 'Client deleted successfully.',
                searchPlaceholder: 'Search by name or phone...',
                noResults: 'No clients match your search.',
                noTransactions: 'No transactions for this client.',
                transactionsTitle: 'Client Statement of Account',
                viewTransactions: 'View Statement',
                deleteClient: 'Delete Client',
                form: {
                    companyName: 'Company Name',
                    phone: 'Phone Number',
                    contactPerson: 'Contact Person',
                    shippingAddress: 'Shipping Address',
                    addressRequired: 'Shipping address is required.',
                    addressMinLength: 'Shipping address must be at least 10 characters long.',
                    addressInvalidChars: 'Address contains invalid characters.'
                },
                table: {
                    companyName: 'Company Name',
                    phone: 'Phone',
                    contactPerson: 'Contact Person',
                    shippingAddress: 'Shipping Address',
                    actions: 'Actions'
                }
            },
            reports: {
                title: 'Financial Reports'
            },
             auth: {
                title: 'Access Required',
                subtitle: 'This section is password protected.',
                password: 'Password',
                passwordError: 'Incorrect password.',
                loginButton: 'Login',
                forgotPassword: 'Forgot password?',
                recoveryTitle: 'Password Recovery',
                recoverySubtitle: 'A reset link will be sent to the registered email.',
                emailLabel: 'Email',
                sendLinkButton: 'Send Recovery Link',
                backToLogin: 'Back to Login',
                recoverySent: 'Password recovery instructions have been sent to {{email}}.'
            }
        },
        developer: {
            title: 'Developer Section',
            desc: 'Technical updates, UI management, and service integration. Exclusive for the tech team.',
            theme: {
                title: 'Theme Customization',
                primaryColor: 'Primary Color',
                heroImage: 'Hero Image URL',
                apply: 'Apply Changes',
                applySuccess: 'New theme applied successfully!',
                reset: 'Reset to Default',
                generateImageTitle: 'Generate Hero Image with AI',
                promptPlaceholder: 'e.g., A basket of fresh fruits in a sunny field',
                generateButton: 'Generate Image',
                generating: 'Generating...',
                generationError: 'Image generation failed. Please try again.',
                generationSuccess: 'New image generated successfully!',
                promptRequired: 'Please enter a description for the image.'
            },
            extraTools: 'Extra Tools',
            downloadDeploymentGuide: 'Download Full Deployment Guide',
            downloadManual: 'Download Accounting System Manual',
            showroom: {
                manageTitle: 'Manage Showroom',
                addNew: 'Add New Item',
                editTitle: 'Edit Item',
                addTitle: 'Add New Item',
                confirmDelete: 'Are you sure you want to delete this item?',
                table: {
                    image: 'Image',
                    title: 'Title',
                    actions: 'Actions'
                },
                form: {
                    title_ar: 'Title (Arabic)',
                    title_en: 'Title (English)',
                    description_ar: 'Description (Arabic)',
                    description_en: 'Description (English)',
                    image: 'Image URL',
                    videoUrl: 'Video URL (Optional)',
                    section_ar: 'Section (Arabic, Optional)',
                    section_en: 'Section (English, Optional)',
                    link: 'External Link (Optional)',
                    linkText_ar: 'Link Text (Arabic, Optional)',
                    linkText_en: 'Link Text (English, Optional)'
                }
            },
            auth: {
                title: 'Access Required',
                subtitle: 'This section is password protected.',
                password: 'Password',
                passwordError: 'Incorrect password.',
                loginButton: 'Login',
                forgotPassword: 'Forgot password?',
                recoveryTitle: 'Password Recovery',
                recoverySubtitle: 'A reset link will be sent to the registered email.',
                emailLabel: 'Email',
                sendLinkButton: 'Send Recovery Link',
                backToLogin: 'Back to Login',
                recoverySent: 'Password recovery instructions have been sent to {{email}}.'
            }
        },
        gm: {
          auth: {
              title: 'General Manager Portal',
              subtitle: 'Please enter the password to access.',
              password: 'Password',
              passwordError: 'Incorrect password.',
              loginButton: 'Login',
              forgotPassword: 'Forgot password?',
              recoveryTitle: 'Password Recovery',
              recoverySubtitle: 'A reset link will be sent to the registered email.',
              emailLabel: 'Email',
              sendLinkButton: 'Send Recovery Link',
              backToLogin: 'Back to Login',
              recoverySent: 'Password recovery instructions have been sent to {{email}}.'
          }
        },
        offersManager: {
            title: 'Manage Offers & Discounts',
            addNew: 'Add New Offer',
            addTitle: 'Create New Offer',
            editTitle: 'Edit Offer',
            confirmDelete: 'Are you sure you want to delete this offer?',
            table: {
                title: 'Title',
                type: 'Type',
                value: 'Value',
                status: 'Status',
                actions: 'Actions'
            },
            form: {
                title_ar: 'Title (Arabic)',
                title_en: 'Title (English)',
                description_ar: 'Description (Arabic)',
                description_en: 'Description (English)',
                value: 'Value (number)'
            },
            types: {
                percentage: 'Percentage (%)',
                fixed: 'Fixed Amount (SAR)'
            },
            statuses: {
                active: 'Active',
                inactive: 'Inactive'
            }
        }
    },
    vip: {
        login: {
            title: 'VIP Client Portal',
            subtitle: 'Welcome to your exclusive portal for managing orders and accounts.',
            phone: 'Phone Number (with country code)',
            password: {
                current: 'Current Password',
                minLengthError: 'Password must be at least 6 characters long.',
                resetTitle: 'Reset Password',
                resetSubtitle: 'Enter your registered phone number and we will send you a verification code.',
                sendCode: 'Send Code'
            },
            loginButton: 'Login',
            registerButton: 'Create New Account',
            forgotPassword: 'Forgot Password?',
            rememberMe: 'Remember Me',
            error: 'Incorrect phone number or password.',
            backToMainStore: 'Back to Main Store →',
            noAccount: "Don't have an account?",
            haveAccount: 'Already have an account?',
            backToLogin: 'Back to Login',
            registration: {
                title: 'Create a New VIP Account',
                subtitle: 'Join our network of premium clients.',
                companyName: 'Company Name',
                phoneExists: 'This phone number is already registered.',
                phoneInvalid: 'Please enter a valid phone number.',
                registerSuccess: 'Your account has been created successfully! You can now log in.',
            },
        },
        dashboard: {
            title: 'VIP Dashboard',
            welcome: 'Welcome, {{name}}!',
            logout: 'Logout',
            view: 'View',
            print: 'Print',
            share: 'Share',
            orders: {
                title: 'My Previous Orders',
                desc: 'Track and manage all your orders and associated invoices.',
                id: 'Order ID',
                date: 'Date',
                status: 'Status',
                total: 'Total',
                items: 'Items',
                detailsTitle: 'Order Details'
            },
            financials: {
                title: 'Financial Statement',
                desc: 'View your transaction history and current balance.',
                date: 'Date',
                description: 'Description',
                debit: 'Debit',
                credit: 'Credit',
                balance: 'Balance',
                totalDebit: 'Total Debit',
                totalCredit: 'Total Credit',
                currentBalance: 'Current Balance'
            },
            account: {
                title: 'Account Settings',
                desc: 'Update your company\'s contact and shipping information.',
                companyInfo: 'Company Information',
                companyName: 'Company Name',
                editInfo: 'Edit Information',
                contactPerson: 'Contact Person',
                address: 'Shipping Address',
                saveSuccess: 'Changes saved successfully.'
            },
            security: {
                title: 'Security & Password',
                desc: 'Change your password and secure your account.'
            },
            offers: {
                title: 'Exclusive Offers',
                desc: 'Access special offers and pricing designed only for VIP clients.'
            },
            'quick-order': {
                title: 'Quick Order',
                desc: 'Re-order your frequently purchased items with just a few clicks.',
                quantity: 'Quantity',
                submitButton: 'Submit Order',
                submitSuccess: 'Your quick order has been submitted successfully.'
            },
            trackOrder: {
                title: 'Live Order Tracking',
                desc: 'See the live location of your current order on the map.',
                loading: 'Locating driver...',
                inProgress: 'The driver is on the way to you now.',
                delivered: 'Your order has been successfully delivered!',
                error: 'Could not retrieve the current location.',
                permissionDenied: 'Please allow location access to track your order.',
                unavailable: 'Location tracking is not available in your browser.'
            }
        }
    },
    legal: {
      privacyPolicy: {
        title: "Privacy Policy",
        lastUpdated: "Last Updated: May 24, 2024",
        intro: "Delta Stars Trading Co. is committed to protecting the privacy of our valued customers. This policy explains how we collect, use, and protect your personal data in accordance with the regulations of the Kingdom of Saudi Arabia, including the E-commerce Law.",
        collection: {
          title: "Data Collection",
          content: "We collect information you provide when registering or placing an order, including name, phone number, email, and delivery address. We may also collect technical data about your device and site usage to improve user experience."
        },
        use: {
          title: "Data Use",
          content: "Your data is used for: processing and delivering orders, communicating with you regarding order status, improving our services, and complying with legal requirements."
        },
        sharing: {
          title: "Data Sharing",
          content: "We do not sell your data to any third party. We may share delivery data (name, address, phone) with our logistics partners to ensure your orders are delivered. We may disclose data if required by law."
        },
        security: {
          title: "Security",
          content: "We implement appropriate technical and organizational security measures to protect your data from unauthorized access, alteration, disclosure, or destruction."
        },
        rights: {
          title: "Your Rights",
          content: "You have the right to access, correct, or request deletion of your personal data. For privacy concerns, please contact us via our official email."
        }
      },
      termsConditions: {
        title: "Terms & Conditions",
        lastUpdated: "Last Updated: May 24, 2024",
        intro: "Welcome to Delta Stars Store. These terms and conditions govern your use of our store and services. By ordering any product, you agree to these terms in full.",
        entity: {
          title: "Legal Entity",
          content: "This store is operated by Delta Stars Trading Co., registered in Saudi Arabia (CR: 4030457293), based in Jeddah."
        },
        pricing: {
          title: "Pricing & Tax",
          content: "All displayed prices include VAT (15%) in accordance with Saudi regulations, unless explicitly stated otherwise (especially for wholesale and B2B clients). Prices are subject to change without prior notice."
        },
        orders: {
          title: "Orders & Payment",
          content: "All orders are subject to acceptance and product availability. We accept payment via bank transfer to official company accounts, or cash on delivery. We reserve the right to cancel any order for any reason, including pricing errors."
        },
        delivery: {
          title: "Delivery",
          content: "We deliver within specified cities in the Kingdom. Delivery fees are clarified at checkout. The company is not responsible for delays caused by circumstances beyond our control."
        },
        returns: {
          title: "Returns & Exchanges",
          content: "Due to the nature of the products (fresh fruits and vegetables), products must be inspected immediately upon receipt. In case of damage or non-compliance, the representative must be notified immediately or contact us within 12 hours of receipt. Fresh products cannot be returned after acceptance except in cases of hidden defects appearing within the expected shelf life."
        },
        law: {
          title: "Governing Law",
          content: "These terms are governed by the regulations of the Kingdom of Saudi Arabia, and the courts of the Kingdom shall have jurisdiction over any dispute arising therefrom."
        }
      }
    }
  }
};
