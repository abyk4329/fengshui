// נתוני קואה עבור כל מספר
const kuaData = {
    1: {
        description: "קואה 1 — יסוד המים. אנשים אלו נוטים להיות אינטואיטיביים, רגישים לשינויים, ויוצרים קשרים רגשיים עמוקים. מתאים להם לסביבה זורמת ותומכת: מקומות עבודה עם תנועה מתחשבת, פינות שקטות ללמידה ומרחבים עם תאורה רכה. טיפ מעשי: הוסיפו אלמנטים כחולים/שקופים או צמחים רכים בצפון ומזרח לשיפור זרימה.",
        goodDirections: ["דרום מזרח", "מזרח", "דרום", "צפון"],
        badDirections: ["דרום מערב", "צפון מערב", "צפון מזרח", "מערב"]
    },
    2: {
        description: "קואה 2 — יסוד האדמה. אנשים יציבים, תומכים ומחויבים. הם מתחברים לטקסטורות טבעיות, חומרים חמים וסביבה מסודרת. טיפ מעשי: השתמשו בצבעי חול ועץ בפינות תמיכה כמו דרום־מערב וצפון־מערב כדי לחזק תחושת ביטחון.",
        goodDirections: ["צפון מזרח", "מערב", "צפון מערב", "דרום מערב"],
        badDirections: ["מזרח", "דרום מזרח", "דרום", "צפון"]
    },
    3: {
        description: "קואה 3 — יסוד העץ. מאופיינים ביצירתיות, יוזמה ושאיפה לצמיחה. סביבה ירוקה ותומכת עם מקום לפרויקטים חדשים מחזקת אותם. טיפ מעשי: עבודת יצירה או פעילות תמריץ בצפון ודרום תסייע בקידום יוזמות.",
        goodDirections: ["דרום", "צפון", "דרום מזרח", "מזרח"],
        badDirections: ["מערב", "צפון מערב", "דרום מערב", "צפון מזרח"]
    },
    4: {
        description: "קואה 4 — יסוד העץ (רגשי, רוחני). רגישים, מחוברים לאסתטיקה, וזקוקים לזמנים של שקט ויצירה. טיפ מעשי: יצירת פינת קריאה מסודרת בצפון או מזרח תעודד הרמוניה ותמוך בעבודה פנימית.",
        goodDirections: ["צפון", "דרום", "מזרח", "דרום מזרח"],
        badDirections: ["צפון מערב", "מערב", "צפון מזרח", "דרום מערב"]
    },
    6: {
        description: "קואה 6 — יסוד המתכת. נטייה להנהגה, סדר ודיוק. מתאים למקומות עבודה מסודרים, שולחנות עבודה ברורים ופינות החלטה. טיפ מעשי: השתמשו בפריטים מתכתיים עדינים במערב וצפון־מערב לתמיכה בכישורי הנהגה.",
        goodDirections: ["מערב", "צפון מזרח", "דרום מערב", "צפון מערב"],
        badDirections: ["דרום מזרח", "מזרח", "צפון", "דרום"]
    },
    7: {
        description: "קואה 7 — יסוד המתכת (חברתי, כריזמטי). מיומנויות בין־אישיות מובילות להצלחה חברתית. טיפ מעשי: מקומות אירוח וקבלת פנים במערב וצפון־מערב משפרים קשרים אישיים ותמיכה חברתית.",
        goodDirections: ["צפון מערב", "דרום מערב", "צפון מזרח", "מערב"],
        badDirections: ["מזרח", "דרום מזרח", "דרום", "צפון"]
    },
    8: {
        description: "קואה 8 — יסוד האדמה (שאפתני וביצועי). מוכוון תוצאות, זקוק לכלים פרקטיים ותמיכה במרחב הפיזי כדי לממש פרויקטים. טיפ מעשי: חיזוק פינות אחסון וסדר בדרום־מערב יכול לייצב כוחות ולשפר פרודוקטיביות.",
        goodDirections: ["דרום מערב", "צפון מערב", "מערב", "צפון מזרח"],
        badDirections: ["דרום", "צפון", "דרום מזרח", "מזרח"]
    },
    9: {
        description: "קואה 9 — יסוד האש (כריזמטי ותשוקתי). מיטיבים לבטא חזון ולהשפיע. סביבה עם אור טבעי, צבעים חמים ופינות להופעות או הצגה תחזק אותם. טיפ מעשי: חיזוק פינות מזרח ודרום עם תאורה רכה ואלמנטים אנרגטיים.",
        goodDirections: ["מזרח", "דרום מזרח", "צפון", "דרום"],
        badDirections: ["דרום מערב", "צפון מזרח", "מערב", "צפון מערב"]
    }
};

// חישוב מספר קואה
function calculateKua(birthDate, gender) {
    const year = birthDate.getFullYear();
    
    // חישוב לפי השנה הסינית (אם הולדה לפני פברואר, מחסירים שנה)
    const chineseNewYear = getChineseNewYear(year);
    let chineseYear = year;
    if (birthDate < chineseNewYear) {
        chineseYear = year - 1;
    }
    
    // חישוב הקואה הנכון
    const lastTwoDigits = chineseYear % 100;
    let sum = Math.floor(lastTwoDigits / 10) + (lastTwoDigits % 10);
    
    // אם הסכום גדול מ-9, נחבר את הספרות שוב
    while (sum > 9) {
        sum = Math.floor(sum / 10) + (sum % 10);
    }
    
    let kuaNumber;
    
    if (gender === 'male') {
        // עבור גברים שנולדו אחרי 2000: 9 - sum
        // עבור גברים שנולדו לפני 2000: 10 - sum
        if (chineseYear >= 2000) {
            kuaNumber = 9 - sum;
            if (kuaNumber <= 0) kuaNumber += 9;
        } else {
            kuaNumber = 10 - sum;
            if (kuaNumber <= 0) kuaNumber += 9;
        }
    } else {
        // עבור נשים שנולדו אחרי 2000: 6 + sum
        // עבור נשים שנולדו לפני 2000: 5 + sum
        if (chineseYear >= 2000) {
            kuaNumber = 6 + sum;
            if (kuaNumber > 9) kuaNumber -= 9;
        } else {
            kuaNumber = 5 + sum;
            if (kuaNumber > 9) kuaNumber -= 9;
        }
    }
    
    // קואה 5 לא קיימת - מחליפים אותה
    if (kuaNumber === 5) {
        kuaNumber = gender === 'male' ? 2 : 8;
    }
    
    return kuaNumber;
}

// קבלת תאריך השנה החדשה הסינית (משוער)
function getChineseNewYear(year) {
    // זהו חישוב משוער - בפועל התאריכים משתנים
    const dates = {
        2020: new Date(2020, 0, 25),
        2021: new Date(2021, 1, 12),
        2022: new Date(2022, 1, 1),
        2023: new Date(2023, 0, 22),
        2024: new Date(2024, 1, 10),
        2025: new Date(2025, 0, 29)
    };
    
    return dates[year] || new Date(year, 1, 4); // ברירת מחדל
}

// אלמנטים של הדום
const birthForm = document.getElementById('birth-form');
const kuaResultSection = document.getElementById('kua-result-section');
const compassSection = document.getElementById('compass-section');
const birthDateSection = document.getElementById('birth-date-section');
const kuaNumber = document.getElementById('kua-number');
const kuaDescription = document.getElementById('kua-description');
const goToCompassBtn = document.getElementById('go-to-compass');
const backToStartBtn = document.getElementById('back-to-start');
const goodDirectionsList = document.getElementById('good-directions-list');
const badDirectionsList = document.getElementById('bad-directions-list');
const formError = document.getElementById('form-error');

let currentKua = null;

// טיפול בטופס תאריך הלידה
birthForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const birthDateInput = document.getElementById('birth-date');
    const genderInput = document.getElementById('gender');
    
    if (!birthDateInput.value || !genderInput.value) {
        formError.textContent = 'אנא מלא/י את תאריך הלידה ובחר/י מין.';
        formError.style.display = 'block';
        return;
    } else {
        formError.textContent = '';
        formError.style.display = 'none';
    }
    
    const birthDate = new Date(birthDateInput.value);
    const gender = genderInput.value;
    
    // חישוב הקואה
    currentKua = calculateKua(birthDate, gender);
    
    // הצגת התוצאה
    showKuaResult(currentKua);
});

// הצגת תוצאת הקואה
function showKuaResult(kua) {
    const data = kuaData[kua];
    
    kuaNumber.textContent = kua;
    kuaDescription.textContent = data.description;
    
    // מעבר לתוצאה
    switchSection(birthDateSection, kuaResultSection);
}

// מעבר למצפן
goToCompassBtn.addEventListener('click', function() {
    showCompass(currentKua);
});

// הצגת המצפן
function showCompass(kua) {
    const data = kuaData[kua];
    
    // עדכון הכיוונים במצפן
    updateCompassDirections(data);
    
    // עדכון רשימת הכיוונים
    updateDirectionsList(data);
    
    // מעבר למצפן
    switchSection(kuaResultSection, compassSection);
    
    // ברירת מחדל: הצבעה לכיוון הטוב הראשון
    setTimeout(() => {
        animateCompass(data.goodDirections[0]);
    }, 500);

    // הצעת הרשאה למצפן חי
    setupOrientationHandling();
}

// פונקציה לסיבוב המצפן והמחט
function animateCompass(primaryDirection) {
    const compass = document.getElementById('compass');
    const needle = document.getElementById('compass-needle');
    
    // סיבוב המצפן
    compass.classList.add('rotating');
    
    // חישוב זווית המחט לפי הכיוון הטוב הראשון
    const directionAngles = {
        'צפון': 0,
        'צפון מזרח': 45,
        'מזרח': 90,
        'דרום מזרח': 135,
        'דרום': 180,
        'דרום מערב': 225,
        'מערב': 270,
        'צפון מערב': 315
    };
    
    const angle = directionAngles[primaryDirection] || 0;
    
    setTimeout(() => {
        needle.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
        compass.classList.remove('rotating');
    }, 1000);
}

// הרשאות וחיבור למצפן אמיתי
function setupOrientationHandling() {
    const btn = document.getElementById('enable-orientation');
    const statusEl = document.getElementById('orientation-status');
    if (!btn) return;

    let orientationHandler = null;

    const onHeading = (event) => {
        const needle = document.getElementById('compass-needle');
        if (!needle) return;
        
        // שימוש ב-alpha (כיוון מגנטי) עם התאמה ל-RTL
        let heading = event.alpha || 0;
        
        // התאמה למגנטיות (אם יש webkitCompassHeading)
        if (event.webkitCompassHeading) {
            heading = event.webkitCompassHeading;
        }
        
        // סיבוב המחט - הפיכת הכיוון למעלות
        needle.style.transform = `translate(-50%, -50%) rotate(${360 - heading}deg)`;
    };

    const enableCompass = async () => {
        try {
            // בדיקה אם זה iOS שדורש הרשאה מפורשת
            if (typeof DeviceOrientationEvent !== 'undefined' && 
                typeof DeviceOrientationEvent.requestPermission === 'function') {
                
                const permission = await DeviceOrientationEvent.requestPermission();
                
                if (permission === 'granted') {
                    orientationHandler = onHeading;
                    window.addEventListener('deviceorientation', orientationHandler);
                    if (statusEl) statusEl.textContent = '🧭 מצפן חי פעיל - סובב את המכשיר';
                    btn.style.display = 'none';
                } else {
                    if (statusEl) statusEl.textContent = '❌ ההרשאה נדחתה';
                }
            } 
            // אנדרואיד ודפדפנים אחרים
            else if (typeof DeviceOrientationEvent !== 'undefined') {
                // בדיקה אם האירוע זמין
                const testHandler = (e) => {
                    if (e.alpha !== null || e.beta !== null || e.gamma !== null) {
                        window.removeEventListener('deviceorientation', testHandler);
                        orientationHandler = onHeading;
                        window.addEventListener('deviceorientation', orientationHandler);
                        if (statusEl) statusEl.textContent = '🧭 מצפן חי פעיל - סובב את המכשיר';
                        btn.style.display = 'none';
                    } else {
                        window.removeEventListener('deviceorientation', testHandler);
                        if (statusEl) statusEl.textContent = '❌ המכשיר לא תומך במצפן';
                    }
                };
                
                window.addEventListener('deviceorientation', testHandler);
                setTimeout(() => {
                    window.removeEventListener('deviceorientation', testHandler);
                    if (statusEl && statusEl.textContent === '') {
                        statusEl.textContent = '❌ המכשיר לא תומך במצפן';
                    }
                }, 2000);
            } else {
                if (statusEl) statusEl.textContent = '❌ הדפדפן לא תומך במצפן חי';
            }
        } catch (error) {
            console.error('Compass error:', error);
            if (statusEl) statusEl.textContent = '❌ שגיאה בהפעלת המצפן';
        }
    };

    btn.addEventListener('click', enableCompass);
}

// עדכון הכיוונים במצפן
function updateCompassDirections(data) {
    const directions = document.querySelectorAll('.direction');
    
    directions.forEach(direction => {
        const directionName = getHebrewDirection(direction.dataset.direction);
        
        // הסרת כל המחלקות הקיימות
        direction.classList.remove('good', 'bad', 'neutral');
        
        if (data.goodDirections.includes(directionName)) {
            direction.classList.add('good');
        } else if (data.badDirections.includes(directionName)) {
            direction.classList.add('bad');
        } else {
            direction.classList.add('neutral');
        }
    });
}

// עדכון רשימות הכיוונים
function updateDirectionsList(data) {
    // כיוונים טובים
    goodDirectionsList.innerHTML = '';
    data.goodDirections.forEach(direction => {
        const li = document.createElement('li');
        li.textContent = direction;
        goodDirectionsList.appendChild(li);
    });
    
    // כיוונים רעים
    badDirectionsList.innerHTML = '';
    data.badDirections.forEach(direction => {
        const li = document.createElement('li');
        li.textContent = direction;
        badDirectionsList.appendChild(li);
    });
}

// המרת כיוון מאנגלית לעברית
function getHebrewDirection(englishDirection) {
    const translations = {
        'north': 'צפון',
        'northeast': 'צפון מזרח',
        'east': 'מזרח',
        'southeast': 'דרום מזרח',
        'south': 'דרום',
        'southwest': 'דרום מערב',
        'west': 'מערב',
        'northwest': 'צפון מערב'
    };
    
    return translations[englishDirection] || englishDirection;
}

// חזרה לתחילת
backToStartBtn.addEventListener('click', function() {
    // איפוס הטופס
    birthForm.reset();
    currentKua = null;
    
    // חזרה למסך הראשון
    compassSection.classList.remove('active');
    kuaResultSection.classList.remove('active');
    birthDateSection.classList.add('active');
    birthDateSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// פונקציית עזר למעבר חלק בין חלקים
function switchSection(fromEl, toEl) {
    if (fromEl) fromEl.classList.remove('active');
    if (toEl) {
        toEl.classList.add('active');
        toEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// הוספת אפקט לכיוונים במצפן
document.addEventListener('DOMContentLoaded', function() {
    // אנימציה חלקה לעמידה
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
    
    const directions = document.querySelectorAll('.direction');
    
    directions.forEach((direction, index) => {
        direction.addEventListener('mouseenter', function() {
            this.style.transform += ' scale(1.1) translateY(-2px)';
            this.style.zIndex = '100';
        });
        
        direction.addEventListener('mouseleave', function() {
            // שחזור המיקום המקורי
            const originalTransform = this.classList.contains('north') || this.classList.contains('south') ? 
                'translateX(-50%)' : 
                this.classList.contains('east') || this.classList.contains('west') ? 
                'translateY(-50%)' : '';
            
            this.style.transform = originalTransform;
            this.style.zIndex = 'auto';
        });
        
        // אנימציית כניסה מדורגת
        direction.style.animationDelay = `${0.8 + index * 0.1}s`;
    });
    
    // אפקט לחלקות למעברים בין חלקים
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.addEventListener('transitionend', function() {
            if (this.classList.contains('active')) {
                this.style.transform = 'translateY(0)';
                this.style.opacity = '1';
            }
        });
    });
});
