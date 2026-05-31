// --- 1. DARK MODE TOGGLE ---
const darkModeBtn = document.getElementById('darkModeToggle');
darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if(document.body.classList.contains('dark-mode')) {
    darkModeBtn.innerText = '☀️ Light Mode';
  } else {
    darkModeBtn.innerText = '🌙 Dark Mode';
  }
});

// --- 2. ANIMATED STATS COUNTER ---
const counters = document.querySelectorAll('.counter');
const speed = 200; // Lower is faster

const animateCounters = () => {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const inc = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 15);
      } else {
        counter.innerText = target.toLocaleString('en-IN');
      }
    };
    updateCount();
  });
};
// Start animation shortly after load
setTimeout(animateCounters, 500);

// --- 3. INTERACTIVE EMI SLIDER LOGIC ---
const amountSlider = document.getElementById('emiAmountSlider');
const rateSlider = document.getElementById('emiRateSlider');
const tenureSlider = document.getElementById('emiTenureSlider');

const amountVal = document.getElementById('amountVal');
const rateVal = document.getElementById('rateVal');
const tenureVal = document.getElementById('tenureVal');
const emiResult = document.getElementById('emiResult');

function calculateLiveEMI() {
  const p = parseFloat(amountSlider.value);
  const r = parseFloat(rateSlider.value);
  const n = parseFloat(tenureSlider.value);

  // Update visual text above sliders
  amountVal.innerText = p.toLocaleString('en-IN');
  rateVal.innerText = r;
  tenureVal.innerText = n;

  // EMI Math
  const monthlyRate = (r / 12) / 100;
  const x = Math.pow(1 + monthlyRate, n);
  const emi = (p * monthlyRate * x) / (x - 1);
  
  emiResult.innerHTML = `Your Estimated EMI: <strong>₹${Math.round(emi).toLocaleString('en-IN')}</strong> / month`;
}

// Add listeners so math happens instantly while dragging
[amountSlider, rateSlider, tenureSlider].forEach(slider => {
  slider.addEventListener('input', calculateLiveEMI);
});

// --- 4. PROTECTED LEAD GENERATION FORM ---
document.getElementById("leadForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const name = document.getElementById("fullName").value;
  const mobile = document.getElementById("mobileNumber").value;
  const pin = document.getElementById("pincode").value;
  const amount = document.getElementById("loanAmount").value;

  alert(`Thank you ${name}! Your application for ₹${amount} has been securely captured. Our team will contact you shortly regarding offers for Pincode ${pin}.`);
});// --- 1. DARK MODE TOGGLE ---
const darkModeBtn = document.getElementById('darkModeToggle');
darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if(document.body.classList.contains('dark-mode')) {
    darkModeBtn.innerText = '☀️ Light Mode';
  } else {
    darkModeBtn.innerText = '🌙 Dark Mode';
  }
});

// --- 2. ANIMATED STATS COUNTER ---
const counters = document.querySelectorAll('.counter');
const speed = 200; // Lower is faster

const animateCounters = () => {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const inc = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 15);
      } else {
        counter.innerText = target.toLocaleString('en-IN');
      }
    };
    updateCount();
  });
};
// Start animation shortly after load
setTimeout(animateCounters, 500);

// --- 3. INTERACTIVE EMI SLIDER LOGIC ---
const amountSlider = document.getElementById('emiAmountSlider');
const rateSlider = document.getElementById('emiRateSlider');
const tenureSlider = document.getElementById('emiTenureSlider');

const amountVal = document.getElementById('amountVal');
const rateVal = document.getElementById('rateVal');
const tenureVal = document.getElementById('tenureVal');
const emiResult = document.getElementById('emiResult');

function calculateLiveEMI() {
  const p = parseFloat(amountSlider.value);
  const r = parseFloat(rateSlider.value);
  const n = parseFloat(tenureSlider.value);

  // Update visual text above sliders
  amountVal.innerText = p.toLocaleString('en-IN');
  rateVal.innerText = r;
  tenureVal.innerText = n;

  // EMI Math
  const monthlyRate = (r / 12) / 100;
  const x = Math.pow(1 + monthlyRate, n);
  const emi = (p * monthlyRate * x) / (x - 1);
  
  emiResult.innerHTML = `Your Estimated EMI: <strong>₹${Math.round(emi).toLocaleString('en-IN')}</strong> / month`;
}

// Add listeners so math happens instantly while dragging
[amountSlider, rateSlider, tenureSlider].forEach(slider => {
  slider.addEventListener('input', calculateLiveEMI);
});

// --- 4. PROTECTED LEAD GENERATION FORM ---
document.getElementById("leadForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const name = document.getElementById("fullName").value;
  const mobile = document.getElementById("mobileNumber").value;
  const pin = document.getElementById("pincode").value;
  const amount = document.getElementById("loanAmount").value;

  alert(`Thank you ${name}! Your application for ₹${amount} has been securely captured. Our team will contact you shortly regarding offers for Pincode ${pin}.`);
});
