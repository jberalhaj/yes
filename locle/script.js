/* بداية سكربت ايقونة menubars */
function toggleMenu() {
            const menu = document.getElementById('menu');
            const icon = document.getElementById('toggle-icon');

            menu.classList.toggle('show');
            icon.classList.toggle('active');

            if (menu.classList.contains('show')) {
                icon.textContent = '×';
            } else {
                icon.textContent = '☰';
            }
        }

        document.addEventListener('click', function(event) {
            const menu = document.getElementById('menu');
            const menuContainer = document.getElementById('menu-bar');
            const icon = document.getElementById('toggle-icon');

            if (!menuContainer.contains(event.target)) {
                menu.classList.remove('show');
                icon.textContent = '☰';
                icon.classList.remove('active');
            }
        });
/* نهاية سكربت menubars */

/* بداية سكربت الوضع الليلي */
document.addEventListener('DOMContentLoaded', () => {
            const checkbox = document.getElementById('checkbox');
            const body = document.body;

            // Check for saved user preference, if any, on load
     const savedTheme = localStorage.getItem('theme') || 'light-mode';
            body.classList.add(savedTheme);
            checkbox.checked = savedTheme === 'dark-mode';

            checkbox.addEventListener('change', () => {
                if (checkbox.checked) {
                    body.classList.replace('light-mode', 'dark-mode');
                    localStorage.setItem('theme', 'dark-mode');
                } else {
                    body.classList.replace('dark-mode', 'light-mode');
                    localStorage.setItem('theme', 'light-mode');
                }
            });
        });
/* نهاية سكربت الوضع الليلي */


/* بداية سكربت     slider images */

const slider = document.querySelector('.slider');
        const slides = document.querySelectorAll('.slide');
        let index = 0;

        function nextSlide() {
            index = (index + 1) % slides.length;
             // Loops back to the first slide
      slider.style.transform = `translateX(-${index * 100}%)`;
        }

        // Autoplay
        setInterval(nextSlide, 3000); // Change every 3 seconds
    
  
  
  
    /* نهاية سكربت Slider images */
    
    
    /* بداية سكربت ادخال الكرت  */
    const inputBox = document.getElementById('inputBox');

        // Function to convert Arabic numbers to English numbers
        function convertArabicToEnglishNumbers(input) {
            const arabicToEnglishMap = {
                '٠': '0',
                '١': '1',
                '٢': '2',
                '٣': '3',
                '٤': '4',
                '٥': '5',
                '٦': '6',
                '٧': '7',
                '٨': '8',
                '٩': '9'
            };
            return input.replace(/[٠-٩]/g, match => arabicToEnglishMap[match]);
        }

        inputBox.addEventListener('input', () => {
            // Convert Arabic numbers to English numbers on input
            inputBox.value = convertArabicToEnglishNumbers(inputBox.value);

            // Limit input to 10 characters
            if (inputBox.value.length > 10) {
                inputBox.value = inputBox.value.slice(0, 10);
            }
        });
    /* نهاية سكربت ادخال الكرت*/


/* بداية سكربت tabs */
function showTab(tabId) {
            const contents = document.querySelectorAll('.tab-content');
            contents.forEach(content => content.style.display = 'none');

            const activeTab = document.getElementById(tabId);
            if (activeTab) {
                activeTab.style.display = 'block';
            }
        }
        
        /* نهاية سكربت tabs */
        
        
        /* بداية سكربت ايقونة باقات الكروت */
        const menuIcons = document.querySelectorAll('.bags');
        const menus = document.querySelectorAll('.Options');

        menuIcons.forEach((menuIcon, index) => {
            menuIcon.addEventListener('click', function (event) {
                event.stopPropagation();
                menus[index].style.display = menus[index].style.display === 'block' ? 'none' : 'block';
            });
        });

        document.addEventListener('click', function () {
            menus.forEach(menu => menu.style.display = 'none');
        });

        menus.forEach(menu => {
            menu.addEventListener('click', function (event) {
                event.stopPropagation();
            });
        });
            /* بداية سكربت ايقونة باقات الكروت */


