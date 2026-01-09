
import { Product, Review, CategoryKey } from '../../../types';

const fixDriveLink = (idOrUrl: string) => {
    if (!idOrUrl) return "https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=500&auto=format&fit=crop";
    let cleanId = idOrUrl;
    if (idOrUrl.includes('id=')) {
        const parts = idOrUrl.split('id=');
        cleanId = parts[parts.length - 1];
    } else if (idOrUrl.includes('/d/')) {
        const parts = idOrUrl.split('/d/');
        cleanId = parts[1].split('/')[0];
    }
    cleanId = cleanId.split('/view')[0].split('?')[0].split('&')[0];
    return `https://lh3.googleusercontent.com/d/${cleanId}`;
};

const rawData = [
  {"id":1,"name_en":"Apple Gala 1000 G","name_ar":"تفاح سكري","unit":"kg","price":7,"image":"14raaz2yPcxGv4PLTCxyA2SqNDXJikXoi","cat":"fruits"},
  {"id":2,"name_en":"Apple Green 1000 G","name_ar":"تفاح اخضر","unit":"kg","price":7,"image":"1x_4VWYYveuiwJtVdfNLReIithJO2JzGI","cat":"fruits"},
  {"id":3,"name_en":"Apple Red 1000 G","name_ar":"تفاح احمر","unit":"kg","price":7.5,"image":"1s3WUV0dJ_3GYKa7_XV7BeTKfzl1iq__b","cat":"fruits"},
  {"id":4,"name_en":"Apple Yellow 1000 G","name_ar":"تفاح اصفر","unit":"kg","price":7,"image":"1JTO_fu2XlCN3-wFNV3OuN-SOPDgnGKUK","cat":"fruits"},
  {"id":5,"name_en":"Apricot 1000 G","name_ar":"مشمش","unit":"kg","price":16,"image":"1nGeZ4RDnJ-P-n30KM3JUgZFEy2hbHXE3","cat":"fruits"},
  {"id":6,"name_en":"Arabic leeks (Kurath)","name_ar":"كراث","unit":"pc","price":1.5,"image":"1bYMbxIhe8e1kSLSR24DCxhF9YCCBk5UX","cat":"herbs"},
  {"id":7,"name_en":"Banana 1000 G","name_ar":"موز","unit":"kg","price":6.5,"image":"1C4X6hYllVzFnei9q-pGR5ET3GzCmN8hc","cat":"fruits"},
  {"id":8,"name_en":"Beans Green Fresh 1000 G","name_ar":"فاصوليا خضراء","unit":"kg","price":8,"image":"1hOScKwXU6b7Z7xPVst4u3oBCHfTRbRGc","cat":"vegetables"},
  {"id":9,"name_en":"Beet Root Local 1000 G","name_ar":"بنجر","unit":"kg","price":5,"image":"1t5GnOEdjJX6RB4E2gxUoTQ8ceEix_LLt","cat":"vegetables"},
  {"id":10,"name_en":"Bell Pepper Green 1000 G","name_ar":"رومي اخضر","unit":"kg","price":6,"image":"1cw_hNecLBH1l-QqW26K18rR77Amz7hd3","cat":"vegetables"},
  {"id":11,"name_en":"Bell Pepper Red 1000 G","name_ar":"رومي احمر","unit":"kg","price":8,"image":"1g_Ymd4KHPMyhlgtJzUCVoxaCw8Qgk29_","cat":"vegetables"},
  {"id":12,"name_en":"Bell pepper Yellow 1000 G","name_ar":"رومي اصفر","unit":"kg","price":8,"image":"1HWgl4vQ7-yyD13LJH9Leyi7ZmOmZo8fb","cat":"vegetables"},
  {"id":13,"name_en":"Bitter Gourd (karela)","name_ar":"كرلا","unit":"kg","price":6.5,"image":"1NAapL0Lss9vg4VqST9-BbdmHZDZ3QChT","cat":"vegetables"},
  {"id":14,"name_en":"Broccoli Local 1000 G","name_ar":"بركلي","unit":"kg","price":16,"image":"1H1hPMaQrc4fHZJpypn8k3W8r1x4RPoOg","cat":"vegetables"},
  {"id":15,"name_en":"Cabbage Red Local 1000 G","name_ar":"ملفوف احمر","unit":"kg","price":4.5,"image":"1GmaS_f37r1vSWu_rrhSi71YWPH5I41Gr","cat":"vegetables"},
  {"id":16,"name_en":"Cabbage White Local 1000 G","name_ar":"ملفوف ابيض","unit":"kg","price":3.5,"image":"1yZGiLqEPln5Lk_nO5uuyLMdiegf0wZ8S","cat":"vegetables"},
  {"id":17,"name_en":"Cactus Pears Seasonal","name_ar":"تين شوكي","unit":"kg","price":13,"image":"1dt0lqZGWz7JdY5dYlR1tLaXA3VQADP61","cat":"seasonal"},
  {"id":18,"name_en":"Carrot 1000 G","name_ar":"جزر محلي","unit":"kg","price":4.5,"image":"1qKdTHTwWcqymmJfubyR5iD2ZCXQATDdk","cat":"vegetables"},
  {"id":19,"name_en":"Califlower 1000 G","name_ar":"زهرة","unit":"kg","price":7,"image":"1-LRmks22xtvxe0-g8WMk17KJeGBLsYRV","cat":"vegetables"},
  {"id":20,"name_en":"Celery Green Local 1000 G","name_ar":"كرفس محلي","unit":"kg","price":18,"image":"18t3pyZ33bNvPuKs65FV3kow14PIzVrg-","cat":"herbs"},
  {"id":21,"name_en":"Chilli Green Local 1000 G","name_ar":"فلفل حار اخضر","unit":"kg","price":9,"image":"1qz9eE3COufpOQ5HjRVpP82RSuv8LmPF4","cat":"vegetables"},
  {"id":22,"name_en":"Chilli Red Hot Local 1000 G","name_ar":"فلفل حار احمر","unit":"kg","price":8,"image":"1D_QtXdvpAHh0VtWCGs69Jvk8TSd-ltIh","cat":"vegetables"},
  {"id":23,"name_en":"Coconut Brown Husked Fresh","name_ar":"جوز الهند","unit":"pc","price":8,"image":"1qjJ9mY4Cv2xWKR1cAqX5TajU4TWe-eH-","cat":"fruits"},
  {"id":24,"name_en":"Coriander Leaves 1000 G","name_ar":"كزبرة","unit":"pc","price":1.5,"image":"1fjr3r9Lr6ypvGFer_a_od4L1uUJXCp8c","cat":"herbs"},
  {"id":25,"name_en":"Cucumber 1000 G","name_ar":"خيار","unit":"kg","price":4.5,"image":"1JhtJga2yvkgH6E3GfMBVgwJMnyaCA0Aw","cat":"vegetables"},
  {"id":26,"name_en":"Curry Leaves Imported","name_ar":"أوراق الكاري","unit":"kg","price":20,"image":"1TzrKRmpeSHL2ZMZozNaqdPC3P4spN3Qj","cat":"herbs"},
  {"id":27,"name_en":"Custard Apples Fresh 1000 G","name_ar":"قشطة","unit":"kg","price":11,"image":"1FeNZd6hnZEfGUg_sCMQ-XPtwnVqj0ykB","cat":"fruits"},
  {"id":28,"name_en":"Dill Local 1000 G","name_ar":"شبت","unit":"pc","price":1.5,"image":"1hk_5XtN4qGlLlT6KdyEH67WIc_wcsMS6","cat":"herbs"},
  {"id":29,"name_en":"Drumstick Bengali Vegetable","name_ar":"درام ستك","unit":"kg","price":12,"image":"1LnExAbab0tIGy8Yg22Mdw-OdIzo8F8VY","cat":"vegetables"},
  {"id":30,"name_en":"Eggplant Big/Baby Local","name_ar":"باذنجان اسود","unit":"kg","price":3.5,"image":"1fSgEKHdJaYF5IrQ2tHGel3Ttxujzj0W5","cat":"vegetables"},
  {"id":31,"name_en":"Eggplant Long Local Fresh","name_ar":"باذنجان طويل","unit":"kg","price":5,"image":"19n6xPGE2IA4576T60trPro2mHCxD_XNf","cat":"vegetables"},
  {"id":32,"name_en":"Eggplant White Local Fresh","name_ar":"باذنجان ابيض","unit":"kg","price":4,"image":"1Mu48BBY8ktaFOd07_zhY32lKRt_f3Zpw","cat":"vegetables"},
  {"id":33,"name_en":"Figs Local 1000 G","name_ar":"تين محلي","unit":"kg","price":23,"image":"1Y08cy9YH20Zt3GKqcBuuDKbHiHV3cVS_","cat":"seasonal"},
  {"id":34,"name_en":"Garlic Peeled 1000 G","name_ar":"ثوم مقشر","unit":"kg","price":14,"image":"12L4Qtfab22_9pddCxO5wiVk2lGrVW-Lp","cat":"vegetables"},
  {"id":35,"name_en":"Garlic 1000 G","name_ar":"ثوم","unit":"kg","price":10,"image":"1U6fsvi67YgD-hioEQW-KIwNQRnHwi101","cat":"vegetables"},
  {"id":36,"name_en":"Ginger 1000 G","name_ar":"زنجبيل","unit":"kg","price":9,"image":"1p6KcNDSYbfaS1Sc6H9OgwEzHimixjk1H","cat":"vegetables"},
  {"id":37,"name_en":"Grape Fruit 1000 G","name_ar":"جريب فروت","unit":"kg","price":6.5,"image":"1jg0W0AT8ym_DqP4Zo0NHLleYwhYHc_H4","cat":"fruits"},
  {"id":38,"name_en":"Grapes Black Local","name_ar":"عنب اسود","unit":"kg","price":13,"image":"1m8Ct2JMueZiw9j1hUooHfawox7xfIfS4","cat":"fruits"},
  {"id":39,"name_en":"Grapes Green Local","name_ar":"عنب اخضر","unit":"kg","price":13,"image":"1MRLb3gL9u3GYfvN8HyisIr3z-mPhafwV","cat":"fruits"},
  {"id":40,"name_en":"Grapes Red Local","name_ar":"عنب احمر","unit":"kg","price":13,"image":"1yZN_MuTkm923oIfqJJBGHJNdfuVTR8lb","cat":"fruits"},
  {"id":41,"name_en":"Grapes White 1000 G","name_ar":"عنب ابيض","unit":"kg","price":13,"image":"1KCnKtWKgMYbfOvCHxrXdmEYC596omYvp","cat":"fruits"},
  {"id":42,"name_en":"Guava 1000 G","name_ar":"جوافة","unit":"kg","price":9,"image":"1TTr15bS8-sXbSdKbH0nsdW35z56K8R3R","cat":"fruits"},
  {"id":43,"name_en":"Jarjir 1000 G","name_ar":"جرجير","unit":"pc","price":1.5,"image":"1R9j01inq7s3h741O18wGQS2uuSv2m4eA","cat":"herbs"},
  {"id":44,"name_en":"Kaka 1000 G","name_ar":"كاكا","unit":"kg","price":18,"image":"1eUM9auPELVzueEEq2Q9BvKBofulI5bLG","cat":"fruits"},
  {"id":45,"name_en":"Kiwi 1000 G","name_ar":"كيوي","unit":"kg","price":12,"image":"1QhH-IUdqWuh_HKjMkmnj6aAdedQWVA9p","cat":"fruits"},
  {"id":46,"name_en":"Ladyfinger Asian Vegetable","name_ar":"بامية","unit":"kg","price":12,"image":"1uqaB1W2g_UmRs-A0DPAiArQMlz19e7ip","cat":"vegetables"},
  {"id":47,"name_en":"Leeks Local 1000 G","name_ar":"ليك محلي","unit":"kg","price":12,"image":"1StFl7-uiJo8tqJPxPwdDZ1jj7bWCvo_P","cat":"vegetables"},
  {"id":48,"name_en":"Lemon big Local 1000 G","name_ar":"ليمون","unit":"kg","price":9,"image":"1YxV_nDD5aF7p-6RoxaHKskOgDLb-tf0o","cat":"fruits"},
  {"id":49,"name_en":"Lemon Small 1000 G","name_ar":"ليمون صغير","unit":"pc","price":4,"image":"1pgMkqnLYzwlGmTa0zmKPUK5mfyeVYQYL","cat":"fruits"},
  {"id":50,"name_en":"Lettuce Iceberg Imported","name_ar":"خس مدور اسباني","unit":"kg","price":17,"image":"1U6v8Sskgm4zacRwh3eeh7yMsnWgXFMWV","cat":"vegetables"},
  {"id":51,"name_en":"Lettuce Iceberg Local","name_ar":"خس مدور","unit":"kg","price":9,"image":"1-epBe5ll3GgvZJXr-Hyg_kFiA6mkPoMg","cat":"vegetables"},
  {"id":52,"name_en":"Lettuce Romain Local Fresh","name_ar":"خس طويل","unit":"kg","price":7,"image":"1UFeMZV90TR0L3qk6daEb1Y6tn7jUpyyq","cat":"vegetables"},
  {"id":53,"name_en":"Lime Fresh Imported Vietnam","name_ar":"ليم اخضر","unit":"kg","price":10,"image":"1x7aQxFLoEEX7tJyhaRWN4DoXyF19_3Ec","cat":"vegetables"},
  {"id":54,"name_en":"Mandarin 1000 G","name_ar":"افندي","unit":"kg","price":9,"image":"1mmlL5LqKnLi56I1glw15wH619eNq54Gc","cat":"fruits"},
  {"id":55,"name_en":"Mango 1000 G","name_ar":"مانجو تيمور","unit":"kg","price":18,"image":"1dvg4dVcK-ic7Ite3y9oy0nOHU18N26a5","cat":"fruits"},
  {"id":56,"name_en":"Marrow / Zucchini Local","name_ar":"كوسة","unit":"kg","price":6,"image":"1WTPmEiSvnHG0RMBNf8nvvoQPPvlUInu4","cat":"vegetables"},
  {"id":57,"name_en":"Melon Sweet 1000 G","name_ar":"شمام","unit":"kg","price":3.5,"image":"1pbZTRRiDU-cK25z0Eozh8qrB4nm83S7C","cat":"fruits"},
  {"id":58,"name_en":"Mint 1000 G","name_ar":"نعناع","unit":"pc","price":1.5,"image":"1QwEenpFIAm8AuREzqFXbfNeHhNZGIMC8","cat":"herbs"},
  {"id":59,"name_en":"Mulokhia 1000 G","name_ar":"ملوخية","unit":"kg","price":6,"image":"1zmu3BaIN2Txf3Jm9eUKp1vvGtrln9kfh","cat":"herbs"},
  {"id":60,"name_en":"Nectarine Local 1000 G","name_ar":"نكتارين","unit":"kg","price":16,"image":"1XRHzpjwCBZ0PDC2mLf7aIzo1XuFAD7-m","cat":"fruits"},
  {"id":61,"name_en":"Okra 1000 G","name_ar":"بامية","unit":"kg","price":15,"image":"1UDFzcEUB2rFbXa6bXMjR-Mip7Jr1ztrR","cat":"vegetables"},
  {"id":62,"name_en":"Onion Red 1000 G","name_ar":"بصل احمر","unit":"kg","price":3.5,"image":"11MB2mjVjGgViYDbyGFvR5089nSASEPqs","cat":"vegetables"},
  {"id":63,"name_en":"Onion Spring 1000 G","name_ar":"بصل اخضر","unit":"kg","price":4.5,"image":"1bNJGWzpSVn3vi33b8IF7-tKPB1rX_1tT","cat":"vegetables"},
  {"id":64,"name_en":"Onion White 1000 G","name_ar":"بصل ابيض","unit":"kg","price":4,"image":"1Ws82hzOGSWv5J2DstQnEe91m3URP-rKF","cat":"vegetables"},
  {"id":65,"name_en":"Orange For Juice Fresh","name_ar":"برتقال عصير","unit":"kg","price":5,"image":"1d9P8ZspAFZGGHBOqzbFMuEeoPJ23CYDI","cat":"fruits"},
  {"id":66,"name_en":"Orange Navel 1000 G","name_ar":"برتقال ابوصورة","unit":"kg","price":7,"image":"1FuPxF23o2TGy8jJOQmehoSiMMBLC7axK","cat":"fruits"},
  {"id":67,"name_en":"Papaya 1000 G","name_ar":"بابايـــا","unit":"kg","price":8,"image":"1W0G6CDg6p7Io8J1SoyyHPRygjzSkyvgy","cat":"fruits"},
  {"id":68,"name_en":"Parsely Local 1000 G","name_ar":"بقدونس","unit":"pc","price":1.5,"image":"1CjB7QJqY0XhCeUsNWyLZilIWULZmR46a","cat":"herbs"},
  {"id":69,"name_en":"Peach 1000 G","name_ar":"خوخ","unit":"kg","price":13,"image":"1n-FpDTvyy8FvqKyMhKw__ZAuy047F0Lj","cat":"fruits"},
  {"id":70,"name_en":"Pears Imported Fresh","name_ar":"كمثرى","unit":"kg","price":12,"image":"1t4QlgPCc2lAKksrWTIBEKdtg6R3Uhg3E","cat":"fruits"},
  {"id":71,"name_en":"Pineapple Baby 1000 G","name_ar":"اناناس بيبي","unit":"kg","price":25,"image":"1U0K1fJf-54EveBzbS03wZoHmvOAP-taB","cat":"fruits"},
  {"id":72,"name_en":"Pineapple Large 1000 G","name_ar":"اناناس","unit":"kg","price":10,"image":"1WlTCFFbtHUKdtlFSuy7baJfoFWApF8w3","cat":"fruits"},
  {"id":73,"name_en":"Plums Black 1000 G","name_ar":"بخارة اسود","unit":"kg","price":13,"image":"1YU7Y8ARUoZ_8GwUrbHBBa47cqgz1HZbo","cat":"fruits"},
  {"id":74,"name_en":"Plums Red 1000 G","name_ar":"بخارة احمر","unit":"kg","price":13,"image":"1ur85ixAOPwTmEGr5_bq5KGJEx_9XRFvt","cat":"fruits"},
  {"id":75,"name_en":"Pomegranate 1000 G","name_ar":"رمان","unit":"kg","price":13,"image":"1PreacAGBSHSIqRqwr_dyqyCWTjDGEP31","cat":"fruits"},
  {"id":76,"name_en":"Potato Sweet 1000 G","name_ar":"بطــاطــا حــلوة","unit":"kg","price":4,"image":"1n_Wghsdl4wk237X9CtauH2lwZ2GKVV8D","cat":"vegetables"},
  {"id":77,"name_en":"Potato 1000 G","name_ar":"بطاطس","unit":"kg","price":3.5,"image":"1QYFqP7T0H6x3-JB8VncPxUPg0TWPQczL","cat":"vegetables"},
  {"id":78,"name_en":"Pumpkin Green Long (Dubbah)","name_ar":"قرع اخضر (دبة )","unit":"kg","price":5.5,"image":"1U9OwmB2ifAKEKWTZ_c90sKiUAXbzDseN","cat":"vegetables"},
  {"id":79,"name_en":"Pumpkin 1000 G","name_ar":"قرع عسلي","unit":"kg","price":5.5,"image":"1vladnnXtMon8igxLBIxpsaUXAIz6yrNW","cat":"vegetables"},
  {"id":80,"name_en":"Purslane Green (Rijla)","name_ar":"رجلة","unit":"pc","price":1.5,"image":"1r72L0hZLktqPXMQcEeB9X1FBXsJxIJiu","cat":"herbs"},
  {"id":81,"name_en":"Radish Red 1000 G","name_ar":"فجل احمر","unit":"pc","price":1.5,"image":"1Fw9seQJTs1alziR4JFBMim3ICjFNVNWI","cat":"vegetables"},
  {"id":82,"name_en":"Radish White 1000 G","name_ar":"فجل ابيض","unit":"pc","price":1.5,"image":"1n0BFoTWzoZ3wD6w5Hgmn9YAuKZKNqGU9","cat":"vegetables"},
  {"id":83,"name_en":"Spinach Local 1000 G","name_ar":"سبانخ","unit":"pc","price":1.5,"image":"1YyOOkTC3yZjW7CWJXy9M6WVhIq6VEgI8","cat":"herbs"},
  {"id":84,"name_en":"Starwberry Fresh 1000 G","name_ar":"فراولة مصري","unit":"kg","price":20,"image":"1LKR78n2i8NdioZ1xGkoiOypzDFcREN2M","cat":"fruits"},
  {"id":85,"name_en":"Taro Root (Gulgas)","name_ar":"قلقاس","unit":"kg","price":12,"image":"1-6uyGQ1qNuuS4hrIzrOuI-hRM-8POyhG","cat":"vegetables"},
  {"id":86,"name_en":"Tomato Cherry Red Local","name_ar":"طماطم شيري","unit":"kg","price":25,"image":"16sJGKHB2z2tFZPYw7BSLoa4XOMgY41v-","cat":"vegetables"},
  {"id":87,"name_en":"Tomato Red 1000 G","name_ar":"طماطم مدور","unit":"kg","price":5,"image":"1MlXdxBjSj_H2FKzueCL65yfAxaBAm8Sn","cat":"vegetables"},
  {"id":88,"name_en":"Turnip Fresh 1000 G","name_ar":"لفت","unit":"kg","price":3.5,"image":"17_Ji2otpxPLWkmt5BBOpYgKwwh3D4Uyi","cat":"vegetables"},
  {"id":89,"name_en":"Watemelon Long Local","name_ar":"بطيخ طويل","unit":"kg","price":3.5,"image":"1lx7gktVg5LOmR5d0JYd3OOqacWL-Fr9r","cat":"fruits"},
  {"id":90,"name_en":"Watemelon Round Local","name_ar":"بطيخ مدور","unit":"kg","price":3.5,"image":"1dxf_OVjL8p6v7uNgvcXYaYIMGFkP1TJ0","cat":"fruits"},
  {"id":91,"name_en":"Eggs Fresh XL X12","name_ar":"بيض طازج الغربية","unit":"box","price":185,"image":"1rTRylFNtpZA2kLnXd2-iABd8UIYaaLbd","cat":"packages"}
];

export const mockProducts: Product[] = rawData.map(p => ({
    id: p.id,
    name_ar: p.name_ar,
    name_en: p.name_en,
    category: p.cat as CategoryKey,
    price: p.price,
    image: fixDriveLink(p.image),
    unit_ar: p.unit === 'kg' ? 'كيلو' : (p.unit === 'pc' ? 'حبة' : 'طبق/كرتون'),
    unit_en: p.unit,
    stock_quantity: 500,
    min_threshold: 20
}));

export const mockReviews: Review[] = [
  { id: 'rev1', productId: 1, author: 'فندق هيلتون - المشتريات', rating: 5, comment: 'جودة استثنائية والتزام دقيق بمواعيد التوريد.', date: '2024-06-01' }
];
