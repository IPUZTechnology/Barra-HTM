<script>
document.addEventListener('DOMContentLoaded', function() {
  var logo = document.getElementById('logo');
  var navbar = document.querySelector('.navbar');

  // Cargar el logo de manera asíncrona
  var img = new Image();
  img.src = logo.src;
  img.onload = function() {
      logo.src = img.src; // Asignar la imagen cargada al logo
  };

  // Resaltar el menú activo
  var currentUrl = window.location.href;
  var menuItems = document.querySelectorAll('.navbar-menu > li > a');
  menuItems.forEach(function(item) {
      if (currentUrl.includes(item.getAttribute('href'))) {
          item.parentElement.classList.add('active');
      }
  });
});

function toggleMenu() {
  var menu = document.querySelector('.navbar-menu');
  menu.classList.toggle('active');
}

function toggleDropdown(event) {
  event.preventDefault();
  var dropdown = event.target.closest('.dropdown');
  dropdown.classList.toggle('active');
  dropdown.querySelector('.dropdown-menu').style.display = dropdown.classList.contains('active') ? 'block' : 'none';
}

function toggleSubmenu(event) {
  event.preventDefault();
  var submenu = event.target.closest('.dropdown-submenu');
  submenu.classList.toggle('active');
  var submenuMenu = submenu.querySelector('.dropdown-menu');
  submenuMenu.style.display = submenu.classList.contains('active') ? 'block' : 'none';
}

function collapseMenu(event) {
  var menus = document.querySelectorAll('.navbar-menu, .dropdown-menu');
  menus.forEach(function(menu) {
    menu.classList.remove('active');
    menu.style.display = 'none'; // Ocultar el menú
  });
  if (event) {
    var link = event.target.closest('a');
    if (link) {
      window.location.href = link.href;
    }
  }
}

const translations = {
    es: {
        nosotros: "NOSOTROS",
        servicios: "SERVICIOS",
        productos: "PRODUCTOS",
        contactenos: "CONTÁCTENOS",
        "quienes-somos": "¿Quiénes somos?",
        "mision-vision": "Nuestra misión y visión",
        valores: "Nuestros valores",
        referencias: "¡Quiénes han creído en nosotros!",
        "transformacion-digital": "Consultoría en transformación digital",
        coaching: "Coaching empresarial y gestión del cambio",
        automatizacion: "Diseño y automatización de procesos con AI",
        agile: "Metodologías ágiles",
        helpdesk: "Mesa de ayuda",
        convertalk: "Convertalk Bot AI",
        "descubra": "Descubra el Bot Convertalk",
        "crm-omnicanal": "Bitrix24 CRM Omnicanal",
        "saber-mas": "Saber más de Bitrix24",
        "areas-empresariales": "Casos de uso por áreas empresariales",
        empresa: "Según tamaño de tu empresa",
        "agile-metodologias": "Para implementar metodologías ágiles",
        industrias: "Casos de uso por industria",
        "partner-innovador": "Ventajas de trabajar con RIPUZ implementando Bitrix24",
        whatsapp: "Conector WhatsApp",
        facebook: "Conector Facebook",
        instagram: "Conector Instagram",
        telefonia: "Telefonía Voz IP",
        "agendar-demo": "Agendar un Demo",
        "trabaja-con-nosotros": "Trabaja con Nosotros",
        "habeas-data": "Habeas Data"
    },
    en: {
        nosotros: "ABOUT US",
        servicios: "SERVICES",
        productos: "PRODUCTS",
        contactenos: "CONTACT US",
        "quienes-somos": "Who We Are",
        "mision-vision": "Our Mission and Vision",
        valores: "Our Values",
        referencias: "Who Have Believed in Us!",
        "transformacion-digital": "Digital Transformation Consulting",
        coaching: "Business Coaching and Change Management",
        automatizacion: "AI Process Design and Automation",
        agile: "Agile Methodologies",
        helpdesk: "Help Desk",
        convertalk: "Convertalk Bot AI",
        "descubra": "Discover the Convertalk Bot",
        "crm-omnicanal": "Bitrix24 Omnichannel CRM",
        "saber-mas": "Learn more about Bitrix24",
        "areas-empresariales": "Use Cases by Business Areas",
        empresa: "According to Your Company Size",
        "agile-metodologias": "To Implement Agile Methodologies",
        industrias: "Use Cases by Industry",
        "partner-innovador": "Advantages of Working with RIPUZ Implementing Bitrix24",
        whatsapp: "WhatsApp Connector",
        facebook: "Facebook Connector",
        instagram: "Instagram Connector",
        telefonia: "VoIP Telephony",
        "agendar-demo": "Schedule a Demo",
        "trabaja-con-nosotros": "Work with Us",
        "habeas-data": "Habeas Data"
    },
    pt: {
        nosotros: "SOBRE NÓS",
        servicios: "SERVIÇOS",
        produtos: "PRODUTOS",
        contactenos: "CONTATE-NOS",
        "quienes-somos": "Quem Somos",
        "mision-vision": "Nossa Missão e Visão",
        valores: "Nossos Valores",
        referencias: "Quem Acreditou em Nós!",
        "transformacion-digital": "Consultoria em Transformação Digital",
        coaching: "Coaching Empresarial e Gestão de Mudanças",
        automatizacion: "Design e Automação de Processos com AI",
        agile: "Metodologias Ágeis",
        helpdesk: "Help Desk",
        convertalk: "Convertalk Bot AI",
        "descubra": "Descubra o Bot Convertalk",
        "crm-omnicanal": "Bitrix24 CRM Omnicanal",
        "saber-mas": "Saiba mais sobre o Bitrix24",
        "areas-empresariales": "Casos de Uso por Áreas Empresariais",
        empresa: "De Acordo com o Tamanho da Sua Empresa",
        "agile-metodologias": "Para Implementar Metodologias Ágeis",
        industrias: "Casos de Uso por Indústria",
        "partner-innovador": "Vantagens de Trabalhar com RIPUZ Implementando Bitrix24",
        whatsapp: "Conector WhatsApp",
        facebook: "Conector Facebook",
        instagram: "Conector Instagram",
        telefonia: "Telefonia Voz IP",
        "agendar-demo": "Agendar uma Demo",
        "trabaja-con-nosotros": "Trabalhe Conosco",
        "habeas-data": "Habeas Data"
    }
};

document.getElementById('language-select').addEventListener('change', function() {
    var selectedLanguage = this.value;
    var elements = document.querySelectorAll('[data-key]');
    elements.forEach(function(element) {
        var key = element.getAttribute('data-key');
        element.textContent = translations[selectedLanguage][key];
    });

    var selectedOption = this.options[this.selectedIndex];
    var iconUrl = selectedOption.getAttribute('data-icon');
    this.style.backgroundImage = 'url(' + iconUrl + ')';
    this.style.backgroundRepeat = 'no-repeat';
    this.style.backgroundPosition = 'right 10px center';
    this.style.paddingRight = '30px';
    this.style.backgroundSize = '20px';
});

// Inicializar la bandera por defecto
var initialOption = document.getElementById('language-select').options[document.getElementById('language-select').selectedIndex];
document.getElementById('language-select').style.backgroundImage = 'url(' + initialOption.getAttribute('data-icon') + ')';
document.getElementById('language-select').style.backgroundRepeat = 'no-repeat';
document.getElementById('language-select').style.backgroundPosition = 'right 10px center';
document.getElementById('language-select').style.paddingRight = '30px';
document.getElementById('language-select').style.backgroundSize = '20px';
</script>
