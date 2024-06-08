document.addEventListener('DOMContentLoaded', (event) => {
    const textDiv = document.getElementById('text');
    const fontFamilySelect = document.getElementById('font_family');
    const fontSizeSelect = document.getElementById('font_size');
    const italicCheckbox = document.getElementById('font_italic');
    const boldCheckbox = document.getElementById('font_bold');
    const underlineCheckbox = document.getElementById('font_underline');

    // تحديث التنسيقات عند تغيير القيم في النموذج
    function updateFormatting(){
         textDiv.style.fontFamily = fontFamilySelect.value;
        textDiv.style.fontSize = fontSizeSelect.value;
        textDiv.style.fontStyle = italicCheckbox.checked ? 'italic' : 'normal';
        textDiv.style.fontWeight = boldCheckbox.checked ? 'bold' : 'normal';
        textDiv.style.textDecoration = underlineCheckbox.checked ? 'underline' : 'none';
    }

    // استدعاء updateFormatting() عند تغيير أي من القيم في النموذج
    fontFamilySelect.addEventListener('change', updateFormatting);
    fontSizeSelect.addEventListener('change', updateFormatting);
    italicCheckbox.addEventListener('change', updateFormatting);
    boldCheckbox.addEventListener('change', updateFormatting);
    underlineCheckbox.addEventListener('change', updateFormatting);
    
    // تنفيذ updateFormatting() لتهيئة التنسيقات الافتراضية
    updateFormatting();
});
