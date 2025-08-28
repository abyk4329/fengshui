# הוראות להחלפת הלוגו

## כיצד להוסיף את הלוגו שלך

כרגע יש emoji של כדור בדולח (🔮) כ-placeholder. כדי להחליף אותו בלוגו שלך:

### אופציה 1: תמונה
1. שמרי את הלוגו שלך בתיקיית הפרויקט עם השם `logo.png` או `logo.jpg`
2. החליפי בקובץ `index.html` את השורה:
   ```html
   <div class="logo-placeholder">🔮</div>
   ```
   ב:
   ```html
   <img src="logo.png" alt="Ksenia Logo" class="logo-image">
   ```
3. הוסיפי לקובץ `style.css`:
   ```css
   .logo-image {
       height: 80px;
       width: auto;
       filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
       animation: float 3s ease-in-out infinite;
   }
   ```

### אופציה 2: SVG
אם יש לך לוגו ב-SVG, תוכלי להדביק את הקוד ישירות במקום ה-placeholder.

### אופציה 3: שינוי ה-Emoji
אם את רוצה emoji אחר, פשוט החליפי את 🔮 ב-emoji אחר כמו:
- 🌟 (כוכב)
- 💎 (יהלום) 
- 🧿 (עין כחולה)
- ☯️ (ין יאנג)

הלוגו כבר מעוצב עם:
- אנימציית ריחוף
- צל לבן זוהר
- רספונסיביות לניידים
