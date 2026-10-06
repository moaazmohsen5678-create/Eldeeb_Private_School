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

## الرفع إلى GitHub

ارفع مجلد المشروع كاملًا إلى مستودع GitHub حتى تظل إعدادات pnpm وملفات مساحة
العمل متاحة للبناء:

```bash
git init
git add .
git commit -m "Add school website"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```

يوجد سير عمل GitHub Actions في `.github/workflows/deploy-school.yml` لبناء الموقع
ونشره على GitHub Pages تلقائيًا عند الدفع إلى `main`. فعّل GitHub Pages من
إعدادات المستودع واجعل مصدر النشر **GitHub Actions**.
