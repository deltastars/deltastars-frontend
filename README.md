# Delta Stars Frontend

Welcome to the Delta Stars Frontend repository! This is a modern, responsive web application built with cutting-edge frontend technologies. This README provides comprehensive guidance for installation, features, and troubleshooting.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Overview

Delta Stars Frontend is a modern frontend application designed to provide an exceptional user experience with intuitive interfaces and responsive design. Built with industry-standard technologies, it ensures optimal performance and maintainability.

### Tech Stack

- **Framework**: React or Vue.js (specify your framework)
- **Build Tool**: Vite, Webpack, or Next.js (specify your tool)
- **Package Manager**: npm or yarn
- **Styling**: CSS/SCSS, Tailwind CSS, or styled-components (specify your styling approach)
- **State Management**: Redux, Context API, Pinia, or Vuex (if applicable)
- **Testing**: Jest, Vitest, or similar (if applicable)

## Features

### Core Features

- ✨ **Responsive Design** - Fully responsive UI that works seamlessly across all devices and screen sizes
- 🚀 **Performance Optimized** - Optimized bundle size and lazy loading for fast page loads
- 🎨 **Modern UI Components** - Reusable, well-designed component library
- 🔐 **Secure** - Built-in security best practices and HTTPS support
- 🌍 **Internationalization** - Multi-language support (i18n ready)
- ♿ **Accessibility** - WCAG 2.1 AA compliant for inclusive design
- 🌓 **Dark Mode** - Optional dark theme support
- 📱 **Mobile-First** - Mobile-first design approach

### Advanced Features

- 🔄 **Real-time Updates** - WebSocket integration for live data updates
- 📊 **Data Visualization** - Interactive charts and graphs
- 🔍 **Search & Filtering** - Powerful search and advanced filtering capabilities
- 📈 **Analytics** - Built-in analytics integration
- 🎯 **Progressive Web App** - PWA support for offline functionality

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v16.0.0 or higher)
  - Download from [nodejs.org](https://nodejs.org/)
  - Verify installation: `node --version`
  
- **npm** (v7.0.0 or higher) or **yarn** (v1.22.0 or higher)
  - npm comes with Node.js
  - For yarn: `npm install -g yarn`
  - Verify installation: `npm --version` or `yarn --version`

- **Git** (v2.0.0 or higher)
  - Download from [git-scm.com](https://git-scm.com/)
  - Verify installation: `git --version`

- **Optional**: An IDE such as VS Code, WebStorm, or similar

## Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/deltastars/deltastars-frontend.git
cd deltastars-frontend
```

### Step 2: Install Dependencies

Using npm:
```bash
npm install
```

Using yarn:
```bash
yarn install
```

### Step 3: Verify Installation

To verify that all dependencies are correctly installed:

```bash
npm list
# or
yarn list
```

## Configuration

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# API Configuration
VITE_API_URL=https://api.deltastars.com
VITE_API_TIMEOUT=30000

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_PWA=true
VITE_ENABLE_DARK_MODE=true

# Authentication
VITE_AUTH_ENABLED=true
VITE_AUTH_TOKEN_KEY=auth_token

# Logging
VITE_LOG_LEVEL=info

# Environment
VITE_ENVIRONMENT=development
```

### Local Configuration

Create a `.env.local` file for local-specific settings (this file is ignored by git):

```env
VITE_API_URL=http://localhost:3000
VITE_LOG_LEVEL=debug
```

## Running the Application

### Development Mode

Start the development server with hot module replacement:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173` (or the port configured in your build tool).

### Development with Debug Mode

For enhanced debugging:

```bash
DEBUG=* npm run dev
```

### Production Preview

Build and preview the production bundle locally:

```bash
npm run build
npm run preview
# or
yarn build
yarn preview
```

## Project Structure

```
deltastars-frontend/
├── public/                 # Static assets
│   ├── favicon.ico
│   └── icons/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Header/
│   │   ├── Footer/
│   │   └── ...
│   ├── pages/              # Page components
│   │   ├── Home.vue
│   │   ├── Dashboard.vue
│   │   └── ...
│   ├── services/           # API services and utilities
│   │   ├── api.js
│   │   ├── auth.js
│   │   └── ...
│   ├── store/              # State management
│   │   ├── modules/
│   │   └── index.js
│   ├── styles/             # Global styles
│   │   ├── global.css
│   │   └── variables.css
│   ├── utils/              # Utility functions
│   │   ├── helpers.js
│   │   └── constants.js
│   ├── App.vue             # Root component
│   └── main.js             # Application entry point
├── tests/                  # Test files
│   ├── unit/
│   └── integration/
├── .env.example            # Example environment variables
├── .env.local              # Local environment variables (gitignored)
├── .gitignore
├── package.json
├── vite.config.js          # Vite configuration
└── README.md
```

## Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run unit tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run end-to-end tests
npm run test:e2e

# Lint code
npm run lint

# Format code
npm run format

# Type check (if using TypeScript)
npm run type-check
```

### Code Style

We follow strict code style guidelines:

- **Linter**: ESLint
- **Formatter**: Prettier
- **Pre-commit hooks**: Husky

Before committing, ensure your code passes linting:

```bash
npm run lint
npm run format
```

### Git Workflow

1. Create a feature branch: `git checkout -b feature/your-feature-name`
2. Make your changes and commit: `git commit -m "feat: add new feature"`
3. Push to your branch: `git push origin feature/your-feature-name`
4. Create a Pull Request on GitHub

## Building for Production

### Build Optimization

```bash
npm run build
```

This command:
- Minifies and bundles your code
- Optimizes images and assets
- Generates sourcemaps for debugging
- Creates an optimized dist/ directory

### Build Output

The production build will be generated in the `dist/` directory:

```
dist/
├── index.html
├── assets/
│   ├── js/
│   ├── css/
│   └── images/
└── favicon.ico
```

### Deployment

For deployment instructions, see the [DEPLOYMENT.md](./DEPLOYMENT.md) file.

## Troubleshooting

### Common Issues and Solutions

#### 1. **Node/npm Version Issues**

**Problem**: `npm ERR! The engine "node" is incompatible`

**Solution**:
```bash
node --version
# If version is below 16.0.0, update Node.js from nodejs.org
# Or use nvm (Node Version Manager)
nvm install 18
nvm use 18
```

#### 2. **Dependencies Installation Fails**

**Problem**: `npm ERR! code ERESOLVE, unable to resolve dependency tree`

**Solution**:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall dependencies
npm install

# If still failing, try with legacy peer deps
npm install --legacy-peer-deps
```

#### 3. **Port Already in Use**

**Problem**: `Error: listen EADDRINUSE: address already in use :::5173`

**Solution**:
```bash
# Find and kill the process using port 5173
lsof -i :5173
kill -9 <PID>

# Or use a different port
npm run dev -- --port 5174
```

#### 4. **Hot Module Replacement (HMR) Not Working**

**Problem**: Changes aren't reflecting in the browser

**Solution**:
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Restart the dev server: `npm run dev`
- Check if `vite.config.js` has proper HMR configuration
- Verify your firewall isn't blocking WebSocket connections

#### 5. **Build Fails or Contains Errors**

**Problem**: `npm run build` fails with errors

**Solution**:
```bash
# Check for TypeScript errors (if applicable)
npm run type-check

# Run linter to find syntax issues
npm run lint

# Clear build cache
rm -rf dist .vite

# Try building again
npm run build
```

#### 6. **CORS Issues**

**Problem**: `Access to XMLHttpRequest blocked by CORS policy`

**Solution**:
- Ensure your `.env` file has the correct `VITE_API_URL`
- Verify the backend API has CORS enabled for your frontend domain
- Check browser console for specific error details
- Test API endpoint directly: `curl https://api.deltastars.com/health`

#### 7. **Authentication Issues**

**Problem**: User gets logged out immediately or can't authenticate

**Solution**:
```bash
# Clear local storage and try again
# In browser console:
# localStorage.clear()

# Check token expiration in Network tab
# Verify VITE_AUTH_TOKEN_KEY matches backend
# Ensure cookies are enabled in browser
```

#### 8. **Styling/CSS Not Loading**

**Problem**: Styles appear broken or not applied

**Solution**:
- Clear browser cache
- Check if CSS build succeeded: `npm run build`
- Verify CSS imports in component files
- Check browser DevTools for 404 errors on CSS files

#### 9. **Performance Issues**

**Problem**: Application is slow or sluggish

**Solution**:
```bash
# Analyze bundle size
npm run build -- --analyze

# Check for unused dependencies
npm audit

# Run performance profiling in Chrome DevTools
# Profile > Record performance

# Check Network tab for large assets
```

#### 10. **Module Not Found Errors**

**Problem**: `Module not found: Can't resolve '@/components/Header'`

**Solution**:
- Verify path aliases in `vite.config.js` or `jsconfig.json`
- Check file actually exists and path is correct
- Restart dev server after adding new files
- Ensure case sensitivity matches (Linux/Mac are case-sensitive)

### Getting Help

If you encounter issues not listed above:

1. **Check the Documentation**: Review [docs/](./docs/) directory
2. **Search Issues**: Check [GitHub Issues](https://github.com/deltastars/deltastars-frontend/issues)
3. **Read Logs**: Review browser console (F12) and terminal output
4. **Create an Issue**: If the problem persists, [create a new issue](https://github.com/deltastars/deltastars-frontend/issues/new)

### Debugging Tips

- **Browser DevTools**: Press F12 to open developer tools
- **Vue/React DevTools**: Install browser extensions for framework debugging
- **Network Inspector**: Monitor API requests and responses
- **Console Logs**: Use `console.log()` for debugging
- **Sourcemaps**: Enable in development for accurate stack traces

## Contributing

We welcome contributions! Please follow these guidelines:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Development Standards

- Write clean, readable code
- Add tests for new features
- Update documentation
- Follow the existing code style
- Include meaningful commit messages

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

**Last Updated**: December 27, 2025

For questions or support, please open an issue or contact the development team.

1. قسم الفواكه (Fruits) - 105 أصناف تقريباً
تبدأ بالأصناف الأساسية ثم الفواكه المستوردة والنادرة
الرقم الاسم العربي الاسم الإنجليزي السعر الوحدة
1 تفاح سكري Apple Gala 7 Kg
3 تفاح أحمر Apple Red 7.5 Kg
2 تفاح أخضر Apple Green 7 Kg
4 تفاح أصفر Apple Yellow 7 Kg
84 برتقال أبوصورة Orange Navel 7 Kg
83 برتقال عصير Orange For Juice 5 Kg
7 موز Banana 6.5 Kg
108 بطيخ مدور Watermelon Round 3.5 Kg
107 بطيخ طويل Watermelon Long 3.5 Kg
88 كمثرى Pears Imported 12 Kg
72 أفندي Mandarin 9 Kg
93 رمان Pomegranate 13 Kg
102 فراولة مصري Strawberry Fresh 20 Kg
75 شمام Melon Sweet 3.5 Kg
55 جريب فروت Grapefruit 6.5 Kg
56 عنب أسود Grapes Black 13 Kg
57 عنب أخضر Grapes Green 13 Kg
58 عنب أحمر Grapes Red 13 Kg
59 عنب أبيض Grapes White 13 Kg
60 جوافة Guava 9 Kg
63 كيوي Kiwi 12 Kg
73 مانجو تيمور Mango Timor 18 Kg
85 بابايا Papaya 8 Kg
90 أناناس Pineapple Large 10 Kg
89 أناناس بيبي Pineapple Baby 25 Kg
91 بخارة أسود Plums Black 13 Kg
92 بخارة أحمر Plums Red 13 Kg
87 خوخ Peach 13 Kg
78 نكتارين Nectarine 16 Kg
62 كاكا Kaka 18 Kg
5 مشمش Apricot 16 Kg
45 قشطة Custard Apples 11 Kg
51 تين محلي Figs Local 23 Kg
17 تين شوكي Cactus Pears 13 Kg
111 مشمش مستورد (أمريكي) Apricot Imported USA 35 Kg
117 أفوكادو أمريكي طازج Avocado USA 30 Kg
118 أفوكادو كيني Avocado Kenya 20 Kg
131 توت أسود (طائفي) Blackberry Taif - Kg
132 توت أسود أمريكي طازج Blackberry USA 15 200G
133 توت أزرق مستورد Blueberry Imported 14 170G
138 شمام كانتالوب مستورد Cantaloupe Melon 22 Kg
145 كرز أمريكي Cherries USA 80 Kg
146 كرز أسترالي Cherries AUS 50 Kg
158 توت بري طازج Fresh Cranberry 60 Kg
160 فاكهة التنين (دراغون فروت) Dragon Fruit 38 Kg
161 دوريان مستورد Durian Imported 38 Kg
168 كمثرى فوريل Forelle Pear 10 Kg
169 جرانديلا مستوردة Granadilla Imported 33 Kg
170 جريب فروت وردي Pink Grapefruit 20 Kg
175 شمام عسلي Honeydew Melon 22 Kg
177 كيوانو (هولندي) Kiwano Holland 60 Kg
179 كمكوات (برتقال صغير) Kumquat Imported 52 Kg
196 فاكهة اللونجان Longan Imported 37 Kg
197 فاكهة الليتشي Lychees Imported 45 Kg
198 مانجو طازج مستورد Mango Fresh 21 Kg
199 مانغوستين Mangosteen Imported 36 Kg
209 نكتارين أمريكي Nectarine USA 32 Kg
216 بابايا مستوردة Papaya Imported 25 Kg
219 باشن فروت Passion Fruit 35 Kg
220 خوخ طازج أمريكي Peach Fresh USA 32 Kg
225 فيزاليس (توت ذهبي) Physalis Golden 65 Kg
232 رامبوتان Rambutan Imported 35 Kg
233 توت العليق أحمر Red Raspberry 15 170G
234 كشمش أحمر Red Currant 17 125G
245 فاكهة النجمة Star Fruit 90 Kg
246 فراولة طازجة أمريكية Fresh Strawberry USA 47 Kg
248 طماريلو Tamarillo Imported 53 Kg
247 قصب سكر للعصير Sugar Cane Juice 20 Kg

2. قسم الخضروات (Vegetables) - 120 صنفاً تقريباً
​مرتبة من الاستهلاك اليومي إلى الخضروات التخصصية..

105 طماطم مدور Tomato Red 5 Kg
35 خيار Cucumber 4.5 Kg
95 بطاطس Potato 3.5 Kg
80 بصل أحمر Onion Red 3.5 Kg
82 بصل أبيض Onion White 4 Kg
18 جزر محلي Carrot Local 4.5 Kg
74 كوسة Marrow / Courgette 6 Kg
10 رومي أخضر Bell Pepper Green 6 Kg
11 رومي أحمر Bell Pepper Red 8 Kg
12 رومي أصفر Bell Pepper Yellow 8 Kg
48 باذنجان أسود مدور Eggplant Local 3.5 Kg
49 باذنجان طويل Eggplant Long Local 5 Kg
50 باذنجان أبيض Eggplant White Local 4 Kg
66 ليمون Lemon Big Local 9 Kg
67 ليمون صغير Lemon Small 4 pc
71 ليم أخضر Lime Fresh Imported 10 Kg
31 فلفل حار أخضر Chilli Green Local 9 Kg
32 فلفل حار أحمر Chilli Red Hot 8 Kg
79 بامية Okra 15 Kg
64 بامية حجم الحبة صغير Ladyfinger 12 Kg
19 زهرة Cauliflower 7 Kg
14 بركلي Broccoli Local 16 Kg
16 ملفوف أبيض Cabbage White Local 3.5 Kg
15 ملفوف أحمر Cabbage Red Local 4.5 Kg
94 بطاطا حلوة Potato Sweet 4 Kg
97 قرع أصفر (عسلي) Pumpkin 5.5 Kg
96 قرع أخضر (دبة) Pumpkin Green Long 5.5 Kg
52 ثوم مقشر Garlic Peeled 14 Kg
53 ثوم Garlic 10 Kg
54 زنجبيل Ginger 9 Kg
8 فاصوليا خضراء Green Beans Fresh 8 Kg
9 بنجر Beet Root Local 5 Kg
69 خس مدور Lettuce Iceberg Local 9 Kg
70 خس طويل Lettuce Romaine Local 7 Kg
68 خس مدور مستورد إسباني Lettuce Iceberg Imp 17 Kg
104 طماطم شيري أحمر Tomato Cherry Red 25 Kg
103 قلقاس Taro Root Gulgas 12 Kg
106 لفت Turnip Fresh 3.5 Kg
112 خرشوف طازج مستورد Artichoke Imported 33 Kg
113 هليون صغير مستورد Asparagus Baby Imp 9 Pk
114 هليون أخضر جامبو Asparagus Jumbo 55 Kg
115 هليون أخضر مستورد Asparagus Green 50 Kg
116 هليون أبيض أمريكي Asparagus White 70 Kg
119 جزر صغير بالعنق Baby Carrot Holland 20 200G
120 ذرة صغيرة (بيبي كورن) Baby Corn 5 Pkt
121 سبانخ صغيرة طازجة Baby Spinach Imp 60 Kg
127 بنجر أحمر صغير (شيوجيا) Baby Red Beet 37 Kg
128 بنجر (شمندر) طازج Beetroot Imported 21 Kg
129 بنجر أصفر مصغر Mini Yellow Beet 22 250G
130 فلفل أخضر حلو مستورد Green Bell Pepper 27 Kg
134 بروكلي أمريكي Broccoli USA 20 Kg
135 براعم بروكسل (كرنب صغير) Brussels Sprouts 25 Kg
136 كرنب صيني (باي تشوي) Chinese Cabbage 20 Kg
137 كرنب أبيض مستورد White Cabbage Imp 17 Kg
139 جزر أحمر صغير طازج Baby Red Carrot 8 Pk
140 جزر صغير كامل (أمريكي) Baby Whole Carrot 5.9 Pk
141 جزر أصفر صغير طازج Baby Yellow Carrot 36 Kg
143 جذور كرفس بيضاء White Celery Roots 20 Kg
144 شايوت أخضر مستورد Green Chayote Imp 30 Kg
147 هندباء حمراء (شيكوريا) Red Chicory 38 Kg
148 هندباء صفراء (شيكوريا) Yellow Chicory 38 Kg
149 فلفل هالبينو أخضر Green Jalapeno 30 Kg
150 فلفل هالبينو برتقالي Orange Jalapeno 45 Kg
151 فلفل هالبينو أحمر Red Jalapeno 45 Kg
152 فلفل هالبينو أصفر Yellow Jalapeno 45 Kg
153 فلفل أصفر روماني Yellow Roman Chilli 22 Kg
157 ذرة (كوز) Corn On The Cob 12 1x12
159 خيار طويل مستورد Long Cucumber Imp 20 Kg
163 هندباء (انديف) مستوردة Endive Imported 35 Kg
164 هندباء (انديف) أصفر Yellow Endive 35 Kg
165 فول طازج مستورد Fresh Fava Beans 39 Kg
166 شمر صغير مستورد Baby Fennel Imported 21 200G
167 شمر مستورد Fennel Imported 23 Kg
176 كرنب كالي (هولندي) Kale Holland 32 Kg
178 كولرابي (كرنب سلق) Kohlrabi Imported 18 Kg
183 خس بوسطن Boston Lettuce 35 Kg
184 خس فريزي أخضر Green Frisée 35 Kg
185 خس فريزي أصفر Yellow Frisée 48 Kg
186 خس راديكيو Radicchio Lettuce 35 Kg
187 خس بيبي جيم Baby Gem Lettuce 35 Kg
188 بوك تشوي (خس صيني) Bok Choy 23 Kg
189 خس آيسبرج (أمريكي) Iceberg Lettuce USA 25 Kg
190 خس لولو بيوندي Lollo Biondi 35 Kg
191 خس لولو روسو Lollo Rosso 35 Kg
192 خس أوراق البلوط Oakleaf Lettuce 35 Kg
194 خس روماني Romaine Lettuce 35 Kg
201 فطر بني Brown Button Mush 25 Kg
202 فطر أبيض White Button Mush 23 Kg
203 فطر بورسيني Porcini Mushroom 85 Kg
204 فطر كستناء Chestnut Mushroom 30 Kg
205 فطر إينوكي Enoki Mushroom 20 200G
206 فطر بورتوبيللو Portobello Mushroom 35 Kg
207 فطر شيتاكي Shiitake Mushroom 74 Kg
208 فطر شيميجي أبيض White Shimeji 48 Kg
210 بصل لؤلؤي أحمر Red Pearl Onion 21 Kg
211 بصل لؤلؤي أبيض White Pearl Onion 21 Kg
212 بصل أحمر جامبو Red Jumbo Onion 21 Kg
213 بصل أندلسي (شالوت) Shallot Onion Imp 24 Kg
214 بصل أبيض أمريكي White Onion USA 15 Kg
221 بازلاء خضراء Green Peas 29 Kg
222 فلفل أحمر حلو Red Bell Pepper 37 Kg
223 فلفل برتقالي حلو Orange Bell Pepper 37 Kg
224 فلفل أصفر حلو Yellow Bell Pepper 37 Kg
226 بطاطس صغيرة Baby Potatoes 21 Kg
227 بطاطس حمراء صغيرة Baby Red Potatoes 21 Kg
228 بطاطس بيضاء صغيرة Baby White Potatoes 21 Kg
229 بطاطا حلوة (جوهرة) Sweet Jewel Potato 21 Kg
236 رومانيسكو مصغر طازج Mini Romanesco 37 Kg
239 كرنب سافوي Savoy Cabbage 22 Kg
241 بازلاء الثلج Snow Peas 37 Kg
243 قرع بلوطي أخضر Green Acorn Squash 26 Kg
244 قرع بتركوت (أمريكي) Butternut Squash 21 Kg
251 طماطم برتقالية عنقودية Orange Bunch Tomato 38 Kg
252 طماطم حمراء عنقودية Red Bunch Tomato 35 Kg
253 طماطم صفراء عنقودية Yellow Bunch Tomato 38 Kg
254 طماطم كرزية حمراء Red Cherry Tomato 25 Kg
255 طماطم كرزية صفراء Yellow Cherry Tomato 35 Kg
256 طماطم تراثية (هيرلوم) Heirloom Tomato 37 Kg
257 طماطم مارماند Marmande Tomato 40 Kg
258 طماطم روما (برقوقية) Roma Plum Tomato 20 Kg
259 كركم طازج كامل Whole Fresh Turmeric 23 Kg
260 لفت صغير مصغر Baby Turnip Mini 122 Kg
262 كوسا خضراء صغيرة بالزهرة Baby Zucchini Flower 27 Kg

3. قسم الأعشاب والورقيات (Herbs & Greens) - 40 صنفاً تقريباً:-
86 بقدونس Parsley Local 1.5 pc
34 كزبرة Coriander Leaves 1.5 PC
76 نعناع Mint 1.5 pc
61 جرجير Jarjir 1.5 pc
46 شبت Dill Local 1.5 pc
81 بصل أخضر Onion Spring 4.5 Kg
6 كراث Arabic Leeks Kurath 1.5 pc
101 سبانخ Spinach Local 1.5 pc
77 ملوخية Mulokhia 6 Kg
98 رجلة Purslane Green Rijla 1.5 pc
99 فجل أحمر Radish Red 1.5 pc
100 فجل أبيض Radish White 1.5 pc
20 كرفس محلي Celery Green Local 18 Kg
65 ليك محلي Leeks Local 12 Kg
13 كرلا Bitter Gourd Karela 6.5 Kg
36 أوراق الكاري Curry Leaves Imp 20 Kg
21 براعم البرسيم (ألفالفا) Alfalfa Sprouts 11 250G
38 سبانخ صغيرة طازجة Baby Spinach Imp 60 Kg
39 أوراق خيزران طازجة Bamboo Leaves 32 Kg
40 أوراق موز مستوردة Banana Leaves Imp 35 Kg
41 ريحان طازج مستورد Basil Imported 58 Kg
43 براعم الفاصوليا Bean Sprouts 8 Kg
126 براعم فاصوليا مستوردة Bean Sprouts Imp 8 Pk
142 كرفس طازج أمريكي Celery Fresh USA 18 Kg
154 ثوم معمر طازج Fresh Chives Imp 70 Kg
171 ريحان تايلاندي أرجواني Purple Thai Basil 68 Kg
172 إكليل الجبل (روزماري) Rosemary Imported 58 Kg
173 ميرمية مستوردة Sage Imported 65 Kg
174 طرخون مستورد Tarragon Imported 88 Kg
180 كراث مستورد Leeks Imported 18 Kg
181 عشبة الليمون Lemongrass 33 Kg
182 أوراق ليمون Lemon Leaves 43 Kg
193 جرجير صغير (بيبي روكيت) Baby Rocket 65 Kg
195 أوراق ليمون كفير Kaffir Lime Leaves 48 Kg
215 أوريجانو طازج Fresh Oregano 68 Kg
217 بقدونس فرنسي French Parsley 28 Kg
218 بقدونس مجعد Curly Parsley 29 Kg
237 إكليل الجبل طازج Fresh Rosemary 58 100G
249 زعتر طازج مستورد Fresh Thyme 58 Kg
250 أوراق زعتر طازجة Thyme Leaves Fresh 58 Kg
261 زعتر طازج مستورد Fresh Zaatar 58 Kg

5. قسم التمور (Dates) - 8 أصناف
الرقم الاسم العربي الاسم الإنجليزي السعر الوحدة
263 تمر سكري مفتل Dates Sukari Muftal - 3Kg
264 تمر مجدول القصيم Dates Majdoul - -
265 تمر صقعي القصيم Dates Suqai Qassim - -
266 تمر مبروم المدينة Dates Mabroom - -
267 تمر صفاوي المدينة Dates Safawi Madinah - -
268 تمر عنبر المدينة Dates Anbar Madinah - -
269 تمر عجوة المدينة ملكي Dates Ajwa Royal - -
270 تمر رطب سكري القصيم Dates Rotab Sukari - -

6. قسم الزهور والأشياء النادرة (Specialties)

162 زهور صالحة للأكل Edible Flowers Fresh 170 Kg
155 جوز هند أخضر صغير Young Green Coconut 14 9 PCS
33 جوز الهند Coconut Brown 8 pc
238 كريس ميكس ساكورا Sakura Mix Cress 80 Kg
240 شيسو ميكس Shiso Mix 80 Kg
242 براعم مصغرة مشكلة Micro Sprout Mix 80 Kg
200 أعشاب مصغرة طازجة Micro Herbs Fresh 75 Kg

7- قسم البكجات (Bundles) - مقترح للواجهة :
يتم ربط الأصناف التالية برمجياً لتكوين السلال:
سلة الفواكه العائلية: تضم (تفاح سكري، موز، برتقال عصير، عنب أخضر، كمثرى).
صندوق خضروات الأسبوع: تضم (طماطم، خيار، بطاطس، بصل أحمر، جزر، كوسة).
بكج الورقيات الطازجة: تضم (بقدونس، كزبرة، نعناع، جرجير، بصل أخضر). 


// 10. الموافقات الإلكترونية
  approvals: {
    required_for: [
      'supplier_orders_above_10000',
      'customer_refunds_above_5000',
      'inventory_adjustments_above_10000',
      'employee_permissions_changes',
      'pricing_changes_above_20_percent'
    ],
    workflow: {
      request: 'system',
      approve: 'general_manager',
      notify: ['requester', 'accountant'],
      expire: '24_hours'
    }
  }
}

// صلاحيات المدير العام التفصيلية
export const GENERAL_MANAGER_ACTIONS = {
  // الموافقات المالية
  FINANCIAL_APPROVALS: {
    purchase_orders: {
      threshold: 10000, // ريال
      requires_approval: true,
      approval_method: 'electronic_signature'
    },
    refunds: {
      threshold: 5000,
      requires_approval: true,
      approval_method: 'electronic_signature'
    },
    expense_reports: {
      threshold: 3000,
      requires_approval: true
    }
  },
  
  // الموافقات التشغيلية
  OPERATIONAL_APPROVALS: {
    inventory_adjustments: {
      threshold: 10000,
      requires_approval: true
    },
    pricing_changes: {
      threshold: 0.20, // 20%
      requires_approval: true
    },
    supplier_changes: {
      requires_approval: true
    }
  },
  
  // التقارير المطلوبة
  REQUIRED_REPORTS: {
    daily: ['sales_summary', 'inventory_alerts'],
    weekly: ['financial_summary', 'delivery_performance'],
    monthly: ['profit_loss', 'cash_flow', 'customer_analysis']
  },
  
  // إشعارات إلزامية
  MANDATORY_NOTIFICATIONS: {
    realtime: [
      'large_order_placed',
      'inventory_below_threshold',
      'delivery_delayed',
      'payment_received_above_10000'
    ],
    daily: [
      'sales_summary',
      'inventory_status',
      'delivery_summary'
    ]
  }
}
```

لوحة تحكم المدير العام:

```typescript
// ملف: `admin-panel/app/general-manager/page.tsx`
import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import RealTimeDashboard from '@/components/dashboard/RealTimeDashboard'
import ApprovalQueue from '@/components/dashboard/ApprovalQueue'
import FinancialOverview from '@/components/dashboard/FinancialOverview'
import InventoryAlerts from '@/components/dashboard/InventoryAlerts'
import DeliveryMonitor from '@/components/dashboard/DeliveryMonitor'
import QuickActions from '@/components/dashboard/QuickActions'
import { getRealTimeData } from '@/lib/data/realtime'

export default async function GeneralManagerDashboard() {
  const session = await getServerSession(authOptions)
  
  // التحقق من الصلاحيات
  if (!session?.user?.roles?.includes('general_manager')) {
    redirect('/unauthorized')
  }

  // جلب بيانات حية
  const realTimeData = await getRealTimeData()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* شريط الأدوات العلوي */}
      <header className="bg-white shadow-sm border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">لوحة تحكم المدير العام</h1>
              <p className="text-gray-600">مراقبة وإدارة عمليات دلتا ستارز</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="font-medium">المدير العام</p>
                <p className="text-sm text-gray-500">{session.user.name}</p>
              </div>
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="font-bold text-primary-600">MG</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="p-6">
        {/* إحصائيات سريعة */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">المبيعات اليوم</p>
                <p className="text-2xl font-bold">{realTimeData.today_sales.toLocaleString()} ر.س</p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <p className="text-xs text-green-600 mt-2">
              +15% عن الأمس
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">الطلبات قيد التنفيذ</p>
                <p className="text-2xl font-bold">{realTimeData.active_orders}</p>

رقم;الاسم الإنجليزي;الاسم العربي;الوحدة/الحجم;السعر (ريال);رابط الصورة
1;Apple Gala 1000G;تفاح سكري;Kg;7;https://drive.google.com/file/d/14raaz2yPcxGv4PLTCxyA2SqNDXJikXoi/view?usp=drivesdk[file:1]
2;Apple Green 1000G;تفاح أخضر;Kg;7;https://drive.google.com/file/d/1x_4VWYYveuiwJtVdfNLReIithJO2JzGI/view?usp=drivesdk[file:1]
3;Apple Red 1000G;تفاح أحمر;Kg;7.5;https://drive.google.com/file/d/1s3WUV0dJ_3GYKa7_XV7BeTKfzl1iq__b/view?usp=drivesdk[file:1]
4;Apple Yellow 1000G;تفاح أصفر;Kg;7;https://drive.google.com/file/d/1JTO_fu2XlCN3-wFNV3OuN-SOPDgnGKUK/view?usp=drivesdk[file:1]
5;Apricot 1000G;مشمش;Kg;16;https://drive.google.com/file/d/1nGeZ4RDnJ-P-n30KM3JUgZFEy2hbHXE3/view?usp=drivesdk[file:1]
6;Arabic Leeks Kurath;كراث;pc;1.5;https://drive.google.com/file/d/1bYMbxIhe8e1kSLSR24DCxhF9YCCBk5UX/view?usp=drivesdk[file:1]
7;Banana 1000G;موز;Kg;6.5;https://drive.google.com/file/d/1C4X6hYllVzFnei9q-pGR5ET3GzCmN8hc/view?usp=drivesdk[file:1]
8;Green Beans Fresh 1000G;فاصوليا خضراء;Kg;8;https://drive.google.com/file/d/1hOScKwXU6b7Z7xPVst4u3oBCHfTRbRGc/view?usp=drivesdk[file:1]
9;Beet Root Local 1000G;بنجر;Kg;5;https://drive.google.com/file/d/1t5GnOEdjJX6RB4E2gxUoTQ8ceEix_LLt/view?usp=drivesdk[file:1]
10;Bell Pepper Green LOCAL;رومي أخضر;Kg;6;https://drive.google.com/file/d/1cw_hNecLBH1l-QqW26K18rR77Amz7hd3/view?usp=drivesdk[file:1]
11;Bell Pepper Red LOCAL;رومي أحمر;Kg;8;https://drive.google.com/file/d/1g_Ymd4KHPMyhlgtJzUCVoxaCw8Qgk29_/view?usp=drivesdk[file:1]
12;Bell Pepper Yellow LOCAL;رومي أصفر;Kg;8;https://drive.google.com/file/d/1HWgl4vQ7-yyD13LJH9Leyi7ZmOmZo8fb/view?usp=drivesdk[file:1]
13;Bitter Gourd Karela 1000G;كرلا;Kg;6.5;https://drive.google.com/file/d/1NAapL0Lss9vg4VqST9-BbdmHZDZ3QChT/view?usp=drivesdk[file:1]
14;Broccoli Local 1000G;بركلي;Kg;16;https://drive.google.com/file/d/1H1hPMaQrc4fHZJpypn8k3W8r1x4RPoOg/view?usp=drivesdk[file:1]
15;Cabbage Red Local 1000G;ملفوف أحمر;Kg;4.5;https://drive.google.com/file/d/1GmaS_f37r1vSWu_rrhSi71YWPH5I41Gr/view?usp=drivesdk[file:1]
16;Cabbage White Local 1000G;ملفوف أبيض;Kg;3.5;https://drive.google.com/file/d/1yZGiLqEPln5Lk_nO5uuyLMdiegf0wZ8S/view?usp=drivesdk[file:1]
17;Cactus Pears KSA 1000G;تين شوكي;Kg;13;https://drive.google.com/file/d/1dt0lqZGWz7JdY5dYlR1tLaXA3VQADP61/view?usp=drivesdk[file:1]
18;Carrot Local 1000G;جزر محلي;Kg;4.5;https://drive.google.com/file/d/1qKdTHTwWcqymmJfubyR5iD2ZCXQATDdk/view?usp=drivesdk[file:1]
19;Cauliflower 1000G;زهرة;Kg;7;https://drive.google.com/file/d/1-LRmks22xtvxe0-g8WMk17KJeGBLsYRV/view?usp=drivesdk[file:1]
20;Celery Green Local 1000G;كرفس محلي;Kg;18;https://drive.google.com/file/d/18t3pyZ33bNvPuKs65FV3kow14PIzVrg-/view?usp=drivesdk[file:1]
21;Alfalfa Sprouts;براعم البرسيم (ألفالفا);250G;11;- [file:2]
22;Apricot Imported USA;مشمش مستورد (أمريكي);1000G;35;- [file:2]
23;Artichoke Imported Fresh;خرشوف طازج مستورد;1000G;33;- [file:2]
24;Asparagus Baby Imported;هليون صغير مستورد;1000G;9;- [file:2]
25;Asparagus Jumbo Green;هليون أخضر جامبو مستورد;1000G;55;- [file:2]
26;Asparagus Green Imported;هليون أخضر مستورد;1000G;50;- [file:2]
27;Asparagus White USA;هليون أبيض أمريكي;1000G;70;- [file:2]
28;Avocado USA;أفوكادو أمريكي طازج;1000G;30;- [file:2]
29;Avocado Kenya;أفوكادو كيني;1000G;20;- [file:2]
30;Baby Carrot Holland;جزر صغير بالعنق (هولندي);200G;20;- [file:2]
31;Chilli Green Local 1000G;فلفل حار أخضر;Kg;9;https://drive.google.com/file/d/1qz9eE3COufpOQ5HjRVpP82RSuv8LmPF4/view?usp=drivesdk[file:1]
32;Chilli Red Hot Local 1000G;فلفل حار أحمر;Kg;8;https://drive.google.com/file/d/1D_QtXdvpAHh0VtWCGs69Jvk8TSd-ltIh/view?usp=drivesdk[file:1]
33;Coconut Brown 1000G;جوز الهند;pc;8;https://drive.google.com/file/d/1qjJ9mY4Cv2xWKR1cAqX5TajU4TWe-eH-/view?usp=drivesdk[file:1]
34;Coriander Leaves 1000G;كزبرة;PC;1.5;https://drive.google.com/file/d/1fjr3r9Lr6ypvGFer_a_od4L1uUJXCp8c/view?usp=drivesdk[file:1]
35;Cucumber 1000G;خيار;Kg;4.5;https://drive.google.com/file/d/1JhtJga2yvkgH6E3GfMBVgwJMnyaCA0Aw/view?usp=drivesdk[file:1]
36;Curry Leaves Imported;أوراق الكاري;Kg;20;https://drive.google.com/file/d/1TzrKRmpeSHL2ZMZozNaqdPC3P4spN3Qj/view?usp=drivesdk[file:1]
37;Baby Corn;ذرة صغيرة (بيبي كورن);1000G;5;- [file:2]
38;Baby Spinach Imported;سبانخ صغيرة طازجة;1000G;60;- [file:2]
39;Bamboo Leaves Fresh;أوراق خيزران طازجة;PCS;32;- [file:2]
40;Banana Leaves Imported;أوراق موز مستوردة;1000G;35;- [file:2]
41;Basil Imported Fresh;ريحان طازج مستورد;1000G;58;- [file:2]
42;Green Beans;فاصوليا خضراء;1000G;8;- [file:2]
43;Bean Sprouts;براعم الفاصوليا;1000G;8;- [file:2]
44;Haricot Beans Imported;فاصوليا هاريكوت مستوردة;1000G;9;- [file:2]
45;Custard Apples 1000G;قشطة;Kg;11;https://drive.google.com/file/d/1FeNZd6hnZEfGUg_sCMQ-XPtwnVqj0ykB/view?usp=drivesdk[file:1]
46;Dill Local 1000G;شبت;pc;1.5;https://drive.google.com/file/d/1hk_5XtN4qGlLlT6KdyEH67WIc_wcsMS6/view?usp=drivesdk[file:1]
47;Drumstick 1000G;درام ستك;Kg;12;https://drive.google.com/file/d/1LnExAbab0tIGy8Yg22Mdw-OdIzo8F8VY/view?usp=drivesdk[file:1]
48;Eggplant Local 1000G;باذنجان أسود مدور وسط/صغير;Kg;3.5;https://drive.google.com/file/d/1fSgEKHdJaYF5IrQ2tHGel3Ttxujzj0W5/view?usp=drivesdk[file:1]
49;Eggplant Long Local;باذنجان طويل;Kg;5;https://drive.google.com/file/d/19n6xPGE2IA4576T60trPro2mHCxD_XNf/view?usp=drivesdk[file:1]
50;Eggplant White Local;باذنجان أبيض;Kg;4;https://drive.google.com/file/d/1Mu48BBY8ktaFOd07_zhY32lKRt_f3Zpw/view?usp=drivesdk[file:1]
51;Figs Local 1000G;تين محلي;Kg;23;https://drive.google.com/file/d/1Y08cy9YH20Zt3GKqcBuuDKbHiHV3cVS_/view?usp=drivesdk[file:1]
52;Garlic Peeled 1000G;ثوم مقشر;Kg;14;https://drive.google.com/file/d/12L4Qtfab22_9pddCxO5wiVk2lGrVW-Lp/view?usp=drivesdk[file:1]
53;Garlic 1000G;ثوم;Kg;10;https://drive.google.com/file/d/1U6fsvi67YgD-hioEQW-KIwNQRnHwi101/view?usp=drivesdk[file:1]
54;Ginger 1000G;زنجبيل;Kg;9;https://drive.google.com/file/d/1p6KcNDSYbfaS1Sc6H9OgwEzHimixjk1H/view?usp=drivesdk[file:1]
55;Grapefruit 1000G;جريب فروت;Kg;6.5;https://drive.google.com/file/d/1jg0W0AT8ym_DqP4Zo0NHLleYwhYHc_H4/view?usp=drivesdk[file:1]
56;Grapes Black Local;عنب أسود;Kg;13;https://drive.google.com/file/d/1m8Ct2JMueZiw9j1hUooHfawox7xfIfS4/view?usp=drivesdk[file:1]
57;Grapes Green Local;عنب أخضر;Kg;13;https://drive.google.com/file/d/1MRLb3gL9u3GYfvN8HyisIr3z-mPhafwV/view?usp=drivesdk[file:1]
58;Grapes Red Local;عنب أحمر;Kg;13;https://drive.google.com/file/d/1yZN_MuTkm923oIfqJJBGHJNdfuVTR8lb/view?usp=drivesdk[file:1]
59;Grapes White 1000G;عنب أبيض;Kg;13;https://drive.google.com/file/d/1KCnKtWKgMYbfOvCHxrXdmEYC596omYvp/view?usp=drivesdk[file:1]
60;Guava 1000G;جوافة;Kg;9;https://drive.google.com/file/d/1TTr15bS8-sXbSdKbH0nsdW35z56K8R3R/view?usp=drivesdk[file:1]
61;Jarjir 1000G;جرجير;pc;1.5;https://drive.google.com/file/d/1R9j01inq7s3h741O18wGQS2uuSv2m4eA/view?usp=drivesdk[file:1]
62;Kaka 1000G;كاكا;Kg;18;https://drive.google.com/file/d/1eUM9auPELVzueEEq2Q9BvKBofulI5bLG/view?usp=drivesdk[file:1]
63;Kiwi 1000G;كيوي;Kg;12;https://drive.google.com/file/d/1QhH-IUdqWuh_HKjMkmnj6aAdedQWVA9p/view?usp=drivesdk[file:1]
64;Ladyfinger 1000G;بامية حجم الحبة صغير;Kg;12;https://drive.google.com/file/d/1uqaB1W2g_UmRs-A0DPAiArQMlz19e7ip/view?usp=drivesdk[file:1]
65;Leeks Local 1000G;ليك محلي;Kg;12;https://drive.google.com/file/d/1StFl7-uiJo8tqJPxPwdDZ1jj7bWCvo_P/view?usp=drivesdk[file:1]
66;Lemon Big Local;ليمون;Kg;9;https://drive.google.com/file/d/1YxV_nDD5aF7p-6RoxaHKskOgDLb-tf0o/view?usp=drivesdk[file:1]
67;Lemon Small 1000G;ليمون صغير;pc;4;https://drive.google.com/file/d/1pgMkqnLYzwlGmTa0zmKPUK5mfyeVYQYL/view?usp=drivesdk[file:1]
68;Lettuce Iceberg Imported;خس مدور مستورد إسباني;Kg;17;https://drive.google.com/file/d/1U6v8Sskgm4zacRwh3eeh7yMsnWgXFMWV/view?usp=drivesdk[file:1]
69;Lettuce Iceberg Local;خس مدور;Kg;9;https://drive.google.com/file/d/1-epBe5ll3GgvZJXr-Hyg_kFiA6mkPoMg/view?usp=drivesdk[file:1]
70;Lettuce Romaine Local;خس طويل;Kg;7;https://drive.google.com/file/d/1UFeMZV90TR0L3qk6daEb1Y6tn7jUpyyq/view?usp=drivesdk[file:1]
71;Lime Fresh Imported;ليم أخضر;Kg;10;https://drive.google.com/file/d/1x7aQxFLoEEX7tJyhaRWN4DoXyF19_3Ec/view?usp=drivesdk[file:1]
72;Mandarin 1000G;أفندي;Kg;9;https://drive.google.com/file/d/1mmlL5LqKnLi56I1glw15wH619eNq54Gc/view?usp=drivesdk[file:1]
73;Mango Timor 1000G;مانجو تيمور;Kg;18;https://drive.google.com/file/d/1dvg4dVcK-
73;Mango Timor 1000G;مانجو تيمور;Kg;18;https://drive.google.com/file/d/1dvg4dVcK-ic7Ite3y9oy0nOHU18N26a5/view?usp=drivesdk[file:1]
74;Marrow / Courgette / Zucchini Local 1000G;كوسة;Kg;6;https://drive.google.com/file/d/1WTPmEiSvnHG0RMBNf8nvvoQPPvlUInu4/view?usp=drivesdk[file:1]
75;Melon Sweet 1000G;شمام;Kg;3.5;https://drive.google.com/file/d/1pbZTRRiDU-cK25z0Eozh8qrB4nm83S7C/view?usp=drivesdk[file:1]
76;Mint 1000G;نعناع;pc;1.5;https://drive.google.com/file/d/1QwEenpFIAm8AuREzqFXbfNeHhNZGIMC8/view?usp=drivesdk[file:1]
77;Mulokhia 1000G;ملوخية;Kg;6;https://drive.google.com/file/d/1zmu3BaIN2Txf3Jm9eUKp1vvGtrln9kfh/view?usp=drivesdk[file:1]
78;Nectarine 1000G LOCAL;نكتارين;Kg;16;https://drive.google.com/file/d/1XRHzpjwCBZ0PDC2mLf7aIzo1XuFAD7-m/view?usp=drivesdk[file:1]
79;Okra 1000G;بامية;Kg;15;https://drive.google.com/file/d/1UDFzcEUB2rFbXa6bXMjR-Mip7Jr1ztrR/view?usp=drivesdk[file:1]
80;Onion Red 1000G;بصل أحمر;Kg;3.5;https://drive.google.com/file/d/11MB2mjVjGgViYDbyGFvR5089nSASEPqs/view?usp=drivesdk[file:1]
81;Onion Spring 1000G;بصل أخضر;Kg;4.5;https://drive.google.com/file/d/1bNJGWzpSVn3vi33b8IF7-tKPB1rX_1tT/view?usp=drivesdk[file:1]
82;Onion White 1000G;بصل أبيض;Kg;4;https://drive.google.com/file/d/1Ws82hzOGSWv5J2DstQnEe91m3URP-rKF/view?usp=drivesdk[file:1]
83;Orange For Juice Fresh 1000G;برتقال عصير;Kg;5;https://drive.google.com/file/d/1d9P8ZspAFZGGHBOqzbFMuEeoPJ23CYDI/view?usp=drivesdk[file:1]
84;Orange Navel 1000G;برتقال أبوصورة;Kg;7;https://drive.google.com/file/d/1FuPxF23o2TGy8jJOQmehoSiMMBLC7axK/view?usp=drivesdk[file:1]
85;Papaya 1000G;بابايا;Kg;8;https://drive.google.com/file/d/1W0G6CDg6p7Io8J1SoyyHPRygjzSkyvgy/view?usp=drivesdk[file:1]
86;Parsely Local 1000G;بقدونس;pc;1.5;https://drive.google.com/file/d/1CjB7QJqY0XhCeUsNWyLZilIWULZmR46a/view?usp=drivesdk[file:1]
87;Peach 1000G;خوخ;Kg;13;https://drive.google.com/file/d/1n-FpDTvyy8FvqKyMhKw__ZAuy047F0Lj/view?usp=drivesdk[file:1]
88;Pears Imported Fresh 1000G;كمثرى;Kg;12;https://drive.google.com/file/d/1t4QlgPCc2lAKksrWTIBEKdtg6R3Uhg3E/view?usp=drivesdk[file:1]
89;Pineapple Baby 1000G;أناناس بيبي;Kg;25;https://drive.google.com/file/d/1U0K1fJf-54EveBzbS03wZoHmvOAP-taB/view?usp=drivesdk[file:1]
90;Pineapple Large 1000G;أناناس;Kg;10;https://drive.google.com/file/d/1WlTCFFbtHUKdtlFSuy7baJfoFWApF8w3/view?usp=drivesdk[file:1]
91;Plums Black 1000G;بخارة أسود;Kg;13;https://drive.google.com/file/d/1YU7Y8ARUoZ_8GwUrbHBBa47cqgz1HZbo/view?usp=drivesdk[file:1]
92;Plums Red 1000G;بخارة أحمر;Kg;13;https://drive.google.com/file/d/1ur85ixAOPwTmEGr5_bq5KGJEx_9XRFvt/view?usp=drivesdk[file:1]
93;Pomegranate 1000G;رمان;Kg;13;https://drive.google.com/file/d/1PreacAGBSHSIqRqwr_dyqyCWTjDGEP31/view?usp=drivesdk[file:1]
94;Potato Sweet 1000G;بطاطا حلوة;Kg;4;https://drive.google.com/file/d/1n_Wghsdl4wk237X9CtauH2lwZ2GKVV8D/view?usp=drivesdk[file:1]
95;Potato 1000G;بطاطس;Kg;3.5;https://drive.google.com/file/d/1QYFqP7T0H6x3-JB8VncPxUPg0TWPQczL/view?usp=drivesdk[file:1]
96;Pumpkin Green Long Dubbah 1000G;قرع أخضر (دبة);Kg;5.5;https://drive.google.com/file/d/1U9OwmB2ifAKEKWTZ_c90sKiUAXbzDseN/view?usp=drivesdk[file:1]
97;Pumpkin 1000G;قرع أصفر (عسلي);Kg;5.5;https://drive.google.com/file/d/1vladnnXtMon8igxLBIxpsaUXAIz6yrNW/view?usp=drivesdk[file:1]
98;Purslane Green Rijla 1000G;رجلة;pc;1.5;https://drive.google.com/file/d/1r72L0hZLktqPXMQcEeB9X1FBXsJxIJiu/view?usp=drivesdk[file:1]
99;Radish Red 1000G;فجل أحمر;pc;1.5;https://drive.google.com/file/d/1Fw9seQJTs1alziR4JFBMim3ICjFNVNWI/view?usp=drivesdk[file:1]
100;Radish White 1000G;فجل أبيض;pc;1.5;https://drive.google.com/file/d/1n0BFoTWzoZ3wD6w5Hgmn9YAuKZKNqGU9/view?usp=drivesdk[file:1]
101;Spinach Local 1000G;سبانخ;pc;1.5;https://drive.google.com/file/d/1YyOOkTC3yZjW7CWJXy9M6WVhIq6VEgI8/view?usp=drivesdk[file:1]
102;Strawberry Fresh 1000G;فراولة مصري;Kg;20;https://drive.google.com/file/d/1LKR78n2i8NdioZ1xGkoiOypzDFcREN2M/view?usp=drivesdk[file:1]
103;Taro Root Gulgas 1000G;قلقاس;Kg;12;https://drive.google.com/file/d/1-6uyGQ1qNuuS4hrIzrOuI-hRM-8POyhG/view?usp=drivesdk[file:1]
104;Tomato Cherry Red Local 1000G;طماطم شيري أحمر;Kg;25;https://drive.google.com/file/d/16sJGKHB2z2tFZPYw7BSLoa4XOMgY41v-/view?usp=drivesdk[file:1]
105;Tomato Red 1000G;طماطم مدور;Kg;5;https://drive.google.com/file/d/1MlXdxBjSj_H2FKzueCL65yfAxaBAm8Sn/view?usp=drivesdk[file:1]
106;Turnip Fresh 1000G;لفت;Kg;3.5;https://drive.google.com/file/d/1MlXdxBjSj_H2FKzueCL65yfAxaBAm8Sn/view?usp=drivesdk[file:1]
107;Watermelon Long Local 1000G;بطيخ طويل;Kg;3.5;https://drive.google.com/file/d/1lx7gktVg5LOmR5d0JYd3OOqacWL-Fr9r/view?usp=drivesdk[file:1]
108;Watermelon Round Local 1000G;بطيخ مدور;Kg;3.5;https://drive.google.com/file/d/1dxf_OVjL8p6v7uNgvcXYaYIMGFkP1TJ0/view?usp=drivesdk[file:1]
109;Eggs Fresh algharbia sizeXL X12;بيض;BOX;185;https://drive.google.com/file/d/1rTRylFNtpZA2kLnXd2-iABd8UIYaaLbd/view?usp=drivesdk[file:1]
110;Alfalfa Sprouts;براعم البرسيم (ألفالفا);250G;1 x 250G;11;- [file:2]
111;Apricot Imported USA;مشمش مستورد (أمريكي);1000G;Kg;35;- [file:2]
112;Artichoke Imported Fresh;خرشوف طازج مستورد;1000G;Kg;33;- [file:2]
113;Asparagus Baby Imported;هليون صغير مستورد;1000G;Pk;9;- [file:2]
114;Asparagus Jumbo Green;هليون أخضر جامبو مستورد;1000G;Kg;55;- [file:2]
115;Asparagus Green Imported;هليون أخضر مستورد;1000G;Kg;50;- [file:2]
116;Asparagus White USA;هليون أبيض أمريكي;1000G;Kg;70;- [file:2]
117;Avocado USA;أفوكادو أمريكي طازج;1000G;Kg;30;- [file:2]
118;Avocado Kenya;أفوكادو كيني;1000G;Kg;20;- [file:2]
119;Baby Carrot Holland;جزر صغير بالعنق (هولندي);200G;1 x 200G;20;- [file:2]
120;Baby Corn;ذرة صغيرة (بيبي كورن);1000G;Pkt;5;- [file:2]
121;Baby Spinach Imported;سبانخ صغيرة طازجة;1000G;Kg;60;- [file:2]
122;Bamboo Leaves Fresh;أوراق خيزران طازجة;PCS;Kg;32;- [file:2]
123;Banana Leaves Imported;أوراق موز مستوردة;1000G;Kg;35;- [file:2]
124;Basil Imported Fresh;ريحان طازج مستورد;1000G;Kg;58;- [file:2]
125;Haricot Beans Imported;فاصوليا هاريكوت مستوردة;1000G;Pk;9;- [file:2]
126;Bean Sprouts Imported;براعم فاصوليا مستوردة;1000G;Pk;8;- [file:2]
127;Baby Red Beet Chioggia;بنجر أحمر صغير (شيوجيا);1000G;Kg;37;- [file:2]
128;Beetroot Imported Fresh;بنجر (شمندر) طازج;1000G;Kg;21;- [file:2]
129;Mini Yellow Beetroot;بنجر أصفر مصغر;250G;1 x 250G;22;- [file:2]
130;Green Bell Pepper Imported;فلفل أخضر حلو مستورد;1000G;Kg;27;- [file:2]
131;Blackberry Taif;توت أسود (طائفي);1000G;Kg;-;- [file:2]
132;Blackberry USA Fresh;توت أسود أمريكي طازج;200G;1 x 200G;15;- [file:2]
133;Blueberry Imported;توت أزرق مستورد;170G;1 x 170G;14;- [file:2]
134;Broccoli USA;بروكلي أمريكي;1000G;Kg;20;- [file:2]
135;Brussels Sprouts;براعم بروكسل (كرنب صغير);1000G;Kg;25;- [file:2]
136;Chinese Cabbage;كرنب صيني (باي تشوي);1000G;Kg;20;- [file:2]
137;White Cabbage Imported;كرنب أبيض مستورد;1000G;Kg;17;- [file:2]
138;Cantaloupe Melon Imported;شمام كانتالوب مستورد;1000G;Kg;22;- [file:2]
139;Baby Red Carrot Fresh;جزر أحمر صغير طازج;450G;Pk;8;- [file:2]
140;Baby Whole Carrot USA;جزر صغير كامل (أمريكي);1000G;Pk;5.9;- [file:2]
141;Baby Yellow Carrot Fresh;جزر أصفر صغير طازج;1000G;Kg;36;- [file:2]
142;Celery Fresh USA;كرفس طازج أمريكي;1000G;Kg;18;- [file:2]
143;White Celery Roots;جذور كرفس بيضاء;1000G;Kg;20;- [file:2]
144;Green Chayote Imported;شايوت أخضر مستورد;1000G;Kg;30;- [file:2]
145;Cherries USA;كرز أمريكي;1000G;Kg;80;- [file:2]
146;Cherries AUS;كرز أسترالي;1000G;Kg;50;- [file:2]
147;Red Chicory Radicchio;هندباء حمراء (شيكوريا);1000G;Kg;38;- [file:2]
148;Yellow Chicory;هندباء صفراء (شيكوريا);1000G;Kg;38;- [file:2]
149;Green Jalapeno;فلفل هالبينو أخضر;1000G;Kg;30;- [file:2]
150;Orange Jalapeno;فلفل هالبينو برتقالي;1000G;Kg;45;- [file:2]
151;Red Jalapeno;فلفل هالبينو أحمر;1000G;Kg;45;- [file:2]
152;Yellow Jalapeno;فلفل هالبينو أصفر;1000G;Kg;45;- [file:2]
153;Yellow Roman Chilli;فلفل أصفر روماني;1000G;Kg;22;- [file:2]
154;Fresh Chives Imported;ثوم معمر طازج;1000G;Kg;70;- [file:2]
155;Young Green Coconut;جوز هند أخضر صغير;PCS;1 x 9 PCS;14;- [file:2]
156;Baby Corn Fresh Imported;ذرة صغيرة طازجة مستوردة;-;Kg;80;- [file:2]
157;Corn On The Cob;ذرة (كوز);PCS;1 x 12 x 4;12;- [file:2]
158;Fresh Cranberry;توت بري طازج;1000G;Kg;60;- [file:2]
159;Long Cucumber Imported;خيار طويل مستورد;1000G;Kg;20;- [file:2]
160;Dragon Fruit Fresh;فاكهة التنين (دراغون فروت);1000G;Kg;38;- [file:2]
161;Durian Imported;دوريان مستورد;1000G;Kg;38;- [file:2]
162;Edible Flowers Fresh;زهور صالحة للأكل;1000G;Kg;170;- [file:2]
163;Endive Imported;هندباء (انديف) مستوردة;1000G;Kg;35;- [file:2]
164;Yellow Endive Fresh;هندباء (انديف) أصفر;1000G;Kg;35;- [file:2]
165;Fresh Fava Beans;فول طازج مستورد;1000G;Kg;39;- [file:2]
166;Baby Fennel Imported;شمر صغير مستورد;1000G;1 x 200G;21;- [file:2]
167;Fennel Imported;شمر مستورد;1000G;Kg;23;- [file:2]
168;Forelle Pear;كمثرى فوريل;1000G;Kg;10;- [file:2]
169;Granadilla Imported;جرانديلا مستوردة;1000G;Kg;33;- [file:2]
170;Pink Grapefruit;جريب فروت وردي;1000G;Kg;20;- [file:2]
171;Purple Thai Basil;ريحان تايلاندي أرجواني;1000G;Kg;68;- [file:2]
172;Rosemary Imported;إكليل الجبل (روزماري);1000G;Kg;58;- [file:2]
173;Sage Imported;ميرمية مستوردة;1000G;Kg;65;- [file:2]
174;Tarragon Imported;طرخون مستورد;1000G;Kg;88;- [file:2]
175;Honeydew Melon;شمام عسلي;1000G;Kg;22;- [file:2]
176;Kale Holland;كرنب كالي (هولندي);1000G;Kg;32;- [file:2]
177;Kiwano Holland;كيوانو (هولندي);1000G;Kg;60;- [file:2]
178;Kohlrabi Imported;كولرابي (كرنب سلق);1000G;Kg;18;- [file:2]
179;Kumquat Imported;كمكوات (برتقال صغير);1000G;Kg;52;- [file:2]
180;Leeks Imported;كراث مستورد;1000G;Kg;18;- [file:2]
181;Lemongrass Imported;عشبة الليمون;1000G;Kg;33;- [file:2]
182;Lemon Leaves Imported;أوراق ليمون;1000G;Kg;43;- [file:2]
183;Boston Lettuce;خس بوسطن;1000G;Kg;35;- [file:2]
184;Green Frisée Lettuce;خس فريزي أخضر;1000G;Kg;35;- [file:2]
185;Yellow Frisée Lettuce;خس فريزي أصفر;1000G;Kg;48;- [file:2]
186;Radicchio Lettuce;خس راديكيو;1000G;Kg;35;- [file:2]
187;Baby Gem Lettuce;خس بيبي جيم;1000G;Kg;35;- [file:2]
188;Bok Choy;بوك تشوي (خس صيني);1000G;Kg;23;- [file:2]
189;Iceberg Lettuce USA;خس آيسبرج (أمريكي);1000G;Kg;25;- [file:2]
190;Lollo Biondi Lettuce;خس لولو بيوندي;1000G;Kg;35;- [file:2]
191;Lollo Rosso Lettuce;خس لولو روسو;1000G;Kg;35;- [file:2]
192;Oakleaf Lettuce;خس أوراق البلوط;1000G;Kg;35;- [file:2]
193;Baby Rocket;جرجير صغير (بيبي روكيت);1000G;Kg;65;- [file:2]
194;Romaine Lettuce;خس روماني;1000G;Kg;35;- [file:2]
195;Kaffir Lime Leaves;أوراق ليمون كفير;1000G;Kg;48;- [file:2]
196;Longan Imported;فاكهة اللونجان;1000G;Kg;37;- [file:2]
197;Lychees Imported;فاكهة الليتشي;1000G;Kg;45;- [file:2]
198;Mango Fresh Imported;مانجو طازج مستورد;1000G;Kg;21;- [file:2]
199;Mangosteen Imported;مانغوستين;1000G;Kg;36;- [file:2]
200;Micro Herbs Fresh;أعشاب مصغرة طازجة;1000G;Kg;75;- [file:2]
201;Brown Button Mushroom;فطر بني;1000G;Kg;25;- [file:2]
202;White Button Mushroom;فطر أبيض;1000G;Kg;23;- [file:2]
203;Porcini Mushroom;فطر بورسيني;1000G;Kg;85;- [file:2]
204;Chestnut Mushroom;فطر كستناء;1000G;Kg;30;- [file:2]
205;Enoki Mushroom;فطر إينوكي;200G;1 x 200G;20;- [file:2]
206;Portobello Mushroom;فطر بورتوبيللو;1000G;Kg;35;- [file:2]
207;Shiitake Mushroom;فطر شيتاكي;1000G;Kg;74;- [file:2]
208;White Shimeji Mushroom;فطر شيميجي أبيض;1000G;Kg;48;- [file:2]
209;Nectarine USA;نكتارين أمريكي;1000G;Kg;32;- [file:2]
210;Red Pearl Onion USA;بصل لؤلؤي أحمر;1000G;Kg;21;- [file:2]
211;White Pearl Onion USA;بصل لؤلؤي أبيض;1000G;Kg;21;- [file:2]
212;Red Jumbo Onion;بصل أحمر جامبو;1000G;Kg;21;- [file:2]
213;Shallot Onion Imported;بصل أندلسي (شالوت);1000G;Kg;24;- [file:2]
214;White Onion USA;بصل أبيض أمريكي;1000G;Kg;15;- [file:2]
215;Fresh Oregano;أوريجانو طازج;1000G;Kg;68;- [file:2]
216;Papaya Imported;بابايا مستوردة;1000G;Kg;25;- [file:2]
217;French Parsley;بقدونس فرنسي;1000G;Kg;28;- [file:2]
218;Curly Parsley;بقدونس مجعد;1000G;Kg;29;- [file:2]
219;Passion Fruit;باشن فروت;1000G;Kg;35;- [file:2]
220;Peach Fresh USA;خوخ طازج أمريكي;1000G;Kg;32;- [file:2]
221;Green Peas;بازلاء خضراء;1000G;Kg;29;- [file:2]
222;Red Bell Pepper;فلفل أحمر حلو;1000G;Kg;37;- [file:2]
223;Orange Bell Pepper;فلفل برتقالي حلو;1000G;Kg;37;- [file:2]
224;Yellow Bell Pepper;فلفل أصفر حلو;1000G;Kg;37;- [file:2]
225;Physalis Golden Berry;فيزاليس (توت ذهبي);1000G;Kg;65;- [file:2]
226;Baby Potatoes;بطاطس صغيرة;1000G;Kg;21;- [file:2]
227;Baby Red Potatoes;بطاطس حمراء صغيرة;1000G;Kg;21;- [file:2]
228;Baby White Potatoes;بطاطس بيضاء صغيرة;1000G;Kg;21;- [file:2]
229;Sweet Jewel Potato USA;بطاطا حلوة (جوهرة);1000G;Kg;21;- [file:2]
230;Red Radish Imported;فجل أحمر مستورد;125G;1 x 125G;5;- [file:2]
231;White Radish;فجل أبيض;1000G;Kg;20;- [file:2]
232;Rambutan Imported;رامبوتان;1000G;Kg;35;- [file:2]
233;Red Raspberry;توت العليق أحمر;170G;1 x 170G;15;- [file:2]
234;Red Currant;كشمش أحمر;125G;1 x 125G;17;- [file:2]
235;Rhubarb Imported;راوند مستورد;1000G;Kg;26;- [file:2]
236;Mini Romanesco Fresh;رومانيسكو مصغر طازج;1000G;Kg;37;- [file:2]
237;Fresh Rosemary;إكليل الجبل طازج;100G;1 x 100G;58;- [file:2]
238;Sakura Mix Cress;كريس ميكس ساكورا;1000G;Kg;80;- [file:2]
239;Savoy Cabbage;كرنب سافوي;1000G;Kg;22;- [file:2]
240;Shiso Mix;شيسو ميكس;1000G;Kg;80;- [file:2]
241;Snow Peas;بازلاء الثلج;1000G;Kg;37;- [file:2]
242;Micro Sprout Mix;براعم مصغرة مشكلة;1000G;Kg;80;- [file:2]
243;Green Acorn Squash;قرع بلوطي أخضر;1000G;Kg;26;- [file:2]
244;Butternut Squash USA;قرع بتركوت (أمريكي);1000G;Kg;21;- [file:2]
245;Star Fruit;فاكهة النجمة;1000G;Kg;90;- [file:2]
246;Fresh Strawberry USA;فراولة طازجة أمريكية;1000G;Kg;47;- [file:2]
247;Sugar Cane Juice;قصب سكر للعصير;1000G;Kg;20;- [file:2]
248;Tamarillo Imported;طماريلو;1000G;Kg;53;- [file:2]
249;Fresh Thyme Imported;زعتر طازج مستورد;1000G;Kg;58;- [file:2]
250;Thyme Leaves Fresh;أوراق زعتر طازجة;1000G;Kg;58;- [file:2]
251;Orange Bunch Tomato;طماطم برتقالية عنقودية;1000G;Kg;38;- [file:2]
252;Red Bunch Tomato;طماطم حمراء عنقودية;1000G;Kg;35;- [file:2]
253;Yellow Bunch Tomato;طماطم صفراء عنقودية;1000G;Kg;38;- [file:2]
254;Red Cherry Tomato;طماطم كرزية حمراء;1000G;Kg;25;- [file:2]
255;Yellow Cherry Tomato;طماطم كرزية صفراء;1000G;Kg;35;- [file:2]
256;Heirloom Tomato;طماطم تراثية (هيرلوم);1000G;Kg;37;- [file:2]
257;Marmande Tomato;طماطم مارماند;1000G;Kg;40;- [file:2]
258;Roma Plum Tomato;طماطم روما (برقوقية);1000G;Kg;20;- [file:2]
259;Whole Fresh Turmeric;كركم طازج كامل;1000G;Kg;23;- [file:2]
260;Baby Turnip Mini;لفت صغير مصغر;1000G;Kg;122;- [file:2]
261;Fresh Zaatar;زعتر طازج مستورد;-;Kg;58;- [file:2]
262;Baby Zucchini With Flower;كوسا خضراء صغيرة بالزهرة;1000G;Kg;27;- [file:2]
263;Dates Sukari Muftal;تمر سكري مفتل;3Kg;;-
264;Dates Majdoul Qassim;تمر مجدول القصيم;-;;-
265;Dates Suqai Qassim;تمر صقعي القصيم;-;;-
266;Dates Mabr oom Madinah;تمر مبروم المدينة;-;;-
267;Dates Safawi Madinah;تمر صفاوي المدينة;-;;-
268;Dates Anbar Madinah;تمر عنبر المدينة;-;;-
269;Dates Ajwa Madinah Royal;تمر عجوة المدينة ملكي;-;;-
270;Dates Rotab Sukari Qassim;تمر رطب سكري القصيم;-;;-