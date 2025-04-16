# Landing Page MO

The "masteronline-landing-page" project is a web application designed to serve as a promotional landing page. It is built using modern web technologies and aims to provide users with an engaging and informative experience. This repository includes all necessary configurations and steps to deploy the landing page on an IIS server.

### **Perubahan Konfigurasi IIS untuk Landing Page**

1. **Fixing Bug dan Build Source**
   - Setelah memperbaiki bug pada landing page, lakukan build source (langkah-langkah build ada di bawah).
   - Output build berupa file HTML → Copy ke folder `publish MO` → `landing-page`.

2. **Install Plugin IIS (Hanya untuk Pertama Kali)**
   - Install URL Rewrite Module dari link berikut: [Download URL Rewrite](https://www.iis.net/downloads/microsoft/url-rewrite).

3. **Penyesuaian Konfigurasi IIS**
   - Buka file `Web.config`.
   - Sesuaikan konfigurasi berikut pada bagian `<system.webServer>`:

   ```xml
   <system.webServer>
     <rewrite>
       <rules>
         <rule name="home" stopProcessing="true">
           <match url="^$" />
           <action type="Rewrite" url="/landing-page/index.html" />
         </rule>
         <rule name="about" stopProcessing="true">
           <match url="^about$" />
           <action type="Rewrite" url="/landing-page/about.html" />
         </rule>
         <rule name="pricing" stopProcessing="true">
           <match url="^pricing$" />
           <action type="Rewrite" url="/landing-page/pricing.html" />
         </rule>
         <rule name="terms-of-service" stopProcessing="true">
           <match url="^terms-of-service$" />
           <action type="Rewrite" url="/landing-page/terms-of-service.html" />
         </rule>
       </rules>
     </rewrite>
     <validation validateIntegratedModeConfiguration="false" />
     <modules>
       <remove name="ApplicationInsightsWebTracking" />
       <add name="ApplicationInsightsWebTracking" type="Microsoft.ApplicationInsights.Web.ApplicationInsightsHttpModule, Microsoft.AI.Web" preCondition="managedHandler" />
     </modules>
     <handlers>
     ...
   </system.webServer>
   ```

4. **Backup Konfigurasi**
   - Jika diperlukan, backup file `Web.config` sebelum melakukan perubahan.

### **Cara Publish Jika Ada Perubahan di Landing Page**

1. **Install Node.js (Jika Belum Ada)**
   - Download dan install Node.js: [Download Node.js](https://nodejs.org/en/download/current).

2. **Pull Repository**
   - Clone atau pull repository landing page:
     ```bash
     git clone https://github.com/irvanherz/masteronline-landing-page
     ```

3. **Install Dependencies (Untuk Pertama Kali Saja)**
   - Install dependencies dengan menjalankan perintah:
     ```bash
     npm install
     ```

4. **Build Project**
   - Build project menggunakan salah satu perintah berikut:
     ```bash
     npm run build:dev
     ```
     atau
     ```bash
     npm run build:prod
     ```

5. **Copy Hasil Build ke Server**
   - Copy semua isi folder `out` ke folder `landing-page` di server aplikasi, dan timpa file yang ada.
