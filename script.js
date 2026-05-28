// --- 1. FAQ ACCORDION INTERACTIVITY ---
document.addEventListener("DOMContentLoaded", () => {
  const faqQuestions = document.querySelectorAll(".faq-q");
  
  faqQuestions.forEach(question => {
    question.addEventListener("click", () => {
      // Toggle current answer view
      const answer = question.nextElementSibling;
      answer.classList.toggle("show");
      question.classList.toggle("active");
    });
  });
});

// --- 2. INSTANT EMI CALCULATOR LOGIC ---
function calculateEMI() {
  const principal = parseFloat(document.getElementById("emiAmount").value);
  const annualRate = parseFloat(document.getElementById("emiRate").value);
  const tenureMonths = parseFloat(document.getElementById("emiTenure").value);

  if (!principal || !annualRate || !tenureMonths) {
    document.getElementById("emiResult").innerText = "Please enter valid numeric values.";
    return;
  }

  // Monthly interest rate calculation
  const monthlyRate = (annualRate / 12) / 100;
  
  // EMI Formula calculation: P * r * (1+r)^n / ((1+r)^n - 1)
  const x = Math.pow(1 + monthlyRate, tenureMonths);
  const emi = (principal * monthlyRate * x) / (x - 1);
  
  document.getElementById("emiResult").innerText = `Your Estimated EMI: ₹${Math.round(emi).toLocaleString('en-IN')} / month`;
}

// --- 3. FOIR ELIGIBILITY CALCULATOR LOGIC ---
function calculateFOIR() {
  const income = parseFloat(document.getElementById("foirIncome").value);
  const obligations = parseFloat(document.getElementById("foirObligations").value);

  if (!income) {
    document.getElementById("foirResult").innerText = "Please enter your income amount.";
    return;
  }

  // FOIR Formula: (Obligations / Income) * 100
  const foirRatio = (obligations / income) * 100;
  let statusMessage = "";

  if (foirRatio <= 40) {
    statusMessage = "Excellent! High chances of loan approval.";
  } else if (foirRatio <= 50) {
    statusMessage = "Moderate eligibility. Lenders might consider you.";
  } else {
    statusMessage = "High Debt Ratio. Try reducing existing liabilities.";
  }

  document.getElementById("foirResult").innerHTML = `Your FOIR Ratio: <strong>${foirRatio.toFixed(1)}%</strong><br><small>${statusMessage}</small>`;
}

// --- 4. EXIT INTENT POPUP LOGIC ---
let popupTriggered = false;

document.addEventListener("mouseleave", (event) => {
  // Triggers window only when mouse leaves the viewport toward the top menu/tabs bar
  if (event.clientY < 0 && !popupTriggered) {
    const exitPopup = document.getElementById("exitPopup");
    if (exitPopup) {
      exitPopup.classList.add("show");
      popupTriggered = true; // Prevents spamming the user multiple times
    }
  }
});

function closePopup() {
  const exitPopup = document.getElementById("exitPopup");
  if (exitPopup) {
    exitPopup.classList.remove("show");
  }
}

// --- 5. LEAD GENERATION FORM INTERCEPTOR ---
document.getElementById("leadForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  // Captures fields for API tracking or redirection
  const name = document.getElementById("fullName").value;
  const mobile = document.getElementById("mobileNumber").value;
  const pin = document.getElementById("pincode").value;
  const amount = document.getElementById("loanAmount").value;

  alert(`Thank you ${name}! Your loan interest profile for ₹${amount} is accepted. We are mapping local lending partners for Pincode ${pin}.`);
  // Here you can link to external endpoints or Google Sheets macros using fetch()
});
