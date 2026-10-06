# مدرسة الديب الخاصة

موقع عربي متجاوب لمدرسة الديب الخاصة. ملفات التطبيق والصور موجودة داخل
`artifacts/eldeeb-school`، والموقع مبني بـ React وVite ويُنتج ملفات ثابتة مناسبة
لـ GitHub Pages أو أي استضافة للمواقع الثابتة.

## المتطلبات

- Node.js 20 أو أحدث
- pnpm 10

## التشغيل محليًا

من مجلد المشروع:

```bash
pnpm install
pnpm --filter @workspace/eldeeb-school run dev
```

## بناء نسخة للنشر

للنشر على GitHub Pages باسم مستودع مثل `eldeeb-school`:

```bash
BASE_PATH=/eldeeb-school/ PORT=4173 pnpm --filter @workspace/eldeeb-school run build
```

ارفع محتويات `artifacts/eldeeb-school/dist/public` إلى الاستضافة. عند النشر على
النطاق الرئيسي بدل مسار مستودع، استخدم `BASE_PATH=/`.

## النشر على GitHub Pages

الموقع المنشور يُقدَّم من مجلد `docs` على فرع `main`. لتحديثه بعد تعديل ملفات
التطبيق، ابنِ النسخة الثابتة وانسخ ناتج البناء إلى `docs`:

```bash
BASE_PATH=/Eldeeb_Private_School/ PORT=4173 pnpm --filter @workspace/eldeeb-school run build
mkdir -p docs
cp -R artifacts/eldeeb-school/dist/public/. docs/
git add docs
git commit -m "Publish school website"
git push origin main
```

إعداد Pages الحالي هو النشر من الفرع `main` والمجلد `/docs`. غيّر قيمة
`BASE_PATH` إذا كان اسم المستودع مختلفًا.
