[![Netlify Status](https://api.netlify.com/api/v1/badges/cdeb1e0c-8a6f-4a92-82bc-e857690f8810/deploy-status)](https://app.netlify.com/projects/wanderlust-adventures-lp/deploys)

## 📊 Lighthouse Metrics — Before → After Optimization

### 🔥 Summary
| Metric | Before | After | Improvement |
|--------|--------|--------|--------------|
| **Performance** | ![](https://img.shields.io/badge/69-red) | ![](https://img.shields.io/badge/98-brightgreen) | ↑ +29 |
| **Accessibility** | ![](https://img.shields.io/badge/97-brightgreen) | ![](https://img.shields.io/badge/98-brightgreen) | ↑ +1 |
| **Best Practices** | ![](https://img.shields.io/badge/71-orange) | ![](https://img.shields.io/badge/100-brightgreen) | ↑ +29 |
| **SEO** | ![](https://img.shields.io/badge/100-brightgreen) | ![](https://img.shields.io/badge/100-brightgreen) | — |

---

### 🖼 Before / After 

| <img src="./media/lighthouse/before.png" width="420"/> | <img src="./media/lighthouse/after.png" width="420"/> |
|:--:|:--:|
| **Before** | **After** |

---

### 🎯 JSON reports
- [📄 Before JSON](./media/json/before.json)
- [📄 After JSON](./media/json/after.json)

---

### 🔍 Key Improvements
- Implemented `<picture>` with responsive WebP sources
- Preloaded LCP image
- Removed blocking JS, added `defer`
- Reduced main-thread work by refactoring components
- Optimized CSS bundle (−49 KB unused CSS)
- Enhanced modal accessibility (`aria-modal`, `aria-controls`)
