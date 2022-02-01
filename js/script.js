const mobileNavbarMenu = document.querySelector('.mobile-navbar-menu');
const meow = document.querySelectorAll('.mobile-navbar-menu > *');

document.getElementById('navbar-open-button').addEventListener('click', (event) => {
  event.preventDefault();
  meow.forEach((child) => {
    child.classList.remove('animate__slideOutRight');
    child.classList.add('animate__slideInRight');
  });
  mobileNavbarMenu.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

document.getElementById('navbar-close-button').addEventListener('click', (event) => {
  event.preventDefault();
  meow.forEach((child) => {
    child.classList.remove('animate__slideInRight');
    child.classList.add('animate__slideOutRight');
  });
  document.body.style.overflow = 'auto';
});

const features = [
  {
    imageURL: 'https://resource.logitechg.com/w_387,c_limit,q_auto,f_auto,dpr_auto/d_transparent.gif/content/dam/gaming/en/products/g915/g915-feature7-2.png?v=1',
    title: 'Dedicated Media Controls',
    description: 'Onboard media controls are right at your fingertips. Dedicated controls quickly adjust volume, play/pause and skip music or videos, and mute audio instantly.',
  },
  {
    imageURL: 'https://resource.logitechg.com/w_1024,c_limit,q_auto,f_auto,dpr_auto/d_transparent.gif/content/dam/gaming/en/products/g915/g915-feature2-panel-4.png?v=1',
    title: 'Formative Function',
    description: 'Every detail is carefully crafted and optimized for the best experience. The aluminum-crafted volume wheel is precisely tensioned for premium feel and control. Soft-touch profile and media control buttons delivers tactile feedback for easy and intuitive control.',
  },
  {
    imageURL: 'https://resource.logitechg.com/w_1024,c_limit,q_auto,f_auto,dpr_auto/d_transparent.gif/content/dam/gaming/en/products/g915/g915-feature2-panel-3.png?v=1',
    title: 'Strong and Durable',
    description: 'Brushed metal surfaces and oleophobic coated keycaps are designed to minimize fingerprints. A steel-reinforced base gives G915 an unyielding strength to persevere under the most strenuous use. ',
  },
  {
    imageURL: 'https://resource.logitechg.com/w_1024,c_limit,q_auto,f_auto,dpr_auto/d_transparent.gif/content/dam/gaming/en/products/g915/g915-feature2-panel-2.png?v=1',
    title: 'Ergonomically Designed',
    description: 'An unprecedented thin design and new low-profile GL mechanical switches deliver a new level of comfort. The ergonomically designed, ultra-low keyboard allows for a more comfortable and natural position.',
  },
  {
    imageURL: 'https://resource.logitechg.com/w_1024,c_limit,q_auto,f_auto,dpr_auto/d_transparent.gif/content/dam/gaming/en/products/g915/g915-feature4-panel1.png?v=1',
    title: 'Instant Lighting Control',
    description: 'Easily change lighting effects and adjust  brightness with onboard controls. Select from seven preset animations by pressing the brightness soft key plus numbers 1-7. Create up to two of your own lighting profiles using G HUB software and save the profiles to numbers 8 and 9.',
  },
  {
    imageURL: 'https://resource.logitechg.com/w_1024,c_limit,q_auto,f_auto,dpr_auto/d_transparent.gif/content/dam/gaming/en/products/g915/g915-feature5-panel3.png?v=1',
    title: 'G Keys',
    description: 'Program five dedicated G-keys with in-game or in-app keybinds, system commands, and custom macros that you can create or download from other users. Use G HUB software to easily set up and manage profiles, commands and more.',
  },
  {
    imageURL: 'https://resource.logitechg.com/w_1024,c_limit,q_auto,f_auto,dpr_auto/d_transparent.gif/content/dam/gaming/en/products/g915/g915-feature5-panel2.png?v=1',
    title: '3 Onboard Profiles',
    description: 'Save up to three different profiles to the keyboard’s onboard memory for a total of 15 G-key controls at the ready. Easily switch between stored modes using the M1, M2 or M3 soft keys at the top of the keyboard.',
  },
  {
    imageURL: 'https://resource.logitechg.com/w_719,ar_9:16,c_limit,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/non-braid/harpy-wireless-g915/g915-feature6-mobile-nb.png?v=1',
    title: 'Remarkable Battery Life',
    description: 'Enjoy hours of non-stop game time on a single charge. Battery indicator light on the keyboard and Logitech G HUB will notify you when you’re at 15 percent battery. Fully recharges in just three hours. Keep playing while it’s plugged in and charging via micro USB.',
  },
];
const featuresList = document.querySelector('#features ul');

features.forEach((feature) => {
  const node = document.createElement('li');
  node.classList.add('col-12', 'col-md-6', 'mt-md-4');
  node.id = feature.title;
  node.innerHTML = `
    <div class="feature-card">
        <div class="feature-img-content">
            <img class="feature-img-bg" src="../images/features/boxes.png" alt="${feature.title}">
            <img class="feature-img-top"
                 src="${feature.imageURL}"
                 alt="">
        </div>
        <div class="feature-img"></div>
        <div class="feature-description">
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
        </div>
    </div>
  `;
  featuresList.appendChild(node);
});