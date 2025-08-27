const http = require('http');
const https = require('https');

const SITE_URL = process.env.SITE_URL || 'https://swm.org.in';

function checkSite() {
  const url = new URL(SITE_URL);
  const client = url.protocol === 'https:' ? https : http;
  
  const req = client.get(SITE_URL, (res) => {
    if (res.statusCode === 200) {
      console.log(`${new Date().toISOString()}: ✅ Site is UP - Status: ${res.statusCode}`);
    } else {
      console.log(`${new Date().toISOString()}: ⚠️ Site returned status: ${res.statusCode}`);
    }
  });
  
  req.on('error', (err) => {
    console.error(`${new Date().toISOString()}: ❌ Site check failed: ${err.message}`);
  });
  
  req.setTimeout(10000, () => {
    req.destroy();
    console.error(`${new Date().toISOString()}: ⏰ Site check timeout`);
  });
}

// Check every 30 seconds
setInterval(checkSite, 30000);
checkSite(); // Initial check

console.log(`🚀 SWM Portal Health Checker started for: ${SITE_URL}`);
